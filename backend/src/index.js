import { app } from "./app.js";  // Import app.js
import connectDB from "./database/db.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Connect to MongoDB
connectDB();

