import React from "react";

export default function TestBooking() {
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
          <button class="flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95">
            <span class="material-symbols-outlined">add</span>
            New Booking
          </button>
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
      <div class="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm border border-outline-variant/10">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-surface-container-low/50">
              <th class="px-6 py-5 text-[10px] font-extrabold uppercase tracking-widest text-outline">
                Booking ID
              </th>
              <th class="px-6 py-5 text-[10px] font-extrabold uppercase tracking-widest text-outline">
                Patient
              </th>
              <th class="px-6 py-5 text-[10px] font-extrabold uppercase tracking-widest text-outline">
                Test Type
              </th>
              <th class="px-6 py-5 text-[10px] font-extrabold uppercase tracking-widest text-outline">
                Collection Address
              </th>
              <th class="px-6 py-5 text-[10px] font-extrabold uppercase tracking-widest text-outline">
                Schedule
              </th>
              <th class="px-6 py-5 text-[10px] font-extrabold uppercase tracking-widest text-outline text-center">
                Status
              </th>
              <th class="px-6 py-5 text-[10px] font-extrabold uppercase tracking-widest text-outline text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-surface-container-low">
            {/* <!-- Row 1: Pending --> */}
            <tr class="group hover:bg-surface-container-low/30 transition-colors">
              <td class="px-6 py-6">
                <span class="font-mono text-xs font-bold text-primary">
                  #BK-9902
                </span>
              </td>
              <td class="px-6 py-6">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-xs">
                    EL
                  </div>
                  <div>
                    <p class="text-sm font-bold text-on-surface">
                      Elena Lockwood
                    </p>
                    <p class="text-[10px] text-outline">F, 32 years</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-6">
                <div class="inline-flex items-center px-2 py-1 rounded-md bg-surface-container-high text-on-surface-variant font-medium text-xs">
                  CBC with Differential
                </div>
              </td>
              <td class="px-6 py-6 max-w-[200px]">
                <p class="text-xs text-on-surface-variant truncate">
                  742 Evergreen Terrace, Apt 4B, Springfield
                </p>
              </td>
              <td class="px-6 py-6">
                <p class="text-xs font-bold text-on-surface">Today, 09:30 AM</p>
                <p class="text-[10px] text-outline">Phleb: Mike Ross</p>
              </td>
              <td class="px-6 py-6 text-center">
                <span class="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold uppercase tracking-wider border border-amber-200">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                  Pending
                </span>
              </td>
              <td class="px-6 py-6 text-right">
                <div class="flex items-center justify-end gap-2">
                  <button class="px-3 py-1.5 text-[11px] font-bold text-primary hover:bg-primary-fixed rounded-lg transition-all">
                    Update Status
                  </button>
                  <button class="p-2 text-outline hover:text-primary transition-all">
                    <span class="material-symbols-outlined text-[18px]">
                      visibility
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* <!-- Row 2: Sample Collected --> */}
            <tr class="group hover:bg-surface-container-low/30 transition-colors">
              <td class="px-6 py-6">
                <span class="font-mono text-xs font-bold text-primary">
                  #BK-9891
                </span>
              </td>
              <td class="px-6 py-6">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary font-bold text-xs">
                    RJ
                  </div>
                  <div>
                    <p class="text-sm font-bold text-on-surface">
                      Robert J. Vance
                    </p>
                    <p class="text-[10px] text-outline">M, 58 years</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-6">
                <div class="inline-flex items-center px-2 py-1 rounded-md bg-surface-container-high text-on-surface-variant font-medium text-xs">
                  COVID-19 PCR (Urgent)
                </div>
              </td>
              <td class="px-6 py-6 max-w-[200px]">
                <p class="text-xs text-on-surface-variant truncate">
                  21 Baker Street, West End, London
                </p>
              </td>
              <td class="px-6 py-6">
                <p class="text-xs font-bold text-on-surface">Today, 07:15 AM</p>
                <p class="text-[10px] text-outline">Phleb: Sarah Chen</p>
              </td>
              <td class="px-6 py-6 text-center">
                <span class="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-[10px] font-extrabold uppercase tracking-wider border border-blue-200">
                  <span class="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                  Sample Collected
                </span>
              </td>
              <td class="px-6 py-6 text-right">
                <div class="flex items-center justify-end gap-2">
                  <button class="px-3 py-1.5 text-[11px] font-bold text-primary hover:bg-primary-fixed rounded-lg transition-all">
                    Update Status
                  </button>
                  <button class="p-2 text-outline hover:text-primary transition-all">
                    <span class="material-symbols-outlined text-[18px]">
                      visibility
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* <!-- Row 3: Report Ready --> */}
            <tr class="group hover:bg-surface-container-low/30 transition-colors">
              <td class="px-6 py-6">
                <span class="font-mono text-xs font-bold text-primary">
                  #BK-9854
                </span>
              </td>
              <td class="px-6 py-6">
                <div class="flex items-center gap-3">
                  <img
                    class="w-8 h-8 rounded-full object-cover"
                    data-alt="headshot of a confident young woman with glasses and professional attire in a bright office"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvVlfQ8DhJgcZ58_nhuKwZ-2ObIVKN8sr0CTG9UHYL2JAIAA9YsZ1ZtfcAowhE58HGIlhMnDYuKuXkhZAYgWv7NoSXxYs1LADuTwgxbFRns2UxTmwUBpDYkKXmxYwpCaMkXmbDQzJSzi8IYlv8n_2ChLCc9AN4YlbBlPE-gkv9iQOqo4hcmSPK_-fpV7bnUbBD3lCZNqv4Hx5lt_mDAluKlFsqUvXftTvGqHlCNfijHODDXu6JIq9glh1gekpNrSDqS4LN4naKbBw"
                  />
                  <div>
                    <p class="text-sm font-bold text-on-surface">
                      Maya Ishikawa
                    </p>
                    <p class="text-[10px] text-outline">F, 26 years</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-6">
                <div class="inline-flex items-center px-2 py-1 rounded-md bg-surface-container-high text-on-surface-variant font-medium text-xs">
                  Thyroid Profile (T3, T4, TSH)
                </div>
              </td>
              <td class="px-6 py-6 max-w-[200px]">
                <p class="text-xs text-on-surface-variant truncate">
                  10-12 Shibuya Crossing, Tokyo
                </p>
              </td>
              <td class="px-6 py-6">
                <p class="text-xs font-bold text-on-surface">
                  Yesterday, 14:00 PM
                </p>
                <p class="text-[10px] text-outline">Lab: In-House</p>
              </td>
              <td class="px-6 py-6 text-center">
                <span class="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-extrabold uppercase tracking-wider border border-secondary/20">
                  <span class="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                  Report Ready
                </span>
              </td>
              <td class="px-6 py-6 text-right">
                <div class="flex items-center justify-end gap-2">
                  <button class="px-3 py-1.5 text-[11px] font-bold text-primary hover:bg-primary-fixed rounded-lg transition-all">
                    Update Status
                  </button>
                  <button class="p-2 text-outline hover:text-primary transition-all">
                    <span class="material-symbols-outlined text-[18px]">
                      visibility
                    </span>
                  </button>
                </div>
              </td>
            </tr>
            {/* <!-- Row 4: Pending --> */}
            <tr class="group hover:bg-surface-container-low/30 transition-colors">
              <td class="px-6 py-6">
                <span class="font-mono text-xs font-bold text-primary">
                  #BK-9844
                </span>
              </td>
              <td class="px-6 py-6">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant font-bold text-xs">
                    AS
                  </div>
                  <div>
                    <p class="text-sm font-bold text-on-surface">Arjun Singh</p>
                    <p class="text-[10px] text-outline">M, 45 years</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-6">
                <div class="inline-flex items-center px-2 py-1 rounded-md bg-surface-container-high text-on-surface-variant font-medium text-xs">
                  Vitamin D (25-OH)
                </div>
              </td>
              <td class="px-6 py-6 max-w-[200px]">
                <p class="text-xs text-on-surface-variant truncate">
                  Sector 18, Block C, Noida
                </p>
              </td>
              <td class="px-6 py-6">
                <p class="text-xs font-bold text-on-surface">
                  Oct 26, 08:00 AM
                </p>
                <p class="text-[10px] text-outline">Phleb: David G.</p>
              </td>
              <td class="px-6 py-6 text-center">
                <span class="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-extrabold uppercase tracking-wider border border-amber-200">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                  Pending
                </span>
              </td>
              <td class="px-6 py-6 text-right">
                <div class="flex items-center justify-end gap-2">
                  <button class="px-3 py-1.5 text-[11px] font-bold text-primary hover:bg-primary-fixed rounded-lg transition-all">
                    Update Status
                  </button>
                  <button class="p-2 text-outline hover:text-primary transition-all">
                    <span class="material-symbols-outlined text-[18px]">
                      visibility
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <!-- Pagination --> */}
        <div class="px-6 py-4 flex items-center justify-between bg-surface-container-low/20">
          <p class="text-xs text-outline">
            Showing <span class="font-bold text-on-surface">1 - 10</span> of 124
            bookings
          </p>
          <div class="flex items-center gap-1">
            <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container text-outline">
              <span class="material-symbols-outlined text-sm">
                chevron_left
              </span>
            </button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-xs font-bold shadow-sm">
              1
            </button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container text-xs font-bold text-on-surface">
              2
            </button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container text-xs font-bold text-on-surface">
              3
            </button>
            <span class="px-1 text-outline">...</span>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container text-xs font-bold text-on-surface">
              12
            </button>
            <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container text-outline">
              <span class="material-symbols-outlined text-sm">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Contextual FAB (Only for main action areas) --> */}
<button class="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span class="material-symbols-outlined">add_task</span>
</button>
    </>
  );
}
