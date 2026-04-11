import React from "react";

export default function Medicine() {
  return (
    <>
      {/* <!-- Search & Filter Bar Section --> */}
      <section className="bg-surface px-8 pt-6 pb-4 mt-20">
        <div className="max-w-[1920px] mx-auto flex flex-col gap-6">
          {/* Search Bar */}
          <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center">
            <div className="flex-grow flex items-center bg-surface/70 backdrop-blur-md rounded-full shadow-lg shadow-slate-200/50 p-2 border border-white/40">
              {/* Location */}
              <div className="flex items-center px-4 border-r border-outline-variant/30 min-w-[200px]">
                <span className="material-symbols-outlined text-outline mr-2">
                  location_on
                </span>
                <span className="text-sm font-medium">New York, NY</span>
              </div>

              {/* Input */}
              <div className="flex-grow flex items-center px-4">
                <span className="material-symbols-outlined text-outline mr-3">
                  search
                </span>
                <input
                  className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-none text-sm font-medium placeholder:text-slate-400"
                  placeholder="Search for medicines (e.g. Paracetamol)"
                  type="text"
                />
              </div>

              {/* Mic Button */}
              <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
                <span className="material-symbols-outlined text-outline">
                  mic
                </span>
              </button>

              {/* Search Button */}
              <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3 rounded-full font-bold shadow-md hover:scale-[0.98] transition-transform ml-2">
                Search
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2 medicine-scroll">
            {/* Distance */}
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl text-sm font-medium">
              <span className="text-outline">Distance:</span>
              <select className="bg-transparent border-none focus:ring-0 text-primary p-0 text-sm font-bold">
                <option>1km</option>
                <option defaultValue>5km</option>
                <option>10km</option>
              </select>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl text-sm font-medium">
              <span className="text-outline">Availability:</span>
              <select className="bg-transparent border-none focus:ring-0 text-primary p-0 text-sm font-bold">
                <option defaultValue>In Stock</option>
                <option>All</option>
              </select>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-xl text-sm font-medium">
              <span className="text-outline">Price Range:</span>
              <select className="bg-transparent border-none focus:ring-0 text-primary p-0 text-sm font-bold">
                <option defaultValue>Under ₹50</option>
                <option>₹50 - ₹100</option>
                <option>Any</option>
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
              <p className="text-2xl font-bold">12 Pharmacies near you</p>
            </div>

            <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-md">
              Showing: Paracetamol
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {/* CARD 1 (ACTIVE) */}
            <article className="bg-white p-6 rounded-[2rem] shadow-xl border-2 border-blue-200 relative group">
              <button className="absolute top-6 right-6 text-blue-600 hover:scale-110 transition">
                <span className="material-symbols-outlined">favorite</span>
              </button>

              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600 text-3xl">
                    local_pharmacy
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold">City Care Pharmacy</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      map
                    </span>
                    0.5 km away • Open until 10 PM
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-2xl font-bold">₹12.50</span>
                  <p className="text-xs text-gray-400">Per 100mg (12 Tabs)</p>
                </div>

                <span className="bg-green-100 text-green-600 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  In Stock
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="bg-blue-600 text-white py-3 rounded-xl font-bold">
                  Order Now
                </button>
                <button className="bg-gray-200 py-3 rounded-xl font-bold">
                  View Details
                </button>
              </div>
            </article>

            {/* CARD 2 */}
            <article className="bg-white p-6 rounded-[2rem] hover:shadow-lg transition">
              <button className="absolute top-6 right-6 text-gray-400">
                <span className="material-symbols-outlined">favorite</span>
              </button>

              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gray-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-gray-500 text-3xl">
                    health_and_safety
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold">HealFast Medical</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      map
                    </span>
                    1.2 km away • 24 Hours
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold">₹14.00</span>

                <span className="bg-red-100 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full">
                  Out of Stock
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="bg-gray-300 text-gray-500 py-3 rounded-xl font-bold">
                  Notify Me
                </button>
                <button className="bg-gray-200 py-3 rounded-xl font-bold">
                  View Details
                </button>
              </div>
            </article>

            {/* CARD 3 */}
            <article className="bg-white p-6 rounded-[2rem] hover:shadow-lg transition">
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600 text-3xl">
                    medical_services
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold">Wellness Hub</h3>
                  <p className="text-sm text-gray-500">
                    2.8 km away • Closes 8 PM
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold">₹11.99</span>

                <span className="bg-green-100 text-green-600 text-xs font-bold px-3 py-1.5 rounded-full">
                  In Stock
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="bg-blue-600 text-white py-3 rounded-xl font-bold">
                  Order Now
                </button>
                <button className="bg-gray-200 py-3 rounded-xl font-bold">
                  View Details
                </button>
              </div>
            </article>
          </div>
        </div>

        {/* RIGHT SIDE MAP */}
        {/* <!-- Right Side: Interactive Map (60%) --> */}
        <div class="hidden lg:block w-[60%] relative h-full bg-slate-200">
          <img
            class="w-full h-full object-cover"
            data-alt="high-detail stylized city map of New York with custom medical pins and soft blue-gray color palette"
            data-location="New York"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTuf5kpiext2ydw3J3b55lfyNJOdINAoqMQUXf5NoafflKC2HX_BqFxAYaWomSxtXJ3pt50WQJk6WKK65ymOb5rCY4sH8yXAGxf845KBxM_gQ9F7gKXKJcllbt-aRTw2DCVKa0-R9nhc-axSgwFoncVKu8TTkhWofFVRyKq1xK1IX8zRKtBgjmgeq---inbbfGU21xs2mxyV_CDmx9BvKGLH4NOqTv5P5GWaG865jAEmwY-vi8z4cEhPl-KLMGw4llvJtyFQUSdmE"
          />
          {/* <!-- Floating Map Controls --> */}
          <div class="absolute top-6 left-6 flex flex-col gap-2">
            <button class="bg-white p-3 rounded-full shadow-lg text-primary hover:bg-primary hover:text-white transition-all">
              <span class="material-symbols-outlined" data-icon="my_location">
                my_location
              </span>
            </button>
            <button class="bg-white p-3 rounded-full shadow-lg text-outline">
              <span class="material-symbols-outlined" data-icon="layers">
                layers
              </span>
            </button>
          </div>
          {/* <!-- Custom Map Markers --> */}
          <div class="absolute top-1/4 left-1/3">
            <div class="relative group cursor-pointer">
              <div class="bg-primary text-white p-2 rounded-full shadow-2xl scale-110 border-4 border-white">
                <span
                  class="material-symbols-outlined"
                  data-icon="local_pharmacy"
                >
                  local_pharmacy
                </span>
              </div>
              <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white px-3 py-2 rounded-xl shadow-xl w-40">
                <p class="text-xs font-bold text-on-surface">
                  City Care Pharmacy
                </p>
                <p class="text-[10px] text-secondary font-bold">
                  In Stock • ₹12.50
                </p>
                <div class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
              </div>
            </div>
          </div>
          <div class="absolute top-1/2 right-1/4">
            <div class="relative cursor-pointer group">
              <div class="bg-outline text-white p-2 rounded-full shadow-lg border-4 border-white opacity-80 hover:opacity-100 transition-opacity">
                <span
                  class="material-symbols-outlined"
                  data-icon="health_and_safety"
                >
                  health_and_safety
                </span>
              </div>
            </div>
          </div>
          <div class="absolute bottom-1/3 left-1/2">
            <div class="relative cursor-pointer group">
              <div class="bg-primary text-white p-2 rounded-full shadow-lg border-4 border-white opacity-80 hover:opacity-100 transition-opacity">
                <span
                  class="material-symbols-outlined"
                  data-icon="medical_services"
                >
                  medical_services
                </span>
              </div>
            </div>
          </div>
          <button class="fixed bottom-8 right-8 bg-on-background text-white flex items-center gap-4 px-6 py-4 rounded-full shadow-2xl shadow-slate-900/40 hover:scale-105 transition-transform z-[60]">
            <div class="relative">
              <span class="material-symbols-outlined" data-icon="shopping_bag">
                shopping_bag
              </span>
              <span class="absolute -top-1 -right-1 bg-secondary text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black">
                2
              </span>
            </div>
            <div class="text-left">
              <p class="text-[10px] uppercase font-bold tracking-widest leading-none opacity-60">
                View Cart
              </p>
              <p class="text-sm font-bold leading-none">₹25.00</p>
            </div>
            <span
              class="material-symbols-outlined text-[20px]"
              data-icon="arrow_forward"
            >
              arrow_forward
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
