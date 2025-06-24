import { mutation } from "../_generated/server";
import { v } from "convex/values";

// Student-Teacher Assignment mutations
export const createStudentTeacherAssignment = mutation({
  args: {
    studentID: v.string(),
    teacherID: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("student_teacher_assignment", args);
  },
});

export const deleteStudentTeacherAssignment = mutation({
  args: {
    studentID: v.string(),
    teacherID: v.string(),
  },
  handler: async (ctx, args) => {
    const assignment = await ctx.db
      .query("student_teacher_assignment")
      .filter((q) => 
        q.and(
          q.eq(q.field("studentID"), args.studentID),
          q.eq(q.field("teacherID"), args.teacherID)
        )
      )
      .first();

    if (!assignment) {
      throw new Error("Student-Teacher assignment not found");
    }

    return await ctx.db.delete(assignment._id);
  },
});

// Teacher-Subject Assignment mutations
export const createTeacherSubjectAssignment = mutation({
  args: {
    teacherID: v.string(),
    subjectID: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("teacher_subject_assignment", args);
  },
});

export const deleteTeacherSubjectAssignment = mutation({
  args: {
    teacherID: v.string(),
    subjectID: v.string(),
  },
  handler: async (ctx, args) => {
    const assignment = await ctx.db
      .query("teacher_subject_assignment")
      .filter((q) => 
        q.and(
          q.eq(q.field("teacherID"), args.teacherID),
          q.eq(q.field("subjectID"), args.subjectID)
        )
      )
      .first();

    if (!assignment) {
      throw new Error("Teacher-Subject assignment not found");
    }

    return await ctx.db.delete(assignment._id);
  },
});

// Student-Subject Assignment mutations
export const createStudentSubjectAssignment = mutation({
  args: {
    studentID: v.string(),
    subjectID: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("student_subject_assignment", args);
  },
});

export const deleteStudentSubjectAssignment = mutation({
  args: {
    studentID: v.string(),
    subjectID: v.string(),
  },
  handler: async (ctx, args) => {
    const assignment = await ctx.db
      .query("student_subject_assignment")
      .filter((q) => 
        q.and(
          q.eq(q.field("studentID"), args.studentID),
          q.eq(q.field("subjectID"), args.subjectID)
        )
      )
      .first();

    if (!assignment) {
      throw new Error("Student-Subject assignment not found");
    }

    return await ctx.db.delete(assignment._id);
  },
});

// User-School Assignment mutations
export const createUserSchoolAssignment = mutation({
  args: {
    userID: v.string(),
    schoolID: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("user_school_assignment", args);
  },
});

export const deleteUserSchoolAssignment = mutation({
  args: {
    userID: v.string(),
    schoolID: v.string(),
  },
  handler: async (ctx, args) => {
    const assignment = await ctx.db
      .query("user_school_assignment")
      .filter((q) => 
        q.and(
          q.eq(q.field("userID"), args.userID),
          q.eq(q.field("schoolID"), args.schoolID)
        )
      )
      .first();

    if (!assignment) {
      throw new Error("User-School assignment not found");
    }

    return await ctx.db.delete(assignment._id);
  },
}); 