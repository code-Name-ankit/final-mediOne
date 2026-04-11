import React from "react";

export default function Labe() {
  return (
    <>
      <section className="relative py-16 px-8 flex flex-col items-center overflow-hidden mt-20">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent"></div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="text-display-lg font-headline font-bold text-on-surface mb-2 tracking-tight"
            style={{ fontSize: "3.5rem", lineHeight: "1.1" }}
          >
            Find Your Nearest Lab
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-xl mx-auto">
            Expert diagnostics delivered with empathetic precision. Search and
            book home collections in seconds.
          </p>
        </div>

        {/* Search Bar */}
        <div className="glass-panel w-full max-w-4xl rounded-full p-2 flex items-center shadow-lg ring-1 ring-outline-variant/15">
          {/* Search Input */}
          <div className="flex-1 flex items-center px-6 gap-3">
            <span className="material-symbols-outlined text-outline">
              search
            </span>
            <input
              type="text"
              placeholder="Search for lab tests (e.g. Blood Test, COVID Test)"
              className="w-full bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-none shadow-none text-on-surface placeholder:text-outline font-medium"
            />
          </div>

          {/* Divider */}
          <div className="w-px h-8 bg-outline-variant/30"></div>

          {/* Location */}
          <div className="flex items-center px-6 gap-3 min-w-[200px]">
            <span className="material-symbols-outlined text-outline">
              location_on
            </span>
            <select
              className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-on-surface font-semibold appearance-none cursor-pointer"
              defaultValue="New York, NY"
            >
              <option>New York, NY</option>
              <option>Brooklyn, NY</option>
              <option>Jersey City, NJ</option>
            </select>
          </div>

          {/* Button */}
          <button className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all">
            Search
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mt-12 overflow-x-auto no-scrollbar pb-4 max-w-full">
          {/* Card 1 */}
          <div className="flex-shrink-0 bg-surface-container-lowest p-5 rounded-xl flex flex-col items-center gap-3 w-40 transition-all hover:translate-y-[-4px] hover:shadow-xl group">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-primary group-hover:text-white">
                bloodtype
              </span>
            </div>
            <span className="text-label-md font-semibold tracking-wider text-on-surface">
              BLOOD TEST
            </span>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 bg-surface-container-lowest p-5 rounded-xl flex flex-col items-center gap-3 w-40 transition-all hover:translate-y-[-4px] hover:shadow-xl group">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
              <span className="material-symbols-outlined text-secondary group-hover:text-white">
                coronavirus
              </span>
            </div>
            <span className="text-label-md font-semibold tracking-wider text-on-surface">
              COVID TEST
            </span>
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 bg-surface-container-lowest p-5 rounded-xl flex flex-col items-center gap-3 w-40 transition-all hover:translate-y-[-4px] hover:shadow-xl group">
            <div className="w-12 h-12 rounded-full bg-tertiary-container/10 flex items-center justify-center group-hover:bg-tertiary-container transition-colors">
              <span className="material-symbols-outlined text-tertiary-container group-hover:text-white">
                science
              </span>
            </div>
            <span className="text-label-md font-semibold tracking-wider text-on-surface">
              URINE TEST
            </span>
          </div>

          {/* Card 4 */}
          <div className="flex-shrink-0 bg-surface-container-lowest p-5 rounded-xl flex flex-col items-center gap-3 w-40 transition-all hover:translate-y-[-4px] hover:shadow-xl group">
            <div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center group-hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined text-primary-container group-hover:text-white">
                monitor_heart
              </span>
            </div>
            <span className="text-label-md font-semibold tracking-wider text-on-surface">
              FULL BODY
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Split Layout */}
      <section className="h-[700px] flex px-8 pb-12 gap-6 overflow-hidden ">
        {/* <!-- Left Panel: Lab List --> */}
        <div className="w-full lg:w-1/2 overflow-y-auto pr-4 no-scrollbar flex flex-col gap-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex justify-between items-center mb-2 px-2">
            <h3 className="text-title-lg font-headline font-semibold text-on-surface">
              Labs near New York, NY
            </h3>
            <button className="text-primary font-medium flex items-center gap-1 hover:underline">
              <span className="material-symbols-outlined text-sm">
                filter_list
              </span>{" "}
              Filter
            </button>
          </div>
          {/* <!-- Lab Card 1 --> */}
          <div className="bg-surface-container-lowest p-6 rounded-xl flex gap-6 transition-all border border-transparent hover:border-primary/20">
            <div className="w-24 h-24 rounded-lg bg-surface-container overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="clean modern medical laboratory interior with stainless steel equipment and bright clinical lighting"
                src="https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=800&auto=format&fit=crop"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-title-lg font-bold text-on-surface">
                    Precision Diagnostics
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1 bg-secondary/10 px-2 py-0.5 rounded text-secondary text-sm font-bold">
                      <span
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>{" "}
                      4.8
                    </div>
                    <span className="text-label-md text-outline">
                      1.5 km away
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-headline-md font-headline font-extrabold text-primary">
                    ₹45
                  </p>
                  <span className="text-label-md text-outline">
                    Starts from
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[11px] font-bold tracking-tight flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    home
                  </span>{" "}
                  HOME COLLECTION AVAILABLE
                </div>
              </div>
              <div className="mt-6 flex gap-3 pb-3 relative z-10">
                <button className="flex-1 py-3 rounded-xl font-bold text-white bg-[linear-gradient(135deg,#00478d_0%,#005eb8_100%)]">
                  Book Now
                </button>

                <button className="px-6 py-3 rounded-xl bg-surface-container-high text-on-primary-fixed-variant font-bold">
                  View Details
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Lab Card 2 --> */}
          <div className="bg-surface-container-lowest p-6 rounded-xl flex gap-6 transition-all border border-transparent hover:border-primary/20">
            <div className="w-24 h-24 rounded-lg bg-surface-container overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="modern medical lab technician working with digital screens and laboratory instruments in a bright space"
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-title-lg font-bold text-on-surface">
                    City Health Lab
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1 bg-secondary/10 px-2 py-0.5 rounded text-secondary text-sm font-bold">
                      <span
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>{" "}
                      4.6
                    </div>
                    <span className="text-label-md text-outline">
                      2.8 km away
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-headline-md font-headline font-extrabold text-primary">
                    ₹38
                  </p>
                  <span className="text-label-md text-outline">
                    Starts from
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[11px] font-bold tracking-tight flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    home
                  </span>{" "}
                  HOME COLLECTION AVAILABLE
                </div>
              </div>
              <div className="mt-6 flex gap-3 pb-3 relative z-10">
                <button className="flex-1 py-3 rounded-xl font-bold text-white bg-[linear-gradient(135deg,#00478d_0%,#005eb8_100%)]">
                  Book Now
                </button>

                <button className="px-6 py-3 rounded-xl bg-surface-container-high text-on-primary-fixed-variant font-bold">
                  View Details
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Lab Card 3 --> */}
          <div className="bg-surface-container-lowest p-6 rounded-xl flex gap-6 transition-all border border-transparent hover:border-primary/20 opacity-90">
            <div className="w-24 h-24 rounded-lg bg-surface-container overflow-hidden">
              <img
                className="w-full h-full object-cover"
                data-alt="focused scientist in a high-tech medical laboratory background with sterile blue lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqtq7ajyBrG4hySvAZqHu7EPj1pawOt4LKfJHNATgEA7QHakox3UFKKtPKPPti2REjqKgezLsh5Otm7Mcu8uunDQBgeuUH0QWvNWg_Bpm6CmtBgnX6oO2F2E8WfBMT-cGoh8Akerep5pNfEMGixyClHFuKiXQe9ModkkzKSgpfnmz4oSIeIJMefAKOW_mhVQm5y39IjZEH1_nJZWPHjVaa1scQInckO-7gqPsObEPYp0VUjGTwWA--UyUw2Z75YrVjinmCAaTVoLY"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-title-lg font-bold text-on-surface">
                    Metro Genetics
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1 bg-secondary/10 px-2 py-0.5 rounded text-secondary text-sm font-bold">
                      <span
                        className="material-symbols-outlined text-[16px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>{" "}
                      4.9
                    </div>
                    <span className="text-label-md text-outline">
                      3.2 km away
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-headline-md font-headline font-extrabold text-primary">
                    ₹65
                  </p>
                  <span className="text-label-md text-outline">
                    Starts from
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[11px] font-bold tracking-tight flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    home
                  </span>{" "}
                  HOME COLLECTION AVAILABLE
                </div>
              </div>
              <div className="mt-6 flex gap-3 pb-3 relative z-10">
                <button className="flex-1 py-3 rounded-xl font-bold text-white bg-[linear-gradient(135deg,#00478d_0%,#005eb8_100%)]">
                  Book Now
                </button>

                <button className="px-6 py-3 rounded-xl bg-surface-container-high text-on-primary-fixed-variant font-bold">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Right Panel: Map View --> */}
        <div className="hidden lg:block w-1/2 relative rounded-3xl overflow-hidden bg-surface-container-low shadow-sm">
          {/* Map Container */}
          <div className="absolute inset-0 bg-slate-200">
            {/* Background Image */}
            <div
              className="absolute inset-0 opacity-40 mix-blend-multiply bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')",
              }}
            ></div>

            {/* Pin 1 */}
            <div className="absolute top-[30%] left-[40%] group cursor-pointer">
              <div className="relative">
                <div className="bg-primary text-white p-2 rounded-full shadow-lg transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-xl">
                    location_on
                  </span>
                </div>

                <div className="absolute top-[-45px] left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold text-on-surface">
                    Precision Diagnostics
                  </span>
                </div>
              </div>
            </div>

            {/* Pin 2 */}
            <div className="absolute top-[55%] left-[25%] group cursor-pointer">
              <div className="relative">
                <div className="bg-primary text-white p-2 rounded-full shadow-lg transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-xl">
                    location_on
                  </span>
                </div>

                <div className="absolute top-[-45px] left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold text-on-surface">
                    City Health Lab
                  </span>
                </div>
              </div>
            </div>

            {/* Pin 3 */}
            <div className="absolute top-[45%] left-[65%] group cursor-pointer">
              <div className="relative">
                <div className="bg-primary text-white p-2 rounded-full shadow-lg transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-xl">
                    location_on
                  </span>
                </div>

                <div className="absolute top-[-45px] left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold text-on-surface">
                    Metro Genetics
                  </span>
                </div>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-6 right-6 flex flex-col gap-2">
              <button className="bg-white p-3 rounded-xl shadow-md text-on-surface hover:bg-surface-container-low">
                <span className="material-symbols-outlined">add</span>
              </button>

              <button className="bg-white p-3 rounded-xl shadow-md text-on-surface hover:bg-surface-container-low">
                <span className="material-symbols-outlined">remove</span>
              </button>

              <button className="bg-white p-3 rounded-xl shadow-md text-on-surface hover:bg-surface-container-low mt-4">
                <span className="material-symbols-outlined">my_location</span>
              </button>
            </div>

            {/* Bottom Card */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-blue-50/60 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between shadow-2xl ring-1 ring-blue-200/40">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">
                      local_hospital
                    </span>
                  </div>

                  <div>
                    <h5 className="font-bold text-on-surface">12 Labs Found</h5>
                    <p className="text-label-md text-on-surface-variant">
                      Available for collection today
                    </p>
                  </div>
                </div>
                <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-bold">
                  List View
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
