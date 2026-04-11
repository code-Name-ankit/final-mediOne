import React from "react";

const Orders = () => {
  return (
    <>
      <div className="mb-8 mt-20">
        <h2 className="text-3xl font-extrabold text-on-surface tracking-tight font-headline">
          Orders Management
        </h2>
        <p className="text-on-surface-variant font-body mt-1">
          Review and fulfill high-priority medical orders in real-time.
        </p>
      </div>

      {/* <!-- Dashboard Stats / Bento Grid Mini --> */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
          <p className="text-label-md text-outline tracking-wider font-bold uppercase mb-2">
            Incoming
          </p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-primary font-headline">
              24
            </span>
            <span className="text-secondary text-sm font-bold mb-1">+12%</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border-l-4 border-primary">
          <p className="text-label-md text-outline tracking-wider font-bold uppercase mb-2">
            Pending Action
          </p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-primary font-headline">
              08
            </span>
            <span className="text-error text-sm font-bold mb-1">Urgent</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
          <p className="text-label-md text-outline tracking-wider font-bold uppercase mb-2">
            Processing
          </p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-primary font-headline">
              15
            </span>
            <span className="text-outline text-sm font-medium mb-1">Steady</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm">
          <p className="text-label-md text-outline tracking-wider font-bold uppercase mb-2">
            Delivered Today
          </p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-primary font-headline">
              142
            </span>
            <span className="text-secondary text-sm font-bold mb-1">Peak</span>
          </div>
        </div>
      </div>

      {/* <!-- Filter Bar --> */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-primary text-white rounded-xl text-sm font-bold shadow-sm hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            All Orders
          </button>
          <button className="px-4 py-2 bg-surface-container-high text-on-surface rounded-xl text-sm font-medium hover:bg-surface-variant transition-all">
            Pending
          </button>
          <button className="px-4 py-2 bg-surface-container-high text-on-surface rounded-xl text-sm font-medium hover:bg-surface-variant transition-all">
            Accepted
          </button>
          <button className="px-4 py-2 bg-surface-container-high text-on-surface rounded-xl text-sm font-medium hover:bg-surface-variant transition-all">
            Delivered
          </button>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm text-outline font-medium">Sort by:</p>
          <select className="bg-transparent border-none text-sm font-bold text-primary focus:ring-0 cursor-pointer">
            <option>Newest First</option>
            <option>Price: High to Low</option>
            <option>Status Priority</option>
          </select>
        </div>
      </div>

      {/* <!-- Order Table --> */}
      <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10">
        <table className="w-full text-left border-collapse">
          <thead className="bg-surface-container-low">
            <tr>
              <th className="px-6 py-5 text-[11px] font-bold text-outline tracking-[0.1em] uppercase">
                Order ID
              </th>
              <th className="px-6 py-5 text-[11px] font-bold text-outline tracking-[0.1em] uppercase">
                Customer Name
              </th>
              <th className="px-6 py-5 text-[11px] font-bold text-outline tracking-[0.1em] uppercase">
                Medicines
              </th>
              <th className="px-6 py-5 text-[11px] font-bold text-outline tracking-[0.1em] uppercase">
                Total Price
              </th>
              <th className="px-6 py-5 text-[11px] font-bold text-outline tracking-[0.1em] uppercase">
                Status
              </th>
              <th className="px-6 py-5 text-[11px] font-bold text-outline tracking-[0.1em] uppercase text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-0">
            {/* <!-- Order Row 1 --> */}
            <tr className="hover:bg-surface-container-low/50 transition-colors group">
              <td className="px-6 py-5 font-bold text-sm text-primary">
                #ORD-8921
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
                    JD
                  </div>
                  <span className="text-sm font-semibold text-on-surface">
                    Johnathan Doe
                  </span>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 bg-surface-container-high rounded-md text-[10px] font-bold text-outline tracking-tight">
                    Amoxicillin (500mg)
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container-high rounded-md text-[10px] font-bold text-outline tracking-tight">
                    +1 more
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 font-bold text-sm text-on-surface">
                $42.50
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container text-on-error-container text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                  Pending
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center justify-end gap-2">
                  <button className="px-3 py-1.5 bg-gradient-to-br from-primary to-primary-container text-white text-[11px] font-bold rounded-lg shadow-sm hover:scale-105 active:scale-95 transition-all">
                    Accept
                  </button>
                  <button className="px-3 py-1.5 text-error text-[11px] font-bold hover:bg-error-container/20 rounded-lg transition-all">
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            {/* <!-- Order Row 2 (Tonal shift for separation) --> */}
            <tr className="bg-surface-container-low/20 hover:bg-surface-container-low transition-colors group">
              <td className="px-6 py-5 font-bold text-sm text-primary">
                #ORD-8922
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 text-xs font-bold">
                    AS
                  </div>
                  <span className="text-sm font-semibold text-on-surface">
                    Alice Smith
                  </span>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 bg-surface-container-high rounded-md text-[10px] font-bold text-outline tracking-tight">
                    Lisinopril (10mg)
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 font-bold text-sm text-on-surface">
                $12.00
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Accepted
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center justify-end gap-2">
                  <button className="px-3 py-1.5 bg-secondary-container text-on-secondary-container text-[11px] font-bold rounded-lg shadow-sm hover:scale-105 transition-all">
                    Mark as Delivered
                  </button>
                </div>
              </td>
            </tr>
            {/* <!-- Order Row 3 --> */}
            <tr className="hover:bg-surface-container-low/50 transition-colors group">
              <td className="px-6 py-5 font-bold text-sm text-primary">
                #ORD-8923
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-xs font-bold">
                    RW
                  </div>
                  <span className="text-sm font-semibold text-on-surface">
                    Robert Wilson
                  </span>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 bg-surface-container-high rounded-md text-[10px] font-bold text-outline tracking-tight">
                    Metformin (500mg)
                  </span>
                  <span className="px-2.5 py-1 bg-surface-container-high rounded-md text-[10px] font-bold text-outline tracking-tight">
                    Lipitor (20mg)
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 font-bold text-sm text-on-surface">
                $89.15
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-container text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Delivered
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center justify-end gap-2">
                  <button className="w-8 h-8 flex items-center justify-center text-outline hover:bg-surface-container-high rounded-full transition-all">
                    <span className="material-symbols-outlined text-lg">
                      more_vert
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* <!-- Order Row 4 --> */}
            <tr className="bg-surface-container-low/20 hover:bg-surface-container-low transition-colors group">
              <td className="px-6 py-5 font-bold text-sm text-primary">
                #ORD-8924
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 text-xs font-bold">
                    MK
                  </div>
                  <span className="text-sm font-semibold text-on-surface">
                    Maria Kim
                  </span>
                </div>
              </td>
              <td className="px-6 py-5">
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 bg-surface-container-high rounded-md text-[10px] font-bold text-outline tracking-tight">
                    Ventolin Inhaler
                  </span>
                </div>
              </td>
              <td className="px-6 py-5 font-bold text-sm text-on-surface">
                $22.00
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container text-on-error-container text-[11px] font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                  Pending
                </span>
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center justify-end gap-2">
                  <button className="px-3 py-1.5 bg-gradient-to-br from-primary to-primary-container text-white text-[11px] font-bold rounded-lg shadow-sm hover:scale-105 active:scale-95 transition-all">
                    Accept
                  </button>
                  <button className="px-3 py-1.5 text-error text-[11px] font-bold hover:bg-error-container/20 rounded-lg transition-all">
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <!-- Pagination --> */}
        <div className="bg-surface-container-low px-6 py-4 flex items-center justify-between">
          <p className="text-xs text-outline font-medium">
            Showing 1-10 of 1,248 orders
          </p>
          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/30 text-outline hover:bg-white transition-all">
              <span className="material-symbols-outlined text-sm">
                chevron_left
              </span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold shadow-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/30 text-outline hover:bg-white text-xs font-bold transition-all">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/30 text-outline hover:bg-white text-xs font-bold transition-all">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-outline-variant/30 text-outline hover:bg-white transition-all">
              <span className="material-symbols-outlined text-sm">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* --- FAB (Floating Action Button) START --- */}
      {/* <button 
        className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl shadow-blue-200 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group"
        onClick={() => alert('Quick Action Clicked!')} // Aap yahan modal open kar sakte hain
      >
        <span 
            className="material-symbols-outlined text-2xl" 
            style={{ fontVariationSettings: "'FILL' 1" }}
        >
            add
        </span>
        
                <span className="absolute right-full mr-3 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            New Action
        </span>
      </button> */}
    </>
  );
};

export default Orders;
