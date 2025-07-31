import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export default async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
}
