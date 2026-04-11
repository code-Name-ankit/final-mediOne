import React from "react";

export default function MedicalDetail() {
  return (
    <>
      <main class="pt-24 pb-32 max-w-[1440px] mx-auto px-8">
        {/* <!-- Pharmacy Header Section --> */}
        <header class="mb-12 relative">
          <div class="rounded-3xl overflow-hidden h-64 relative mb-8 group">
            <img
              alt="Pharmacy Interior"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="modern clinical pharmacy interior with clean white shelves, soft blue lighting, and organized medical supplies professional atmosphere"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUW-Hje7xh3p5nnJdCOJe15Ya1-4ylG0VprLn7qAsat4GfvxRNCbiqK70vyHViUVlFZ9s_UGE44LkXW28ez-DHxo-VctRkhuCZUBpQlDiI-3XOOYfLD22nJMKNiOVyZI5_HCnv0nSgOQRudXXXM7s7PDLGqhbJt6L-P3wANQ4b23gH3ZB5VcC81zJ95xil9NnjSDIMdwk9lnJl8_GgZcw9HPXIEzdkvEljxIGWCpDpfsv0YdVwLG3b2Ecp6ME2LQnNe4mSLptnP4c"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-8 left-8 text-white">
              <div class="flex items-center gap-3 mb-2">
                <span class="bg-secondary-container text-on-secondary-container text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <span
                    class="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  Verified Pharmacy
                </span>
                <span class="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                  Open Now
                </span>
              </div>
              <h1 class="text-4xl font-extrabold tracking-tight mb-2">
                City Center Pharmacy
              </h1>
              <div class="flex items-center gap-4 text-sm opacity-90">
                <div class="flex items-center gap-1">
                  <span
                    class="material-symbols-outlined text-yellow-400 text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span class="font-bold">4.8</span>
                  <span class="opacity-75">(2.4k reviews)</span>
                </div>
                <span class="opacity-40">|</span>
                <div class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-base">
                    location_on
                  </span>
                  123 Health Ave, Medical District
                </div>
                <span class="opacity-40">|</span>
                <div class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-base">
                    near_me
                  </span>
                  0.8 km away
                </div>
              </div>
            </div>
            <div class="absolute bottom-8 right-8 flex gap-3">
              <button class="bg-white text-primary font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:bg-surface-container-lowest transition-colors">
                <span class="material-symbols-outlined">call</span>
                Call
              </button>
              <button class="bg-primary text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg hover:opacity-90 transition-opacity">
                <span class="material-symbols-outlined">directions</span>
                Directions
              </button>
            </div>
          </div>
        </header>
        {/* <!-- Main Content Split Layout --> */}
        <div class="flex flex-col lg:flex-row gap-8">
          {/* <!-- Left Side: Medicine Catalog --> */}
          <div class="lg:w-2/3">
            {/* <!-- Filters & Search --> */}
            <div class="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
              <div class="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
                <button class="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                  All Medicines
                </button>
                <button class="bg-surface-container-low text-on-surface-variant px-5 py-2 rounded-full text-sm font-medium hover:bg-surface-container-high whitespace-nowrap">
                  Diabetes
                </button>
                <button class="bg-surface-container-low text-on-surface-variant px-5 py-2 rounded-full text-sm font-medium hover:bg-surface-container-high whitespace-nowrap">
                  Fever &amp; Pain
                </button>
                <button class="bg-surface-container-low text-on-surface-variant px-5 py-2 rounded-full text-sm font-medium hover:bg-surface-container-high whitespace-nowrap">
                  Wellness
                </button>
              </div>
              <div class="flex items-center gap-4 w-full md:w-auto">
                <div class="relative flex-grow md:w-64">
                  <span class="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">
                    search
                  </span>
                  <input
                    class="w-full bg-surface-container-low border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20"
                    placeholder="Search medicines..."
                    type="text"
                  />
                </div>
                <button class="bg-surface-container-low p-2 rounded-xl text-on-surface-variant">
                  <span class="material-symbols-outlined">sort</span>
                </button>
              </div>
            </div>
            {/* Grid of Medicine Cards */}
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Paracetamol */}
              <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm group hover:shadow-md transition-shadow">
                <div class="h-40 rounded-lg overflow-hidden mb-4 bg-surface-container-low relative">
                  <img
                    alt="Paracetamol"
                    class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform"
                    data-alt="white box of paracetamol pills on a clinical background with soft lighting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD61u_MUzypk29cZm-ep05hsOQvHku42EfjweBMfCI2uB2cDmTJyMVxPL9XrFnSGt3vVJgwbXOQPaRzHlxoXVaAF98qzsAhmAXifaF2KTjb77j2uryzbu3H6WQrbDu1CWNZvQ5dY9xJBHk1V9WDSHfbEDJCKAS2lrzrR4pAbBSuajgRbANBOBPONU3Ptp1WJPUls1yWhjfPFxANARZ8tRQ55EXAbmQq5nlyETJQY90Ww1DU_qGPOcpI4O000WGQs2kRuaYc-6VUZkI"
                  />
                  <span class="absolute top-2 right-2 bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-1 rounded">
                    IN STOCK
                  </span>
                </div>
                <h3 class="text-lg font-bold text-on-surface mb-1">
                  Paracetamol 500mg
                </h3>
                <p class="text-xs text-on-surface-variant mb-4">
                  Relief for fever and pain. 20 Tablets.
                </p>
                <div class="flex items-center justify-between mt-auto">
                  <span class="text-xl font-bold text-primary">$4.50</span>
                  <div class="flex items-center bg-surface-container-low rounded-lg p-1">
                    <button class="w-8 h-8 flex items-center justify-center text-primary hover:bg-white rounded-md">
                      -
                    </button>
                    <span class="w-8 text-center text-sm font-bold">1</span>
                    <button class="w-8 h-8 flex items-center justify-center text-primary hover:bg-white rounded-md">
                      +
                    </button>
                  </div>
                </div>
                <button class="w-full mt-4 bg-primary text-white py-3 rounded-xl font-bold text-sm hover:opacity-95 flex items-center justify-center gap-2">
                  <span class="material-symbols-outlined text-sm">
                    add_shopping_cart
                  </span>
                  Add to Cart
                </button>
              </div>
              {/* Metformin */}
              <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm group hover:shadow-md transition-shadow">
                <div class="h-40 rounded-lg overflow-hidden mb-4 bg-surface-container-low relative">
                  <img
                    alt="Metformin"
                    class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform"
                    data-alt="medical prescription tablets in aluminum blister pack blue medicine theme"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE5PWbOv_-h-wNuZ1F7N02RWO-4doess7km5wcurkgZt3ZcGnA5CV5apt1DSIeEUxFapofh5kQ-8Z02w3ic7ZQwDchYW_MIY5z_F5vomNuf5Jro7fq5TxnYc3GHsi3R1VPHBnhJwepsAqIrZUcYxCRO0EPNSpNbGE4eyb8cjshTfTmvsznRl0UEy3pOYppW-Xk0eL_jjaYczYaXd6s0-P-SlHRSaVakEFWxtL7nUXW_4UiRehKEQrNn1AqDSYoqp4_WXGeYqy25vY"
                  />
                  <span class="absolute top-2 right-2 bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-1 rounded">
                    IN STOCK
                  </span>
                </div>
                <h3 class="text-lg font-bold text-on-surface mb-1">
                  Metformin HCl
                </h3>
                <p class="text-xs text-on-surface-variant mb-4">
                  Diabetes management. 500mg, 60 Tabs.
                </p>
                <div class="flex items-center justify-between mt-auto">
                  <span class="text-xl font-bold text-primary">$12.90</span>
                  <div class="flex items-center bg-surface-container-low rounded-lg p-1">
                    <button class="w-8 h-8 flex items-center justify-center text-primary hover:bg-white rounded-md">
                      -
                    </button>
                    <span class="w-8 text-center text-sm font-bold">1</span>
                    <button class="w-8 h-8 flex items-center justify-center text-primary hover:bg-white rounded-md">
                      +
                    </button>
                  </div>
                </div>
                <button class="w-full mt-4 bg-primary text-white py-3 rounded-xl font-bold text-sm hover:opacity-95 flex items-center justify-center gap-2">
                  <span class="material-symbols-outlined text-sm">
                    add_shopping_cart
                  </span>
                  Add to Cart
                </button>
              </div>
              {/* Vitamin C */}
              <div class="bg-surface-container-lowest rounded-xl p-4 shadow-sm group hover:shadow-md transition-shadow">
                <div class="h-40 rounded-lg overflow-hidden mb-4 bg-surface-container-low relative">
                  <img
                    alt="Vitamin C"
                    class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform"
                    data-alt="bright orange vitamin bottles and effervescent tablets wellness and health focus"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYNTtU-3DC3vzbhe8S8CAUBbyCSsFgBVSLPmdPn-_gbfAD0eJ8ZgrGtSqdhB46d_igNU65lRPeAJ1Aw8xJcqUTrWFtudFyaxwc2mvXPecCRJgfcYBYPyLKZptL0YVZJaZ1YnE8Ai3VJ-5VsGPhaWVd3h9PuZxhBigz5X-ZBhXPhwOQF28XATdYVENzzfQvG8B_F2FtNWYyW-sDibmJpDYdub325HznVjEcy26hFYs0X50y9-YQhDNiy-fa83NJt_cRvUWieSYKjoo"
                  />
                  <span class="absolute top-2 right-2 bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-1 rounded">
                    IN STOCK
                  </span>
                </div>
                <h3 class="text-lg font-bold text-on-surface mb-1">
                  Vitamin C Boost
                </h3>
                <p class="text-xs text-on-surface-variant mb-4">
                  Immune support. 1000mg Effervescent.
                </p>
                <div class="flex items-center justify-between mt-auto">
                  <span class="text-xl font-bold text-primary">$8.25</span>
                  <div class="flex items-center bg-surface-container-low rounded-lg p-1">
                    <button class="w-8 h-8 flex items-center justify-center text-primary hover:bg-white rounded-md">
                      -
                    </button>
                    <span class="w-8 text-center text-sm font-bold">2</span>
                    <button class="w-8 h-8 flex items-center justify-center text-primary hover:bg-white rounded-md">
                      +
                    </button>
                  </div>
                </div>
                <button class="w-full mt-4 bg-primary text-white py-3 rounded-xl font-bold text-sm hover:opacity-95 flex items-center justify-center gap-2">
                  <span class="material-symbols-outlined text-sm">
                    add_shopping_cart
                  </span>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Right Side: Sticky Cart Summary --> */}
          <div class="lg:w-1/3">
            <div class="sticky top-24 bg-surface-container-lowest rounded-3xl p-6 shadow-xl border border-outline-variant/15">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-xl font-extrabold tracking-tight">Your Cart</h2>
                <span class="bg-primary-fixed text-on-primary-fixed text-xs font-bold px-2 py-1 rounded-md">
                  2 ITEMS
                </span>
              </div>
              <div class="space-y-4 mb-8">
                <div class="flex items-center gap-4 group">
                  <div class="w-12 h-12 bg-surface-container-low rounded-lg p-2">
                    <img
                      alt="Small thumb"
                      class="w-full h-full object-contain"
                      data-alt="medicine packaging detail"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk0F1WiZd3chf2qgNhyTNEr8if-ssa4v48auxIyp9QZkHAxYPL-Fq-qjdSZTKrnQpDAWN1G8Cw-ZsM93LbrQyvQOFrdTgI63hC7wIcARRN2n6DQ-wyEYNxqDlTx0xvyZpcRl6g3c7JPYdzxT4gwn5yRFGTa1XL0-bFxV9oMa1s0T--jfDWaFWciQPHO1_V36WMfbKG63zv7pccRaGNjYrpsOfZWS2Zz3kQGgmsZ0c1o4g-_Ui9NxZ41AOkJSsdoj0Rj6TZw6cbHD4"
                    />
                  </div>
                  <div class="flex-grow">
                    <h4 class="text-sm font-bold">Paracetamol 500mg</h4>
                    <p class="text-xs text-on-surface-variant">1 x $4.50</p>
                  </div>
                  <button class="text-outline hover:text-error transition-colors">
                    <span class="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
                <div class="flex items-center gap-4 group">
                  <div class="w-12 h-12 bg-surface-container-low rounded-lg p-2">
                    <img
                      alt="Small thumb"
                      class="w-full h-full object-contain"
                      data-alt="wellness product detail"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa3QcvLn9VTyxS7K3qrEEfjnfrgNrELr9qWFd9CYCI8eJK9YxB9bJ_ouD33U7o9BXVWM5iweWL7Y4BeKt-6Ah3_aUUZ25i1RvV63O0ebrZqKfG1JsFIGdQEVb9GguWloLnZgKEFMj6Ctw2cY-DeqTMwIfnALH66gf0jF8dRc9rwYguaRkuIbOUkBp7h2jA69yemJ2CmICEaGqzC_HJVPQlDZIJnyM3a6AjOZy2xEvskakpSjT_EHgMYKZE8_YzLr0ssjEEuOUpUX4"
                    />
                  </div>
                  <div class="flex-grow">
                    <h4 class="text-sm font-bold">Vitamin C Boost</h4>
                    <p class="text-xs text-on-surface-variant">2 x $8.25</p>
                  </div>
                  <button class="text-outline hover:text-error transition-colors">
                    <span class="material-symbols-outlined text-lg">
                      delete
                    </span>
                  </button>
                </div>
              </div>
              <div class="border-t border-outline-variant/20 pt-6 space-y-3">
                <div class="flex justify-between text-sm text-on-surface-variant">
                  <span>Subtotal</span>
                  <span class="font-medium">$21.00</span>
                </div>
                <div class="flex justify-between text-sm text-on-surface-variant">
                  <span>Delivery Fee</span>
                  <span class="font-medium text-secondary">FREE</span>
                </div>
                <div class="flex justify-between text-lg font-extrabold pt-2">
                  <span>Total</span>
                  <span class="text-primary">$21.00</span>
                </div>
              </div>
              <div class="mt-8 space-y-3">
                <button class="w-full bg-gradient-to-br from-primary to-primary-container text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform">
                  Proceed to Checkout
                </button>
                <button class="w-full text-on-surface-variant text-sm font-semibold py-2 hover:text-primary transition-colors">
                  Clear Cart
                </button>
              </div>
              <div class="mt-6 flex items-start gap-3 p-4 bg-surface-container-low rounded-2xl">
                <span class="material-symbols-outlined text-primary text-xl">
                  info
                </span>
                <p class="text-[11px] text-on-surface-variant leading-relaxed">
                  Prescription medicines require a digital upload of your
                  doctor's note during checkout.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer Recommendations Section --> */}
        <section class="mt-20">
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-2xl font-extrabold tracking-tight">
              Alternative Recommendations
            </h2>
            <button class="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
              View all wellness
              <span class="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div class="bg-surface-container-low/50 rounded-2xl p-4 border border-outline-variant/10 flex gap-4 items-center">
              <div class="w-16 h-16 bg-white rounded-xl p-2 shrink-0">
                <img
                  class="w-full h-full object-contain"
                  data-alt="herbal supplement bottle"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmIVT5Dbogw6CRMA6L5YNuQUV_HVGIB42EcUAR83rgQipSxnGaCVplYpR4zh2sr06bhL7R05AZeLDqjoq7tGYxTQcV8iOXaOWEQDLo_EIGSYhJchc7gRmaEVS4fjbSeg-VdpStuoSPlN3kmCNafWN8cHu4NNYxtZvI2Oa3SJuAfRT19gEfw3CEcP2tZ3iP8ljyTY7G0SkCyxI4gAzsJW2uz6Iz2sbsqwt6qLEO_PN-1gWoz6PK9YdZFsvZDucz5K_BrVfQ85UI-mc"
                />
              </div>
              <div>
                <h4 class="text-sm font-bold">Herbal Tea Mix</h4>
                <p class="text-xs text-on-surface-variant mb-1">$6.50</p>
                <span class="text-[10px] bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded">
                  ECO-FRIENDLY
                </span>
              </div>
            </div>
            <div class="bg-surface-container-low/50 rounded-2xl p-4 border border-outline-variant/10 flex gap-4 items-center">
              <div class="w-16 h-16 bg-white rounded-xl p-2 shrink-0">
                <img
                  class="w-full h-full object-contain"
                  data-alt="multivitamin container"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk1GBSj78DnIXSDGdHbaB4Vz6Ank_ANk2cAyZlVei9Jfi30KwmD_mpeixQxMIp_CSFho4RKqaoiV2r3GmhToIqyqSPOzMNjG45mJ0qbDh6zzqTR6bhepanVQprdvOddMor9qIbjzvkiqNKtgGIyoX9l04qXMIYaeQhbAGjqvcw7_u6y-4qK6hEkxx7EI7pBCUoYcJxLV0x8-I1gOyUQDvDUxFShoWWbHougyHjr0tFz3E38fX8e0bnTUpya-P0mXW-71uMNt-i91k"
                />
              </div>
              <div>
                <h4 class="text-sm font-bold">A-Z Multivitamins</h4>
                <p class="text-xs text-on-surface-variant mb-1">$15.00</p>
                <span class="text-[10px] bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded">
                  POPULAR
                </span>
              </div>
            </div>
            <div class="bg-surface-container-low/50 rounded-2xl p-4 border border-outline-variant/10 flex gap-4 items-center">
              <div class="w-16 h-16 bg-white rounded-xl p-2 shrink-0">
                <img
                  class="w-full h-full object-contain"
                  data-alt="natural health salad bowl"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTdmLfB_O21wsRZ7qiwM3hJ4QGBT-nfIS2IF5RzIp40NyVGjSXxklvNeAF0lIECcnRwmawt_UKZNrlf43f2mdFmgg_EmTDY3Pho2vT3rr1npEtGG_Tea5Q2Gj1l38zJvD8kaPhY5I_hQlc660UxYDSXYeq5yeNlsdEPCY_erAWOyLbHyhvrhnXN5MMn0lZh8oTiCnPES6GaBnTmE_KfOIup8ftVaGDzPcQP5A1UhdC3vIpXYQ3fK3Tj_aZwujQVLhuBgmVdQLLNPA"
                />
              </div>
              <div>
                <h4 class="text-sm font-bold">Immune Support</h4>
                <p class="text-xs text-on-surface-variant mb-1">$12.20</p>
                <span class="text-[10px] bg-tertiary-fixed text-on-tertiary-fixed-variant px-2 py-0.5 rounded">
                  TOP RATED
                </span>
              </div>
            </div>
            <div class="bg-surface-container-low/50 rounded-2xl p-4 border border-outline-variant/10 flex gap-4 items-center">
              <div class="w-16 h-16 bg-white rounded-xl p-2 shrink-0">
                <img
                  class="w-full h-full object-contain"
                  data-alt="medical equipment detail"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvQHbvSIVf1aCNrlIEl8-RbKeeZsfksJRAn6wVrSqdrMgsUIjhDSqRidXcqwLrR5RF3Su3LLtWcsz2DBU3Pmv2F96ex6l0UKElTTcz-RW4Wr3n1zwvcjIk3r0-C-EbxztpfH87XWooVdfMH-qY4mFiKwzeaq5GoKB_V5FVJ6b4VNkhW0sRZEDtlkVBheGOq2aAEHHj7UXCzapV79UwWAN2b7teRiEREYdluVHrLehuEXkNPirCQHKTtkTAF-icfStN4ZpXIOS3R9I"
                />
              </div>
              <div>
                <h4 class="text-sm font-bold">Digital Monitor</h4>
                <p class="text-xs text-on-surface-variant mb-1">$45.00</p>
                <span class="text-[10px] bg-surface-container-highest px-2 py-0.5 rounded">
                  DEVICE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- BottomNavBar (Mobile only) --> */}
        <nav class="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-6 pt-3 bg-white/80 backdrop-blur-md border-t border-[#c2c6d4]/15 shadow-[0_-10px_30px_rgba(0,0,0,0.04)] rounded-t-[2rem]">
          <div class="flex flex-col items-center justify-center text-[#191c1e] opacity-60">
            <span class="material-symbols-outlined">home</span>
            <span class="font-['Inter'] text-[10px] uppercase tracking-widest font-bold mt-1">
              Home
            </span>
          </div>
          <div class="flex flex-col items-center justify-center bg-[#005EB8] text-white rounded-2xl px-6 py-2">
            <span class="material-symbols-outlined">shopping_bag</span>
            <span class="font-['Inter'] text-[10px] uppercase tracking-widest font-bold mt-1">
              Shop
            </span>
          </div>
          <div class="flex flex-col items-center justify-center text-[#191c1e] opacity-60">
            <span class="material-symbols-outlined">receipt_long</span>
            <span class="font-['Inter'] text-[10px] uppercase tracking-widest font-bold mt-1">
              Orders
            </span>
          </div>
          <div class="flex flex-col items-center justify-center text-[#191c1e] opacity-60">
            <span class="material-symbols-outlined">person</span>
            <span class="font-['Inter'] text-[10px] uppercase tracking-widest font-bold mt-1">
              Profile
            </span>
          </div>
        </nav>
      </main>
    </>
  );
}
