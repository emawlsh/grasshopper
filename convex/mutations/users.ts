import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("users", args);
  },
});

export const updateUser = mutation({
  args: {
    userID: v.string(),
    update: v.object({
      firstName: v.optional(v.string()),
      middleNames: v.optional(v.string()),
      lastName: v.optional(v.string()),
      email: v.optional(v.string()),
      password: v.optional(v.string()),
      educationID: v.optional(v.string()),
      dateOfBirth: v.optional(v.string()),
      userType: v.optional(
        v.union(
          v.literal("Student"),
          v.literal("Teacher"),
          v.literal("Administrator"),
          v.literal("Parent")
        )
      ),
    }),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("userID"), args.userID))
      .first();

    if (!user) {
      throw new Error("User not found");
    }

    return await ctx.db.patch(user._id, args.update);
  },
});

export const deleteUser = mutation({
  args: { userID: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("userID"), args.userID))
      .first();

    if (!user) {
      throw new Error("User not found");
    }

    return await ctx.db.delete(user._id);
  },
}); 