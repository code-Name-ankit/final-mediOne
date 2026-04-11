import express from "express";
import { searchMedicine } from "../controllers/searchController.js";

const router = express.Router();

// 🔍 GET /api/search
router.get("/", searchMedicine);

export default router;