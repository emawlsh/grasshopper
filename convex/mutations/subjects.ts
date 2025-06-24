import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createSubject = mutation({
  args: {
    subjectID: v.string(),
    subjectName: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("subject", args);
  },
});

export const updateSubject = mutation({
  args: {
    subjectID: v.string(),
    update: v.object({
      subjectName: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    const subject = await ctx.db
      .query("subject")
      .filter((q) => q.eq(q.field("subjectID"), args.subjectID))
      .first();

    if (!subject) {
      throw new Error("Subject not found");
    }

    return await ctx.db.patch(subject._id, args.update);
  },
});

export const deleteSubject = mutation({
  args: { subjectID: v.string() },
  handler: async (ctx, args) => {
    const subject = await ctx.db
      .query("subject")
      .filter((q) => q.eq(q.field("subjectID"), args.subjectID))
      .first();

    if (!subject) {
      throw new Error("Subject not found");
    }

    return await ctx.db.delete(subject._id);
  },
}); 