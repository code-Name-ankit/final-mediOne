import React from "react";

export default function Doctor() {
  return (
    <>
      <section className="max-w-7xl mx-auto mb-10 mt-24">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-headline tracking-tight text-on-surface mb-2">
            Find Your Specialist
          </h1>
          <p className="text-on-surface-variant font-body">
            Book world-class healthcare with 24/7 availability.
          </p>
        </div>
        <div className="bg-surface-container-low rounded-3xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Glass Search Bar  */}
            <div className="md:col-span-2 relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest rounded-full border-none focus:ring-2 focus:ring-primary shadow-sm transition-all text-body-lg"
                placeholder="Search doctors, specialties..."
                type="text"
              />
            </div>
            <div className="relative">
              <select className="w-full px-6 py-4 bg-surface-container-lowest rounded-full border-none appearance-none focus:ring-2 focus:ring-primary shadow-sm text-body-lg">
                <option>Specialization</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Pediatrics</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
                expand_more
              </span>
            </div>
            <div class="relative">
              <select class="w-full px-6 py-4 bg-surface-container-lowest rounded-full border-none appearance-none focus:ring-2 focus:ring-primary shadow-sm text-body-lg">
                <option>Experience</option>
                <option>5+ Years</option>
                <option>10+ Years</option>
                <option>15+ Years</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">
                expand_more
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="px-6 py-2 rounded-full bg-primary-container text-on-primary-container font-label text-xs tracking-wider uppercase flex items-center gap-2">
              Available Today{" "}
              <span className="material-symbols-outlined text-sm">check</span>
            </button>
            <button class="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label text-xs tracking-wider uppercase hover:bg-outline-variant/20 transition-colors">
              Video Consultation
            </button>
            <button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-label text-xs tracking-wider uppercase hover:bg-outline-variant/20 transition-colors">
              Clinic Visit
            </button>
            <button className="ml-auto text-primary font-semibold text-sm flex items-center gap-1 hover:underline">
              Clear all filters
            </button>
          </div>
        </div>
      </section>

      {/* <!-- Doctor List & Featured Grid --> */}
      <section className="max-w-7xl mx-auto mb-10 mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        {/* */}
        <div className="lg:col-span-2 space-y-6">
          {/* */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-shadow duration-300">
            <div className="relative shrink-0 mx-auto sm:mx-0">
              <img
                className="w-32 h-40 rounded-2xl object-cover"
                alt="Dr. Sarah Jenkins"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM7OwH_MmnKT6qkKjYEimR4uXFizEtHBxy4bAys07gflcpaiM1g1WLvVSuSSyiyYU_0YSxKf9H-aFVhdI1f9jzL8rD9CjFWVMCKqHMTUS5rCPv6r2m7v6s9XZ_jDnDHLndKtka0iZ6Q65T6Tr04svCt2xH3fvhVjDLDITGoTZiWrK482LrxWOVsA2pMOz6sBdmkRfEDP-9jn2pCgYiEJt4KB_UyGBovSUaS-xnZ0m6HNjb3AtgHKSZkHN4xaIAgAJDExebwsjbKgU"
              />
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1 rounded-full border-4 border-white">
                <span
                  className="material-symbols-outlined text-sm block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-tighter">
                      Online
                    </span>
                    <span className="text-blue-600 text-xs font-semibold">
                      Cardiologist
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Dr. Sarah Jenkins
                  </h3>
                  <p className="text-sm text-slate-500">
                    MBBS, MD - Cardiology | 12 Years Exp.
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end text-amber-500 font-bold">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span>4.9</span>
                  </div>
                  <p className="text-xs text-slate-400">(1.2k Reviews)</p>
                </div>
              </div>

              <div className="flex items-center gap-6 py-4 border-y border-slate-50 mb-4">
                <div>
                  <p className="text-[10px] uppercase text-slate-400 font-bold">
                    Consultation Fee
                  </p>
                  <p className="text-lg font-bold text-slate-900">₹85.00</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-slate-400 font-bold">
                    Next Slot
                  </p>
                <p class="text-sm font-semibold text-secondary">Today, 04:30 PM</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-sm shadow-md hover:opacity-90 transition-opacity">
                  Consult Now
                </button>
                <button className="flex-1 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row gap-6 hover:shadow-lg transition-shadow duration-300">
            <div className="relative shrink-0 mx-auto sm:mx-0">
              <img
                className="w-32 h-40 rounded-2xl object-cover"
                alt="Dr. Michael Chen"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRvXI7P1pUfGpn41le4X_Q2gxd_E2zqZwItkPdeTvFsdgMGbZO0gISCDmC06_j89lrMrL1rOY2Vj77_oYTSXcf5tT0E9Q3MkdRwM5l6Q3VlNhfq0Jy5pBZ2qy_C0jZIL2uQZnDXX9wsd8KkFZFNQYr1Yktz7n1kfrHg8PPSFd5SL43Wyr2KbSr3yYULKIUtABRxAIlMnfSOOqvfiIfpqa3R6Icecj2KT-VrYrFNhHxW-gEJmo2ajIJvK-A2AfPO8SsrL_jEvkyaC0"
              />
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1 rounded-full border-4 border-white">
                <span
                  className="material-symbols-outlined text-sm block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-tighter">
                      Away
                    </span>
                    <span className="text-blue-600 text-xs font-semibold">
                      Dermatologist
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Dr. Michael Chen
                  </h3>
                  <p className="text-sm text-slate-500">
                    MD, FAAD - Dermatology | 8 Years Exp.
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end text-amber-500 font-bold">
                    <span
                      className="material-symbols-outlined text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span>4.7</span>
                  </div>
                  <p className="text-xs text-slate-400">(850 Reviews)</p>
                </div>
              </div>

              <div className="flex items-center gap-6 py-4 border-y border-slate-50 mb-4">
                <div>
                  <p className="text-[10px] uppercase text-slate-400 font-bold">
                    Consultation Fee
                  </p>
                  <p className="text-lg font-bold text-slate-900">₹70.00</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase text-slate-400 font-bold">
                    Next Slot
                  </p>
                <p class="text-sm font-semibold text-primary">Tomorrow, 10:00 AM</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-sm shadow-md hover:opacity-90 transition-opacity">
                  Consult Now
                </button>
                <button className="flex-1 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* */}
        <div className="space-y-8">
          {/* */}
          <div className="bg-slate-950 rounded-[2rem] p-1 overflow-hidden relative group shadow-2xl">
            <div className="bg-slate-900 rounded-[1.8rem] h-[450px] relative overflow-hidden flex flex-col">
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/40 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-50 animate-pulse bg-emerald-500"></span>
                <span className="text-[10px] text-white font-bold uppercase tracking-widest">
                  Secure HD Link
                </span>
              </div>

              <div className="flex-1 relative">
                <img
                  className="w-full h-full object-cover opacity-80"
                  data-alt="view of a professional doctor on a video call from a patient perspective in a high-quality telemedicine interface"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIn-sjn6nfws4h9bIQSQN7ixAw7RfN3mbMRpbVyTTKnakYDQAsrs3yVTMTB4cYiZfV85dkDJwrsrI5taFmpLOI6HSHZMqzaUkaWjKDjeqa96o-VyRGOAP1OlgIbL_FlxjiysU6P62RxKpGlI9U_1mkXlUrIige8yx78QFYOUFp93V7S1P4mEn1xQz1nTSEt7QN57uyoqum12OobMuwyeRvEj0XUHh2XALbTO-_x3udYiNHS5fAH-ig3eBIwXIsjwprIvLR8VoJMNM"
                />
                {/* <!-- User Preview --> */}
                <div className="absolute bottom-4 right-4 w-28 h-36 rounded-xl border-2 border-white/20 overflow-hidden shadow-2xl">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="self-view of a patient in a small video window during a medical consultation"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRgaFT9_8OEB84hjS0FmzujP_W0sOzTwgZFlNmjV_B6AMa_6ySlkdRDS6MYxJUHqyni4cFnU6KnOzwkpaob_OW-PAHbCfd7flqoG2xlB0GSlG0FUN-XmiSwQlSEPVNJZsO08K7bAB3RppVp_2GLy1ygSvFIQp3NKg3Y2m0v8DYay5t11S-Sg1qUOemyXq4B-_xboB9qBqc1uT2Iaz4P80CexnpdWPe5CWargnhgxb2WkS995qbmE2C0Ol0NxQjl747otjqB2JctRg"
                  />
                </div>
                {/* <!-- Consultation Status --> */}
                {/* <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl text-center border border-white/20">
                    <p className="text-white text-xs mb-1">Waiting for Doctor...</p>
                    <p class="text-white/60 text-[10px]">
                      Session starting in 02:45
                    </p>
                  </div>
                </div> */}
              </div>

              <div className="h-20 bg-slate-800/50 backdrop-blur flex items-center justify-center gap-4 px-6">
                <button className="w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <span className="material-symbols-outlined text-xl">mic</span>
                </button>
                <button className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    call_end
                  </span>
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    videocam
                  </span>
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-700 text-white flex items-center justify-center hover:bg-slate-600 transition-colors">
                  <span className="material-symbols-outlined text-xl">
                    chat
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <span className="material-symbols-outlined block">
                  shield_lock
                </span>
              </div>
              <h4 className="font-bold text-slate-900">Privacy & Security</h4>
            </div>
            <ul className="space-y-3">
              {[
                "End-to-end encrypted consultations and medical records.",
                "100% Verified medical professionals with global certifications.",
                "HIPAA & GDPR compliant data protection.",
              ].map((text, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed"
                >
                  <span className="material-symbols-outlined text-emerald-500 text-base">
                    verified_user
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="font-bold text-xl mb-2">Need Help Now?</h4>
              <p className="text-white/80 text-sm mb-4">
                Connect with an emergency physician in under 60 seconds.
              </p>
              <button className="w-full py-3 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:bg-blue-50 transition-colors">
                Start Urgent Call
              </button>
            </div>
            <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-white/10 text-[120px] rotate-12 pointer-events-none group-hover:scale-110 transition-transform">
              emergency_home
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
