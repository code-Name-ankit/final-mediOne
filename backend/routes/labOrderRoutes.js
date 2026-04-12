import express from "express";
const router = express.Router();
import { createLabOrder, getAllOrders , uploadReport} from "../controllers/labOrderController.js";
import multer from "multer";

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"), // 'uploads' folder bana lena root mein
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });
// POST: /api/lab-orders/place
router.post("/place", createLabOrder);
router.get("/all", getAllOrders);
router.post("/upload-report/:orderId", upload.single("report"), uploadReport);

export default router;