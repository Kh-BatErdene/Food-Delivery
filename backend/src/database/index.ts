import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://BatErdene:89129494Bb!@cluster0.hqlmqgw.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed");
  }
};
