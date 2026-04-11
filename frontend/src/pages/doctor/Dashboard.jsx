import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="pt-16">
        {/* <!-- Welcome Header --> */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-5xl font-extrabold font-headline tracking-tight text-on-surface">
              Hello, Elena
            </h2>
            <p className="text-on-surface-variant mt-2 text-lg">
              You have{" "}
              <span className="font-bold text-primary">12 appointments</span> and 4
              pending consultations today.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-surface-container-high text-on-primary-fixed-variant px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-surface-container-highest transition-all flex items-center gap-2">
              <span
                className="material-symbols-outlined text-lg"
                data-icon="download"
              >
                download
              </span>
              Reports
            </button>
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg" data-icon="add">
                add
              </span>
              New Consultation
            </button>
          </div>
        </div>

        {/* <!-- Metric Cards (The Grid) --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-surface-container-lowest p-6 rounded-xl transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary-fixed rounded-lg text-primary">
                <span
                  className="material-symbols-outlined"
                  data-icon="calendar_month"
                >
                  calendar_month
                </span>
              </div>
              <span className="text-[10px] font-bold text-secondary bg-secondary-container/20 px-2 py-1 rounded-full">
                +12%
              </span>
            </div>
            <p className="text-label-md text-on-surface-variant font-medium tracking-wider uppercase text-[10px]">
              Today's Appointments
            </p>
            <h3 className="text-3xl font-bold font-headline mt-1">24</h3>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-tertiary-fixed rounded-lg text-tertiary">
                <span
                  className="material-symbols-outlined"
                  data-icon="pending_actions"
                >
                  pending_actions
                </span>
              </div>
              <span className="text-[10px] font-bold text-error bg-error-container/20 px-2 py-1 rounded-full">
                Urgent
              </span>
            </div>
            <p className="text-label-md text-on-surface-variant font-medium tracking-wider uppercase text-[10px]">
              Pending Consults
            </p>
            <h3 className="text-3xl font-bold font-headline mt-1">04</h3>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-secondary-container rounded-lg text-on-secondary-container">
                <span
                  className="material-symbols-outlined"
                  data-icon="check_circle"
                >
                  check_circle
                </span>
              </div>
              <span className="text-[10px] font-bold text-secondary bg-secondary-container/20 px-2 py-1 rounded-full">
                Target Met
              </span>
            </div>
            <p className="text-label-md text-on-surface-variant font-medium tracking-wider uppercase text-[10px]">
              Completed
            </p>
            <h3 className="text-3xl font-bold font-headline mt-1">18</h3>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary-container/10 rounded-lg text-primary">
                <span className="material-symbols-outlined" data-icon="payments">
                  payments
                </span>
              </div>
              <span className="text-[10px] font-bold text-secondary bg-secondary-container/20 px-2 py-1 rounded-full">
                +8% vs Prev
              </span>
            </div>
            <p className="text-label-md text-on-surface-variant font-medium tracking-wider uppercase text-[10px]">
              Today's Earnings
            </p>
            <h3 className="text-3xl font-bold font-headline mt-1">$3,840</h3>
          </div>
        </div>

        {/* <!-- Main Dashboard Layout --> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <!-- Schedule Preview (2/3 width) --> */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface-container-lowest rounded-xl p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold font-headline">
                  Today's Schedule
                </h3>
                <button className="text-primary text-sm font-semibold hover:underline">
                  View Calendar
                </button>
              </div>
              <div className="space-y-4">
                {/* <!-- Slot 1 --> */}
                <div className="group flex items-center p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-all">
                  <div className="w-20 text-center border-r border-outline-variant pr-4">
                    <p className="text-sm font-bold text-on-surface">09:30</p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-medium">
                      AM
                    </p>
                  </div>
                  <div className="flex-1 px-6">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-on-surface">
                        Marcus Holloway
                      </h4>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-100 uppercase">
                        Video
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      Post-surgery Checkup • Case #8821
                    </p>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg transition-all">
                    Start Call
                  </button>
                </div>
                {/* <!-- Slot 2 --> */}
                <div className="group flex items-center p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-all">
                  <div className="w-20 text-center border-r border-outline-variant pr-4">
                    <p className="text-sm font-bold text-on-surface">10:45</p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-medium">
                      AM
                    </p>
                  </div>
                  <div className="flex-1 px-6">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-on-surface">Sarah Chen</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-100 uppercase">
                        Chat
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      Prescription Renewal • Case #9012
                    </p>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg transition-all">
                    Open Chat
                  </button>
                </div>
                {/* <!-- Slot 3 (Active/Upcoming) --> */}
                <div className="group flex items-center p-4 rounded-xl bg-primary-fixed/30 border border-primary/10 transition-all relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                  <div className="w-20 text-center border-r border-primary/20 pr-4">
                    <p className="text-sm font-bold text-primary">12:00</p>
                    <p className="text-[10px] text-primary/70 uppercase font-medium">
                      PM
                    </p>
                  </div>
                  <div className="flex-1 px-6">
                    <div className="flex items-center gap-3">
                      <h4 className="font-bold text-on-surface">Jonathan Wick</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-bold uppercase">
                        In-Person
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      General Cardiology Consult • Case #9115
                    </p>
                  </div>
                  <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-1 rounded">
                    UP NEXT
                  </span>
                </div>
                {/* <!-- Slot 4 --> */}
                <div className="group flex items-center p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-all">
                  <div className="w-20 text-center border-r border-outline-variant pr-4">
                    <p className="text-sm font-bold text-on-surface">02:30</p>
                    <p className="text-[10px] text-on-surface-variant uppercase font-medium">
                      PM
                    </p>
                  </div>
                  <div className="flex-1 px-6">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-on-surface">
                        Elena Rodriguez
                      </h4>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold border border-blue-100 uppercase">
                        Video
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      Blood Test Results Review • Case #8954
                    </p>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg transition-all">
                    Start Call
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Recent Activity (1/3 width) --> */}
          <div className="space-y-8">
            <div className="bg-surface-container-lowest rounded-xl p-8 h-full">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold font-headline">
                  Recent Patient Activity
                </h3>
                <button className="text-outline text-lg">
                  <span
                    className="material-symbols-outlined"
                    data-icon="more_horiz"
                  >
                    more_horiz
                  </span>
                </button>
              </div>
              <div className="space-y-8 relative">
                {/* <!-- Timeline line --> */}
                <div className="absolute left-[1.125rem] top-2 bottom-2 w-[1px] bg-outline-variant/30"></div>
                {/* <!-- Activity 1 --> */}
                <div className="relative flex gap-4">
                  <div className="z-10 w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span
                      className="material-symbols-outlined text-lg"
                      data-icon="lab_research"
                    >
                      lab_research
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-on-surface font-semibold">
                      New Lab Results
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Patient{" "}
                      <span className="text-primary font-medium">Lydia Martin</span>{" "}
                      uploaded new CBC reports.
                    </p>
                    <span className="text-[10px] text-outline font-medium mt-1 block">
                      12 MINS AGO
                    </span>
                  </div>
                </div>
                {/* <!-- Activity 2 --> */}
                <div className="relative flex gap-4">
                  <div className="z-10 w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
                    <span
                      className="material-symbols-outlined text-lg"
                      data-icon="medication"
                    >
                      medication
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-on-surface font-semibold">
                      Prescription Acknowledged
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Pharmacy confirmed receipt for{" "}
                      <span className="text-primary font-medium">David Miller</span>
                      .
                    </p>
                    <span className="text-[10px] text-outline font-medium mt-1 block">
                      45 MINS AGO
                    </span>
                  </div>
                </div>
                {/* <!-- Activity 3 --> */}
                <div className="relative flex gap-4">
                  <div className="z-10 w-9 h-9 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
                    <span
                      className="material-symbols-outlined text-lg"
                      data-icon="mail"
                    >
                      mail
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-on-surface font-semibold">
                      Medical Query
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Patient{" "}
                      <span className="text-primary font-medium">Henry Cavill</span>{" "}
                      sent a message about dosage.
                    </p>
                    <span className="text-[10px] text-outline font-medium mt-1 block">
                      2 HOURS AGO
                    </span>
                  </div>
                </div>
                {/* <!-- Activity 4 --> */}
                <div className="relative flex gap-4">
                  <div className="z-10 w-9 h-9 rounded-full bg-error-container flex items-center justify-center text-on-error-container">
                    <span
                      className="material-symbols-outlined text-lg"
                      data-icon="emergency_home"
                    >
                      emergency_home
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-on-surface font-semibold">
                      Critical Alert
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      High blood pressure recorded for{" "}
                      <span className="text-error font-bold">Arthur Morgan</span>.
                    </p>
                    <span className="text-[10px] text-outline font-medium mt-1 block">
                      5 HOURS AGO
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-10 py-3 rounded-xl border border-outline-variant text-sm font-semibold text-on-surface-variant hover:bg-surface-container-low transition-all">
                View All Activity
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Health Trends Bento Section --> */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 bg-gradient-to-br from-secondary to-secondary-container rounded-xl p-8 text-on-secondary flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <h4 className="text-2xl font-bold font-headline mb-2 leading-tight">
                Patient Outcome Efficiency
              </h4>
              <p className="text-sm opacity-90">
                Your recovery success rate has increased by 14% this month.
              </p>
            </div>
            <div className="mt-8 relative z-10">
              <span className="text-5xl font-extrabold">98.2%</span>
              <p className="text-[10px] uppercase tracking-widest font-bold mt-2">
                Personal Score
              </p>
            </div>
            <span
              className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] opacity-10 group-hover:scale-110 transition-transform duration-700"
              data-icon="trending_up"
            >
              trending_up
            </span>
          </div>
          <div className="md:col-span-2 bg-surface-container-lowest rounded-xl p-8 flex gap-8 items-center">
            <div className="flex-1">
              <h4 className="text-xl font-bold font-headline mb-2">
                Insight: Seasonal Flu Spikes
              </h4>
              <p className="text-on-surface-variant text-sm mb-6">
                Local analytics show a 30% increase in respiratory complaints
                this week. Consider prioritizing these slots.
              </p>
              <div className="flex gap-4">
                <div className="flex -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    data-alt="portrait of a young man with a slight beard"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe5rXO6D3vb2kAz1itI55UrQOYzt1iFPZYx0AXiCsSPHlPfXcYGOpkJ9zhGYWNA7NG1QjuPd9v1gd6jemI-0kffvoqc5UulukG4ySjGZHA_u6tpe1g9nWrOjlvzeWCL79udQN3MAKvfKyZfQxjvhUSugSpfRe2FBdeS8vwEPoDeLnkE4h6Ta8Y0Nvd2pe-Xcj-TpvcJq5ryeHqUOAay4fAacB187vRIxtWbu6_BtZD1cIpr8JNq5gMnBnr3FJHrcwCTJl0pVXO_WU"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    data-alt="portrait of a smiling young woman with long dark hair"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJb46NWpPYSazY0g3tUYWu6hkJfNIAqQU7lUX0hnpWqS1UDR5-SrtdnuNp5RwX-Y1UfnfAy-hCuzov6dsT8A_bqrDt7NT53Tb-8wTggOIg-Aa66IiqRiZWzNaTIQbK84QBSRLmLv-fpbnz2_F7yyg6Z1VuTsvONyaX5wptiyWAvfkF0uqQtohP_hzO9OkGXiSaycxwDW6DUjM3qg7mwFy2WdYzZ8hzm0y1tM0iVwk2z_kKGWv3Zg0U2SaMZhcbUeb4G_XH764mcDA"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    data-alt="portrait of a young man with a slight beard"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe5rXO6D3vb2kAz1itI55UrQOYzt1iFPZYx0AXiCsSPHlPfXcYGOpkJ9zhGYWNA7NG1QjuPd9v1gd6jemI-0kffvoqc5UulukG4ySjGZHA_u6tpe1g9nWrOjlvzeWCL79udQN3MAKvfKyZfQxjvhUSugSpfRe2FBdeS8vwEPoDeLnkE4h6Ta8Y0Nvd2pe-Xcj-TpvcJq5ryeHqUOAay4fAacB187vRIxtWbu6_BtZD1cIpr8JNq5gMnBnr3FJHrcwCTJl0pVXO_WU"
                  />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">
                    +14
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant font-medium self-center">
                  Affected patients in your list
                </p>
              </div>
            </div>
            <div className="hidden sm:block w-48 h-32 rounded-lg bg-surface-container-low relative overflow-hidden">
              <div className="absolute inset-0 flex items-end gap-1 px-4 py-3">
                <div className="flex-1 bg-primary/20 h-1/2 rounded-t-sm"></div>
                <div className="flex-1 bg-primary/30 h-2/3 rounded-t-sm"></div>
                <div className="flex-1 bg-primary/40 h-3/4 rounded-t-sm"></div>
                <div className="flex-1 bg-primary h-full rounded-t-sm"></div>
                <div className="flex-1 bg-primary/60 h-4/5 rounded-t-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
