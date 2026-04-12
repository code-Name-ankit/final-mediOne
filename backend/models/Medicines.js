// models/Medicine.js
import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    brand: String,
    category: String,
    description: String,
  },
  { timestamps: true }
);

// ✅ safe export (Overwrite error avoid)
export default mongoose.models.Medicinesdata || mongoose.model("Medicinesdata", medicineSchema);