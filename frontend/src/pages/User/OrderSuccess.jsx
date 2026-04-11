import React from "react";

export default function OrderSuccess() {
  return (
    <>
      <main class="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center">
        {/* <!-- Success Canvas --> */}
        <div class="max-w-2xl w-full text-center">
          {/* <!-- Icon State --> */}
          <div class="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-secondary-container">
            <span
              class="material-symbols-outlined text-on-secondary-container text-5xl"
              data-icon="check_circle"
             style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
          </div>
          <h1 class="text-5xl font-headline font-extrabold tracking-tight text-on-surface mb-4">
            Order Placed Successfully
          </h1>
          <p class="text-body-lg text-on-surface-variant max-w-md mx-auto mb-12">
            Thank you for trusting Clinical Serenity. Your medical supplies are
            being prepared with professional care.
          </p>
          {/* <!-- Order Confirmation Card --> */}
          <div class="bg-surface-container-lowest rounded-[2rem] p-8 text-left relative overflow-hidden mb-12">
            {/* <!-- Background Decorative Element --> */}
            <div class="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-6">
                <div>
                  <span class="text-[0.75rem] font-medium uppercase tracking-[0.05em] text-outline font-label">
                    Order Reference
                  </span>
                  <p class="text-xl font-headline font-bold text-on-surface">
                    #CS-9284-7710
                  </p>
                </div>
                <div>
                  <span class="text-[0.75rem] font-medium uppercase tracking-[0.05em] text-outline font-label">
                    Pharmacy Provider
                  </span>
                  <div class="flex items-center gap-3 mt-1">
                    <div class="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center">
                      <span
                        class="material-symbols-outlined text-primary text-xl"
                        data-icon="local_pharmacy"
                      >
                        local_pharmacy
                      </span>
                    </div>
                    <p class="text-on-surface font-semibold">
                      MediHelp Vitality Central
                    </p>
                  </div>
                </div>
              </div>
              <div class="space-y-6">
                <div>
                  <span class="text-[0.75rem] font-medium uppercase tracking-[0.05em] text-outline font-label">
                    Estimated Delivery
                  </span>
                  <div class="flex items-center gap-2 mt-1">
                    <span
                      class="material-symbols-outlined text-secondary text-xl"
                      data-icon="schedule"
                    >
                      schedule
                    </span>
                    <p class="text-on-surface font-semibold">
                      Today, 4:30 PM - 5:15 PM
                    </p>
                  </div>
                </div>
                <div>
                  <span class="text-[0.75rem] font-medium uppercase tracking-[0.05em] text-outline font-label">
                    Status
                  </span>
                  <div class="mt-1">
                    <span class="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-wider">
                      Processing
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Subtle Tonal Divider --> */}
            <div class="my-8 h-px bg-surface-container-low"></div>
            <div class="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div class="flex -space-x-3">
                <div class="w-12 h-12 rounded-full border-4 border-surface-container-lowest overflow-hidden bg-slate-200">
                  <img
                    alt="Medicine Bottle"
                    class="w-full h-full object-cover"
                    data-alt="Close up shot of a professional white medicine bottle with minimalist branding on a clean clinical surface"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiT08kl4T-QwdYgBFdzJo5tKAVyFd35ZgdPvzr1sZIXOJptjDI1sosXH-vK222mL9DTuXS3vmUebFvkjtrnsfmzxTmU-Ucw7ymInjCIq1L-ayrD5L7oqJ1Aw_2CQO9Kye_HKTDuo5iCQpxJf2m7nMKGbD6ii084oMxYL3n2v8sAEH6FSv6jLfRZqvW9KgaAKat9p8QwU0dlcy_XGHUlKw-s1Axk8kSmiswa_C7rzYfsA9z1V_TAUqP7gVqoWjty4VNwvNSOdRnGHw"
                  />
                </div>
                <div class="w-12 h-12 rounded-full border-4 border-surface-container-lowest overflow-hidden bg-slate-200">
                  <img
                    alt="Surgical Mask"
                    class="w-full h-full object-cover"
                    data-alt="High quality medical supplies including a blue surgical mask and clear medical tubes on a bright sterile background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEqRSHLfCTgjKk4pwrqgt5jEAkcTlbbk48cwFaY9g3xfwvHDu2eOS71Pt-2EUQDvDUxFShoWWbHougyHjr0tFz3E38fX8e0bnTUpya-P0mXW__hA3OBVn-_C_lvJ0a-tFNdatHb4UcLj0DpFvEe1Thj-wjp3seLdR6BxbP5JI_IdKlIU-8mWxsnc8cMpi3cL4R2AdITFtx6p6GvMmKIdkSWKwndGmbOMj1kNhLY6nxkQKJ26Kz-zzx6fhYCIUP9VtqPNhIW-kuw0g"
                  />
                </div>
                <div class="w-12 h-12 rounded-full border-4 border-surface-container-lowest bg-surface-container-high flex items-center justify-center">
                  <span class="text-xs font-bold text-on-surface-variant">
                    +2
                  </span>
                </div>
              </div>
              <button class="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-xl font-headline font-bold text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                Track Order
              </button>
            </div>
          </div>
          {/* <!-- Contextual Help --> */}
          <div class="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a
              class="flex items-center gap-2 text-primary font-semibold hover:underline"
              href="#"
            >
              <span class="material-symbols-outlined" data-icon="description">
                description
              </span>
              View Invoice
            </a>
            <a
              class="flex items-center gap-2 text-primary font-semibold hover:underline"
              href="#"
            >
              <span class="material-symbols-outlined" data-icon="support_agent">
                support_agent
              </span>
              Contact Support
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
