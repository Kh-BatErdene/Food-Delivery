import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: true,
  },
});

export const UserModel = model("user", userSchema);
