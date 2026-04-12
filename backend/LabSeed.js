import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Lab from './models/Lab.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/labDB')
  .then(() => console.log("Connected to DB - Surat Seeding Started..."))
  .catch(err => console.log(err));

const suratLabs = [
  {
    name: "Adajan Diagnostic Care",
    tests: ["Blood Test", "Thyroid", "Full Body Checkup"],
    price: 550,
    rating: 4.7,
    location: {
      type: "Point",
      coordinates: [72.7933, 21.1959] // Adajan Area
    }
  },
  {
    name: "Vesu Health Pathology",
    tests: ["COVID Test", "Diabetes Profile", "Blood Test"],
    price: 400,
    rating: 4.9,
    location: {
      type: "Point",
      coordinates: [72.7756, 21.1415] // Vesu Area
    }
  },
  {
    name: "Varachha Clinical Lab",
    tests: ["Urine Test", "Malaria Test", "Blood Test"],
    price: 350,
    rating: 4.4,
    location: {
      type: "Point",
      coordinates: [72.8561, 21.2121] // Varachha Area
    }
  },
  {
    name: "Station Road Medical Center",
    tests: ["Full Body Checkup", "Liver Function Test"],
    price: 1500,
    rating: 4.6,
    location: {
      type: "Point",
      coordinates: [72.8406, 21.2048] // Near Surat Railway Station
    }
  },
  {
    name: "Piplod Super Speciality Lab",
    tests: ["Vitamin D Test", "Hormone Test"],
    price: 800,
    rating: 4.8,
    location: {
      type: "Point",
      coordinates: [72.7651, 21.1557] // Piplod Area
    }
  }
];

const seedSuratData = async () => {
  try {
    await Lab.deleteMany({});
    console.log("Old data cleared.");

    await Lab.insertMany(suratLabs);
    console.log(`Success! ${suratLabs.length} Labs added for Surat city.`);
    
    process.exit();
  } catch (error) {
    console.error("Error seeding Surat data:", error);
    process.exit(1);
  }
};

seedSuratData();