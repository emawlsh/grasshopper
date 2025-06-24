import { query } from "../_generated/server";
import { v } from "convex/values";

export const getStandardById = query({
  args: { standardID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("standard")
      .filter((q) => q.eq(q.field("standardID"), args.standardID))
      .first();
  },
});

export const listStandards = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("standard")
      .collect();
  },
});

export const getStandardsByCategory = query({
  args: { categoryID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("standard")
      .filter((q) => q.eq(q.field("categoryID"), args.categoryID))
      .collect();
  },
});

export const getStandardsByGrade = query({
  args: { gradeAssigned: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("standard")
      .filter((q) => q.eq(q.field("gradeAssigned"), args.gradeAssigned))
      .collect();
  },
}); 