import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Initialize Express
const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Test Route (Add this if missing)
app.get("/api/test", (req, res) => {
  res.json({ message: "✅ API is working!" });
});

// Export the app
export { app };
