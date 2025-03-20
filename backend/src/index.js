import { app } from "./app.js";  // Import app.js
import connectDB from "./database/db.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`⚙️ Server is running at port : ${PORT}`);
});