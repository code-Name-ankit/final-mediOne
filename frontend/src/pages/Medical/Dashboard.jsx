import React from "react";

const Dashboard = () => {
  return (
    <>
      <header className="mb-10 mt-24">
        <h2 className="text-[3.5rem] font-bold tracking-tight text-on-surface font-headline leading-[1.1] mb-2">
          Empathetic Precision
        </h2>
        <p className="text-body-lg text-on-surface-variant max-w-2xl font-body">
          Welcome back, Dr. Chen. Your pharmacy is running at 98% efficiency
          today. Here is your operational overview.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {/* Total Medicines */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span
              className="material-symbols-outlined text-6xl"
              style={{ fontVariationSettings: "'opsz' 48" }}
            >
              medication
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-wider text-slate-400 mb-4 font-bold">
            Total Medicines
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-4xl font-bold text-slate-800 font-headline">
              1,284
            </h3>
            <span className="text-blue-600 font-bold text-sm flex items-center gap-0.5">
              +12{" "}
              <span className="material-symbols-outlined text-sm">
                trending_up
              </span>
            </span>
          </div>
          <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-3/4 rounded-full"></div>
          </div>
        </div>

        {/* Total Orders Today */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span
              className="material-symbols-outlined text-6xl"
              style={{ fontVariationSettings: "'opsz' 48" }}
            >
              shopping_bag
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-wider text-slate-400 mb-4 font-bold">
            Total Orders Today
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-4xl font-bold text-slate-800 font-headline">
              142
            </h3>
            <span className="text-emerald-600 font-bold text-sm flex items-center">
              Active
            </span>
          </div>
          <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-1/2 rounded-full"></div>
          </div>
        </div>

        {/* Pending Orders */}
        <div className="bg-white p-6 rounded-2xl border border-slate-100 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span
              className="material-symbols-outlined text-6xl"
              style={{ fontVariationSettings: "'opsz' 48" }}
            >
              pending_actions
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-wider text-slate-400 mb-4 font-bold">
            Pending Orders
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-4xl font-bold text-slate-800 font-headline">
              28
            </h3>
            <span className="text-red-500 font-bold text-sm flex items-center">
              Action Required
            </span>
          </div>
          <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-red-500 w-1/4 rounded-full"></div>
          </div>
        </div>

        {/* Total Revenue (Gradient Card) */}
        <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-6 rounded-2xl relative overflow-hidden group shadow-xl shadow-blue-200">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
            <span
              className="material-symbols-outlined text-6xl text-white"
              style={{ fontVariationSettings: "'opsz' 48" }}
            >
              payments
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-wider text-blue-100 mb-4 font-bold">
            Total Revenue
          </p>
          <div className="flex items-baseline gap-2 text-white">
            <h3 className="text-4xl font-bold font-headline">$14.2k</h3>
            <span className="text-blue-200 font-bold text-sm">+8%</span>
          </div>
          <p className="mt-4 text-[10px] text-blue-200/70 font-medium italic">
            Calculated for last 24 hours
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
        {/* --- RECENT ORDERS SECTION (2/3 Width) --- */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-bold text-slate-800 font-headline">
              Recent Orders
            </h4>
            <button className="text-blue-600 font-semibold text-sm hover:underline">
              View All Orders
            </button>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-6 py-4 text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    Order ID
                  </th>
                  <th className="px-6 py-4 text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    Patient Name
                  </th>
                  <th className="px-6 py-4 text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    Medication
                  </th>
                  <th className="px-6 py-4 text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    Status
                  </th>
                  <th className="px-6 py-4 text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/80 transition-colors cursor-pointer group">
                  <td className="px-6 py-5 font-mono text-[11px] text-slate-500">
                    #ORD-9021
                  </td>
                  <td className="px-6 py-5 font-bold text-slate-700 text-sm">
                    James Wilson
                  </td>
                  <td className="px-6 py-5 text-slate-500 text-sm">
                    Amoxicillin 500mg
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700">
                      Completed
                    </span>
                  </td>
                  <td className="px-6 py-5 font-bold text-slate-800 text-sm">
                    $45.00
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-slate-50/80 transition-colors cursor-pointer group">
                  <td className="px-6 py-5 font-mono text-[11px] text-slate-500">
                    #ORD-9022
                  </td>
                  <td className="px-6 py-5 font-bold text-slate-700 text-sm">
                    Maria Rodriguez
                  </td>
                  <td className="px-6 py-5 text-slate-500 text-sm">
                    Lisinopril 10mg
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700">
                      Processing
                    </span>
                  </td>
                  <td className="px-6 py-5 font-bold text-slate-800 text-sm">
                    $12.50
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-slate-50/80 transition-colors cursor-pointer group">
                  <td className="px-6 py-5 font-mono text-[11px] text-slate-500">
                    #ORD-9023
                  </td>
                  <td className="px-6 py-5 font-bold text-slate-700 text-sm">
                    Robert Taylor
                  </td>
                  <td className="px-6 py-5 text-slate-500 text-sm">
                    Atorvastatin 40mg
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-5 font-bold text-slate-800 text-sm">
                    $38.20
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* --- LOW STOCK ALERTS (1/3 Width) --- */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-headline-md font-bold text-on-surface font-headline">
              Low Stock Alerts
            </h4>
            <span className="bg-error text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
              4 CRITICAL
            </span>
          </div>

          <div className="space-y-4">
            {/* Critical Alert Item */}
            <div className="bg-white p-5 rounded-2xl border border-red-100 flex gap-4 items-start relative overflow-hidden group shadow-sm">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-500"></div>
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                <span
                  className="material-symbols-outlined text-red-500"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  warning
                </span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-bold text-slate-800 text-sm">
                    Insulin Glargine
                  </h5>
                  <span className="text-red-600 font-bold text-[10px]">
                    5 units left
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mb-3 font-medium">
                  Reorder threshold: 20 units
                </p>
                <button className="w-full py-2 bg-red-500 text-white rounded-lg text-[11px] font-bold hover:bg-red-600 transition-colors shadow-sm">
                  Order Now
                </button>
              </div>
            </div>

            {/* <!-- Low Stock Item 2 --> */}
            <div className="bg-surface-container-lowest p-5 rounded-2xl ring-1 ring-error/10 flex gap-4 items-start relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-error/50"></div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-outline">pill</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-bold text-on-surface">Ventolin Inhaler</h5>
                  <span className="text-error font-bold text-xs">
                    12 units left
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant mb-3">
                  Reorder threshold: 30 units
                </p>
                <button className="w-full py-2 bg-surface-container-high text-on-surface-variant rounded-lg text-xs font-bold hover:bg-surface-variant transition-colors">
                  Add to List
                </button>
              </div>
            </div>

            {/* <!-- Low Stock Item 3 --> */}
            <div className="bg-surface-container-lowest p-5 rounded-2xl ring-1 ring-error/10 flex gap-4 items-start relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-error/50"></div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-outline">
                  vaccines
                </span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-bold text-on-surface">Gabapentin 300mg</h5>
                  <span className="text-error font-bold text-xs">
                    18 units left
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant mb-3">
                  Reorder threshold: 50 units
                </p>
                <button className="w-full py-2 bg-surface-container-high text-on-surface-variant rounded-lg text-xs font-bold hover:bg-surface-variant transition-colors">
                  Add to List
                </button>
              </div>
            </div>

            {/* Insight Card */}
            <div className="rounded-3xl overflow-hidden relative h-48 mt-8 shadow-lg">
              <img
                alt="Pharmacy"
                className="w-full h-full object-cover"
                src="https://thumbs.dreamstime.com/b/image-showcases-bright-clean-pharmacy-storage-room-filled-neatly-arranged-rows-medicine-bottles-boxes-411636284.jpg?w=768"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent flex flex-col justify-end p-5">
                <p className="text-white text-base font-bold font-headline">
                  Supply Chain Insights
                </p>
                <p className="text-blue-100 text-[10px] mt-1 font-medium leading-relaxed">
                  AI predicts 15% increase in seasonal allergy meds next week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
