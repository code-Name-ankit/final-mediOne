// models/MedicalStore.js
import mongoose from "mongoose";

const medicalStoreSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    city: String,

    location: {
      type: {
        type: String,
        default: "Point",
      },
      coordinates: {
        type: [Number], // [lng, lat]
        required: true,
      },
    },

    phone: String,
    ownerName: String,
  },
  { timestamps: true }
);

// 🔥 Geo index (nearby search ke liye MUST)
medicalStoreSchema.index({ location: "2dsphere" });

export default mongoose.model("MedicalStore", medicalStoreSchema);