import express from "express";
import { 
  getAllMedicines, 
  createMedicine, 
  deleteMedicine 
} from "../controllers/medicineController.js";

const router = express.Router();

router.get("/", getAllMedicines);
router.post("/add", createMedicine);
router.delete("/delete/:id", deleteMedicine);

export default router;