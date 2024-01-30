import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb: //localhost: test");
    console.log("Databese connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};
