import React from "react";

export default function Prescriptions() {
  return (
    <>
      <div class="mt-16">
        {/* <!-- Page Header --> */}
        <div class="mb-10 flex justify-between items-end">
          <div>
            <span class="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-2 block">
              Prescription Management
            </span>
            <h2 class="text-4xl font-headline font-bold tracking-tight text-on-surface">
              Clinical Prescriptions
            </h2>
          </div>
          <div class="flex gap-3">
            <button class="px-6 py-3 bg-surface-container-high text-on-primary-fixed-variant rounded-xl font-semibold text-sm transition-all hover:bg-surface-container-highest">
              Prescription History
            </button>
            <button class="px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
              <span class="material-symbols-outlined text-sm" data-icon="add">
                add
              </span>
              New Template
            </button>
          </div>
        </div>

        {/* <!-- Dashboard Bento Grid Layout --> */}
        <div class="grid grid-cols-12 gap-6">
          {/* <!-- Left Column: Creation Form (Asymmetric Span) --> */}
          <div class="col-span-12 lg:col-span-7 space-y-6">
            <div class="bg-surface-container-lowest rounded-3xl p-8 shadow-sm">
              <div class="flex items-center gap-3 mb-8">
                <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                  <span
                    class="material-symbols-outlined text-on-secondary-container"
                    data-icon="edit_note"
                  >
                    edit_note
                  </span>
                </div>
                <h3 class="text-xl font-headline font-bold">
                  Create Digital Prescription
                </h3>
              </div>
              <form class="space-y-6">
                <div class="grid grid-cols-2 gap-6">
                  <div class="col-span-2">
                    <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Medicine Name (Auto-suggest)
                    </label>
                    <div class="relative">
                      <input
                        class="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all font-body text-sm"
                        type="text"
                        value="Amoxicillin 500mg"
                      />
                      <div class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-secondary">
                        <span
                          class="material-symbols-outlined text-sm"
                          data-icon="check_circle"
                        >
                          check_circle
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Dosage
                    </label>
                    <select class="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all font-body text-sm appearance-none">
                      <option>1 Tablet</option>
                      <option>2 Tablets</option>
                      <option>5ml Spoon</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Frequency
                    </label>
                    <select class="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all font-body text-sm appearance-none">
                      <option>Twice a day (BID)</option>
                      <option>Three times a day (TID)</option>
                      <option>Once daily (QD)</option>
                    </select>
                  </div>
                  <div class="col-span-2">
                    <label class="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Special Instructions
                    </label>
                    <textarea
                      class="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all font-body text-sm"
                      placeholder="e.g., Take after meals, avoid dairy..."
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div class="pt-4 flex items-center justify-between">
                  <div class="flex items-center gap-2 text-slate-500">
                    <span
                      class="material-symbols-outlined text-xl"
                      data-icon="verified_user"
                    >
                      verified_user
                    </span>
                    <span class="text-xs">
                      Secure digital signature applied
                    </span>
                  </div>
                  <button
                    class="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                    type="button"
                  >
                    Generate Prescription
                  </button>
                </div>
              </form>
            </div>
            {/* <!-- Recent List --> */}
            <div class="bg-surface-container-lowest rounded-3xl p-8 shadow-sm">
              <div class="flex items-center justify-between mb-8">
                <h3 class="text-xl font-headline font-bold">Recent Issued</h3>
                <button class="text-primary text-xs font-bold uppercase tracking-wider hover:underline">
                  View All
                </button>
              </div>
              <div class="space-y-4">
                {/* <!-- Item 1 --> */}
                <div class="flex items-center justify-between p-4 rounded-2xl hover:bg-surface-container-low transition-colors group">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        class="w-full h-full object-cover"
                        data-alt="close up headshot of a woman with curly hair looking directly at camera in soft studio lighting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh_-qKT5vlAyi3OF31jkNFjAwy2jzwTFPnrhFeXdlPirGV5uys3QCSDHpBcyB-I6QloRlYjwyOXsOqxE6yaUQ-oy3NVnBPrvafNQMbf3nbp73Wly0AycpY6qFMMr5XLEt1zEjQV4N85Ntab-1iwnKOUXvOPowAcIf10xB6i8pWdGZmv2cSmVN0xJaNue3U8SUOizFPfUpe95emgBg_SCj0nJwlaF7y7Gp-UbewJn3U5htfk-oOCTBWxTJYwXRkRyyppN_fMu6WiFY"
                      />
                    </div>
                    <div>
                      <p class="font-bold text-sm">Elena Rodriguez</p>
                      <p class="text-xs text-slate-500">
                        Lipitor • 10mg • 30 Days
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center gap-6">
                    <div class="text-right">
                      <p class="text-xs font-bold text-slate-400">ISSUED</p>
                      <p class="text-[10px] text-slate-500">2 hours ago</p>
                    </div>
                    <span
                      class="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors cursor-pointer"
                      data-icon="more_vert"
                    >
                      more_vert
                    </span>
                  </div>
                </div>
                {/* <!-- Item 2 --> */}
                <div class="flex items-center justify-between p-4 rounded-2xl hover:bg-surface-container-low transition-colors group">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        class="w-full h-full object-cover"
                        data-alt="headshot of a mature man with glasses and a thoughtful expression on a neutral background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC02YzBAzeCFWlfvwmLfkRA-CVJrSfMvlaLKNqh7N3447gfh1c9vxjLDty1tb1u08ELdEO8_azyJlINJ6n7CYl5FzdmtNbemED0dAliJUr8fbse4229zdSInKBv3BI0b9hiyPbZCtcB3SnCPbXCDwbAoftbCSCJBe4_XIM7-jMlHvQYdmLfrA1fT0OCHtY_ODrPp7F3lnNATxY82QTiMtFjXpZ8oSbdJAegVhTxb8z6XxNv_ce0XIGNEoMGQAYQo9--rZCfbAY-vXk"
                      />
                    </div>
                    <div>
                      <p class="font-bold text-sm">Marcus Chen</p>
                      <p class="text-xs text-slate-500">
                        Metformin • 500mg • 90 Days
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center gap-6">
                    <div class="text-right">
                      <p class="text-xs font-bold text-slate-400">ISSUED</p>
                      <p class="text-[10px] text-slate-500">Oct 24, 2023</p>
                    </div>
                    <span
                      class="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors cursor-pointer"
                      data-icon="more_vert"
                    >
                      more_vert
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Column: Preview & Actions (The Glass Preview) --> */}
          <div class="col-span-12 lg:col-span-5">
            <div class="sticky top-24 space-y-6">
              <div class="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10">
                {/* <!-- Prescription Header Decorative --> */}
                <div class="h-3 bg-gradient-to-r from-primary to-secondary"></div>
                <div class="p-8">
                  <div class="flex justify-between items-start mb-10">
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                        <span
                          class="material-symbols-outlined text-primary text-lg"
                          data-icon="medical_information"
                        >
                          medical_information
                        </span>
                      </div>
                      <span class="font-headline font-bold text-sm tracking-tight">
                        MediHelp Digital Rx
                      </span>
                    </div>
                    <div class="text-right">
                      <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        Prescription ID
                      </p>
                      <p class="text-xs font-mono font-medium text-slate-600">
                        #RX-992-041
                      </p>
                    </div>
                  </div>
                  {/* <!-- Patient Profile Mini --> */}
                  <div class="mb-8 p-4 bg-surface-container-low rounded-2xl flex items-center gap-4">
                    <div class="w-14 h-14 rounded-xl overflow-hidden">
                      <img
                        class="w-full h-full object-cover"
                        data-alt="portrait of a woman with light skin and dark hair smiling gently, clinical white background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsncwZjESYyCQfj0lTVDb0TCeBkfsbbfIIk0KK8TgqYoF-8fGdFWzHjPR2_qgrS5SfPF500j-gG2Xv3mULFpUS4FGxER2WES9QBYhFRGaV1EKnHW1GVw7G9VP67mhRbsAdeIGkgzLIIZm6s7ZJ2BUS1gHC-jR21mfHsL9Cg_NQKw3cYVoJrm5v45Dnnq8wLjISe6bUgKVbv2vD4jo2CI1U0EgisM21ooPh2LcLOwJfBRURthdtOpDwOkwmUviHsAVRqG2bVid24TU"
                      />
                    </div>
                    <div>
                      <h4 class="font-bold text-lg">Sarah Jenkins</h4>
                      <p class="text-xs text-slate-500">
                        Age: 29 • Weight: 64kg • Blood: O+
                      </p>
                    </div>
                  </div>
                  {/* <!-- Prescription Content --> */}
                  <div class="space-y-6 mb-10">
                    <div class="border-l-4 border-primary pl-4">
                      <h5 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Medication
                      </h5>
                      <p class="text-xl font-bold text-on-surface">
                        Amoxicillin 500mg
                      </p>
                      <p class="text-sm text-slate-600 mt-1">
                        Oral Tablet • Antibiotic
                      </p>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="p-3 rounded-xl bg-slate-50">
                        <p class="text-[10px] font-bold text-slate-400 uppercase mb-1">
                          Dosage
                        </p>
                        <p class="text-sm font-semibold">1 Tablet</p>
                      </div>
                      <div class="p-3 rounded-xl bg-slate-50">
                        <p class="text-[10px] font-bold text-slate-400 uppercase mb-1">
                          Frequency
                        </p>
                        <p class="text-sm font-semibold">Every 8 Hours</p>
                      </div>
                    </div>
                    <div>
                      <h5 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Instructions
                      </h5>
                      <p class="text-sm text-slate-600 leading-relaxed">
                        Take with a full glass of water. Continue for full
                        10-day course even if symptoms disappear. Do not skip
                        doses.
                      </p>
                    </div>
                  </div>
                  {/* <!-- Digital Signature Area --> */}
                  <div class="flex justify-between items-end">
                    <div>
                      <p class="text-[10px] font-bold text-slate-400 uppercase mb-4">
                        Physician Signature
                      </p>
                      <div class="italic font-['Georgia'] text-2xl text-blue-900/40 select-none">
                        Dr. Julian Vance
                      </div>
                      <div class="h-px w-32 bg-slate-200 mt-2"></div>
                    </div>
                    <div class="w-16 h-16 opacity-30">
                      <span
                        class="material-symbols-outlined text-6xl"
                        data-icon="qr_code_2"
                      >
                        qr_code_2
                      </span>
                    </div>
                  </div>
                </div>

                {/* <!-- Action Footer --> */}
                <div class="bg-surface-container p-6 flex flex-col gap-3">
                  <button class="w-full py-4 bg-primary text-on-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-lg shadow-primary/20">
                    <span
                      class="material-symbols-outlined text-lg"
                      data-icon="send"
                    >
                      send
                    </span>
                    Share with Patient
                  </button>
                  <div class="flex gap-3">
                    <button class="flex-1 py-3 bg-surface-container-lowest text-on-surface font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors border border-outline-variant/30">
                      <span
                        class="material-symbols-outlined text-lg"
                        data-icon="download"
                      >
                        download
                      </span>
                      Download PDF
                    </button>
                    <button class="px-4 py-3 bg-surface-container-lowest text-on-surface rounded-xl flex items-center justify-center hover:bg-slate-50 transition-colors border border-outline-variant/30">
                      <span
                        class="material-symbols-outlined text-lg"
                        data-icon="print"
                      >
                        print
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/5 rounded-3xl p-6 border border-secondary/10 flex gap-4">
                {/* Info Icon with Fill variation */}
                <span
                  className="material-symbols-outlined text-secondary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  info
                </span>

                <div>
                  <p class="text-sm font-bold text-secondary">
                    Drug Interaction Warning
                  </p>
                  <p class="text-xs text-on-surface-variant mt-1">
                    This medication has no known conflicts with the patient's
                    existing records for Metformin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
