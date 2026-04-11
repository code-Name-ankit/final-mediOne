import React from "react";

export default function Report() {
  return (
    <>
      <div className=" mt-16">
        {/* <!-- Page Header --> */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-on-surface font-headline">
              Report Management
            </h2>
            <p className="text-on-surface-variant font-body mt-1">
              Review, process, and finalize patient laboratory results.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-high text-on-primary-fixed-variant font-semibold rounded-xl hover:bg-surface-container-highest transition-all active:scale-95">
              <span
                className="material-symbols-outlined text-xl"
                data-icon="filter_list"
              >
                filter_list
              </span>
              Filter View
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-white font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95">
              <span
                className="material-symbols-outlined text-xl"
                data-icon="upload_file"
              >
                upload_file
              </span>
              Bulk Upload
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stat Card 1 */}
          <div className="bg-surface-container-low p-6 rounded-3xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  biotech
                </span>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full uppercase tracking-widest">
                Live Updates
              </span>
            </div>
            <div>
              <p className="text-4xl font-black text-slate-800">14</p>
              <p className="text-sm font-semibold text-slate-400">
                Samples Processing
              </p>
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-surface-container-low p-6 rounded-3xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
                <span
                  className="material-symbols-outlined"
                  data-icon="pending_actions"
                >
                  pending_actions
                </span>
              </div>
              <span className="px-3 py-1 bg-error-container text-on-error-container text-[10px] font-bold rounded-full uppercase tracking-widest">
                Urgent
              </span>
            </div>
            <div>
              <p className="text-4xl font-extrabold font-headline text-on-surface">
                08
              </p>
              <p className="text-sm font-medium text-outline">Pending Approvals</p>
            </div>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-surface-container-low p-6 rounded-3xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-secondary-fixed flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" data-icon="verified">
                  verified
                </span>
              </div>
              <span className="px-3 py-1 bg-surface-container-high text-outline text-[10px] font-bold rounded-full uppercase tracking-widest">
                Today
              </span>
            </div>
            <div>
              <p className="text-4xl font-extrabold font-headline text-on-surface">
                142
              </p>
              <p className="text-sm font-medium text-outline">Reports Released</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          {/* --- LEFT SIDE: QUEUE READY (4 Columns) --- */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-xl font-bold tracking-tight text-slate-800">
                Queue Ready
              </h3>
              <span className="text-[10px] font-bold text-blue-600 px-2 py-1 bg-blue-50 rounded-lg uppercase">
                4 Items
              </span>
            </div>

            {/* Upload Drop Zone Card */}
            <div className="bg-white p-8 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-4 hover:bg-slate-50 transition-all cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-3xl text-blue-600">
                  cloud_upload
                </span>
              </div>
              <div>
                <p className="font-bold text-slate-700">
                  Drop clinical PDF here
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Files automatically link by Patient ID
                </p>
              </div>
            </div>

            {/* Small Queue List */}
            <div className="space-y-3">
              {/* PDF Item 1 */}
              <div className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-slate-100 shadow-sm group">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                  <span className="material-symbols-outlined">
                    picture_as_pdf
                  </span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-bold text-slate-700 truncate">
                    HEM_7721_Report.pdf
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium tracking-tight">
                    942 KB • Waiting for Link
                  </p>
                </div>
                <button className="material-symbols-outlined text-slate-300 hover:text-red-500 transition-colors">
                  close
                </button>
              </div>

              {/* PDF Item 2 */}
              <div className="bg-white p-4 rounded-2xl flex items-center gap-4 border border-slate-100 shadow-sm group">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                  <span className="material-symbols-outlined">
                    picture_as_pdf
                  </span>
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-bold text-slate-700 truncate">
                    CMP_9021_Full.pdf
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium tracking-tight">
                    1.2 MB • Waiting for Link
                  </p>
                </div>
                <button className="material-symbols-outlined text-slate-300 hover:text-red-500 transition-colors">
                  close
                </button>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: PATIENT LIST & WORKFLOW (8 Columns) --- */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm">
              <div className="p-8 border-b border-slate-50 flex flex-col md:flex-row justify-between md:items-center gap-4">
                <h3 className="text-xl font-bold text-slate-800">
                  Recent Lab Sessions
                </h3>
                <div className="flex gap-2">
                  <button className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-[11px] font-bold">
                    All
                  </button>
                  <button className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-400 text-[11px] font-bold hover:bg-slate-100 transition-colors">
                    Pending
                  </button>
                  <button className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-400 text-[11px] font-bold hover:bg-slate-100 transition-colors">
                    In-Review
                  </button>
                </div>
              </div>

              {/* Custom Table Header */}
              <div className="grid grid-cols-12 px-8 py-4 bg-slate-50/50 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <div className="col-span-4">Patient &amp; Test ID</div>
                <div className="col-span-4 text-center md:text-left">
                  Workflow Status
                </div>
                <div className="col-span-4 text-right">Actions</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-slate-50">
                {/* Row 1: Ready to Upload */}
                <div className="grid grid-cols-12 px-8 py-6 items-center hover:bg-slate-50/50 transition-colors group">
                  <div className="col-span-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-sm">
                      JD
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 leading-tight">
                        James Dalton
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        ID: MH-2940 • CBC Panel
                      </p>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full relative overflow-hidden">
                        <div
                          className="absolute inset-0 bg-emerald-500 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase">
                        Ready
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1 font-medium italic">
                      Ready for Final PDF Upload
                    </p>
                  </div>
                  <div className="col-span-4 flex justify-end">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-blue-100 transition-all active:scale-95">
                      <span className="material-symbols-outlined text-sm">
                        upload
                      </span>
                      Upload Report
                    </button>
                  </div>
                </div>

                {/* Row 2: Processing */}
                <div className="grid grid-cols-12 px-8 py-6 items-center hover:bg-slate-50/50 transition-colors group">
                  <div className="col-span-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-600 text-sm">
                      EM
                    </div>
                    <div>
                      <p className="font-bold text-slate-700 leading-tight">
                        Elena Martinez
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        ID: MH-3011 • Lipid Profile
                      </p>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full relative overflow-hidden">
                        <div
                          className="absolute inset-0 bg-blue-500 rounded-full"
                          style={{ width: "66%" }}
                        ></div>
                      </div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase">
                        Processing
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1 font-medium italic">
                      Centrifuge Completed • Analysing
                    </p>
                  </div>
                  <div className="col-span-4 flex justify-end">
                    <button className="px-4 py-2 bg-slate-100 text-slate-400 text-[11px] font-bold rounded-xl flex items-center gap-2 cursor-not-allowed">
                      <span className="material-symbols-outlined text-sm">
                        lock
                      </span>
                      Review Data
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer link */}
              <div className="p-6 bg-slate-50/30 flex justify-center border-t border-slate-50">
                <button className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline">
                  View Archive
                  <span className="material-symbols-outlined text-sm">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Quick Action Contextual Banner --> */}
        <section className="bg-gradient-to-r from-on-primary-fixed-variant to-primary rounded-[2.5rem] p-8 relative overflow-hidden text-white shadow-2xl shadow-primary/20 mt-6">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <span
                  className="material-symbols-outlined text-4xl"
                  data-icon="security"
                >
                  security
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline">
                  Compliance Check: HIPAA Enabled
                </h3>
                <p className="text-primary-fixed text-sm">
                  All uploaded reports are encrypted at rest and during transit.
                  Secure PDF signing active.
                </p>
              </div>
            </div>
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-2xl hover:scale-105 transition-transform active:scale-95">
              Lab Audit Trail
            </button>
          </div>
          {/* <!-- Abstract visual element --> */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute right-40 -bottom-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </section>


      </div>
    </>
  );
}
