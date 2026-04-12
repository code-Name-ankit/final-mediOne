import Medicinesdata from "../models/Medicines.js";

// Get all medicines
export const getAllMedicines = async (req, res) => {
  try {
    const meds = await Medicinesdata.find().sort({ createdAt: -1 });
    res.status(200).json(meds);
  } catch (err) {
    res.status(500).json({ message: "Fetch failed", error: err.message });
  }
};

// Add medicine
export const createMedicine = async (req, res) => {
  try {
    const newMed = new Medicinesdata(req.body);
    await newMed.save();
    res.status(201).json(newMed);
  } catch (err) {
    res.status(400).json({ message: "Create failed", error: err.message });
  }
};

// Delete medicine
export const deleteMedicine = async (req, res) => {
  try {
    await Medicinesdata.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};