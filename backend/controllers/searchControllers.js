// controllers/searchController.js
import Medicinesdata from "../models/Medicines.js";
import StoreMedicine from "../models/StoreMedicine.js";
import MedicalStore from "../models/MedicalStore.js";
import { calculateDistance } from "../utils/distance.js";


export const searchMedicine = async (req, res) => {
  try {
    const { name, lat, lng, distance} = req.query;

    if (!name) {
      return res.status(400).json({ message: "Medicine name required" });
    }

    //  Distance function (inside controller)
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const R = 6371; // km

      const dLat = (lat2 - lat1) * (Math.PI / 180);
      const dLon = (lon2 - lon1) * (Math.PI / 180);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
          Math.cos(lat2 * (Math.PI / 180)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      return R * c;
    };

    // 🔍 Step 1: Find medicines
    const medicines = await Medicinesdata.find({
      name: { $regex: name, $options: "i" },
    });

    if (medicines.length === 0) {
      return res.json([]);
    }

    const medicineIds = medicines.map((m) => m._id);

    // 🔗 Step 2: Find StoreMedicine
    let storeMedicines = await StoreMedicine.find({
      medicine: { $in: medicineIds },
      stock: { $gt: 0 },
    })
      .populate("store")
      .populate("medicine");

    // 📍 Step 3: Nearby filter
    const userLat = parseFloat(lat);
    const userLng = parseFloat(lng);
    

    if (!isNaN(userLat) && !isNaN(userLng)) {
      const nearbyStores = await MedicalStore.find({
        location: {
          $near: {
            $geometry: {
              type: "Point",
              coordinates: [userLng, userLat],
            },
            $maxDistance: distance,
          },
        },
      });

      const nearbyStoreIds = nearbyStores.map((s) => s._id.toString());

      storeMedicines = storeMedicines.filter((item) =>
        nearbyStoreIds.includes(item.store._id.toString())
      );
    }

    // 🎯 Step 4: Format + Distance
    let result = storeMedicines.map((item) => {
      let distance = null;

      if (!isNaN(userLat) && !isNaN(userLng)) {
        const storeLat = item.store.location.coordinates[1];
        const storeLng = item.store.location.coordinates[0];

        const dist = calculateDistance(
          userLat,
          userLng,
          storeLat,
          storeLng
        );

        distance = dist;
      }

      return {
        storeId: item.store._id,
        storeName: item.store.name,
        location: item.store.location,
        medicineName: item.medicine.name,
        price: item.price,
        stock: item.stock,
        distance,
      };
    });

    // 🔥 Step 5: Sort by nearest
    if (!isNaN(userLat) && !isNaN(userLng)) {
      result.sort((a, b) => a.distance - b.distance);
    }

    // 🎯 Step 6: Format distance for frontend
    result = result.map((item) => ({
      ...item,
      distance:
        item.distance !== null
          ? item.distance.toFixed(2) + " km"
          : null,
    }));

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


export const getStoreDetails = async (req, res) => {
  try {
    const { id } = req.params;

    // 🏥 Step 1: Store details
    const store = await MedicalStore.findById(id);

    if (!store) {
      return res.status(404).json({ message: "Store not found" });
    }

    // 💊 Step 2: Store ki medicines
    const medicines = await StoreMedicine.find({
      store: id,
      stock: { $gt: 0 }, // only available
    }).populate("medicine");

    // 🎯 Step 3: Format response
    const formattedMedicines = medicines.map((item) => ({
      medicineId: item.medicine._id,
      name: item.medicine.name,
      brand: item.medicine.brand,
      price: item.price,
      stock: item.stock,
      expiryDate: item.expiryDate,
    }));

    res.json({
      store: {
        id: store._id,
        name: store.name,
        address: store.address,
        location: store.location,
      },
      medicines: formattedMedicines,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};