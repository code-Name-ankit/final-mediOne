import Medicine from "../models/Medicine.js";
import Pharmacy from "../models/Pharmacy.js";

// 🔍 Search API with filters
export const searchMedicine = async (req, res) => {
  try {
    const { medicine, lat, lng, distance = 5, price } = req.query;

    if (!medicine || !lat || !lng) {
      return res.status(400).json({
        message: "Medicine, latitude and longitude required",
      });
    }

    // 🔍 Step 1: Build query
    let query = {
      name: { $regex: medicine, $options: "i" },
      stock: { $gt: 0 },
    };

    // 💰 Price filter
    if (price && price !== "Any") {
      if (price === "Under ₹50") {
        query.price = { $lte: 50 };
      } else if (price === "₹50 - ₹100") {
        query.price = { $gte: 50, $lte: 100 };
      }
    }

    // 🔍 Step 2: Get medicines
    const medicines = await Medicine.find(query).populate("pharmacy");

    // 📍 Step 3: Distance filter
    const nearbyResults = medicines.filter((item) => {
      const pharmacy = item.pharmacy;

      if (!pharmacy?.location?.coordinates) return false;

      const [phLng, phLat] = pharmacy.location.coordinates;

      const dist = getDistanceFromLatLonInKm(
        lat,
        lng,
        phLat,
        phLng
      );

      return dist <= distance;
    });

    // 📤 Step 4: Format response
    const result = nearbyResults.map((item) => {
      const pharmacy = item.pharmacy;
      const [phLng, phLat] = pharmacy.location.coordinates;

      const dist = getDistanceFromLatLonInKm(
        lat,
        lng,
        phLat,
        phLng
      );

      return {
        medicine: item.name,
        price: item.price,
        pharmacyName: pharmacy.name,
        address: pharmacy.address,
        distance: dist.toFixed(2) + " km",
        location: {
          lat: phLat,
          lng: phLng,
        },
      };
    });

    res.json({
      count: result.length,
      data: result,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// 📏 Distance function
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}