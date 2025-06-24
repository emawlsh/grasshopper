import { query } from "../_generated/server";
import { v } from "convex/values";

export const getCategoryById = query({
  args: { categoryID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("category")
      .filter((q) => q.eq(q.field("categoryID"), args.categoryID))
      .first();
  },
});

export const listCategories = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("category")
      .collect();
  },
});

export const getCategoriesBySubject = query({
  args: { subjectID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("category")
      .filter((q) => q.eq(q.field("subjectID"), args.subjectID))
      .collect();
  },
}); 