import React from "react";

export default function Counsultation() {
  return (
    <>
      <main className="mt-6">
        <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 z-40 bg-white/70 backdrop-blur-xl flex items-center justify-between px-8 border-b border-slate-100">
          {/* Left Side: Search & Security Badge */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                className="pl-10 pr-4 py-2 bg-slate-100 rounded-full border-none focus:ring-2 focus:ring-blue-500/20 w-80 text-sm transition-all outline-none"
                placeholder="Search patients or medical records..."
                type="text"
              />
            </div>

            <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-100/50">
              <span
                className="material-symbols-outlined text-blue-600 text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
              <span className="text-blue-700 font-bold text-[10px] tracking-wide uppercase">
                Secure &amp; Encrypted
              </span>
            </div>
          </div>

          {/* Right Side: Icons & Actions */}
          <div className="flex items-center space-x-6">
            <div className="flex space-x-2 border-r border-slate-100 pr-6">
              {/* Notifications */}
              <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative group">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>

              {/* Settings */}
              <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>

            {/* Profile / Support */}
            <div className="flex items-center gap-3">
              <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors px-2">
                Support
              </button>
              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-100">
                <img
                  src="https://ui-avatars.com/api/?name=Dr+Chen&background=0284c7&color=fff"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* <!-- Consultation Interface Grid --> */}
        <div className="pt-20 p-6 h-full flex gap-6">
          {/* <!-- Left: Video Call Area (Asymmetric Focus) --> */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="relative flex-1 bg-inverse-surface rounded-xl overflow-hidden shadow-2xl group">
              {/* <!-- Main Patient Video --> */}
              <img
                className="w-full h-full object-cover opacity-90"
                data-alt="middle-aged woman participating in a video call, appearing attentive and calm in a home office setting with natural lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUVLwDWvyqclW56FiaCu4p6uYW66AK9gT7HeM2-aa02BR53cScI8Z0_ZLOaevpCT6-4jIOhfVdMmuTQ5qrH3ikb-1dO1T4v6zfeVsMN1fArPTylPeyr1woWn8hsk52n6QerPJTgftXT3HMjPJRrgg0ZlZ7LKFRjP0n_iVgkMtdBKcgzVDF20WxzpudN25UnVkcLK6DxG0wazz-1YgZwm3JEJ1_Evdyvf2XNu9rocdZdRqJ2eVCUnR1o6fY5XavTRj1tRJOnMYPlp8"
              />
              {/* <!-- Doctor's PIP (Picture-in-Picture) --> */}
              <div className="absolute bottom-6 right-6 w-48 h-64 bg-slate-800 rounded-xl overflow-hidden border-2 border-white/20 shadow-xl">
                <img
                  className="w-full h-full object-cover"
                  data-alt="webcam view of a doctor wearing a headset in a clean professional medical office environment"
                  src="https://thumbs.dreamstime.com/b/young-doctor-16088825.jpg?w=768"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/40 backdrop-blur-md rounded text-[10px] text-white font-medium uppercase tracking-wider">
                  You (Dr. Wilson)
                </div>
              </div>
              {/* <!-- Video Controls Overlay --> */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4 px-6 py-4 bg-black/40 backdrop-blur-2xl rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all">
                  <span className="material-symbols-outlined">mic</span>
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all">
                  <span className="material-symbols-outlined">videocam</span>
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all">
                  <span className="material-symbols-outlined">
                    screen_share
                  </span>
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all">
                  <span className="material-symbols-outlined">more_vert</span>
                </button>
                <div className="w-px h-8 bg-white/20 mx-2"></div>
                <button className="px-6 h-12 flex items-center justify-center rounded-full bg-error text-white font-bold hover:bg-red-600 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">call_end</span>
                  <span>End Call</span>
                </button>
              </div>
              {/* <!-- Call Status Tags --> */}
              <div className="absolute top-6 left-6 flex space-x-3">
                <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
                  <span className="text-white text-xs font-bold font-manrope">
                    REC: 00:14:22
                  </span>
                </div>
                <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                  <span className="material-symbols-outlined text-white text-sm">
                    signal_cellular_alt
                  </span>
                  <span className="text-white text-xs font-bold font-manrope">
                    HD QUALITY
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Patient Profile Snapshot (Quick Card) --> */}
            <div className="bg-surface-container-lowest rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-2xl font-bold">
                    person
                  </span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-on-surface font-manrope">
                    Sarah J. Montgomery
                  </h2>
                  <p className="text-sm text-outline">
                    Patient ID: #MH-92044 • Female, 44y
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface font-semibold text-sm hover:bg-surface-container-highest transition-all">
                  View Full Chart
                </button>
                <button className="px-5 py-2.5 rounded-full bg-primary text-white font-semibold text-sm hover:opacity-90 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">add</span>
                  <span>Add Medical Note</span>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Right Panel: Data & Interaction --> */}
          <div className="w-[420px] flex flex-col gap-6 h-full pb-6">
            {/* <!-- Patient Vitals Bento --> */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-xl flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest">
                    Heart Rate
                  </span>
                  <span className="material-symbols-outlined text-primary text-sm">
                    favorite
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-on-surface font-manrope">
                    72
                  </span>
                  <span className="text-xs text-outline ml-1 font-semibold">
                    BPM
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-secondary font-bold">
                  <span className="material-symbols-outlined text-[10px]">
                    arrow_downward
                  </span>
                  <span>NORMAL</span>
                </div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/10 p-5 rounded-xl flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-error text-[10px] font-bold uppercase tracking-widest">
                    Blood Pressure
                  </span>
                  <span className="material-symbols-outlined text-error text-sm">
                    blood_pressure
                  </span>
                </div>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-on-surface font-manrope">
                    142/90
                  </span>
                  <span className="text-xs text-outline ml-1 font-semibold">
                    mmHg
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-error font-bold">
                  <span className="material-symbols-outlined text-[10px]">
                    arrow_upward
                  </span>
                  <span>ELEVATED</span>
                </div>
              </div>
            </div>
            {/* <!-- Tabs/Section: Medical History & Documents --> */}
            <div className="flex-1 flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden">
              <div className="flex border-b border-surface-variant/30">
                <button className="flex-1 py-4 text-sm font-bold text-primary border-b-2 border-primary">
                  Clinical History
                </button>
                <button className="flex-1 py-4 text-sm font-semibold text-outline hover:text-on-surface-variant">
                  Live Notes
                </button>
                <button className="flex-1 py-4 text-sm font-semibold text-outline hover:text-on-surface-variant">
                  Lab Reports
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* <!-- History Item --> */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-outline">
                      <span className="material-symbols-outlined text-sm">
                        history
                      </span>
                    </div>
                    <div className="w-px flex-1 bg-surface-container-high my-1"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">
                      Recent Episode: Migraine
                    </h4>
                    <p className="text-xs text-outline mt-1 leading-relaxed">
                      Patient reported severe headache with photophobia.
                      Prescribed Sumatriptan 50mg.
                    </p>
                    <span className="text-[10px] font-semibold text-primary mt-2 block">
                      12 OCT 2023
                    </span>
                  </div>
                </div>
                {/* <!-- History Item --> */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-outline">
                      <span className="material-symbols-outlined text-sm">
                        medication
                      </span>
                    </div>
                    <div className="w-px flex-1 bg-surface-container-high my-1"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-on-surface">
                      Medication Change
                    </h4>
                    <p className="text-xs text-outline mt-1 leading-relaxed">
                      Discontinued Atenolol. Commenced Lisinopril 10mg daily for
                      BP management.
                    </p>
                    <span className="text-[10px] font-semibold text-primary mt-2 block">
                      15 SEP 2023
                    </span>
                  </div>
                </div>
                {/* <!-- Lab Result Card --> */}
                <div className="bg-surface-container-low p-4 rounded-lg border border-surface-variant/20">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xs font-bold uppercase tracking-tight text-on-surface-variant">
                      Latest Blood Panel
                    </h4>
                    <span className="material-symbols-outlined text-primary text-sm">
                      file_open
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-outline">Glucose (Fasting)</span>
                      <span className="font-bold text-secondary">92 mg/dL</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-outline">Cholesterol (Total)</span>
                      <span className="font-bold text-error">210 mg/dL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Secure Chat Interface --> */}
            <div className="h-64 flex flex-col bg-surface-container-lowest rounded-xl shadow-sm">
              <div className="px-5 py-3 flex items-center justify-between bg-surface-container-high/50">
                <span className="text-xs font-bold font-manrope text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm fill-icon text-secondary">
                    verified
                  </span>
                  SECURE MESSAGE CHANNEL
                </span>
                <span className="text-[10px] text-outline">
                  Sarah is typing...
                </span>
              </div>
              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                <div className="flex justify-end">
                  <div className="bg-primary text-white text-xs p-3 rounded-2xl rounded-tr-none max-w-[80%]">
                    Hi Sarah, how has your blood pressure been this week?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-surface-container-high text-on-surface text-xs p-3 rounded-2xl rounded-tl-none max-w-[80%]">
                    It's been a bit high in the mornings, around 140/90 like we
                    saw.
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-surface-variant/30 flex items-center gap-2">
                <button className="p-2 text-outline hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">attach_file</span>
                </button>
                <input
                  className="flex-1 bg-surface-container-low border-none rounded-full px-4 py-2 text-xs focus:ring-1 focus:ring-primary"
                  placeholder="Type a secure message..."
                  type="text"
                />
                <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-container transition-all">
                  <span className="material-symbols-outlined text-sm">
                    send
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Contextual FAB (Only for main action in Consultation) --> */}
        <button className="fixed bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-primary to-primary-container text-white rounded-full shadow-[0_20px_40px_rgba(0,71,141,0.3)] flex items-center justify-center hover:scale-105 transition-all group z-50">
          <span className="material-symbols-outlined text-3xl font-light group-hover:rotate-12 transition-transform">
            clinical_notes
          </span>
          <div className="absolute right-full mr-4 bg-inverse-surface text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Generate Session Report
          </div>
        </button>
      </main>
    </>
  );
}
