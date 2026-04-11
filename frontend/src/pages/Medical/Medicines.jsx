// src/pages/medical/Medicines.jsx
import React from "react";

const Medicines = () => {
  return (
    <>
      {/* <!-- Header Section with Asymmetry --> */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-20">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">
            Inventory Control
          </span>
          <h2 className="font-headline text-5xl font-bold tracking-tight text-on-surface leading-tight">
            Medicines
            <br />
            Management
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-6 py-3 bg-surface-container-high text-on-primary-fixed-variant font-semibold rounded-xl hover:bg-surface-container-highest transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">download</span>
            Export Report
          </button>
          <button className="px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">add</span>
            Add Medicine
          </button>
        </div>
      </div>

      {/* <!-- Bento Grid Stats --> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-7">
        <div className="col-span-1 bg-surface-container-low p-6 rounded-3xl space-y-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">pill</span>
          </div>
          <div>
            <p className="text-label-md font-medium text-outline uppercase tracking-wider">
              Total SKU
            </p>
            <h4 className="text-4xl font-headline font-bold text-on-surface">
              1,284
            </h4>
          </div>
          <p className="text-xs text-secondary flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">trending_up</span>{" "}
            +12 new this month
          </p>
        </div>
        <div className="col-span-1 bg-surface-container-low p-6 rounded-3xl space-y-4">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-error">
            <span className="material-symbols-outlined">warning</span>
          </div>
          <div>
            <p className="text-label-md font-medium text-outline uppercase tracking-wider">
              Out of Stock
            </p>
            <h4 className="text-4xl font-headline font-bold text-on-surface">18</h4>
          </div>
          <p className="text-xs text-error flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">priority_high</span>{" "}
            Urgent restock needed
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 bg-primary text-white p-6 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary-fixed/80 mb-1">
                Inventory Valuation
              </p>
              <h4 className="text-4xl font-headline font-bold">$142,500.00</h4>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-primary bg-slate-300"></div>
                <div className="w-8 h-8 rounded-full border-2 border-primary bg-slate-400"></div>
                <div className="w-8 h-8 rounded-full border-2 border-primary bg-slate-500"></div>
              </div>
              <p className="text-xs text-primary-fixed">Monitored by 3 Suppliers</p>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <span className="material-symbols-outlined text-[160px]">payments</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 mt-6">
        {/* Table Header / Filters */}
        <div className="p-6 flex items-center justify-between border-b border-slate-50">
          <div className="flex gap-4">
            <button className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-md shadow-blue-100 transition-all">
              All Medicines
            </button>
            <button className="px-5 py-2 text-slate-500 rounded-full text-sm font-medium hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
              Antibiotics
            </button>
            <button className="px-5 py-2 text-slate-500 rounded-full text-sm font-medium hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
              Cardiology
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-400 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-all border border-slate-100">
              <span className="material-symbols-outlined text-xl">
                filter_list
              </span>
            </button>
            <button className="p-2 text-slate-400 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-all border border-slate-100">
              <span className="material-symbols-outlined text-xl">sort</span>
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-8 py-4 text-[11px] uppercase tracking-widest font-bold text-slate-400">
                  Medicine Name
                </th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-slate-400">
                  Category
                </th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-slate-400">
                  Price
                </th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-slate-400">
                  Stock Quantity
                </th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-slate-400">
                  Status
                </th>
                <th className="px-8 py-4 text-[11px] uppercase tracking-widest font-bold text-slate-400 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {/* Row 1: In Stock */}
              <tr className="group hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <span className="material-symbols-outlined">
                        medication
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700">
                        Amoxicillin 500mg
                      </p>
                      <p className="text-[11px] text-slate-400 font-medium tracking-tight">
                        Capsule • Batch #AMX-204
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm font-medium text-slate-500">
                  Antibiotics
                </td>
                <td className="px-6 py-5 text-sm font-bold text-slate-800">
                  $12.45
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-500 h-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-slate-700">
                      420
                    </span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
                    In Stock
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="text-slate-300 hover:text-blue-600 transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>

              {/* Row 2: Low Stock */}
              <tr className="group hover:bg-slate-50/50 transition-colors">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500">
                      <span className="material-symbols-outlined">
                        medication
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-700">
                        Atorvastatin 20mg
                      </p>
                      <p className="text-[11px] text-slate-400 font-medium tracking-tight">
                        Tablet • Batch #ATR-881
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm font-medium text-slate-500">
                  Cardiology
                </td>
                <td className="px-6 py-5 text-sm font-bold text-slate-800">
                  $45.00
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="bg-red-500 h-full"
                        style={{ width: "8%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-bold text-red-600">4</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Low Stock
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="text-slate-300 hover:text-blue-600 transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>

              {/* Row 3: Out of Stock */}
              <tr className="group hover:bg-slate-50/50 transition-colors opacity-70">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                      <span className="material-symbols-outlined">block</span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-400">
                        Lisinopril 10mg
                      </p>
                      <p className="text-[11px] text-slate-300 font-medium">
                        Tablet • Batch #LIS-992
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-sm font-medium text-slate-400">
                  Hypertension
                </td>
                <td className="px-6 py-5 text-sm font-bold text-slate-400">
                  $22.00
                </td>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="bg-slate-300 h-full w-0"></div>
                    </div>
                    <span className="text-sm font-bold text-slate-400">0</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="px-3 py-1 bg-slate-200 text-slate-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Out of Stock
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="text-slate-300 hover:text-blue-600 transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="p-6 border-t border-slate-50 flex items-center justify-between">
          <p className="text-xs text-slate-400 font-medium">
            Showing <span className="font-bold text-slate-700">3</span> of{" "}
            <span className="font-bold text-slate-700">1,284</span> medicines
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50 transition-all">
              <span className="material-symbols-outlined text-base leading-none">
                chevron_left
              </span>
            </button>
            <button className="w-8 h-8 bg-blue-600 text-white rounded-lg text-xs font-bold shadow-md shadow-blue-100">
              1
            </button>
            <button className="w-8 h-8 text-slate-500 hover:bg-slate-50 rounded-lg text-xs font-bold transition-all">
              2
            </button>
            <button className="w-8 h-8 text-slate-500 hover:bg-slate-50 rounded-lg text-xs font-bold transition-all">
              3
            </button>
            <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-slate-50 transition-all">
              <span className="material-symbols-outlined text-base leading-none">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medicines;
