import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "eLearningDB", // Ensure you specify the database name
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    process.exit(0); // Exit process if successful
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB();
