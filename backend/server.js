import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";


import searchRoutes from "./routes/searchRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());




app.use("/api/search", searchRoutes);
app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// DB connect
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});