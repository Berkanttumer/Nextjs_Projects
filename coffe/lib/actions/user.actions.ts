"use server";

import User from "@/lib/database/models/user.model";
import { connect } from "@/lib/database/db";

export async function createUser(user: any) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (err) {
    console.log(err);
  }
}
