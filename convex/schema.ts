// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    userID: v.string(),
    firstName: v.string(),
    middleNames: v.optional(v.string()),
    lastName: v.string(),
    email: v.string(),
    password: v.string(), 
    educationID: v.optional(v.string()),
    dateOfBirth: v.string(),
    userType: v.union(
      v.literal("Student"),
      v.literal("Teacher"),
      v.literal("Administrator"),
      v.literal("Parent")
    ),
  }),
  student_teacher_assignment: defineTable({
    studentID: v.string(),
    teacherID: v.string(),
  }),
  teacher_subject_assignment: defineTable({
    teacherID: v.string(),
    subjectID: v.string(),
  }),
  student_subject_assignment: defineTable({
    subjectID: v.string(),
    studentID: v.string(),
  }),
  user_school_assignment: defineTable({
    userID: v.string(),
    schoolID: v.string(),
  }),
  school: defineTable({
    schoolID: v.string(),
    schoolName: v.string(),
  }),
  subject: defineTable({
    subjectID: v.string(),
    subjectName: v.string(),
  }),
  category: defineTable({
    categoryID: v.string(),
    categoryName: v.string(),
    subjectID: v.string(),
  }),
  standard: defineTable({
    standardID: v.string(),
    standardDescription: v.string(),
    gradeAssigned: v.string(),
    categoryID: v.string(),
  }),
  achievement: defineTable({
    achievementID: v.string(),
    studentID: v.string(),
    standardID: v.string(),
    schoolID: v.string(),
    certifyingTeacherID: v.string(),
    status: v.string(),
    achievementDate: v.string(),
    gradeAchieved: v.string(),
  }),
  comment: defineTable({
    commentID: v.string(),
    achievementID: v.string(),
    authorID: v.string(),
    commentText: v.string(),
    commentDate: v.string(),
  }),
});
