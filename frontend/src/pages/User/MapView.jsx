import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// 🔴 User Icon
const userIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      position: relative;
      width: 20px;
      height: 20px;
      background: #ef4444;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 0 0 4px rgba(239,68,68,0.3);
    ">
      <div style="
        position:absolute;
        width:100%;
        height:100%;
        border-radius:50%;
        background: rgba(239,68,68,0.4);
        animation: pulse 1.5s infinite;
      "></div>
    </div>

    <style>
      @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(2.5); opacity: 0; }
      }
    </style>
  `,
  iconSize: [20, 20],
});

// 🟢 Pharmacy Icon
const pharmacyIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 28px;
      height: 28px;
      background: #22c55e;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 16px;
      font-weight: bold;
      border: 3px solid white;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    ">
      +
    </div>
  `,
  iconSize: [28, 28],
});

const MapView = ({ results, location, selectedLocation }) => {
  return (
    <MapContainer
      center={
        selectedLocation
          ? [selectedLocation.lat, selectedLocation.lng]
          : location
          ? [location.lat, location.lng]
          : [21.1702, 72.8311]
      }
      zoom={selectedLocation ? 16 : 13}
      style={{ height: "100%", width: "100%" }}
      key={selectedLocation?.lat + selectedLocation?.lng}
    >
      {/* 🌍 Map */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* 🔴 USER */}
      {location && (
        <Marker position={[location.lat, location.lng]} icon={userIcon}>
          <Popup>
            <div className="font-bold text-red-500">You</div>
          </Popup>
        </Marker>
      )}

      {/* 🟢 STORES */}
      {results.map((item, index) => {
        const lat = item.location?.coordinates?.[1];
        const lng = item.location?.coordinates?.[0];

        if (!lat || !lng) return null;

        return (
          <Marker key={index} position={[lat, lng]} icon={pharmacyIcon}>
            <Popup>
              <div className="w-48">
                {/* ✅ Store Name */}
                <h3 className="text-sm font-bold text-gray-800">
                  {item.storeName}
                </h3>

                {/* ✅ Medicine */}
                <p className="text-xs text-gray-500 mb-2">
                  {item.medicineName}
                </p>

                {/* ✅ Price */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-600 font-bold">
                    ₹{item.price}
                  </span>

                  {/* ✅ Stock */}
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      item.stock > 0
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.stock > 0 ? "In Stock" : "Out"}
                  </span>
                </div>

                {/* 🔘 Button */}
                <button
                  onClick={() => alert("Open details page")}
                  className="w-full bg-blue-600 text-white text-xs py-1.5 rounded-lg font-bold hover:bg-blue-700"
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapView;