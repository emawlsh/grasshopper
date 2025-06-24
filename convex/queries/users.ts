import { query } from "../_generated/server";
import { v } from "convex/values";

export const getUserById = query({
  args: { userID: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
    .query("users")
    .filter((q) => q.eq(q.field("userID"), args.userID))
    .first();
  },
});

export const listUsers = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
    .query("users")
    .collect();
  },
}); 