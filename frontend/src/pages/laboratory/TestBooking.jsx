import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TestBooking() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Backend se Orders Fetch karna ---
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Backend endpoint: Sabhi orders lene ke liye (iske liye backend pe ek GET route hona chahiye)
        const response = await axios.get("http://localhost:5000/api/lab-orders/all");
        if (response.data.success) {
          setOrders(response.data.orders);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Status Badge Helper Function
  const getStatusStyle = (status) => {
    switch (status?.toLowerCase()) {
      case 'pending': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'confirmed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <>
      {/* <!-- Header & Quick Actions --> */}
      <div class="flex justify-between items-end mb-10 mt-16">
        <div>
          <h2 class="text-4xl font-extrabold tracking-tight text-on-surface mb-2">
            Test Bookings
          </h2>
          <p class="text-on-surface-variant font-body">
            Manage and monitor clinical sample collections in real-time.
          </p>
        </div>
        <div class="flex gap-4">
          <button class="flex items-center gap-2 px-6 py-3 bg-surface-container-low text-on-primary-fixed-variant rounded-xl font-semibold hover:bg-surface-container-high transition-all active:scale-95">
            <span class="material-symbols-outlined">download</span>
            Export CSV
          </button>
          {/* <button class="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95">
            <span class="material-symbols-outlined">add</span>
            New Booking
          </button> */}
        </div>
      </div>
      {/* <!-- Filter Bento --> */}
      <div class="grid grid-cols-12 gap-6 mb-8">
        <div class="col-span-8 p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 flex items-center gap-8">
          <div class="flex flex-col gap-1.5 flex-1">
            <label class="text-[10px] font-bold uppercase tracking-widest text-outline">
              Date Range
            </label>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-primary">
                calendar_month
              </span>
              <select class="bg-transparent border-none p-0 font-semibold text-on-surface focus:ring-0 text-sm">
                <option>Oct 24, 2023 - Oct 30, 2023</option>
                <option>Past 24 Hours</option>
                <option>Next 7 Days</option>
              </select>
            </div>
          </div>
          <div class="w-px h-10 bg-outline-variant/30"></div>
          <div class="flex flex-col gap-1.5 flex-1">
            <label class="text-[10px] font-bold uppercase tracking-widest text-outline">
              Test Category
            </label>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-primary">
                biotech
              </span>
              <select class="bg-transparent border-none p-0 font-semibold text-on-surface focus:ring-0 text-sm">
                <option>All Laboratory Tests</option>
                <option>Hematology</option>
                <option>Molecular Biology</option>
                <option>Immunology</option>
              </select>
            </div>
          </div>
          <div class="w-px h-10 bg-outline-variant/30"></div>
          <div class="flex flex-col gap-1.5 flex-1">
            <label class="text-[10px] font-bold uppercase tracking-widest text-outline">
              Collection Type
            </label>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-primary">
                home_health
              </span>
              <select class="bg-transparent border-none p-0 font-semibold text-on-surface focus:ring-0 text-sm">
                <option>Home Collection</option>
                <option>Walk-in Lab</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-span-4 p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/10 flex items-center justify-between">
          <div>
            <p class="text-[10px] font-bold uppercase tracking-widest text-outline mb-1">
              Today's Capacity
            </p>
            <div class="flex items-baseline gap-2">
              <span class="text-3xl font-extrabold text-on-surface">84%</span>
              <span class="text-secondary font-bold text-xs">
                +12% vs yest.
              </span>
            </div>
          </div>
          <div class="w-16 h-16 rounded-full border-4 border-secondary/20 border-t-secondary relative flex items-center justify-center">
            <span class="material-symbols-outlined text-secondary">
              trending_up
            </span>
          </div>
        </div>
      </div>


      {/* <!-- Comprehensive Table --> */}
     <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 mx-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-6 py-5 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Booking ID</th>
              <th className="px-6 py-5 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Lab Name</th>
              <th className="px-6 py-5 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Test Type</th>
              <th className="px-6 py-5 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Amount</th>
              <th className="px-6 py-5 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Date</th>
              <th className="px-6 py-5 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-center">Status</th>
              <th className="px-6 py-5 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr><td colSpan="7" className="text-center py-10 text-slate-400">Loading orders...</td></tr>
            ) : orders.length === 0 ? (
              <tr><td colSpan="7" className="text-center py-10 text-slate-400">No bookings found.</td></tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id} className="group hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-6">
                    <span className="font-mono text-xs font-bold text-primary">
                      #{order._id.slice(-6).toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <p className="text-sm font-bold text-slate-800">{order.labName}</p>
                  </td>
                  <td className="px-6 py-6">
                    <div className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 text-slate-600 font-medium text-xs">
                      {order.testType}
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <p className="text-sm font-bold text-slate-800">₹{order.totalAmount}</p>
                    <p className="text-[10px] text-slate-400">Incl. Tax</p>
                  </td>
                  <td className="px-6 py-6">
                    <p className="text-xs font-bold text-slate-800">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${getStatusStyle(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-primary transition-all">
                        <span className="material-symbols-outlined text-[18px]">visibility</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* <!-- Contextual FAB (Only for main action areas) --> */}
<button class="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span class="material-symbols-outlined">add_task</span>
</button>
    </>
  );
}
