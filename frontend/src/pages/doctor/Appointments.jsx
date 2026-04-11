import React from "react";

export default function Apoiments() {
  return (
    <>
      <main class="mt-16">
        {/* <!-- Header Section --> */}
        <div class="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 class="font-headline text-display-lg text-on-surface font-bold tracking-tight mb-1">
              Appointments
            </h2>
            <p class="font-body text-body-lg text-on-surface-variant max-w-lg">
              Manage your daily consultation schedule and patient interactions
              with empathetic precision.
            </p>
          </div>
          <div class="flex gap-3">
            <button class="px-6 py-3 rounded-xl bg-surface-container-high text-on-primary-fixed-variant font-semibold text-sm flex items-center gap-2 hover:bg-surface-variant transition-colors">
              <span class="material-symbols-outlined text-lg">filter_list</span>
              Filter Status
            </button>
            <button class="px-6 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary font-semibold text-sm shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center gap-2">
              <span class="material-symbols-outlined text-lg">add</span>
              New Booking
            </button>
          </div>
        </div>

        {/* <!-- Appointment Table Container --> */}
        <div class="bg-surface-container-lowest rounded-[2rem] overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-surface-container-low">
                  <th class="px-8 py-5 font-label text-label-md text-on-surface-variant uppercase tracking-wider">
                    ID
                  </th>
                  <th class="px-8 py-5 font-label text-label-md text-on-surface-variant uppercase tracking-wider">
                    Patient Name
                  </th>
                  <th class="px-8 py-5 font-label text-label-md text-on-surface-variant uppercase tracking-wider">
                    Date &amp; Time
                  </th>
                  <th class="px-8 py-5 font-label text-label-md text-on-surface-variant uppercase tracking-wider">
                    Consultation
                  </th>
                  <th class="px-8 py-5 font-label text-label-md text-on-surface-variant uppercase tracking-wider">
                    Status
                  </th>
                  <th class="px-8 py-5 font-label text-label-md text-on-surface-variant uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-surface-container-low">
                {/* <!-- Active Appointment --> */}
                <tr class="hover:bg-surface-container-low transition-colors group">
                  <td class="px-8 py-6 text-sm font-medium text-on-surface-variant">
                    #APT-2940
                  </td>
                  <td class="px-8 py-6">
                    <div class="flex items-center gap-3">
                      <div class="h-10 w-10 rounded-full bg-primary-fixed overflow-hidden">
                        <img
                          alt="Sarah Jenkins"
                          class="w-full h-full object-cover"
                          data-alt="close up headshot of a young woman with a calm expression against a neutral studio background"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDolhlTQvNMPg628n0PzneQjqgzhUJq4BiWVngDBt-khpR7rXJh0kWwV7z2SNXREcA_ezktFVTLoJKA-OTG23_pLrD6wu9CqfnmfqYqhly99qfhqKg9cqb0UosD743syGkNTGtKO_MvGlRCsanKjSaYLTnx_jrUTr13mO_Pvbp6jkNwsYLTOOvi-w1VEriIFU0Gtm9fS8PvWKXAF1YvcN59hLALhQB34rA2rpiyRc4SA1I1pgg6pvTJpVpslk8RQr1gA39BG32uk54"
                        />
                      </div>
                      <div>
                        <div class="font-semibold text-on-surface">
                          Sarah Jenkins
                        </div>
                        <div class="text-xs text-on-surface-variant">
                          General Checkup
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-8 py-6">
                    <div class="text-sm font-medium text-on-surface">
                      Today, 10:30 AM
                    </div>
                    <div class="text-xs text-on-surface-variant">
                      In 15 minutes
                    </div>
                  </td>
                  <td class="px-8 py-6">
                    <div class="flex items-center gap-2 text-primary font-medium">
                      <span
                        class="material-symbols-outlined"
                        data-weight="fill"
                      >
                        video_chat
                      </span>
                      <span class="text-xs">Video Call</span>
                    </div>
                  </td>
                  <td class="px-8 py-6">
                    <span class="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold">
                      Confirmed
                    </span>
                  </td>
                  <td class="px-8 py-6 text-right">
                    <button class="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary text-xs font-bold shadow-md hover:shadow-lg transition-all">
                      Start Consultation
                    </button>
                  </td>
                </tr>
                {/* <!-- Pending Appointment --> */}
                <tr class="hover:bg-surface-container-low transition-colors">
                  <td class="px-8 py-6 text-sm font-medium text-on-surface-variant">
                    #APT-2941
                  </td>
                  <td class="px-8 py-6">
                    <div class="flex items-center gap-3">
                      <div class="h-10 w-10 rounded-full bg-tertiary-fixed overflow-hidden">
                        <img
                          alt="David Miller"
                          class="w-full h-full object-cover"
                          data-alt="portrait of a middle aged man with glasses and a friendly look in a soft natural light setting"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxmKOqrL0sLASqmoR9rhLpN3VIccUVch9OkY8xssX5SrFiTkx5iAWSAGNesHY_-WDvQwfZNgETyLrw6vzrf96-Ex28IlUIDe9Zq5FIGKNaYENOEzN9E2L6g_oQDU7zBFco_5Y1QYbkODXKiK7m3sza4UciJsn5zJN_2PbWYjMB-he17L8sixNrnsi6ufVgydCssLG7e0hKhDziaZD6fco8ro8ujRTRvtpgdXXVw_BTVMFQap1Caat7gBOogBi5oxJbloxh-FcWlM4"
                        />
                      </div>
                      <div>
                        <div class="font-semibold text-on-surface">
                          David Miller
                        </div>
                        <div class="text-xs text-on-surface-variant">
                          Follow-up
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-8 py-6">
                    <div class="text-sm font-medium text-on-surface">
                      Today, 11:45 AM
                    </div>
                  </td>
                  <td class="px-8 py-6">
                    <div class="flex items-center gap-2 text-on-surface-variant font-medium">
                      <span class="material-symbols-outlined">forum</span>
                      <span class="text-xs">Chat Session</span>
                    </div>
                  </td>
                  <td class="px-8 py-6">
                    <span class="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold">
                      Pending
                    </span>
                  </td>
                  <td class="px-8 py-6 text-right space-x-2">
                    <button class="text-secondary font-bold text-xs hover:underline">
                      Accept
                    </button>
                    <button class="text-error font-bold text-xs hover:underline">
                      Reject
                    </button>
                  </td>
                </tr>
                {/* <!-- Another Entry --> */}
                <tr class="hover:bg-surface-container-low transition-colors">
                  <td class="px-8 py-6 text-sm font-medium text-on-surface-variant">
                    #APT-2942
                  </td>
                  <td class="px-8 py-6">
                    <div class="flex items-center gap-3">
                      <div class="h-10 w-10 rounded-full bg-secondary-fixed overflow-hidden">
                        <img
                          alt="Elena Rodriguez"
                          class="w-full h-full object-cover"
                          data-alt="close up headshot of a smiling young woman with bright eyes and clear skin in soft day light"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdTWGRt4DREaEzEHXrRvUTb9p-QW6QSYbMW7kWyqM9CqaGjmiqVKAp5B5_AqdZe_1Vbet0z7erwcDHEQAslS__Nq1PbWWqgKDBDorh525uecKaGZD21FGSoCeR-gL7ILYEIKAgrnz1O1Yw2SlEowzuHTz_fF77CmkQyUXO7MySOyW25Zq6amhLFHctWNcAewQcOOifnbSkJsqu-nYx91URb-__EMHC6Na5yfO4tOdBUdNSAq0pz1U4ynq49D9Tbe9nQtqzQ39CIk4"
                        />
                      </div>
                      <div>
                        <div class="font-semibold text-on-surface">
                          Elena Rodriguez
                        </div>
                        <div class="text-xs text-on-surface-variant">
                          Dermatology Consult
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-8 py-6">
                    <div class="text-sm font-medium text-on-surface">
                      Tomorrow, 09:00 AM
                    </div>
                  </td>
                  <td class="px-8 py-6">
                    <div class="flex items-center gap-2 text-primary font-medium">
                      <span
                        class="material-symbols-outlined"
                        data-weight="fill"
                      >
                        video_chat
                      </span>
                      <span class="text-xs">Video Call</span>
                    </div>
                  </td>
                  <td class="px-8 py-6">
                    <span class="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold">
                      Confirmed
                    </span>
                  </td>
                  <td class="px-8 py-6 text-right">
                    <button class="p-2 rounded-full hover:bg-surface-container-high transition-colors">
                      <span class="material-symbols-outlined text-on-surface-variant">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
                {/* <!-- Completed Entry --> */}
                <tr class="hover:bg-surface-container-low transition-colors bg-surface-container-low/30 opacity-75">
                  <td class="px-8 py-6 text-sm font-medium text-on-surface-variant">
                    #APT-2938
                  </td>
                  <td class="px-8 py-6">
                    <div class="flex items-center gap-3">
                      <div class="h-10 w-10 rounded-full bg-surface-variant overflow-hidden grayscale">
                        <img
                          alt="Michael Chen"
                          class="w-full h-full object-cover"
                          data-alt="close up of a professional man in casual clothing looking thoughtfully into the camera"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuARbkfY3eYnnUQDvDUxFShoWWbHougyHjr0tFz3E38fX8e0bnTUpya-P0mXW-KRGnaCYM_MDZ0o4xerlepIgKcbQpbxpWWtx3m1QnZmF7Oe2gY1JtGzrWwxyzz5aofNzK_u9u_85Qc-Jz5mIPqOqqGnNY7FE1NY4rlpZ6Io88ksxgXK9vbV4vJq8IrcJPeYkyEKi5ylgPOa82CSZ35cYHyuaNapcUPl4s7-Xm6GGGitCFPibKkIP-LmyXFc5G5h9p2hzba11yljGgc"
                        />
                      </div>
                      <div>
                        <div class="font-semibold text-on-surface">
                          Michael Chen
                        </div>
                        <div class="text-xs text-on-surface-variant">
                          Routine Labs Review
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-8 py-6">
                    <div class="text-sm font-medium text-on-surface">
                      Yesterday, 04:30 PM
                    </div>
                  </td>
                  <td class="px-8 py-6">
                    <div class="flex items-center gap-2 text-on-surface-variant font-medium">
                      <span class="material-symbols-outlined">forum</span>
                      <span class="text-xs">Chat Session</span>
                    </div>
                  </td>
                  <td class="px-8 py-6">
                    <span class="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-semibold">
                      Completed
                    </span>
                  </td>
                  <td class="px-8 py-6 text-right">
                    <button class="text-primary font-bold text-xs hover:underline">
                      View Summary
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- Table Pagination/Footer --> */}
          <div class="px-8 py-6 bg-surface-container-low/50 flex items-center justify-between border-t border-surface-variant/20">
            <div class="text-sm text-on-surface-variant">
              Showing <span class="font-semibold text-on-surface">1-4</span> of{" "}
              <span class="font-semibold text-on-surface">48</span> appointments
            </div>
            <div class="flex gap-2">
              <button class="p-2 rounded-lg border border-outline-variant/30 hover:bg-white transition-colors disabled:opacity-30">
                <span class="material-symbols-outlined">chevron_left</span>
              </button>
              <button class="px-4 py-2 rounded-lg bg-primary text-on-primary text-xs font-bold">
                1
              </button>
              <button class="px-4 py-2 rounded-lg hover:bg-white text-xs font-bold">
                2
              </button>
              <button class="px-4 py-2 rounded-lg hover:bg-white text-xs font-bold">
                3
              </button>
              <button class="p-2 rounded-lg border border-outline-variant/30 hover:bg-white transition-colors">
                <span class="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* --- LEFT: SCHEDULE EFFICIENCY (2/3 Width) --- */}
          <div class="md:col-span-2 bg-surface-container-lowest p-8 rounded-[2rem] relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <div class="relative z-10">
              <h3 class="font-headline text-headline-md font-bold mb-2">
                Schedule Efficiency
              </h3>
              <p class="text-on-surface-variant text-sm mb-8">
                You have completed 92% of scheduled appointments this week.
              </p>
              <div class="flex items-end gap-4 h-32">
                <div class="flex-1 bg-primary-fixed-dim rounded-t-xl h-[40%]"></div>
                <div class="flex-1 bg-primary-fixed-dim rounded-t-xl h-[60%]"></div>
                <div class="flex-1 bg-primary-fixed-dim rounded-t-xl h-[85%]"></div>
                <div class="flex-1 bg-primary rounded-t-xl h-[95%]"></div>
                <div class="flex-1 bg-primary-fixed-dim rounded-t-xl h-[70%]"></div>
                <div class="flex-1 bg-primary-fixed-dim rounded-t-xl h-[55%]"></div>
                <div class="flex-1 bg-primary-fixed-dim rounded-t-xl h-[80%]"></div>
              </div>
            </div>
            {/* <div class="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
              <img
                alt="Data Illustration"
                class="w-full h-full object-cover"
                data-alt="clean minimal chart illustration with flowing data lines and clinical aesthetic blue color palette"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCij6ZpIV3vG_33iyXttyxcv9NkMvtnKPDHHH3JfF6ACgXoJFh_tFmY76geZDLvspmytoRkScv1Y5hPE8zb-4fo1fD0YzQxmNwkIyJ71PbWWqgKDBDorh525uecKaGZD21FGSoCeR-xFh3ORpaNtN4OhMuZS7U5xGnCAoN1X9IyOCOjH-uhD-VwkRQV_p2pzDwTS9er9YY7jOwewpzju3WG656Qf6Tb6MBm0urwJkWNNisNYXlNgiazWW2G3oPWrI_ydY3yNBf1dRkrIyyABQ"
              />
            </div> */}
          </div>

          {/* --- RIGHT: PATIENT FEEDBACK (1/3 Width) --- */}
          <div className="bg-gradient-to-br from-secondary to-on-secondary-container p-8 rounded-[2rem] text-on-secondary flex flex-col justify-center items-center text-center shadow-xl shadow-secondary/20">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                health_and_safety
              </span>
            </div>

            <h3 className="text-xl font-bold mb-2">Patient Feedback</h3>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed italic px-2">
              "Excellent communication and timely responses during my video
              consult."
            </p>

            <div className="flex gap-1 text-amber-400">
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
          </div>
        </div>
        
      </main>
    </>
  );
}
