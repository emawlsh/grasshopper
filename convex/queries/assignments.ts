import { query } from "../_generated/server";
import { v } from "convex/values";

// Student-Teacher Assignment queries
export const getStudentTeacherAssignments = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("student_teacher_assignment")
      .collect();
  },
});

export const getTeachersByStudent = query({
  args: { studentID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("student_teacher_assignment")
      .filter((q) => q.eq(q.field("studentID"), args.studentID))
      .collect();
  },
});

export const getStudentsByTeacher = query({
  args: { teacherID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("student_teacher_assignment")
      .filter((q) => q.eq(q.field("teacherID"), args.teacherID))
      .collect();
  },
});

// Teacher-Subject Assignment queries
export const getTeacherSubjectAssignments = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("teacher_subject_assignment")
      .collect();
  },
});

export const getSubjectsByTeacher = query({
  args: { teacherID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("teacher_subject_assignment")
      .filter((q) => q.eq(q.field("teacherID"), args.teacherID))
      .collect();
  },
});

export const getTeachersBySubject = query({
  args: { subjectID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("teacher_subject_assignment")
      .filter((q) => q.eq(q.field("subjectID"), args.subjectID))
      .collect();
  },
});

// Student-Subject Assignment queries
export const getStudentSubjectAssignments = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("student_subject_assignment")
      .collect();
  },
});

export const getSubjectsByStudent = query({
  args: { studentID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("student_subject_assignment")
      .filter((q) => q.eq(q.field("studentID"), args.studentID))
      .collect();
  },
});

export const getStudentsBySubject = query({
  args: { subjectID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("student_subject_assignment")
      .filter((q) => q.eq(q.field("subjectID"), args.subjectID))
      .collect();
  },
});

// User-School Assignment queries
export const getUserSchoolAssignments = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("user_school_assignment")
      .collect();
  },
});

export const getUsersBySchool = query({
  args: { schoolID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("user_school_assignment")
      .filter((q) => q.eq(q.field("schoolID"), args.schoolID))
      .collect();
  },
});

export const getSchoolsByUser = query({
  args: { userID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("user_school_assignment")
      .filter((q) => q.eq(q.field("userID"), args.userID))
      .collect();
  },
}); 