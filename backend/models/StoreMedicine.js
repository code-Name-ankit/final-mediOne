// models/StoreMedicine.js
import mongoose from "mongoose";

const storeMedicineSchema = new mongoose.Schema(
  {
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MedicalStore",
      required: true,
      index: true,
    },

    medicine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medicinesdata",
      required: true,
      index: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
    },

    expiryDate: Date,
  },
  { timestamps: true }
);

// 🔥 Important: same medicine same store me duplicate na ho
storeMedicineSchema.index({ store: 1, medicine: 1 }, { unique: true });

export default mongoose.model("StoreMedicine", storeMedicineSchema);