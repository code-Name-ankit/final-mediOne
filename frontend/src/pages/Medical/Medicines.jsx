// src/pages/medical/Medicines.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/medicines");
      setMedicines(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. Submit Form to Backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/medicines/add",
        formData,
      );
      setMedicines([res.data, ...medicines]); // UI update
      setIsModalOpen(false); // Close Modal
      setFormData({ name: "", brand: "", category: "", description: "" }); // Reset Form
    } catch (err) {
      alert("Error adding medicine");
    }
  };

  const deleteMedicine = async (id) => {
    if (window.confirm("Delete karein?")) {
      await axios.delete(`http://localhost:5000/api/medicines/delete/${id}`);
      setMedicines(medicines.filter((m) => m._id !== id));
    }
  };
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
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">add</span>
            Add Medicine
          </button>
        </div>
      </div>

      {/* --- POPUP MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-md mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 transform transition-all scale-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-800">
                New Medicine
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1 mb-2 block">
                  Medicine Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Amoxicillin"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/5 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1 mb-2 block">
                    Brand
                  </label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="e.g. Cipla"
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1 mb-2 block">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="e.g. Antibiotic"
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1 mb-2 block">
                  Description
                </label>
                <textarea
                  name="description"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Medicine usage details..."
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:border-blue-500 focus:bg-white outline-none transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-6 py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-[2] px-6 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all"
                >
                  Add to Stock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
            <span className="material-symbols-outlined text-sm">
              trending_up
            </span>{" "}
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
            <h4 className="text-4xl font-headline font-bold text-on-surface">
              18
            </h4>
          </div>
          <p className="text-xs text-error flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">
              priority_high
            </span>{" "}
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
              <p className="text-xs text-primary-fixed">
                Monitored by 3 Suppliers
              </p>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <span className="material-symbols-outlined text-[160px]">
              payments
            </span>
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
            {/* <button className="px-5 py-2 text-slate-500 rounded-full text-sm font-medium hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
              Antibiotics
            </button>
            <button className="px-5 py-2 text-slate-500 rounded-full text-sm font-medium hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
              Cardiology
            </button> */}
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
                  Brand
                </th>
                <th className="px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-slate-400">
                  Stock Status
                </th>
                <th className="px-8 py-4 text-[11px] uppercase tracking-widest font-bold text-slate-400 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {medicines.map((med) => (
                <tr
                  key={med._id}
                  className="group hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <span className="material-symbols-outlined">
                          medication
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-slate-700">{med.name}</p>
                        <p className="text-[11px] text-slate-400 font-medium tracking-tight">
                          {med.description
                            ? med.description.substring(0, 30) + "..."
                            : "No description"}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                      {med.category || "General"}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm font-semibold text-slate-600">
                    {med.brand || "Generic"}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="bg-emerald-500 h-full"
                          style={{ width: "100%" }} // Dynamic logic yahan add kar sakte hain
                        ></div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase">
                        Available
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => deleteMedicine(med._id)}
                        className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <span className="material-symbols-outlined text-xl">
                          delete
                        </span>
                      </button>
                      <button className="p-2 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                        <span className="material-symbols-outlined text-xl">
                          more_vert
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="p-6 border-t border-slate-50 flex items-center justify-between">
          <p className="text-xs text-slate-400 font-medium">
            Showing{" "}
            <span className="font-bold text-slate-700">{medicines.length}</span>{" "}
            results
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
