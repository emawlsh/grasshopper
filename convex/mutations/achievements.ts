import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createAchievement = mutation({
  args: {
    achievementID: v.string(),
    studentID: v.string(),
    standardID: v.string(),
    schoolID: v.string(),
    certifyingTeacherID: v.string(),
    status: v.string(),
    achievementDate: v.string(),
    gradeAchieved: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("achievement", args);
  },
});

export const updateAchievement = mutation({
  args: {
    achievementID: v.string(),
    update: v.object({
      studentID: v.optional(v.string()),
      standardID: v.optional(v.string()),
      schoolID: v.optional(v.string()),
      certifyingTeacherID: v.optional(v.string()),
      status: v.optional(v.string()),
      achievementDate: v.optional(v.string()),
      gradeAchieved: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    const achievement = await ctx.db
      .query("achievement")
      .filter((q) => q.eq(q.field("achievementID"), args.achievementID))
      .first();

    if (!achievement) {
      throw new Error("Achievement not found");
    }

    return await ctx.db.patch(achievement._id, args.update);
  },
});

export const deleteAchievement = mutation({
  args: { achievementID: v.string() },
  handler: async (ctx, args) => {
    const achievement = await ctx.db
      .query("achievement")
      .filter((q) => q.eq(q.field("achievementID"), args.achievementID))
      .first();

    if (!achievement) {
      throw new Error("Achievement not found");
    }

    return await ctx.db.delete(achievement._id);
  },
}); 