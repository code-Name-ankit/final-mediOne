import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    brand: String,

    type: {
      type: String, // tablet, syrup, injection
    },

    price: {
      type: Number,
      required: true,
    },

    stock: {
      type: Number,
      default: 0,
    },

    // 🔗 Reference to Pharmacy
    pharmacy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pharmacy",
      required: true,
    },

    genericName: String,

    description: String,

    expiryDate: Date,

    manufacturer: String,

    prescriptionRequired: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Medicine = mongoose.model("Medicine", medicineSchema);

export default Medicine;