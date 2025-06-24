import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createSchool = mutation({
  args: {
    schoolID: v.string(),
    schoolName: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("school", args);
  },
});

export const updateSchool = mutation({
  args: {
    schoolID: v.string(),
    update: v.object({
      schoolName: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    const school = await ctx.db
      .query("school")
      .filter((q) => q.eq(q.field("schoolID"), args.schoolID))
      .first();

    if (!school) {
      throw new Error("School not found");
    }

    return await ctx.db.patch(school._id, args.update);
  },
});

export const deleteSchool = mutation({
  args: { schoolID: v.string() },
  handler: async (ctx, args) => {
    const school = await ctx.db
      .query("school")
      .filter((q) => q.eq(q.field("schoolID"), args.schoolID))
      .first();

    if (!school) {
      throw new Error("School not found");
    }

    return await ctx.db.delete(school._id);
  },
}); 