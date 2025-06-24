import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createComment = mutation({
  args: {
    commentID: v.string(),
    achievementID: v.string(),
    authorID: v.string(),
    commentText: v.string(),
    commentDate: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("comment", args);
  },
});

export const updateComment = mutation({
  args: {
    commentID: v.string(),
    update: v.object({
      achievementID: v.optional(v.string()),
      authorID: v.optional(v.string()),
      commentText: v.optional(v.string()),
      commentDate: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    const comment = await ctx.db
      .query("comment")
      .filter((q) => q.eq(q.field("commentID"), args.commentID))
      .first();

    if (!comment) {
      throw new Error("Comment not found");
    }

    return await ctx.db.patch(comment._id, args.update);
  },
});

export const deleteComment = mutation({
  args: { commentID: v.string() },
  handler: async (ctx, args) => {
    const comment = await ctx.db
      .query("comment")
      .filter((q) => q.eq(q.field("commentID"), args.commentID))
      .first();

    if (!comment) {
      throw new Error("Comment not found");
    }

    return await ctx.db.delete(comment._id);
  },
}); 