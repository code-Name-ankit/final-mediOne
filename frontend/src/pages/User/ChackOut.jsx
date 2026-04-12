import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState(location.state?.cart || []);
  const token = localStorage.getItem("token");

  // Form States
  const [address, setAddress] = useState("742 Evergreen Terrace, Springfield");
  const [fullName, setFullName] = useState("Alexander Wright");
  const [phone, setPhone] = useState("+91 9876543210");
  const [zip, setZip] = useState("395001");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [loading, setLoading] = useState(false);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleOrder = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return alert("Cart is empty ❌");

    setLoading(true);
    const orderData = {
      items: cart.map((item) => ({
        medicine: item.medicineId || item._id,
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      totalAmount,
      address: `${fullName}, ${address}, ZIP: ${zip}, Phone: ${phone}`,
      paymentMethod,
    };

    try {
      await axios.post("http://localhost:5000/api/orders", orderData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("✅ Order Placed Successfully!");
      setCart([]);
      navigate("/");
    } catch (err) {
      alert("❌ Order Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-12 flex justify-center font-sans text-slate-900">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* --- LEFT SIDE: THE FORM (Light & Stylish) --- */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 md:p-12">
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                Secure Checkout
              </h2>
              <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-xl">
                <span className="material-symbols-outlined text-lg">lock</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-blue-700">
                  Protected
                </span>
              </div>
            </div>

            <form onSubmit={handleOrder} className="space-y-12">
              {/* STEP 1: DELIVERY */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h3 className="text-lg font-bold">Delivery Details</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-full">
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-slate-50 border border-slate-100 focus:border-blue-400 focus:bg-white rounded-xl px-5 py-3.5 outline-none transition-all font-medium"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  {/* --- Phone Number Input --- */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">
                      Phone Number
                    </label>
                    <input
                      className="w-full bg-slate-50 border border-slate-100 focus:border-blue-400 focus:bg-white rounded-xl px-5 py-3.5 outline-none transition-all font-medium"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)} // Yeh line add karein
                    />
                  </div>

                  {/* --- ZIP Code Input --- */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">
                      ZIP Code
                    </label>
                    <input
                      className="w-full bg-slate-50 border border-slate-100 focus:border-blue-400 focus:bg-white rounded-xl px-5 py-3.5 outline-none transition-all font-medium"
                      type="text"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)} // Yeh line add karein
                    />
                  </div>
                  <div className="col-span-full">
                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2 ml-1">
                      Address
                    </label>
                    <textarea
                      className="w-full bg-slate-50 border border-slate-100 focus:border-blue-400 focus:bg-white rounded-xl px-5 py-3.5 outline-none transition-all font-medium resize-none"
                      rows="3"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* STEP 2: PAYMENT METHOD */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h3 className="text-lg font-bold">Payment Method</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: "CARD", label: "Credit Card", icon: "credit_card" },
                    {
                      id: "UPI",
                      label: "UPI Transfer",
                      icon: "account_balance",
                    },
                    { id: "COD", label: "Cash on Delivery", icon: "payments" },
                  ].map((m) => (
                    <label
                      key={m.id}
                      onClick={() => setPaymentMethod(m.id)}
                      className={`relative flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                        paymentMethod === m.id
                          ? "border-blue-600 bg-blue-50/50"
                          : "border-slate-100 bg-white hover:border-slate-200"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-3xl ${paymentMethod === m.id ? "text-blue-600" : "text-slate-300"}`}
                      >
                        {m.icon}
                      </span>
                      <span
                        className={`font-bold text-xs uppercase tracking-tight ${paymentMethod === m.id ? "text-blue-700" : "text-slate-500"}`}
                      >
                        {m.label}
                      </span>
                      {paymentMethod === m.id && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                          <span className="material-symbols-outlined text-white text-[12px] font-bold">
                            check
                          </span>
                        </div>
                      )}
                    </label>
                  ))}
                </div>

                {/* Light Card Details */}
                {paymentMethod === "CARD" && (
                  <div className="p-6 bg-slate-50 rounded-2xl space-y-4 border border-slate-100 transition-all">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase mb-2">
                        Card Information
                      </label>
                      <input
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none"
                        placeholder="**** **** **** 4242"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none"
                        placeholder="MM/YY"
                      />
                      <input
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 outline-none"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* ACTION BUTTON */}
              <div className="pt-6">
                <button
                  disabled={loading || cart.length === 0}
                  className="w-full py-5 rounded-2xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 active:scale-[0.98] transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 disabled:bg-slate-200 disabled:shadow-none"
                  type="submit"
                >
                  {loading ? "Placing Order..." : "Confirm & Place Order"}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* --- RIGHT SIDE: SUMMARY (Clean & Light) --- */}
        <div className="lg:col-span-5">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm sticky top-10">
            <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
              Basket Summary
            </h3>

            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
              {cart.map((item) => (
                <div
                  key={item.medicineId || item._id}
                  className="flex justify-between items-center group"
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-14 h-14 bg-slate-50 rounded-xl border border-slate-100 flex-shrink-0">
                      <img
                        src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200&auto=format&fit=crop"
                        className="w-full h-full object-cover rounded-xl"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-800">
                        {item.name}
                      </p>
                      <p className="text-slate-400 text-xs">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-bold text-slate-900 text-sm">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100 space-y-4">
              <div className="flex justify-between text-slate-500 font-medium text-sm">
                <span>Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium text-sm">
                <span>Delivery Fee</span>
                <span className="text-green-600 font-bold uppercase text-[10px] bg-green-50 px-2 py-1 rounded">
                  Free
                </span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-lg font-bold text-slate-900">
                  Total amount
                </span>
                <span className="text-3xl font-black text-blue-600">
                  ₹{totalAmount}
                </span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-slate-50 rounded-xl flex items-center gap-3">
              <span className="material-symbols-outlined text-slate-400">
                verified_user
              </span>
              <p className="text-[10px] text-slate-500 leading-tight uppercase font-bold tracking-tighter">
                Clinical Serenity verified purchase. Guaranteed delivery in
                24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
