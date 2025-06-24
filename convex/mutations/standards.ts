import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createStandard = mutation({
  args: {
    standardID: v.string(),
    standardDescription: v.string(),
    gradeAssigned: v.string(),
    categoryID: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("standard", args);
  },
});

export const updateStandard = mutation({
  args: {
    standardID: v.string(),
    update: v.object({
      standardDescription: v.optional(v.string()),
      gradeAssigned: v.optional(v.string()),
      categoryID: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    const standard = await ctx.db
      .query("standard")
      .filter((q) => q.eq(q.field("standardID"), args.standardID))
      .first();

    if (!standard) {
      throw new Error("Standard not found");
    }

    return await ctx.db.patch(standard._id, args.update);
  },
});

export const deleteStandard = mutation({
  args: { standardID: v.string() },
  handler: async (ctx, args) => {
    const standard = await ctx.db
      .query("standard")
      .filter((q) => q.eq(q.field("standardID"), args.standardID))
      .first();

    if (!standard) {
      throw new Error("Standard not found");
    }

    return await ctx.db.delete(standard._id);
  },
}); 