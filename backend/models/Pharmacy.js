import mongoose from "mongoose";

const pharmacySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    ownerName: {
      type: String,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
    },

    email: {
      type: String,
    },

    address: {
      type: String,
      required: true,
    },

    city: String,
    state: String,
    pincode: String,

    // 📍 Location (IMPORTANT for nearby search)
    location: {
      type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number], // [lng, lat]
        required: true,
      },
    },

    // 🕒 Timing
    openingTime: String,
    closingTime: String,

    isOpen: {
      type: Boolean,
      default: true,
    },

    is24Hours: {
      type: Boolean,
      default: false,
    },

    rating: {
      type: Number,
      default: 0,
    },

    image: String,
  },
  { timestamps: true }
);

// 📌 Geo Index (VERY IMPORTANT)
pharmacySchema.index({ location: "2dsphere" });

const Pharmacy = mongoose.model("Pharmacy", pharmacySchema);

export default Pharmacy;