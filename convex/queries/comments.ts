import { query } from "../_generated/server";
import { v } from "convex/values";

export const getCommentById = query({
  args: { commentID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("comment")
      .filter((q) => q.eq(q.field("commentID"), args.commentID))
      .first();
  },
});

export const listComments = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("comment")
      .collect();
  },
});

export const getCommentsByAchievement = query({
  args: { achievementID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("comment")
      .filter((q) => q.eq(q.field("achievementID"), args.achievementID))
      .collect();
  },
});

export const getCommentsByAuthor = query({
  args: { authorID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("comment")
      .filter((q) => q.eq(q.field("authorID"), args.authorID))
      .collect();
  },
}); 