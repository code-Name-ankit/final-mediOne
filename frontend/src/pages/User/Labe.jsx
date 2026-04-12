import React, { useState, useEffect } from "react";
import MapView from "../User/MapView";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Labe() {
    const navigate = useNavigate();
  const [labs, setLabs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationName, setLocationName] = useState("Detecting location...");
  const [activeLabId, setActiveLabId] = useState(null);

  // States for MapView
  const [userLocation, setUserLocation] = useState(null); 
  const [selectedLab, setSelectedLab] = useState(null);
  

  const fetchLabs = async (test = "") => {
    setLoading(true);
    try {
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
        setLoading(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        
        // IMPORTANT: Update userLocation so MapView knows where to center
        setUserLocation({ lat: latitude, lng: longitude });

        try {
          const response = await axios.get(`http://localhost:5000/api/labs/search`, {
            params: {
              lat: latitude,
              lon: longitude,
              test: test || searchTerm
            }
          });
          
          setLabs(response.data);
          setLocationName("Current Location");
        } catch (apiErr) {
          console.error("Backend API Error:", apiErr);
        } finally {
          setLoading(false);
        }
      }, (error) => {
        console.error("Location access denied", error);
        setLoading(false);
        alert("Please enable location to find nearest labs.");
      });
    } catch (err) {
      console.error("General Error:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLabs();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchLabs();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero & Search Section */}
      <section className="relative py-16 px-8 flex flex-col items-center overflow-hidden mt-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent"></div>

        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold text-on-surface mb-2 tracking-tight">
            Find Your Nearest Lab
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Expert diagnostics delivered with empathetic precision.
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="w-full max-w-4xl rounded-full p-2 flex items-center shadow-lg bg-white border border-slate-200">
          <div className="flex-1 flex items-center px-6 gap-3">
            <span className="material-symbols-outlined text-slate-400">search</span>
            <input
              type="text"
              placeholder="Search for lab tests (e.g. Blood Test)"
              className="w-full bg-transparent border-none outline-none focus:ring-0 text-slate-800 font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="hidden md:flex items-center px-6 gap-3 border-l border-slate-200 min-w-[200px]">
            <span className="material-symbols-outlined text-slate-400">location_on</span>
            <span className="text-slate-700 font-semibold truncate">{locationName}</span>
          </div>

          <button type="submit" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:brightness-95 transition-all">
            {loading ? "..." : "Search"}
          </button>
        </form>

        {/* Category Filters */}
        <div className="flex gap-4 mt-12 overflow-x-auto no-scrollbar pb-4 max-w-full">
          {["BLOOD TEST", "COVID TEST", "URINE TEST", "FULL BODY"].map((cat) => (
            <div 
              key={cat}
              onClick={() => fetchLabs(cat)}
              className="cursor-pointer flex-shrink-0 bg-white p-5 rounded-xl flex flex-col items-center gap-3 w-36 shadow-sm border border-slate-100 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">
                  {cat === "BLOOD TEST" ? "bloodtype" : cat === "COVID TEST" ? "coronavirus" : "science"}
                </span>
              </div>
              <span className="text-[10px] font-bold tracking-widest text-slate-700 uppercase">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content: Split Layout */}
      <section className="h-[750px] flex px-8 pb-12 gap-6 overflow-hidden">
        
        {/* Left Panel: Lab List (45%) */}
        <div className="w-full lg:w-[45%] overflow-y-auto pr-4 no-scrollbar space-y-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-slate-800">Labs near you ({labs.length})</h3>
          </div>

          {labs.length === 0 && !loading && (
            <div className="text-center py-20 bg-slate-100 rounded-xl">
              <p className="text-slate-400 font-medium">No labs found in this area.</p>
            </div>
          )}

          {labs.map((lab) => (
            <div 
              key={lab._id}
              onMouseEnter={() => {
                setActiveLabId(lab._id);
                setSelectedLab(lab); // Sync map marker
              }}
              className={`bg-white p-6 rounded-2xl flex gap-6 transition-all border-2 cursor-pointer 
                ${activeLabId === lab._id ? 'border-primary shadow-lg ring-4 ring-primary/5' : 'border-transparent shadow-sm hover:border-slate-200'}`}
            >
              <div className="w-24 h-24 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                <img 
                  src={lab.image || "https://images.unsplash.com/photo-1602052577122-f73b9710adba?w=400"} 
                  className="w-full h-full object-cover" 
                  alt={lab.name} 
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">{lab.name}</h4>
                    <p className="text-sm text-slate-500 capitalize">{lab.tests?.slice(0, 2).join(", ")}...</p>
                  </div>
                  <p className="text-xl font-black text-primary">₹{lab.price}</p>
                </div>
                <div className="mt-6 flex gap-3">
                  <button 
                   onClick={() =>
                    navigate("/test-checkout", {
                      state: {
                        item: {
                          id: lab._id,
                          name: lab.name,
                          price: lab.price,
                          type: "lab"
                        }
                      },
                    })
                  }
                  className="flex-1 py-2.5 rounded-xl font-bold text-white bg-primary text-sm shadow-md shadow-primary/20">Book Now</button>
                  <button className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-600">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel: MapView (55%) */}
        <div className="hidden lg:block w-[55%] h-full rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl">
          <MapView
            results={labs}
            location={userLocation}
            selectedLocation={selectedLab}
          />
        </div>

      </section>
    </div>
  );
}