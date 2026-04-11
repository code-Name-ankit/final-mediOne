import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
     role: "user",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
      );

      // ✅ Token store
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful ✅");

      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Invalid credentials ❌");
    }
  };
  return (
    <>
      <main className=" w-full flex items-stretch">
        {/* 
<!-- Left Side: Illustration & Branding --> */}
        <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-blue-700 flex-col justify-between p-12 min-h-screen mt-24">
          {/* 1. Background Image Layer - Isme z-index handle kiya hai */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
            <img
              alt="Abstract Background"
              className="w-full h-full object-cover"
              src="https://media.istockphoto.com/id/1316518574/photo/abstract-sea-glass-wave-pattern-blue-green-teal-pearl-water-wavy-colorful-smooth-wet-striped.jpg?s=612x612&w=0&k=20&c=1qTDYIVPghxyH-cGKy8h-iq8ThhLEMsV5-y_Qku8-ak="
              // Error handling ke liye ek placeholder link check karein agar ye wala work nahi kar raha
            />
          </div>

          {/* 2. Content Layer - Isme z-10 zaroori hai taaki text image ke upar dikhe */}
          <div className="z-10">
            <span className="text-2xl font-bold tracking-tight text-white">
              mediOne
            </span>
          </div>

          <div className="z-10 max-w-md">
            <h1 className="text-white font-bold text-5xl leading-tight mb-6">
              Your health, our priority
            </h1>
            <p className="text-blue-50 text-lg leading-relaxed opacity-90">
              Access your personalized clinical dashboard and connect with
              healthcare professionals in a secure, serene environment.
            </p>
          </div>

          <div className="z-10 flex gap-8 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">
                HIPAA
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                <span className="material-symbols-outlined">lock</span>
              </div>
              <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">
                Secure
              </span>
            </div>
          </div>

          {/* Glow effect */}
          <div className="absolute -right-20 top-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-[120px] z-0"></div>
        </section>

        {/* <!-- Right Side: Login Form --> */}
        <section className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-24 bg-surface mt-24">
          <div className="w-full max-w-md space-y-8">
            {/* <!-- Header --> */}
            <div className="text-center lg:text-left space-y-2">
              <h2 className="text-3xl font-headline font-bold text-on-surface">
                Welcome Back
              </h2>
              <p className="text-on-surface-variant">
                Please enter your credentials to access your account.
              </p>
            </div>
            {/* <!-- Form Card --> */}
            <div className="bg-surface-container-lowest p-1 rounded-xl shadow-[0_20px_40px_rgba(25,28,30,0.06)]">
              <form onSubmit={handleLogin} className="p-8 space-y-6">
                {/* <!-- Email Field --> */}
                <div className="space-y-2">
                  <label
                    className="block text-xs font-label text-on-surface-variant tracking-wider uppercase"
                    for="id_field"
                  >
                    Email or Phone Number
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                      <span className="material-symbols-outlined text-lg">
                        person
                      </span>
                    </div>
                    <input
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      type="text"
                      className="block w-full pl-11 pr-4 py-4 bg-surface-container-highest border-none rounded-xl text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline"
                      id="id_field"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>
                {/* <!-- Password Field --> */}
                <div className="space-y-2">
                  <label
                    className="block text-xs font-label text-on-surface-variant tracking-wider uppercase"
                    for="password"
                  >
                    Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-outline">
                      <span className="material-symbols-outlined text-lg">
                        lock
                      </span>
                    </div>
                    <input
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      type="password"
                      className="block w-full pl-11 pr-12 py-4 bg-surface-container-highest border-none rounded-xl text-on-surface focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline"
                      id="password"
                      placeholder="••••••••"
                    />
                    <button
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-primary transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>

                {/* 🔥 ROLE SELECT */}
<div className="space-y-2">
  <label className="block text-xs font-label text-on-surface-variant uppercase">
    Login As
  </label>

  <div className="grid grid-cols-4 gap-2">

    {["user", "doctor", "medical", "lab"].map((role) => (
      <button
        key={role}
        type="button"
        onClick={() =>
          setFormData({ ...formData, role })
        }
        className={`py-2 rounded-lg text-xs font-bold border transition-all ${
          formData.role === role
            ? "bg-blue-600 text-white"
            : "bg-gray-100"
        }`}
      >
        {role}
      </button>
    ))}

  </div>
</div>
                {/* <!-- Options Row --> */}
                <div className="flex items-center justify-between py-1">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 bg-surface-container-high transition-all"
                      type="checkbox"
                    />
                    <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                      Remember me
                    </span>
                  </label>
                  <a
                    className="text-sm font-medium text-primary hover:text-primary-container transition-colors"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                {/* <!-- Primary CTA --> */}
                <button
                  className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-white font-semibold rounded-xl shadow-lg hover:shadow-primary/20 transform active:scale-[0.98] transition-all"
                  type="submit"
                >
                  Login
                </button>
                {/* <!-- Divider --> */}
                <div className="relative flex items-center justify-center py-2">
                  <div className="w-full h-px bg-outline-variant/30"></div>
                  <span className="absolute px-4 bg-surface-container-lowest text-xs font-label text-outline uppercase tracking-widest">
                    Or continue with
                  </span>
                </div>
                {/* <!-- Secondary OAuth --> */}
                <button
                  className="w-full py-4 bg-surface-container-high text-on-primary-fixed-variant font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-surface-container-highest transition-all group"
                  type="button"
                >
                  <svg className="w-5 h-5" viewbox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Google
                </button>
              </form>
            </div>
            {/* <!-- Footer Links --> */}
            <div className="text-center space-y-6">
              <p className="text-on-surface-variant">
                Don't have an account?
                <a
                  className="text-primary font-bold hover:underline"
                  href="signup"
                >
                  Sign up for free
                </a>
              </p>
              <div className="flex items-center justify-center gap-2 text-outline-variant py-2">
                <span className="material-symbols-outlined text-base">
                  encrypted
                </span>
                <span className="text-xs font-label uppercase tracking-widest">
                  Secure &amp; encrypted
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
