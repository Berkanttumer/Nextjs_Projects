import { Schema, model, models } from "mongoose";
import { unique } from "next/dist/build/utils";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  photo: {
    type: String,
    requried: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  orderHistory: {
    type: Array,
    default: [],
  },
});

const User = models?.User || model("User", UserSchema);

export default User;
