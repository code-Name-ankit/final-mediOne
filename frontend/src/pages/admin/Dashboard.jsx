import React from "react";

export default function Dashboard() {
  return (
    <>
      <div class="mt-16">
        {/* <!-- Header Section --> */}
        <div class="flex items-end justify-between">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-on-surface">
              Systems Overview
            </h2>
            <p class="text-on-surface-variant mt-1">
              Real-time clinical operations and network growth.
            </p>
          </div>
          <div class="flex gap-3">
            <button class="px-6 py-2.5 rounded-xl bg-surface-container-high text-on-primary-fixed-variant font-semibold text-sm transition-all hover:bg-surface-container-highest">
              Download Report
            </button>
            <button className="px-6 py-2.5 rounded-xl bg-on-primary-fixed-variant from-blue-600 to-indigo-700 text-white font-bold text-sm shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50">
              + Add Provider
            </button>
          </div>
        </div>

        {/* <!-- Summary Bento Grid --> */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-9">
          {/* <!-- Total Users --> */}
          <div class="bg-surface-container-lowest p-6 rounded-[1.5rem] flex flex-col justify-between hover:bg-surface-container transition-colors cursor-default">
            <div class="flex justify-between items-start">
              <span class="p-2 rounded-xl bg-blue-50 text-blue-700 material-symbols-outlined">
                group
              </span>
              <span class="text-secondary text-xs font-bold flex items-center">
                +12%
                <span class="material-symbols-outlined text-[14px]">
                  trending_up
                </span>
              </span>
            </div>
            <div class="mt-4">
              <p class="text-label-md text-on-surface-variant font-bold tracking-wider uppercase text-[10px]">
                Total Patients
              </p>
              <h3 class="text-2xl font-extrabold text-on-surface tracking-tight">
                12,482
              </h3>
            </div>
          </div>
          {/* <!-- Pharmacies --> */}
          <div class="bg-surface-container-lowest p-6 rounded-[1.5rem] flex flex-col justify-between hover:bg-surface-container transition-colors cursor-default">
            <div class="flex justify-between items-start">
              <span class="p-2 rounded-xl bg-emerald-50 text-secondary material-symbols-outlined">
                pill
              </span>
              <span class="text-secondary text-xs font-bold flex items-center">
                +4%
                <span class="material-symbols-outlined text-[14px]">
                  trending_up
                </span>
              </span>
            </div>
            <div class="mt-4">
              <p class="text-label-md text-on-surface-variant font-bold tracking-wider uppercase text-[10px]">
                Pharmacies
              </p>
              <h3 class="text-2xl font-extrabold text-on-surface tracking-tight">
                854
              </h3>
            </div>
          </div>
          {/* <!-- Labs --> */}
          <div class="bg-surface-container-lowest p-6 rounded-[1.5rem] flex flex-col justify-between hover:bg-surface-container transition-colors cursor-default">
            <div class="flex justify-between items-start">
              <span class="p-2 rounded-xl bg-purple-50 text-purple-700 material-symbols-outlined">
                biotech
              </span>
              <span class="text-on-surface-variant text-xs font-bold flex items-center">
                0%
                <span class="material-symbols-outlined text-[14px]">
                  horizontal_rule
                </span>
              </span>
            </div>
            <div class="mt-4">
              <p class="text-label-md text-on-surface-variant font-bold tracking-wider uppercase text-[10px]">
                Active Labs
              </p>
              <h3 class="text-2xl font-extrabold text-on-surface tracking-tight">
                312
              </h3>
            </div>
          </div>
          {/* <!-- Doctors --> */}
          <div class="bg-surface-container-lowest p-6 rounded-[1.5rem] flex flex-col justify-between hover:bg-surface-container transition-colors cursor-default">
            <div class="flex justify-between items-start">
              <span class="p-2 rounded-xl bg-amber-50 text-amber-700 material-symbols-outlined">
                person_pin_circle
              </span>
              <span class="text-error text-xs font-bold flex items-center">
                -2%
                <span class="material-symbols-outlined text-[14px]">
                  trending_down
                </span>
              </span>
            </div>
            <div class="mt-4">
              <p class="text-label-md text-on-surface-variant font-bold tracking-wider uppercase text-[10px]">
                Providers
              </p>
              <h3 class="text-2xl font-extrabold text-on-surface tracking-tight">
                2,109
              </h3>
            </div>
          </div>
          {/* <!-- Bookings --> */}
          <div class="bg-surface-container-lowest p-6 rounded-[1.5rem] flex flex-col justify-between hover:bg-surface-container transition-colors cursor-default">
            <div class="flex justify-between items-start">
              <span class="p-2 rounded-xl bg-blue-100 text-primary material-symbols-outlined">
                event_note
              </span>
              <span class="text-secondary text-xs font-bold flex items-center">
                +24%
                <span class="material-symbols-outlined text-[14px]">
                  trending_up
                </span>
              </span>
            </div>
            <div class="mt-4">
              <p class="text-label-md text-on-surface-variant font-bold tracking-wider uppercase text-[10px]">
                Monthly Bookings
              </p>
              <h3 class="text-2xl font-extrabold text-on-surface tracking-tight">
                5,920
              </h3>
            </div>
          </div>
        </div>

        {/* <!-- Content Row 2: Charts & Trends --> */}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-9">
          {/* <!-- Large Chart Placeholder --> */}
          <div class="lg:col-span-2 bg-surface-container-lowest p-8 rounded-[2rem]">
            <div class="flex items-center justify-between mb-8">
              <div>
                <h3 class="text-xl font-bold text-on-surface">
                  Network Activity
                </h3>
                <p class="text-on-surface-variant text-sm">
                  Patient engagement vs Provider performance
                </p>
              </div>
              <div class="flex bg-surface-container-low p-1 rounded-lg">
                <button class="px-4 py-1.5 rounded-md bg-white shadow-sm text-xs font-bold text-primary">
                  Daily
                </button>
                <button class="px-4 py-1.5 rounded-md text-xs font-bold text-on-surface-variant">
                  Weekly
                </button>
                <button class="px-4 py-1.5 rounded-md text-xs font-bold text-on-surface-variant">
                  Monthly
                </button>
              </div>
            </div>
            <div class="relative h-[300px] flex items-end gap-2 group">
              {/* <!-- Abstract "Chart" using stylized bars and gradients --> */}
              <div class="flex-1 bg-surface-container-low rounded-t-xl h-[40%] transition-all hover:h-[50%] hover:bg-primary-container relative group/bar">
                <div class="absolute -top-10 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                  4.2k Active
                </div>
              </div>
              <div class="flex-1 bg-surface-container-low rounded-t-xl h-[65%] transition-all hover:h-[75%] hover:bg-primary-container"></div>
              <div class="flex-1 bg-surface-container-low rounded-t-xl h-[55%] transition-all hover:h-[65%] hover:bg-primary-container"></div>
              <div class="flex-1 bg-surface-container-low rounded-t-xl h-[85%] transition-all hover:h-[95%] hover:bg-primary-container"></div>
              <div class="flex-1 bg-surface-container-low rounded-t-xl h-[70%] transition-all hover:h-[80%] hover:bg-primary-container"></div>
              <div class="flex-1 bg-primary rounded-t-xl h-[95%] transition-all hover:h-[100%]"></div>
              <div class="flex-1 bg-surface-container-low rounded-t-xl h-[60%] transition-all hover:h-[70%] hover:bg-primary-container"></div>
              <div class="flex-1 bg-surface-container-low rounded-t-xl h-[45%] transition-all hover:h-[55%] hover:bg-primary-container"></div>
              <div class="flex-1 bg-surface-container-low rounded-t-xl h-[35%] transition-all hover:h-[45%] hover:bg-primary-container"></div>
              <div class="flex-1 bg-surface-container-low rounded-t-xl h-[80%] transition-all hover:h-[90%] hover:bg-primary-container"></div>
              <div class="flex-1 bg-surface-container-low rounded-t-xl h-[65%] transition-all hover:h-[75%] hover:bg-primary-container"></div>
              <div class="flex-1 bg-surface-container-low rounded-t-xl h-[75%] transition-all hover:h-[85%] hover:bg-primary-container"></div>
            </div>
            <div class="flex justify-between mt-6 px-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
            </div>
          </div>
          {/* <!-- Growth Trends Bento Cell --> */}
          <div class="bg-primary p-8 rounded-[2rem] text-white relative overflow-hidden flex flex-col justify-between">
            <div class="relative z-10">
              <h3 class="text-xl font-bold">Quarterly Target</h3>
              <p class="text-primary-fixed-dim text-sm mt-2 opacity-80">
                You've reached 84% of your network expansion goal.
              </p>
            </div>
            <div class="relative z-10 mt-12">
              <div class="flex items-baseline gap-2">
                <span class="text-5xl font-extrabold tracking-tighter">
                  84%
                </span>
                <span class="text-primary-fixed-dim text-lg">Growth</span>
              </div>
              <div class="w-full bg-white/10 h-3 rounded-full mt-6 overflow-hidden">
                <div class="bg-secondary-container h-full w-[84%]"></div>
              </div>
            </div>
            <div class="absolute -right-12 -bottom-12 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* <!-- Content Row 3: Activity Feed & Management --> */}
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-9">
          {/* <!-- Activity Feed --> */}
          <div class="xl:col-span-2 space-y-4">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-xl font-bold text-on-surface">
                Recent System Activity
              </h3>
              <button class="text-primary font-bold text-sm hover:underline">
                View All
              </button>
            </div>
            <div class="space-y-3">
              {/* <!-- Activity Item 1 --> */}
              <div class="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl group hover:bg-surface-container-lowest transition-all">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined">person_add</span>
                  </div>
                  <div>
                    <p class="text-sm font-bold text-on-surface">
                      New Patient Registration
                    </p>
                    <p class="text-xs text-on-surface-variant">
                      Michael Thorne just completed onboarding.
                    </p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-xs font-bold text-on-surface-variant">
                    2 mins ago
                  </p>
                  <span class="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold mt-1 inline-block">
                    Active
                  </span>
                </div>
              </div>
              {/* <!-- Activity Item 2 --> */}
              <div class="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl group hover:bg-surface-container-lowest transition-all">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined">
                      pending_actions
                    </span>
                  </div>
                  <div>
                    <p class="text-sm font-bold text-on-surface">
                      Doctor Verification Pending
                    </p>
                    <p class="text-xs text-on-surface-variant">
                      Dr. Elena Rodriguez uploaded credentials for review.
                    </p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-xs font-bold text-on-surface-variant">
                    14 mins ago
                  </p>
                  <span class="px-3 py-1 rounded-full bg-error-container text-on-error-container text-[10px] font-bold mt-1 inline-block">
                    Urgent
                  </span>
                </div>
              </div>
              {/* <!-- Activity Item 3 --> */}
              <div class="flex items-center justify-between p-5 bg-surface-container-low rounded-2xl group hover:bg-surface-container-lowest transition-all">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 group-hover:bg-purple-700 group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined">shopping_bag</span>
                  </div>
                  <div>
                    <p class="text-sm font-bold text-on-surface">
                      Pharmacy Order Confirmed
                    </p>
                    <p class="text-xs text-on-surface-variant">
                      City Center Pharmacy received order #PX-9921.
                    </p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-xs font-bold text-on-surface-variant">
                    1 hour ago
                  </p>
                  <span class="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-[10px] font-bold mt-1 inline-block">
                    Processed
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            {/* <!-- Provider Approvals --> */}
            <div class="bg-surface-container-lowest p-6 rounded-[2rem]">
              <h3 class="text-lg font-bold mb-6">Pending Approvals</h3>
              <div class="space-y-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <img
                      class="w-10 h-10 rounded-full object-cover"
                      data-alt="portrait of a young doctor in a white coat with a friendly expression"
                      src="https://thumbs.dreamstime.com/b/asian-doctor-studio-portrait-46241219.jpg?w=768"
                    />
                    <div>
                      <p class="text-xs font-bold">Dr. James Wilson</p>
                      <p class="text-[10px] text-on-surface-variant">
                        General Surgeon
                      </p>
                    </div>
                  </div>
                  <button class="p-2 rounded-lg bg-primary-fixed text-primary hover:bg-primary hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <img
                      class="w-10 h-10 rounded-full object-cover"
                      data-alt="Modern facade of an upscale clinical pharmacy with green cross sign"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo97rAzDytM_3ebedaW6v_dISijo63M5uTn3fn3HLSClQJPR0dO8LUq7N0BPnv5MfrcBT22IWVZoyP_HZOtX8R-xZn6tVE1Z8lc7I2ZR_MvjLjhwj4cUkCytewBnNi5yS4rbSDquCiiPLaW5PyJX0qitau1PRZAiMZCrqDLg7zrl_ePa6JGyC6HZmL9MQ6A7NiDdfHUnPccgE17RjrToCIvkoN8Hpwn9a7aRXWYEgvOJGmGDOnkuPRGLlDBCMZWSjTvqNwyeZ5KHg"
                    />
                    <div>
                      <p class="text-xs font-bold">WellCare Pharmacy</p>
                      <p class="text-[10px] text-on-surface-variant">
                        Retail Partner
                      </p>
                    </div>
                  </div>
                  <button class="p-2 rounded-lg bg-primary-fixed text-primary hover:bg-primary hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-sm">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
              <button class="w-full mt-8 py-3 bg-surface-container-low rounded-xl text-xs font-bold hover:bg-surface-container transition-colors">
                Review All 14 Pendings
              </button>
            </div>

            {/* <!-- Health Tip / System Status --> */}
            <div class="bg-secondary-container/20 p-6 rounded-[2rem] border border-secondary/10">
              <div class="flex items-center gap-3 mb-4">
                <span class="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                <p class="text-sm font-bold text-on-secondary-container">
                  System Health: Optimal
                </p>
              </div>
              <p class="text-xs text-on-secondary-container opacity-80 leading-relaxed">
                Server latency is currently 24ms. All payment gateways and
                pharmacy APIs are operational.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
