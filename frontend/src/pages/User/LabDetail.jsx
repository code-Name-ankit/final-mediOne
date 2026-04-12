import React from "react";
import { useNavigate } from "react-router-dom";
export default function LabDetail() {
  return (
    <>
      <main class="pt-24 pb-12 px-8 max-w-screen-2xl mx-auto">
        {/* <!-- Lab Header Section --> */}
        <section class="mb-12">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <span class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <span
                    class="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  Certified Lab
                </span>
                <span class="text-on-surface-variant text-sm flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">near_me</span>
                  1.5km away
                </span>
              </div>
              <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface">
                MediHelp Diagnostics Central
              </h1>
              <div class="flex items-center gap-4">
                <div class="flex items-center bg-surface-container-low px-3 py-1.5 rounded-xl">
                  <span
                    class="material-symbols-outlined text-amber-500 mr-1"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span class="font-bold">4.8</span>
                  <span class="text-on-surface-variant text-sm ml-1">
                    (2.4k reviews)
                  </span>
                </div>
                <p class="text-on-surface-variant font-medium flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">
                    location_on
                  </span>
                  42nd Medical Avenue, Highgate District, London
                </p>
              </div>
            </div>
            <div class="flex gap-3">
              <button class="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-high text-on-primary-fixed-variant font-semibold transition-transform active:scale-95">
                <span class="material-symbols-outlined">call</span>
                Call
              </button>
              <button class="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-high text-on-primary-fixed-variant font-semibold transition-transform active:scale-95">
                <span class="material-symbols-outlined">directions</span>
                Directions
              </button>
            </div>
          </div>
        </section>
        {/* <!-- Main Content Grid --> */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* <!-- Left Column: Details & Tests --> */}
          <div class="lg:col-span-8 space-y-12">
            {/* <!-- About Section --> */}
            <div class="p-8 rounded-[2rem] bg-surface-container-low">
              <h2 class="text-2xl font-bold mb-4 text-on-surface">About Lab</h2>
              <p class="text-on-surface-variant leading-relaxed body-lg">
                MediHelp Diagnostics Central is a flagship facility specializing
                in high-precision molecular diagnostics and radiology. Equipped
                with state-of-the-art Roche instrumentation and NABL-accredited
                protocols, we ensure empathetic care combined with surgical
                accuracy. Our team of board-certified pathologists provides
                detailed insights for every report.
              </p>
              <div class="flex gap-4 mt-6">
                <div class="flex items-center gap-2 text-sm font-medium text-secondary">
                  <span class="material-symbols-outlined">
                    workspace_premium
                  </span>
                  NABL Accredited
                </div>
                <div class="flex items-center gap-2 text-sm font-medium text-secondary">
                  <span class="material-symbols-outlined">health_metrics</span>
                  ISO Certified
                </div>
              </div>
            </div>
            {/* <!-- Search & Filters --> */}
            <div class="space-y-6">
              <div class="flex flex-col md:flex-row gap-4 items-center">
                <div class="relative flex-1 w-full">
                  <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
                    search
                  </span>
                  <input
                    class="w-full pl-12 pr-6 py-4 rounded-full border-none bg-surface-container-lowest shadow-sm focus:ring-2 focus:ring-primary text-on-surface placeholder:text-outline transition-all"
                    placeholder="Search for tests (e.g. CBC, Vitamin D...)"
                    type="text"
                  />
                </div>
                <div class="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
                  <button class="px-5 py-2 rounded-full bg-primary text-on-primary font-medium whitespace-nowrap">
                    All
                  </button>
                  <button class="px-5 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high font-medium whitespace-nowrap transition-colors">
                    Blood
                  </button>
                  <button class="px-5 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high font-medium whitespace-nowrap transition-colors">
                    COVID
                  </button>
                  <button class="px-5 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high font-medium whitespace-nowrap transition-colors">
                    Radiology
                  </button>
                  <button class="px-5 py-2 rounded-full bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high font-medium whitespace-nowrap transition-colors">
                    Health Packages
                  </button>
                </div>
              </div>
              {/* <!-- Test Cards --> */}
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* <!-- Card 1 --> */}
                <div class="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/15 hover:shadow-xl hover:shadow-on-surface/5 transition-all group">
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                      Full Body Checkup
                    </h3>
                    <span class="bg-secondary/10 text-secondary px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                      Best Value
                    </span>
                  </div>
                  <p class="text-sm text-on-surface-variant mb-6 line-clamp-2">
                    Complete health assessment including Lipid, Liver, Kidney,
                    Thyroid profiles and 60+ more parameters.
                  </p>
                  <div class="flex items-center justify-between mt-auto">
                    <div>
                      <span class="text-xs text-outline line-through">
                        $149.00
                      </span>
                      <div class="text-2xl font-extrabold text-on-surface">
                        $89.00
                      </div>
                    </div>
                    <button class="bg-primary px-4 py-2 rounded-xl text-on-primary font-bold flex items-center gap-2 hover:bg-primary-container transition-transform active:scale-95">
                      <span class="material-symbols-outlined text-sm">add</span>
                      Add Test
                    </button>
                  </div>
                </div>
                {/* <!-- Card 2 --> */}
                <div class="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/15 hover:shadow-xl hover:shadow-on-surface/5 transition-all group">
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                      Vitamin D (25-OH)
                    </h3>
                  </div>
                  <p class="text-sm text-on-surface-variant mb-6 line-clamp-2">
                    Analysis of Vitamin D levels essential for bone health and
                    immune system regulation.
                  </p>
                  <div class="flex items-center justify-between mt-auto">
                    <div>
                      <div class="text-2xl font-extrabold text-on-surface">
                        $45.00
                      </div>
                    </div>
                    <div class="flex items-center bg-surface-container-high rounded-xl p-1 gap-2">
                      <button class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-surface-container-highest transition-colors">
                        <span class="material-symbols-outlined text-sm">
                          remove
                        </span>
                      </button>
                      <span class="w-4 text-center font-bold">1</span>
                      <button class="w-8 h-8 rounded-lg flex items-center justify-center bg-primary text-on-primary transition-colors">
                        <span class="material-symbols-outlined text-sm">
                          add
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* <!-- Card 3 --> */}
                <div class="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/15 hover:shadow-xl hover:shadow-on-surface/5 transition-all group">
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                      Diabetes Profile (HbA1c)
                    </h3>
                  </div>
                  <p class="text-sm text-on-surface-variant mb-6 line-clamp-2">
                    Gold standard test to monitor long-term average blood
                    glucose levels over 3 months.
                  </p>
                  <div class="flex items-center justify-between mt-auto">
                    <div>
                      <div class="text-2xl font-extrabold text-on-surface">
                        $32.00
                      </div>
                    </div>
                    <button class="bg-primary px-4 py-2 rounded-xl text-on-primary font-bold flex items-center gap-2 hover:bg-primary-container transition-transform active:scale-95">
                      <span class="material-symbols-outlined text-sm">add</span>
                      Add Test
                    </button>
                  </div>
                </div>
                {/* <!-- Card 4 --> */}
                <div class="p-6 rounded-3xl bg-surface-container-lowest border border-outline-variant/15 hover:shadow-xl hover:shadow-on-surface/5 transition-all group">
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                      CBC (Complete Blood Count)
                    </h3>
                  </div>
                  <p class="text-sm text-on-surface-variant mb-6 line-clamp-2">
                    Standard screening for infections, anemia, and other
                    blood-related conditions.
                  </p>
                  <div class="flex items-center justify-between mt-auto">
                    <div>
                      <div class="text-2xl font-extrabold text-on-surface">
                        $18.00
                      </div>
                    </div>
                    <button class="bg-primary px-4 py-2 rounded-xl text-on-primary font-bold flex items-center gap-2 hover:bg-primary-container transition-transform active:scale-95">
                      <span class="material-symbols-outlined text-sm">add</span>
                      Add Test
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Right Column: Booking Panel --> */}
          <aside class="lg:col-span-4 sticky top-24">
            <div class="bg-surface-container-lowest rounded-[2rem] p-8 shadow-2xl shadow-on-surface/5 border border-outline-variant/10">
              <h2 class="text-2xl font-extrabold mb-6 text-on-surface">
                Your Booking
              </h2>
              {/* <!-- Selected Tests --> */}
              <div class="space-y-4 mb-8 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                <div class="flex justify-between items-center group">
                  <div class="flex-1">
                    <p class="font-semibold text-on-surface text-sm">
                      Vitamin D (25-OH)
                    </p>
                    <p class="text-xs text-on-surface-variant">1 x $45.00</p>
                  </div>
                  <button class="text-error/40 group-hover:text-error transition-colors">
                    <span class="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </div>
              {/* <!-- Home Collection Toggle --> */}
              <div class="flex items-center justify-between p-4 bg-surface-container-low rounded-2xl mb-8">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-primary">
                    home
                  </span>
                  <div>
                    <p class="text-sm font-bold text-on-surface">
                      Home Collection
                    </p>
                    <p class="text-[10px] text-on-surface-variant">
                      Free for orders above $50
                    </p>
                  </div>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input checked="" class="sr-only peer" type="checkbox" />
                  <div class="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>
              {/* <!-- Date & Time Selection --> */}
              <div class="space-y-4 mb-8">
                <label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                  <span class="material-symbols-outlined text-base">
                    calendar_month
                  </span>
                  Schedule Appointment
                </label>
                <div class="grid grid-cols-4 gap-2">
                  <button class="flex flex-col items-center py-2 rounded-xl bg-primary text-on-primary">
                    <span class="text-[10px] uppercase opacity-80">Mon</span>
                    <span class="font-bold">22</span>
                  </button>
                  <button class="flex flex-col items-center py-2 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors">
                    <span class="text-[10px] uppercase text-on-surface-variant">
                      Tue
                    </span>
                    <span class="font-bold">23</span>
                  </button>
                  <button class="flex flex-col items-center py-2 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors">
                    <span class="text-[10px] uppercase text-on-surface-variant">
                      Wed
                    </span>
                    <span class="font-bold">24</span>
                  </button>
                  <button class="flex flex-col items-center py-2 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-colors">
                    <span class="text-[10px] uppercase text-on-surface-variant">
                      Thu
                    </span>
                    <span class="font-bold">25</span>
                  </button>
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <button class="py-2 text-xs font-bold rounded-lg border-2 border-primary text-primary">
                    08:00 AM
                  </button>
                  <button class="py-2 text-xs font-bold rounded-lg bg-surface-container-low text-on-surface-variant">
                    10:30 AM
                  </button>
                  <button class="py-2 text-xs font-bold rounded-lg bg-surface-container-low text-on-surface-variant">
                    02:00 PM
                  </button>
                </div>
              </div>
              {/* <!-- Address Input --> */}
              <div class="space-y-4 mb-8">
                <label class="text-xs font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                  <span class="material-symbols-outlined text-base">
                    pin_drop
                  </span>
                  Collection Address
                </label>
                <input
                  class="w-full bg-surface-container-low border-none rounded-xl py-3 text-sm font-medium focus:ring-primary"
                  type="text"
                  value="Home: 124 Silverwood Dr, Highgate"
                />
              </div>
              {/* <!-- Total & Actions --> */}
              <div class="pt-6 border-t border-outline-variant/20 space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-on-surface-variant font-medium">
                    Subtotal
                  </span>
                  <span class="font-bold">$45.00</span>
                </div>
                <div class="flex justify-between items-center text-secondary">
                  <span class="font-medium">Home Collection</span>
                  <span class="font-bold">FREE</span>
                </div>
                <div class="flex justify-between items-center pt-2">
                  <span class="text-lg font-bold">Total Payable</span>
                  <span class="text-2xl font-extrabold text-primary">
                    $45.00
                  </span>
                </div>
                <div class="flex flex-col gap-3 pt-4">
                  <button class="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 transition-transform active:scale-[0.98]">
                    Proceed to Payment
                  </button>
                  <button class="w-full text-on-surface-variant py-2 font-semibold hover:text-primary transition-colors">
                    Clear Selection
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Assistance Card --> */}
            <div class="mt-6 p-6 rounded-[2rem] bg-secondary/5 border border-secondary/10 flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
                <span class="material-symbols-outlined">support_agent</span>
              </div>
              <div>
                <p class="font-bold text-on-surface leading-none">
                  Need Help Booking?
                </p>
                <p class="text-xs text-on-surface-variant mt-1">
                  Chat with our medical experts
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
