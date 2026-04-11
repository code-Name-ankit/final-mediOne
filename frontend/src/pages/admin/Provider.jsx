import React from "react";

export default function Provider() {
  return (
    <>
      <div class="mt-16">
        {/* <!-- Page Header --> */}
        <div class="flex items-end justify-between mt-9">
          <div>
            <h2 class="text-4xl font-extrabold tracking-tight font-headline text-on-surface">
              Provider Management
            </h2>
            <p class="text-on-surface-variant mt-2 max-w-xl">
              Review and approve healthcare service providers. Maintain the
              highest standard of clinical integrity across our network.
            </p>
          </div>
          <div class="flex gap-3">
            <div class="px-6 py-2 bg-surface-container-low rounded-xl flex items-center gap-2">
              <span class="text-sm font-bold text-primary">12</span>
              <span class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Pending Applications
              </span>
            </div>
          </div>
        </div>
        {/* <!-- Tabs & Main Content Grid --> */}
        <div class="grid grid-cols-12 gap-8 items-start mt-9">
          {/* <!-- Left: Table View Section (8 cols) --> */}
          <div class="col-span-8 space-y-6">
            {/* <!-- Navigation Tabs --> */}
            <div class="flex gap-4 p-1.5 bg-surface-container-low rounded-2xl w-fit">
              <button class="px-8 py-2.5 bg-surface-container-lowest rounded-xl shadow-sm text-primary font-bold text-sm transition-all">
                Doctors
              </button>
              <button class="px-8 py-2.5 text-on-surface-variant font-medium text-sm hover:text-primary transition-all">
                Pharmacies
              </button>
              <button class="px-8 py-2.5 text-on-surface-variant font-medium text-sm hover:text-primary transition-all">
                Laboratories
              </button>
            </div>
            {/* <!-- Data Card --> */}
            <div class="bg-surface-container-lowest rounded-[2rem] overflow-hidden">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-surface-container-low/50">
                    <th class="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      Provider Details
                    </th>
                    <th class="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      Location
                    </th>
                    <th class="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      Status
                    </th>
                    <th class="px-8 py-5 text-right text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-surface-container-low">
                  <tr class="hover:bg-surface-container-low/30 transition-colors group">
                    <td class="px-8 py-6">
                      <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary font-bold overflow-hidden shadow-inner">
                          <img
                            class="w-full h-full object-cover"
                            data-alt="professional portrait of a middle-aged male cardiologist in a white coat with a friendly expression"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHpt77Ewc_fSCBaCbGimJMx8TDwQsb8c2Y8kPj_mmXoDnMmNmTwG0PlkrRVTi2m8BvRB2qEmWHmgf82KmId38vWy4RxpguYFzqDqq2F9dXMQ1-iIGxYNKfUV44Uc2GDtdTvX4O4IUO-jihnKsrQ-oDzO5ilTYftQlMCO9gMWezCKHpG4fPPeKgm7g4H1-w6a73VOIrtqe5lQWzLh04fY4S9K28kdml3YQI5v_H847hb4B4yXYVTQfMd6hcFyjj8-ZhKBpbvSBp0ko"
                          />
                        </div>
                        <div>
                          <p class="font-bold text-on-surface">
                            Dr. Elena Rodriguez
                          </p>
                          <p class="text-xs text-on-surface-variant">
                            Cardiology Specialist • MD
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-8 py-6">
                      <p class="text-sm font-medium text-on-surface">
                        San Francisco, CA
                      </p>
                      <p class="text-xs text-on-surface-variant">
                        Central Medical Plaza
                      </p>
                    </td>
                    <td class="px-8 py-6">
                      <span class="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-extrabold uppercase tracking-wider">
                        Pending
                      </span>
                    </td>
                    <td class="px-8 py-6 text-right">
                      <button class="p-2 rounded-xl hover:bg-primary-fixed text-primary transition-colors">
                        <span
                          class="material-symbols-outlined"
                          data-icon="visibility"
                        >
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-surface-container-low/20 hover:bg-surface-container-low/30 transition-colors">
                    <td class="px-8 py-6">
                      <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center text-primary font-bold overflow-hidden shadow-inner">
                          <img
                            class="w-full h-full object-cover"
                            data-alt="close-up photo of a female medical professional in scrubs smiling warmly in a clinical setting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuxRfsgrLhKcuCQcItJdBrYI6GDxRFjnFtW0o1nAbboB1QwL2C0Cgu760nGv8a1zDGjvOHiZkH1QFJoZ_HiNq5Qk1mxz8ap-jEPeHboDRsUKgPUVC-ERbCQIDssjKoE32zApbZMRCPXm5v0z3IKFhqFePgkFNbA7e67Kj8kqOLRWZha4GnHMoHNAkKEcTBEYg_iCS0S9TCES1jgSeuwJ9nf0J1uGNxub9jdIs_pEtSzJueQfbzVH6fpaVLYbuZc8Gf8yAlnqMj72Y"
                          />
                        </div>
                        <div>
                          <p class="font-bold text-on-surface">
                            Dr. Marcus Chen
                          </p>
                          <p class="text-xs text-on-surface-variant">
                            Pediatric Surgeon • MD, FACS
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-8 py-6">
                      <p class="text-sm font-medium text-on-surface">
                        Seattle, WA
                      </p>
                      <p class="text-xs text-on-surface-variant">
                        Evergreen Health Center
                      </p>
                    </td>
                    <td class="px-8 py-6">
                      <span class="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-extrabold uppercase tracking-wider">
                        Pending
                      </span>
                    </td>
                    <td class="px-8 py-6 text-right">
                      <button class="p-2 rounded-xl hover:bg-primary-fixed text-primary transition-colors">
                        <span
                          class="material-symbols-outlined"
                          data-icon="visibility"
                        >
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-surface-container-low/30 transition-colors">
                    <td class="px-8 py-6">
                      <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-tertiary font-bold overflow-hidden shadow-inner">
                          <img
                            class="w-full h-full object-cover"
                            data-alt="professional corporate headshot of an african american doctor with glasses and a friendly smile"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo98dGFsYqPeMZByBMXGn_hgP7AbBNDsWnF398PlftkHuwVREctAv6IDek-1NollcNtwlTWhpRnq4GAbvgh2DUomonJ-qpZTGdRc5F76y1dyxcb0urtZh0JNjbkefbT00GSjP6_4LNoWZNRDrEFzefnnRQwb5LPm6EQ6TUdrBes_J-naQG39MD2XOlyjY-YUFS3TGfpv6POhABgRghJZkwyMt_9JF6ZgRFdqD1WY94c_ohUwa0NEolPdC_ZDLv5BcAmgWglKwiihQ"
                          />
                        </div>
                        <div>
                          <p class="font-bold text-on-surface">
                            Dr. Sarah Johnson
                          </p>
                          <p class="text-xs text-on-surface-variant">
                            Dermatology • DO
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-8 py-6">
                      <p class="text-sm font-medium text-on-surface">
                        Austin, TX
                      </p>
                      <p class="text-xs text-on-surface-variant">
                        Skin Care Specialists LLC
                      </p>
                    </td>
                    <td class="px-8 py-6">
                      <span class="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-extrabold uppercase tracking-wider">
                        Pending
                      </span>
                    </td>
                    <td class="px-8 py-6 text-right">
                      <button class="p-2 rounded-xl hover:bg-primary-fixed text-primary transition-colors">
                        <span
                          class="material-symbols-outlined"
                          data-icon="visibility"
                        >
                          visibility
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <!-- Right: Verification Panel (4 cols) --> */}
          <div class="col-span-4 sticky top-24">
            <div class="bg-surface-container-lowest rounded-[2rem] p-8 shadow-sm relative overflow-hidden">
              {/* <!-- Verification Header --> */}
              <div class="flex items-start justify-between mb-8">
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary-fixed px-2 py-1 rounded-md">
                    Verification Portal
                  </span>
                  <h3 class="text-2xl font-bold font-headline text-on-surface mt-3">
                    Dr. Elena Rodriguez
                  </h3>
                  <p class="text-on-surface-variant text-sm">
                    Reviewing application ID: #PRV-88219
                  </p>
                </div>
                <div class="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center">
                  <span
                    class="material-symbols-outlined text-outline"
                    data-icon="verified_user"
                  >
                    verified_user
                  </span>
                </div>
              </div>
              {/* <!-- Document Grid --> */}
              <div class="space-y-6">
                <div class="space-y-3">
                  <label class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    Submitted Documents
                  </label>
                  {/* <!-- Document Card 1 --> */}
                  <div class="p-4 rounded-2xl bg-surface-container-low flex items-center gap-4 group cursor-pointer hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all">
                    <div class="w-12 h-12 rounded-xl bg-error-container/30 flex items-center justify-center text-error">
                      <span
                        class="material-symbols-outlined"
                        data-icon="description"
                      >
                        description
                      </span>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-bold text-on-surface">
                        Medical License 2024
                      </p>
                      <p class="text-[10px] text-on-surface-variant font-medium">
                        Verified Source • PDF (2.4 MB)
                      </p>
                    </div>
                    <span
                      class="material-symbols-outlined text-outline group-hover:text-primary transition-colors"
                      data-icon="open_in_new"
                    >
                      open_in_new
                    </span>
                  </div>
                  {/* <!-- Document Card 2 --> */}
                  <div class="p-4 rounded-2xl bg-surface-container-low flex items-center gap-4 group cursor-pointer hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all">
                    <div class="w-12 h-12 rounded-xl bg-secondary-container/30 flex items-center justify-center text-secondary">
                      <span class="material-symbols-outlined" data-icon="badge">
                        badge
                      </span>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-bold text-on-surface">
                        Board Certification
                      </p>
                      <p class="text-[10px] text-on-surface-variant font-medium">
                        Validated by ABMS • JPG (1.1 MB)
                      </p>
                    </div>
                    <span
                      class="material-symbols-outlined text-outline group-hover:text-primary transition-colors"
                      data-icon="open_in_new"
                    >
                      open_in_new
                    </span>
                  </div>
                  {/* <!-- Document Card 3 --> */}
                  <div class="p-4 rounded-2xl bg-surface-container-low flex items-center gap-4 group cursor-pointer hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all">
                    <div class="w-12 h-12 rounded-xl bg-primary-fixed/30 flex items-center justify-center text-primary">
                      <span
                        class="material-symbols-outlined"
                        data-icon="account_balance"
                      >
                        account_balance
                      </span>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-bold text-on-surface">
                        Professional Indemnity
                      </p>
                      <p class="text-[10px] text-on-surface-variant font-medium">
                        Valid until Dec 2025 • PDF (4.8 MB)
                      </p>
                    </div>
                    <span
                      class="material-symbols-outlined text-outline group-hover:text-primary transition-colors"
                      data-icon="open_in_new"
                    >
                      open_in_new
                    </span>
                  </div>
                </div>
                {/* <!-- Action Buttons --> */}
                <div class="pt-6 mt-6 border-t border-surface-container-low grid grid-cols-2 gap-4">
                  <button class="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-surface-container-high text-on-primary-fixed-variant font-bold text-sm hover:bg-surface-container-highest transition-all active:scale-95">
                    <span
                      class="material-symbols-outlined text-sm"
                      data-icon="close"
                    >
                      close
                    </span>
                    Reject
                  </button>
                  <button class="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95">
                    <span
                      class="material-symbols-outlined text-sm"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>
                    Approve
                  </button>
                </div>
              </div>
              {/* <!-- Trust Indicator Overlay --> */}
              <div class="mt-8 flex items-center justify-center gap-2 text-on-surface-variant opacity-60">
                <span
                  class="material-symbols-outlined text-xs"
                  data-icon="lock"
                >
                  lock
                </span>
                <span class="text-[10px] font-bold uppercase tracking-widest">
                  End-to-End Encrypted Workflow
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Bento Statistics / Contextual Info --> */}
        <div class="grid grid-cols-3 gap-8 mt-9">
          <div class="bg-surface-container-low/50 rounded-[2rem] p-8 flex flex-col justify-between aspect-video">
            <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm mb-4">
              <span class="material-symbols-outlined" data-icon="speed">
                speed
              </span>
            </div>
            <div>
              <p class="text-3xl font-extrabold font-headline text-on-surface">
                1.4 days
              </p>
              <p class="text-sm font-medium text-on-surface-variant">
                Average Approval Time
              </p>
            </div>
          </div>
          <div class="bg-primary/5 rounded-[2rem] p-8 flex flex-col justify-between aspect-video border border-primary/10">
            <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-secondary shadow-sm mb-4">
              <span class="material-symbols-outlined" data-icon="analytics">
                analytics
              </span>
            </div>
            <div>
              <p class="text-3xl font-extrabold font-headline text-on-surface">
                94%
              </p>
              <p class="text-sm font-medium text-on-surface-variant">
                Compliance Health Score
              </p>
            </div>
          </div>
          <div class="bg-surface-container-low/50 rounded-[2rem] p-8 flex flex-col justify-between aspect-video">
            <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-on-tertiary-fixed-variant shadow-sm mb-4">
              <span class="material-symbols-outlined" data-icon="history">
                history
              </span>
            </div>
            <div>
              <p class="text-3xl font-extrabold font-headline text-on-surface">
                1,204
              </p>
              <p class="text-sm font-medium text-on-surface-variant">
                Providers Managed
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}
