import React, { useState } from "react";
import axios from "axios";
import MapView from "../User/MapView";

export default function Medicine() {
  const [medicine, setMedicine] = useState("");
  const [results, setResults] = useState([]);
  const [location, setLocation] = useState(null);

  const [distance, setDistance] = useState(5);
  const [price, setPrice] = useState("Under ₹50");
  const [availability, setAvailability] = useState("In Stock");
  const [selectedLocation, setSelectedLocation] = useState(null);
  // 📍 Get location (click on location section)
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  // 🔍 Search API
  const handleSearch = async () => {
    if (!location) {
      alert("Please click location first");
      return;
    }

    try {
      const res = await axios.get("http://localhost:5000/api/search", {
        params: {
          medicine,
          lat: location.lat,
          lng: location.lng,
          distance,
          price,
          availability,
        },
      });

      setResults(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* <!-- Search & Filter Bar Section --> */}
      <section className="bg-surface px-8 pt-6 pb-4 mt-20">
        <div className="max-w-[1920px] mx-auto flex flex-col gap-6">
          {/* Search Bar */}
          <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center">
            <div className="flex-grow flex items-center bg-surface/70 backdrop-blur-md rounded-full shadow-lg p-2 border border-white/40">
              {/* 📍 LOCATION (CLICKABLE) */}
              <div
                onClick={getLocation}
                className="flex items-center px-4 border-r cursor-pointer hover:bg-gray-100 min-w-[200px]"
              >
                <span className="material-symbols-outlined text-outline mr-2">
                  location_on
                </span>
                <span className="text-sm font-medium">
                  {location ? "Location connected " : "Set Location"}
                </span>
              </div>

              {/* 🔍 INPUT */}
              <div className="flex-grow flex items-center px-4">
                <span className="material-symbols-outlined text-outline mr-3">
                  search
                </span>
                <input
                  className="w-full bg-transparent border-none outline-none text-sm font-medium placeholder:text-slate-400"
                  placeholder="Search for medicines (e.g. Paracetamol)"
                  type="text"
                  value={medicine}
                  onChange={(e) => setMedicine(e.target.value)}
                />
              </div>

              {/* 🎤 MIC (ignore for now) */}
              <button className="p-2 hover:bg-surface-container rounded-full">
                <span className="material-symbols-outlined text-outline">
                  mic
                </span>
              </button>

              {/* 🔘 SEARCH BUTTON */}
              <button
                onClick={handleSearch}
                className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3 rounded-full font-bold shadow-md hover:scale-[0.98] transition-transform ml-2"
              >
                Search
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2 medicine-scroll">
            {/* Distance */}
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl text-sm font-medium">
              <span className="text-outline">Distance:</span>
              <select
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-primary p-0 text-sm font-bold"
              >
                <option value="1">1km</option>
                <option value="5">5km</option>
                <option value="10">10km</option>
              </select>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl text-sm font-medium">
              <span className="text-outline">Availability:</span>
              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-primary p-0 text-sm font-bold"
              >
                <option value="In Stock">In Stock</option>
                <option value="All">All</option>
              </select>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl text-sm font-medium">
              <span className="text-outline">Price Range:</span>
              <select
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-primary p-0 text-sm font-bold"
              >
                <option value="Under ₹50">Under ₹50</option>
                <option value="₹50 - ₹100">₹50 - ₹100</option>
                <option value="Any">Any</option>
              </select>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-outline-variant/30"></div>

            {/* More Filters */}
            <button className="flex items-center gap-2 px-4 py-2 text-primary font-bold text-sm">
              <span className="material-symbols-outlined text-[18px]">
                tune
              </span>
              More Filters
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-grow overflow-hidden">
        {/* LEFT SIDE */}

        <div className="w-full lg:w-[40%] bg-slate-50 overflow-y-auto p-8">
          {/* Header */}
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
                Results Found
              </h2>
              <p className="text-2xl font-bold">
                {results.length} Pharmacies near you
              </p>
            </div>

            <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-md">
              Showing: {medicine}
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {results.map((item, index) => (
              <article
                key={index}
                className={`bg-white p-6 rounded-[2rem] shadow-xl relative group ${
                  index === 0 ? "border-2 border-blue-200" : ""
                }`}
              >
                {/* ❤️ Icon */}
                <button className="absolute top-6 right-6 text-blue-600 hover:scale-110 transition">
                  <span className="material-symbols-outlined">favorite</span>
                </button>

                {/* 🏥 Header */}
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-blue-600 text-3xl">
                      local_pharmacy
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{item.pharmacyName}</h3>

                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        map
                      </span>
                      {item.distance} away
                    </p>
                  </div>
                </div>

                {/* 💊 Price + Stock */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <span className="text-2xl font-bold">₹{item.price}</span>
                    <p className="text-xs text-gray-400">{item.medicine}</p>
                  </div>

                  <span className="bg-green-100 text-green-600 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    In Stock
                  </span>
                </div>

                {/* 🔘 Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-blue-600 text-white py-3 rounded-xl font-bold">
                    Order Now
                  </button>
                  <button
                    onClick={() =>
                      setSelectedLocation({
                        lat: item.location.lat,
                        lng: item.location.lng,
                      })
                    }
                    className="bg-gray-200 py-3 rounded-xl font-bold"
                  >
                    View Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE MAP */}
        {/* <!-- Right Side: Interactive Map (60%) --> */}
        <div className="hidden lg:block w-[55%] h-[80vh] mt-9">
          <MapView
            results={results}
            location={location}
            selectedLocation={selectedLocation}
          />
        </div>
      </section>
    </>
  );
}
