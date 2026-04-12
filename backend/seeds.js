// seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import MedicalStore from "./models/MedicalStore.js";
import Medicine from "./models/Medicines.js"; // ✅ fix
import StoreMedicine from "./models/StoreMedicine.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);
console.log("DB Connected");

// 🧹 Purana data delete
await MedicalStore.deleteMany();
await Medicine.deleteMany();
await StoreMedicine.deleteMany();

console.log("Old Data Deleted 🗑️");

// 💊 Medicines
const medicines = await Medicine.insertMany([
  { name: "Paracetamol", brand: "Dolo", category: "Fever" },
  { name: "Ibuprofen", brand: "Brufen", category: "Pain" },
  { name: "Amoxicillin", brand: "Mox", category: "Antibiotic" },
  { name: "Cetirizine", brand: "Cetzine", category: "Allergy" },
  { name: "Pantoprazole", brand: "Pantocid", category: "Acidity" },
]);

// 🏥 Stores (Surat based locations)
const stores = await MedicalStore.insertMany([
  {
    name: "Apollo Medical Surat",
    address: "Ring Road, Surat",
    location: {
      type: "Point",
      coordinates: [72.8311, 21.1702], // Surat center
    },
  },
  {
    name: "MedPlus Adajan",
    address: "Adajan, Surat",
    location: {
      type: "Point",
      coordinates: [72.7895, 21.1950], // Adajan
    },
  },
  {
    name: "WellCare Pharmacy Vesu",
    address: "Vesu, Surat",
    location: {
      type: "Point",
      coordinates: [72.7790, 21.1400], // Vesu
    },
  },
  {
    name: "CarePlus Pharmacy Varachha",
    address: "Varachha, Surat",
    location: {
      type: "Point",
      coordinates: [72.8600, 21.2150], // Varachha
    },
  },
]);

// 🔗 StoreMedicine (relations)
await StoreMedicine.insertMany([
  // Apollo
  {
    store: stores[0]._id,
    medicine: medicines[0]._id,
    stock: 60,
    price: 25,
  },
  {
    store: stores[0]._id,
    medicine: medicines[1]._id,
    stock: 40,
    price: 35,
  },
  {
    store: stores[0]._id,
    medicine: medicines[2]._id,
    stock: 25,
    price: 85,
  },

  // MedPlus Adajan
  {
    store: stores[1]._id,
    medicine: medicines[0]._id,
    stock: 30,
    price: 22,
  },
  {
    store: stores[1]._id,
    medicine: medicines[3]._id,
    stock: 70,
    price: 18,
  },
  {
    store: stores[1]._id,
    medicine: medicines[4]._id,
    stock: 20,
    price: 55,
  },

  // WellCare Vesu
  {
    store: stores[2]._id,
    medicine: medicines[1]._id,
    stock: 50,
    price: 33,
  },
  {
    store: stores[2]._id,
    medicine: medicines[2]._id,
    stock: 15,
    price: 75,
  },
  {
    store: stores[2]._id,
    medicine: medicines[3]._id,
    stock: 40,
    price: 20,
  },

  // CarePlus Varachha
  {
    store: stores[3]._id,
    medicine: medicines[0]._id,
    stock: 45,
    price: 24,
  },
  {
    store: stores[3]._id,
    medicine: medicines[4]._id,
    stock: 35,
    price: 52,
  },
]);

console.log("Surat Fake Data Inserted ✅");
process.exit();w