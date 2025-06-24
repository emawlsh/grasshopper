import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createCategory = mutation({
  args: {
    categoryID: v.string(),
    categoryName: v.string(),
    subjectID: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("category", args);
  },
});

export const updateCategory = mutation({
  args: {
    categoryID: v.string(),
    update: v.object({
      categoryName: v.optional(v.string()),
      subjectID: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    const category = await ctx.db
      .query("category")
      .filter((q) => q.eq(q.field("categoryID"), args.categoryID))
      .first();

    if (!category) {
      throw new Error("Category not found");
    }

    return await ctx.db.patch(category._id, args.update);
  },
});

export const deleteCategory = mutation({
  args: { categoryID: v.string() },
  handler: async (ctx, args) => {
    const category = await ctx.db
      .query("category")
      .filter((q) => q.eq(q.field("categoryID"), args.categoryID))
      .first();

    if (!category) {
      throw new Error("Category not found");
    }

    return await ctx.db.delete(category._id);
  },
}); 