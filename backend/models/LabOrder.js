import mongoose from "mongoose";

const labOrderSchema = new mongoose.Schema({
  labId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lab",
    required: true
  },
  labName: { type: String, required: true },
  testType: { type: String }, // e.g., "Blood Test"
  price: { type: Number, required: true },
  tax: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Sample Collected", "Completed"],
    default: "Pending"
  },
  createdAt: { type: Date, default: Date.now }
});

const LabOrder = mongoose.model("LabOrder", labOrderSchema);
export default LabOrder;