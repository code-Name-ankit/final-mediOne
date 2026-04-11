// src/pages/medical/Medicines.jsx
import React from 'react';

const Medicines = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Medicine Inventory</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your stock and medicine details here.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-blue-100">
          <span className="material-symbols-outlined text-[20px]">add</span>
          Add New Medicine
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex gap-4">
        <div className="flex-1 relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input 
            type="text" 
            placeholder="Search by name, generic name, or SKU..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>
        <button className="px-4 py-2 border border-slate-200 rounded-xl text-slate-600 font-medium flex items-center gap-2 hover:bg-slate-50">
          <span className="material-symbols-outlined text-[20px]">filter_list</span>
          Filters
        </button>
      </div>

      {/* Placeholder for Table */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-20 text-center">
          <span className="material-symbols-outlined text-slate-300 text-6xl">medication</span>
          <p className="text-slate-400 mt-4 font-medium">No medicines found. Start by adding one!</p>
        </div>
      </div>
    </div>
  );
};

export default Medicines;