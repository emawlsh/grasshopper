import { query } from "../_generated/server";
import { v } from "convex/values";

export const getSubjectById = query({
  args: { subjectID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("subject")
      .filter((q) => q.eq(q.field("subjectID"), args.subjectID))
      .first();
  },
});

export const listSubjects = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("subject")
      .collect();
  },
}); 