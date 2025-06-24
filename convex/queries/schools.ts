import { query } from "../_generated/server";
import { v } from "convex/values";

export const getSchoolById = query({
  args: { schoolID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("school")
      .filter((q) => q.eq(q.field("schoolID"), args.schoolID))
      .first();
  },
});

export const listSchools = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("school")
      .collect();
  },
}); 