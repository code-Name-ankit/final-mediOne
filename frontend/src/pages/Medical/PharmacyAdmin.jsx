import React from "react";
import { NavLink } from "react-router-dom";

const PharmacySAdmin = () => {
  return (
    <>
      // SideNavBar Shell
      <aside className="fixed left-0 top-0 h-screen w-64 flex flex-col p-4 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 mt-24">
        {/* Main Navigation */}
        <nav className="flex-1 space-y-1">
          <SidebarLink
            to="/dashboard"
            icon="dashboard"
            label="Dashboard"
            filled
          />
          <SidebarLink to="/medicines" icon="medication" label="Medicines" />
          <SidebarLink to="/orders" icon="shopping_cart" label="Orders" />
          <SidebarLink to="/inventory" icon="inventory_2" label="Inventory" />
          <SidebarLink to="/analytics" icon="analytics" label="Analytics" />
        </nav>
      </aside>
      <main class="ml-64 p-8 min-h-screen mt-12">
        <header class="mb-10">
          <h2 class="text-[3.5rem] font-bold tracking-tight text-on-surface font-headline leading-[1.1] mb-2">
            Empathetic Precision
          </h2>
          <p class="text-body-lg text-on-surface-variant max-w-2xl font-body">
            Welcome back, Dr. Chen. Your pharmacy is running at 98% efficiency
            today. Here is your operational overview.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {/* Total Medicines */}
          <div className="bg-white p-6 rounded-xl relative overflow-hidden group border border-slate-100 shadow-sm transition-all hover:shadow-md">
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
              <h3 className="text-4xl font-bold text-slate-900">1,284</h3>
              <span className="text-emerald-600 font-medium text-sm flex items-center gap-1">
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
          <div className="bg-white p-6 rounded-xl relative overflow-hidden group border border-slate-100 shadow-sm transition-all hover:shadow-md">
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
              <h3 className="text-4xl font-bold text-slate-900">142</h3>
              <span className="text-blue-600 font-medium text-sm flex items-center">
                Active
              </span>
            </div>
            <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-1/2 rounded-full"></div>
            </div>
          </div>

          {/* Pending Orders */}
          <div className="bg-white p-6 rounded-xl relative overflow-hidden group border border-slate-100 shadow-sm transition-all hover:shadow-md">
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
              <h3 className="text-4xl font-bold text-slate-900">28</h3>
              <span className="text-rose-500 font-medium text-sm flex items-center">
                Action Required
              </span>
            </div>
            <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-rose-500 w-1/4 rounded-full"></div>
            </div>
          </div>

          {/* Revenue */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-xl relative overflow-hidden group shadow-xl transition-all hover:scale-[1.02]">
            <div className="absolute top-0 right-0 p-4 opacity-20">
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
              <h3 className="text-4xl font-bold">$14.2k</h3>
              <span className="text-emerald-300 font-medium text-sm">+8%</span>
            </div>
            <p className="mt-4 text-[10px] text-blue-100/70 italic">
              Calculated for last 24 hours
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders Section (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-bold text-slate-900">
                Recent Orders
              </h4>
              <button className="text-blue-600 font-semibold text-sm hover:underline">
                View All Orders
              </button>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="px-6 py-4 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                      Order ID
                    </th>
                    <th className="px-6 py-4 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                      Patient Name
                    </th>
                    <th className="px-6 py-4 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                      Medication
                    </th>
                    <th className="px-6 py-4 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                      Status
                    </th>
                    <th className="px-6 py-4 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    {
                      id: "#ORD-9021",
                      name: "James Wilson",
                      med: "Amoxicillin 500mg",
                      status: "Completed",
                      total: "$45.00",
                      color: "bg-emerald-50 text-emerald-600",
                    },
                    {
                      id: "#ORD-9022",
                      name: "Maria Rodriguez",
                      med: "Lisinopril 10mg",
                      status: "Processing",
                      total: "$12.50",
                      color: "bg-blue-50 text-blue-600",
                    },
                    {
                      id: "#ORD-9023",
                      name: "Robert Taylor",
                      med: "Atorvastatin 40mg",
                      status: "Pending",
                      total: "$38.20",
                      color: "bg-rose-50 text-rose-600",
                    },
                    {
                      id: "#ORD-9024",
                      name: "Sarah Jenkins",
                      med: "Metformin 500mg",
                      status: "Completed",
                      total: "$15.00",
                      color: "bg-emerald-50 text-emerald-600",
                    },
                  ].map((order, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/50 transition-colors cursor-pointer group"
                    >
                      <td className="px-6 py-5 font-mono text-xs text-slate-500">
                        {order.id}
                      </td>
                      <td className="px-6 py-5 font-semibold text-slate-900">
                        {order.name}
                      </td>
                      <td className="px-6 py-5 text-slate-600 text-sm">
                        {order.med}
                      </td>
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${order.color}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 font-bold text-slate-900">
                        {order.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Low Stock Alerts (1/3 width) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-slate-900 font-headline">
                Low Stock Alerts
              </h4>
              <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                4 CRITICAL
              </span>
            </div>

            <div className="space-y-4">
              {/* Critical Alert Card */}
              <div className="bg-white p-5 rounded-2xl border border-rose-100 flex gap-4 items-start relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500"></div>
                <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-rose-500"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    warning
                  </span>
                </div>
                <div class="flex-1">
                  <div class="flex justify-between items-start mb-1">
                    <h5 class="font-bold text-on-surface">Insulin Glargine</h5>
                    <span class="text-error font-bold text-xs">
                      5 units left
                    </span>
                  </div>
                  <p class="text-xs text-on-surface-variant mb-3">
                    Reorder threshold: 20 units
                  </p>
                  <button class="w-full py-2 bg-error-container text-on-error-container rounded-lg text-xs font-bold hover:bg-error/10 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Warning Alert Card */}
              <div class="bg-surface-container-lowest p-5 rounded-2xl ring-1 ring-error/10 flex gap-4 items-start relative overflow-hidden group">
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-error/50"></div>
                <div class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-outline">
                    pill
                  </span>
                </div>
                <div class="flex-1">
                  <div class="flex justify-between items-start mb-1">
                    <h5 class="font-bold text-on-surface">Ventolin Inhaler</h5>
                    <span class="text-error font-bold text-xs">
                      12 units left
                    </span>
                  </div>
                  <p class="text-xs text-on-surface-variant mb-3">
                    Reorder threshold: 30 units
                  </p>
                  <button class="w-full py-2 bg-surface-container-high text-on-surface-variant rounded-lg text-xs font-bold hover:bg-surface-variant transition-colors">
                    Add to List
                  </button>
                </div>
              </div>
              {/* Gabapentin 300mg Card */}
              <div class="bg-surface-container-lowest p-5 rounded-2xl ring-1 ring-error/10 flex gap-4 items-start relative overflow-hidden group">
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-error/50"></div>
                <div class="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-outline">
                    vaccines
                  </span>
                </div>
                <div class="flex-1">
                  <div class="flex justify-between items-start mb-1">
                    <h5 class="font-bold text-on-surface">Gabapentin 300mg</h5>
                    <span class="text-error font-bold text-xs">
                      18 units left
                    </span>
                  </div>
                  <p class="text-xs text-on-surface-variant mb-3">
                    Reorder threshold: 50 units
                  </p>
                  <button class="w-full py-2 bg-surface-container-high text-on-surface-variant rounded-lg text-xs font-bold hover:bg-surface-variant transition-colors">
                    Add to List
                  </button>
                </div>
              </div>

              {/* Decorative Supply Chain Insights */}
              <div className="rounded-3xl overflow-hidden relative h-48 mt-8 shadow-inner border border-slate-100 group">
                <img
                  alt="Pharmacy Interior"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://thumbs.dreamstime.com/b/image-showcases-bright-clean-pharmacy-storage-room-filled-neatly-arranged-rows-medicine-bottles-boxes-411636284.jpg?w=768"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent flex flex-col justify-end p-6">
                  <p className="text-white text-lg font-bold">
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
      </main>
    </>
  );
};

// Reusable Link Component
const SidebarLink = ({ to, icon, label, filled = false }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
        ${
          isActive
            ? "bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 shadow-sm font-bold"
            : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 font-medium"
        }
      `}
    >
      <span
        className="material-symbols-outlined transition-transform group-hover:scale-110"
        style={filled ? { fontVariationSettings: "'FILL' 1" } : {}}
      >
        {icon}
      </span>
      <span className="text-sm tracking-tight">{label}</span>
    </NavLink>
  );
};

export default PharmacySAdmin;
