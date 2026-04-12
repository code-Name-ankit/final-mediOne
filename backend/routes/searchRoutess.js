// routes/searchRoutes.js
import express from "express";
import { searchMedicine, getStoreDetails  } from "../controllers/searchControllers.js";

const router = express.Router();

// GET /api/search?name=para&lat=23&lng=72
router.get("/", searchMedicine);
router.get("/:id", getStoreDetails);

export default router;