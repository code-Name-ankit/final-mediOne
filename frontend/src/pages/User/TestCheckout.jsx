import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function TestCheckout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { item } = location.state || {};

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">No item selected</h2>
        <button onClick={() => navigate(-1)} className="bg-primary text-white px-6 py-2 rounded-lg">
          Go Back
        </button>
      </div>
    );
  }

  const tax = item.price * 0.05;
  const total = item.price + tax;

  // --- Backend Connection Logic ---
  const handleConfirmAndPay = async () => {
    setIsSubmitting(true);
    try {
      const orderPayload = {
        labId: item.id,
        labName: item.name,
        testType: item.type || "General Test",
        price: item.price,
        tax: tax,
        totalAmount: total
      };

      // Apne backend endpoint ko call karein
      const response = await axios.post("http://localhost:5000/api/lab-orders/place", orderPayload);

      if (response.data.success) {
        
        alert("Success: " + response.data.message);
        console.log("Order Details:", response.data.order);
        
        
        navigate("/order-success", { state: { order: response.data.order } });
      }
    } catch (error) {
      console.error("Booking Error:", error);
      alert(error.response?.data?.message || "Something went wrong while booking.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-12 px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side: Booking Details */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-800">Review Booking</h2>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">biotech</span>
              Lab Information
            </h3>
            <div className="border-t pt-4">
              <p className="text-slate-500 text-sm">Selected Lab</p>
              <p className="text-xl font-bold text-slate-800">{item.name}</p>
              <div className="mt-4 inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase">
                {item.type} Appointment
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">person</span>
              Patient Details
            </h3>
            <p className="text-slate-500 text-sm italic">Details will be fetched from your profile.</p>
          </div>
        </div>

        {/* Right Side: Price Summary */}
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 h-fit sticky top-28">
          <h3 className="text-xl font-bold mb-6 text-slate-800">Order Summary</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between text-slate-600">
              <span>Service Price</span>
              <span className="font-semibold text-slate-800">₹{item.price}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>GST (5%)</span>
              <span className="font-semibold text-slate-800">₹{tax.toFixed(2)}</span>
            </div>
            <hr className="border-dashed my-4" />
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-slate-800">Total Amount</span>
              <span className="text-2xl font-black text-primary">₹{total.toFixed(2)}</span>
            </div>
          </div>

          <button 
            onClick={handleConfirmAndPay}
            disabled={isSubmitting}
            className={`w-full mt-8 text-white py-4 rounded-2xl font-bold text-lg shadow-lg transition-all ${
              isSubmitting ? "bg-slate-400 cursor-not-allowed" : "bg-primary shadow-primary/30 hover:brightness-95"
            }`}
          >
            {isSubmitting ? "Processing..." : "Confirm & Pay"}
          </button>
          
          <p className="text-center text-xs text-slate-400 mt-4">
            By clicking, you agree to our Terms of Service.
          </p>
        </div>

      </div>
    </div>
  );
}