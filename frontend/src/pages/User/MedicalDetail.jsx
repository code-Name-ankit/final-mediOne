import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MedicalDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/searchh/${id}`);
        setData(res.data);
        console.log(res.data.store.name);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  const handleAddToCart = (med) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.medicineId === med.medicineId);

      if (existing) {
        // quantity increase
        return prev.map((item) =>
          item.medicineId === med.medicineId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prev, { ...med, quantity: 1 }];
      }
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
                {data?.store?.name}
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
                  {data?.store?.address}
                </div>
                {/* <span class="opacity-40">|</span>
                <div class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-base">
                    near_me
                  </span>
                  0.8 km away
                </div> */}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {data?.medicines?.map((med, index) => (
                <div
                  key={med.medicineId}
                  className="bg-white rounded-xl p-4 shadow-sm group hover:shadow-md transition-shadow"
                >
                  {/* Image */}
                  <div className="h-40 rounded-lg overflow-hidden mb-4 bg-gray-100 relative flex items-center justify-center">
                    <img
                      alt={med.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD61u_MUzypk29cZm-ep05hsOQvHku42EfjweBMfCI2uB2cDmTJyMVxPL9XrFnSGt3vVJgwbXOQPaRzHlxoXVaAF98qzsAhmAXifaF2KTjb77j2uryzbu3H6WQrbDu1CWNZvQ5dY9xJBHk1V9WDSHfbEDJCKAS2lrzrR4pAbBSuajgRbANBOBPONU3Ptp1WJPUls1yWhjfPFxANARZ8tRQ55EXAbmQq5nlyETJQY90Ww1DU_qGPOcpI4O000WGQs2kRuaYc-6VUZkI"
                    />

                    {/* Stock Badge */}
                    <span
                      className={`absolute top-2 right-2 text-[10px] font-bold px-2 py-1 rounded ${
                        med.stock > 0
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {med.stock > 0 ? "IN STOCK" : "OUT OF STOCK"}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold mb-1">{med.name}</h3>

                  {/* Brand */}
                  <p className="text-xs text-gray-500 mb-4">
                    Brand: {med.brand}
                  </p>

                  {/* Price + Quantity */}
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">
                      ₹{med.price}
                    </span>

                    {/* Quantity (static for now) */}
                    <div className="flex items-center bg-gray-100 rounded-lg p-1">
                      <button className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-white rounded-md">
                        -
                      </button>
                      <span className="w-8 text-center text-sm font-bold">
                        1
                      </span>
                      <button className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-white rounded-md">
                        +
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => handleAddToCart(med)}
                    className={`w-full mt-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 ${
                      med.stock > 0
                        ? "bg-blue-600 text-white hover:opacity-90"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={med.stock === 0}
                  >
                    <span className="material-symbols-outlined text-sm">
                      add_shopping_cart
                    </span>
                    {med.stock > 0 ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              ))}
            </div>
          </div>
          {/* <!-- Right Side: Sticky Cart Summary --> */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 bg-white rounded-3xl p-6 shadow-xl border border-gray-200">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-extrabold tracking-tight">
                  Your Cart
                </h2>

                <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded-md">
                  {cart.length} ITEMS
                </span>
              </div>

              {/* Cart Items */}
              <div className="space-y-4 mb-8">
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <div
                      key={item.medicineId}
                      className="flex items-center gap-4 group"
                    >
                      {/* Image */}
                      <div className="w-12 h-12 bg-gray-100 rounded-lg p-2">
                        <img
                          className="w-full h-full object-contain"
                          src="https://cdn-icons-png.flaticon.com/512/2966/2966483.png"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-grow">
                        <h4 className="text-sm font-bold">{item.name}</h4>

                        <p className="text-xs text-gray-500">
                          ₹{item.price} each
                        </p>

                        {/* ✅ Quantity Controls */}
                        <div className="flex items-center gap-2 mt-1">
                          {/* ➖ Decrease */}
                          <button
                            onClick={() =>
                              setCart((prev) =>
                                prev.map((c) =>
                                  c.medicineId === item.medicineId
                                    ? {
                                        ...c,
                                        quantity:
                                          c.quantity > 1 ? c.quantity - 1 : 1,
                                      }
                                    : c,
                                ),
                              )
                            }
                            className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            -
                          </button>

                          {/* Qty */}
                          <span className="text-sm font-bold">
                            {item.quantity}
                          </span>

                          {/* ➕ Increase */}
                          <button
                            onClick={() =>
                              setCart((prev) =>
                                prev.map((c) =>
                                  c.medicineId === item.medicineId
                                    ? {
                                        ...c,
                                        quantity:
                                          c.quantity < item.stock
                                            ? c.quantity + 1
                                            : c.quantity,
                                      }
                                    : c,
                                ),
                              )
                            }
                            className="w-6 h-6 bg-gray-200 rounded hover:bg-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Delete */}
                      <button
                        onClick={() =>
                          setCart((prev) =>
                            prev.filter(
                              (c) => c.medicineId !== item.medicineId,
                            ),
                          )
                        }
                        className="text-gray-400 hover:text-red-500"
                      >
                        <span className="material-symbols-outlined text-lg">
                          delete
                        </span>
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">Cart is empty</p>
                )}
              </div>

              {/* Totals */}
              <div className="border-t pt-6 space-y-3">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{total}</span>
                </div>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Delivery Fee</span>
                  <span className="font-medium text-green-600">FREE</span>
                </div>

                <div className="flex justify-between text-lg font-extrabold pt-2">
                  <span>Total</span>
                  <span className="text-blue-600">₹{total}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 space-y-3">
               <button
  onClick={() => navigate("/checkout")}
  disabled={cart.length === 0}
  className={`w-full py-4 rounded-xl font-bold text-base shadow-lg transition-transform ${
    cart.length > 0
      ? "bg-gradient-to-br from-blue-600 to-blue-500 text-white hover:scale-[0.98]"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
>
  Proceed to Checkout
</button>

                <button
                  onClick={() => setCart([])}
                  className="w-full text-gray-500 text-sm font-semibold py-2 hover:text-blue-600"
                >
                  Clear Cart
                </button>
              </div>

              {/* Info Box */}
              <div className="mt-6 flex items-start gap-3 p-4 bg-gray-100 rounded-2xl">
                <span className="material-symbols-outlined text-blue-600 text-xl">
                  info
                </span>
                <p className="text-[11px] text-gray-500 leading-relaxed">
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
