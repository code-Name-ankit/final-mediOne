import mongoose from "mongoose";
import dotenv from "dotenv";

import Pharmacy from "./models/Pharmacy.js";
import Medicine from "./models/Medicine.js";

dotenv.config();

// 🔗 MongoDB connect
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected for seeding...");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// 🏥 Fake Pharmacy Data (Surat)
const pharmacies = [
  {
    name: "Apollo Pharmacy Adajan",
    phone: "9876543210",
    address: "Adajan, Surat",
    city: "Surat",
    state: "Gujarat",
    location: {
      type: "Point",
      coordinates: [72.7945, 21.1959],
    },
    is24Hours: true,
  },
  {
    name: "MedPlus Pharmacy Vesu",
    phone: "9876543211",
    address: "Vesu, Surat",
    city: "Surat",
    state: "Gujarat",
    location: {
      type: "Point",
      coordinates: [72.7648, 21.1500],
    },
  },
  {
    name: "Wellness Forever Udhna",
    phone: "9876543212",
    address: "Udhna, Surat",
    city: "Surat",
    state: "Gujarat",
    location: {
      type: "Point",
      coordinates: [72.8517, 21.1710],
    },
  },
  {
    name: "City Care Medical Varachha",
    phone: "9876543213",
    address: "Varachha, Surat",
    city: "Surat",
    state: "Gujarat",
    location: {
      type: "Point",
      coordinates: [72.8700, 21.2200],
    },
  },
];

// 💊 Fake Medicines
const createMedicines = (pharmacyId) => [
  {
    name: "Paracetamol",
    brand: "Dolo 650",
    price: 30,
    stock: 100,
    pharmacy: pharmacyId,
  },
  {
    name: "Ibuprofen",
    brand: "Brufen",
    price: 50,
    stock: 60,
    pharmacy: pharmacyId,
  },
  {
    name: "Cetirizine",
    brand: "Cetzine",
    price: 20,
    stock: 80,
    pharmacy: pharmacyId,
  },
];

// 🌱 Seed Function
const seedData = async () => {
  try {
    await connectDB();

    // ❌ Purana data delete
    await Pharmacy.deleteMany();
    await Medicine.deleteMany();

    console.log("Old data cleared...");

    // ✅ Insert pharmacies
    const createdPharmacies = await Pharmacy.insertMany(pharmacies);

    console.log("Pharmacies inserted...");

    // ✅ Insert medicines for each pharmacy
    let medicines = [];

    createdPharmacies.forEach((pharmacy) => {
      medicines = [...medicines, ...createMedicines(pharmacy._id)];
    });

    await Medicine.insertMany(medicines);

    console.log("Medicines inserted...");

    console.log("✅ Seeding completed!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();