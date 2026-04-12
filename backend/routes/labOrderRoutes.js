import express from "express";
const router = express.Router();
import { createLabOrder, getAllOrders } from "../controllers/labOrderController.js";

// POST: /api/lab-orders/place
router.post("/place", createLabOrder);
router.get("/all", getAllOrders);

export default router;