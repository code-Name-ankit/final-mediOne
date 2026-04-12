import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";


import searchRoutes from "./routes/searchRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import searchRoutess from "./routes/searchRoutess.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));



app.use("/api/search", searchRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/searchh", searchRoutess);
app.use("/api/orders", orderRoutes);

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