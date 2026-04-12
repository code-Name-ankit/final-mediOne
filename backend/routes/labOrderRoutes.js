import express from "express";
const router = express.Router();
import { createLabOrder } from "../controllers/labOrderController.js";

// POST: /api/lab-orders/place
router.post("/place", createLabOrder);

export default router;