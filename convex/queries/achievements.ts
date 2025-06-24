import { query } from "../_generated/server";
import { v } from "convex/values";

export const getAchievementById = query({
  args: { achievementID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("achievement")
      .filter((q) => q.eq(q.field("achievementID"), args.achievementID))
      .first();
  },
});

export const listAchievements = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("achievement")
      .collect();
  },
});

export const getAchievementsByStudent = query({
  args: { studentID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("achievement")
      .filter((q) => q.eq(q.field("studentID"), args.studentID))
      .collect();
  },
});

export const getAchievementsByTeacher = query({
  args: { certifyingTeacherID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("achievement")
      .filter((q) => q.eq(q.field("certifyingTeacherID"), args.certifyingTeacherID))
      .collect();
  },
});

export const getAchievementsBySchool = query({
  args: { schoolID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("achievement")
      .filter((q) => q.eq(q.field("schoolID"), args.schoolID))
      .collect();
  },
});

export const getAchievementsByStandard = query({
  args: { standardID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("achievement")
      .filter((q) => q.eq(q.field("standardID"), args.standardID))
      .collect();
  },
});

export const getAchievementsByStatus = query({
  args: { status: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("achievement")
      .filter((q) => q.eq(q.field("status"), args.status))
      .collect();
  },
}); 