import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Aapka backend route
        const res = await axios.get("http://localhost:5000/api/orders/my", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setOrders(res.data.reverse()); // Latest orders top par dikhane ke liye
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchOrders();
  }, [token]);

  return (
    <div className="max-w-[1440px] mx-auto px-8 pb-20">
      <div className="mb-8 mt-20">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight font-headline">
          Orders Management
        </h2>
        <p className="text-slate-500 font-body mt-1">
          Review and fulfill high-priority medical orders in real-time.
        </p>
      </div>

      {/* */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <p className="text-[10px] text-slate-400 tracking-wider font-bold uppercase mb-2">Total Received</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-blue-600">{orders.length}</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-500 border-y-slate-100 border-r-slate-100">
          <p className="text-[10px] text-slate-400 tracking-wider font-bold uppercase mb-2">Pending Action</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-red-500">
              {orders.filter(o => o.status === "pending").length}
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500 border-y-slate-100 border-r-slate-100">
          <p className="text-[10px] text-slate-400 tracking-wider font-bold uppercase mb-2">Confirmed</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-blue-600">
              {orders.filter(o => o.status === "confirmed").length}
            </span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500 border-y-slate-100 border-r-slate-100">
          <p className="text-[10px] text-slate-400 tracking-wider font-bold uppercase mb-2">Delivered Today</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-green-600">
              {orders.filter(o => o.status === "delivered").length}
            </span>
          </div>
        </div>
      </div>

      {/* */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-sm flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            All Orders
          </button>
          {["pending", "confirmed", "delivered"].map(status => (
            <button key={status} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-200 capitalize transition-all">
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-5 text-[11px] font-bold text-slate-400 tracking-widest uppercase">Order ID</th>
              <th className="px-6 py-5 text-[11px] font-bold text-slate-400 tracking-widest uppercase">Customer & Address</th>
              <th className="px-6 py-5 text-[11px] font-bold text-slate-400 tracking-widest uppercase">Medicines</th>
              <th className="px-6 py-5 text-[11px] font-bold text-slate-400 tracking-widest uppercase">Total Price</th>
              <th className="px-6 py-5 text-[11px] font-bold text-slate-400 tracking-widest uppercase">Status</th>
              {/* <th className="px-6 py-5 text-[11px] font-bold text-slate-400 tracking-widest uppercase text-right">Actions</th> */}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {loading ? (
               <tr><td colSpan="6" className="py-20 text-center text-slate-400 font-bold uppercase">Fetching Data...</td></tr>
            ) : orders.length === 0 ? (
               <tr><td colSpan="6" className="py-20 text-center text-slate-400 font-bold uppercase tracking-widest">No Orders Found</td></tr>
            ) : (
              orders.map((order) => (
                <tr key={order._id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-5 font-bold text-sm text-blue-600 uppercase">
                    #{order._id.slice(-6)}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-700">{order.address.split(',')[0]}</span>
                      <span className="text-[11px] text-slate-400 truncate max-w-[200px]">{order.address}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex flex-wrap gap-1.5">
                      {order.items.map((item, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-[10px] font-bold">
                          {item.name} x{item.quantity}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-5 font-black text-sm text-slate-900">
                    ₹{order.totalAmount}
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      order.status === "pending" ? "bg-red-50 text-red-600" : 
                      order.status === "confirmed" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        order.status === "pending" ? "bg-red-600" : 
                        order.status === "confirmed" ? "bg-blue-600" : "bg-green-600"
                      }`}></span>
                      {order.status}
                    </span>
                  </td>
                  {/* <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                       {order.status === 'pending' ? (
                          <>
                            <button className="px-3 py-1.5 bg-blue-600 text-white text-[10px] font-bold rounded-lg shadow-sm hover:scale-105 active:scale-95 transition-all">Accept</button>
                            <button className="px-3 py-1.5 text-red-500 text-[10px] font-bold hover:bg-red-50 rounded-lg transition-all">Reject</button>
                          </>
                       ) : (
                        <button className="w-8 h-8 flex items-center justify-center text-slate-300 hover:bg-slate-100 rounded-full transition-all">
                           <span className="material-symbols-outlined text-lg">more_vert</span>
                        </button>
                       )}
                    </div>
                  </td> */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;