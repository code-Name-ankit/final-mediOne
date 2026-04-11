import React from "react";

export default function Dashboard() {
  return (
    <>
      {/* <!-- Main Content Canvas --> */}
      {/* <!-- Header & Greeting --> */}
      <div class="mb-10 flex justify-between items-end mt-16">
        <div>
          <p class="text-label-md font-label text-outline-variant tracking-widest uppercase mb-1">
            Morning Overview
          </p>
          <h2 class="text-4xl font-headline font-extrabold tracking-tight text-on-surface">
            Laboratory Dashboard
          </h2>
        </div>
        <div class="flex gap-3">
          <button class="px-6 py-2.5 rounded-xl bg-surface-container-high text-on-primary-fixed-variant font-semibold hover:bg-surface-container-highest transition-all flex items-center gap-2">
            <span
              class="material-symbols-outlined text-[20px]"
              data-icon="download"
            >
              download
            </span>
            Daily Report
          </button>
          <button class="px-6 py-2.5 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all flex items-center gap-2">
            <span class="material-symbols-outlined text-[20px]" data-icon="add">
              add
            </span>
            New Booking
          </button>
        </div>
      </div>
      {/* <!-- Bento Grid: Summary Cards --> */}
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div class="bg-surface-container-lowest p-6 rounded-[2rem] flex flex-col justify-between hover:bg-white transition-all">
          <div class="flex justify-between items-start mb-4">
            <div class="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary">
              <span class="material-symbols-outlined" data-icon="book_online">
                book_online
              </span>
            </div>
            <span class="text-secondary font-semibold text-xs bg-secondary-container px-2 py-1 rounded-lg">
              +12%
            </span>
          </div>
          <div>
            <p class="text-display-lg font-headline font-extrabold text-on-surface text-4xl">
              24
            </p>
            <p class="text-sm font-medium text-outline">Total Bookings Today</p>
          </div>
        </div>
        <div class="bg-surface-container-lowest p-6 rounded-[2rem] flex flex-col justify-between hover:bg-white transition-all">
          <div class="flex justify-between items-start mb-4">
            <div class="w-12 h-12 rounded-2xl bg-error-container flex items-center justify-center text-error">
              <span
                class="material-symbols-outlined"
                data-icon="pending_actions"
              >
                pending_actions
              </span>
            </div>
          </div>
          <div>
            <p class="text-display-lg font-headline font-extrabold text-on-surface text-4xl">
              08
            </p>
            <p class="text-sm font-medium text-outline">Pending Samples</p>
          </div>
        </div>
        <div class="bg-surface-container-lowest p-6 rounded-[2rem] flex flex-col justify-between hover:bg-white transition-all">
          <div class="flex justify-between items-start mb-4">
            <div class="w-12 h-12 rounded-2xl bg-secondary-fixed flex items-center justify-center text-on-secondary-container">
              <span class="material-symbols-outlined" data-icon="task_alt">
                task_alt
              </span>
            </div>
          </div>
          <div>
            <p class="text-display-lg font-headline font-extrabold text-on-surface text-4xl">
              15
            </p>
            <p class="text-sm font-medium text-outline">Completed Reports</p>
          </div>
        </div>
        <div class="bg-surface-container-lowest p-6 rounded-[2rem] flex flex-col justify-between hover:bg-white transition-all relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-0 group-hover:opacity-5 transition-opacity"></div>
          <div class="flex justify-between items-start mb-4">
            <div class="w-12 h-12 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
              <span class="material-symbols-outlined" data-icon="payments">
                payments
              </span>
            </div>
          </div>
          <div>
            <p class="text-display-lg font-headline font-extrabold text-on-surface text-4xl">
              $12.4k
            </p>
            <p class="text-sm font-medium text-outline">Monthly Revenue</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* <!-- Recent Bookings Table Section --> */}
        <div class="lg:col-span-2 space-y-6">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-headline font-bold text-on-surface">
              Recent Bookings
            </h3>
            <a
              class="text-primary text-sm font-semibold hover:underline"
              href="#"
            >
              View All
            </a>
          </div>
          <div class="bg-surface-container-lowest rounded-[2rem] overflow-hidden">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-surface-container-low">
                  <th class="px-6 py-4 text-[11px] font-label font-bold text-outline uppercase tracking-widest">
                    Booking ID
                  </th>
                  <th class="px-6 py-4 text-[11px] font-label font-bold text-outline uppercase tracking-widest">
                    Patient Name
                  </th>
                  <th class="px-6 py-4 text-[11px] font-label font-bold text-outline uppercase tracking-widest">
                    Test Type
                  </th>
                  <th class="px-6 py-4 text-[11px] font-label font-bold text-outline uppercase tracking-widest">
                    Status
                  </th>
                  <th class="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-surface-container">
                <tr class="hover:bg-surface-container-low transition-colors">
                  <td class="px-6 py-5 font-headline font-bold text-sm">
                    #BK-9021
                  </td>
                  <td class="px-6 py-5">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-[10px] font-bold text-primary">
                        JD
                      </div>
                      <span class="text-sm font-medium text-on-surface">
                        Johnathan Doe
                      </span>
                    </div>
                  </td>
                  <td class="px-6 py-5 text-sm text-outline-variant">
                    CBC with Differential
                  </td>
                  <td class="px-6 py-5">
                    <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-error-container text-on-error-container">
                      Pending
                    </span>
                  </td>
                  <td class="px-6 py-5 text-right">
                    <button class="text-outline hover:text-primary">
                      <span class="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr class="hover:bg-surface-container-low transition-colors">
                  <td class="px-6 py-5 font-headline font-bold text-sm">
                    #BK-9022
                  </td>
                  <td class="px-6 py-5">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-[10px] font-bold text-on-secondary-container">
                        SM
                      </div>
                      <span class="text-sm font-medium text-on-surface">
                        Sarah Miller
                      </span>
                    </div>
                  </td>
                  <td class="px-6 py-5 text-sm text-outline-variant">
                    Lipid Profile
                  </td>
                  <td class="px-6 py-5">
                    <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary-container">
                      Sample Collected
                    </span>
                  </td>
                  <td class="px-6 py-5 text-right">
                    <button class="text-outline hover:text-primary">
                      <span class="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr class="hover:bg-surface-container-low transition-colors">
                  <td class="px-6 py-5 font-headline font-bold text-sm">
                    #BK-9023
                  </td>
                  <td class="px-6 py-5">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-[10px] font-bold text-tertiary">
                        RW
                      </div>
                      <span class="text-sm font-medium text-on-surface">
                        Robert Wilson
                      </span>
                    </div>
                  </td>
                  <td class="px-6 py-5 text-sm text-outline-variant">
                    HbA1c Diabetes
                  </td>
                  <td class="px-6 py-5">
                    <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-error-container text-on-error-container">
                      Pending
                    </span>
                  </td>
                  <td class="px-6 py-5 text-right">
                    <button class="text-outline hover:text-primary">
                      <span class="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
                <tr class="hover:bg-surface-container-low transition-colors">
                  <td class="px-6 py-5 font-headline font-bold text-sm">
                    #BK-9024
                  </td>
                  <td class="px-6 py-5">
                    <div class="flex items-center gap-3">
                      <div class="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-[10px] font-bold text-primary">
                        EK
                      </div>
                      <span class="text-sm font-medium text-on-surface">
                        Emma Knight
                      </span>
                    </div>
                  </td>
                  <td class="px-6 py-5 text-sm text-outline-variant">
                    Liver Function Test
                  </td>
                  <td class="px-6 py-5">
                    <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-secondary-container text-on-secondary-container">
                      Sample Collected
                    </span>
                  </td>
                  <td class="px-6 py-5 text-right">
                    <button class="text-outline hover:text-primary">
                      <span class="material-symbols-outlined">more_vert</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <!-- Alerts & Contextual Panel --> */}
        <div class="space-y-6">
          <h3 class="text-xl font-headline font-bold text-on-surface">
            Urgent Alerts
          </h3>
          <div class="space-y-4">
            {/* <!-- Alert 1 --> */}
            <div class="p-5 rounded-[1.5rem] bg-error-container/30 border border-error/10">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-error text-white flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined" data-icon="emergency">
                    emergency
                  </span>
                </div>
                <div>
                  <h4 class="font-bold text-on-error-container text-sm">
                    Delayed Reports (03)
                  </h4>
                  <p class="text-xs text-on-error-container/80 mt-1 leading-relaxed">
                    Three PCR test reports are past their 24h turnaround time.
                    Immediate action required.
                  </p>
                  <button class="mt-3 text-xs font-bold text-error uppercase tracking-wider hover:underline">
                    Notify Lab Tech
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Alert 2 --> */}
            <div class="p-5 rounded-[1.5rem] bg-surface-container-lowest shadow-sm">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-primary-fixed text-primary flex items-center justify-center flex-shrink-0">
                  <span
                    class="material-symbols-outlined"
                    data-icon="inventory_2"
                  >
                    inventory_2
                  </span>
                </div>
                <div>
                  <h4 class="font-bold text-on-surface text-sm">
                    Pending Collections
                  </h4>
                  <p class="text-xs text-outline mt-1 leading-relaxed">
                    08 patients are currently waiting for sample collection in
                    the VIP lounge.
                  </p>
                  <div class="mt-4 flex -space-x-2">
                    <img
                      alt="Patient"
                      class="w-6 h-6 rounded-full border-2 border-white object-cover"
                      data-alt="close up of a person portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWl2KVBicKiBYqMo7cpdWlxCJvsskG3Yb0Y3YFouRMEADsTpxUpYkg-ye8OHPl4Nbd8Cxfedb0O-d3YbCCbJg6olv65VWUQDvDUxFShoWWbHougyHjr0tFz3E38fX8e0bnTUpya-P0mXW_s7snvuWP039vZ86FaKAIIdstKSz_xiX7GA00kBeNfoF-kf6I2Wsglv2NfCtSTC_0okkh5Qg0RIbvdVR76tkYGglClRnctmkI2_e5GAkGj1cdK6z_QhCjkK_7w0UuySc"
                    />
                    <img
                      alt="Patient"
                      class="w-6 h-6 rounded-full border-2 border-white object-cover"
                      data-alt="close up of a smiling woman"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm4Y4y86AzlQ2tB2H61eUq4Vuj4LAC5clGDVlPdm7Ie8aucNgCLjUHs55h3k9_wy0xiA8LwtiAR75b5bbGWNGYWgrrRxwua15hnFpuworQBikyahMUL90hCsY38Oi9uw8ASWTK-a0ArktQc7l8qa0jOt12I0VuJbiygTEG_qjx6rZl32qD1ARQSVwhX_pBDBnmtkvqQG3777BvkyUAlOaRCqrjzXrPbbI2grkjJMb1x_BCjef1LZSEJO6WnabARnwi1fO_Tq2oxt4"
                    />
                    <div class="w-6 h-6 rounded-full bg-surface-container-high border-2 border-white flex items-center justify-center text-[8px] font-bold">
                      +6
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Decorative Illustration Card --> */}
            <div class="relative overflow-hidden p-6 rounded-[2rem] bg-gradient-to-br from-primary to-primary-container text-white mt-8 h-48 flex flex-col justify-end">
              <img
                alt="Lab equipment background"
                class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40"
                data-alt="Modern high-tech laboratory equipment with cool blue clinical lighting and sterile environment"
                src="https://thumbs.dreamstime.com/b/chemistry-lab-various-glass-equipment-32765736.jpg?w=768"
              />
              <div class="relative z-10">
                <p class="text-xs font-label uppercase tracking-widest text-primary-fixed opacity-80">
                  Weekly Tip
                </p>
                <h4 class="text-lg font-headline font-bold mt-1">
                  Equipment Calibration Due
                </h4>
                <p class="text-xs text-white/80 mt-1">
                  GenX-900 Analyzer requires monthly calibration by Friday.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Contextual FAB (Only for main screens) --> */}
      <button class="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-primary text-white shadow-2xl shadow-primary/40 flex items-center justify-center hover:scale-110 transition-transform z-50">
        <span class="material-symbols-outlined text-3xl" data-icon="add">
          add
        </span>
      </button>
    </>
  );
}
