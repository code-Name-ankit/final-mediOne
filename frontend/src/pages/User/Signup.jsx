import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });


  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      }
    );

    alert("Registered successfully ✅");
    console.log(res.data);

  } catch (err) {
    console.error(err);
    alert("Registration failed ❌");
  }
};

  return (
    <>
      <main className="min-h-screen flex">
        {/* <!-- Left Side: Abstract Illustration & Branding --> */}
        <section className="hidden lg:flex lg:w-1/2 relative flex-col justify-center items-center overflow-hidden bg-primary-container p-12 mt-24">
          {/* <!-- Background Elements --> */}
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-30 mix-blend-overlay"
              data-alt="abstract surgical light patterns with soft blue and green radial gradients and ethereal medical lighting atmosphere"
              src="https://thumbs.dreamstime.com/b/medical-6360616.jpg?w=768"
            />
          </div>
          <div className="relative z-10 w-full max-w-xl">
            {/* <!-- Brand Anchor Logic: Product Name from JSON --> */}
            <div className="mb-12">
              <span className="font-headline font-extrabold tracking-tight text-6xl text-white">
                mediOne
              </span>
            </div>
            <div className="space-y-6">
              <h1 className="font-headline text-display-lg text-5xl font-bold leading-tight tracking-tight text-white">
                Your health, <br />
                our priority
              </h1>
              <p className="text-on-primary-container text-xl max-w-md opacity-90">
                Join the next generation of clinical precision. Experience
                medical management refined for the editorial era.
              </p>
            </div>
            {/* <!-- Floating Metric Card (Asymmetric UI) --> */}
            <div className="mt-16 bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-8 inline-flex flex-col gap-2 max-w-sm transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <span className="material-symbols-outlined">
                    verified_user
                  </span>
                </div>
                <div>
                  <p className="font-medium text-xs text-slate-600 uppercase tracking-wider">
                    Trusted by Professionals
                  </p>
                  <p className="font-bold text-2xl text-slate-900">
                    50k+ Providers
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Subtle Texture Overlays --> */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-fixed/20 rounded-full blur-3xl"></div>
          <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary-fixed/20 rounded-full blur-3xl"></div>
        </section>

        {/* <!-- Right Side: Signup Form --> */}
        <section className="w-full lg:w-1/2 bg-surface flex items-center justify-center p-6 md:p-12 overflow-y-auto">
          <div className="w-full max-w-[520px] py-8">
            {/* <!-- Branding for Mobile --> */}
            <div className="lg:hidden mb-12 flex justify-center">
              <span className="font-headline font-bold text-3xl text-primary">
                mediOne
              </span>
            </div>
            <div className="mb-10 text-center lg:text-left">
              <h2 className="font-headline text-3xl font-bold text-on-surface tracking-tight">
                Create Account
              </h2>
              <p className="text-on-surface-variant mt-2">
                Enter your details to start your clinical journey.
              </p>
            </div>
            {/* <!-- Role Selection --> */}
            <div className="mb-8">
              <p className="font-label text-label-md text-on-surface-variant mb-4 tracking-widest uppercase">
                Select your role
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "user" })}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-container-lowest border-2 border-primary ring-offset-2 transition-all group "
                >
                  <span className="material-symbols-outlined text-primary mb-1">
                    person
                  </span>
                  <span className="text-xs font-semibold text-primary">
                    User
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "medical" })}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all group"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary mb-1">
                    local_pharmacy
                  </span>
                  <span className="text-xs font-semibold text-on-surface-variant group-hover:text-primary">
                    Pharmacy
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "lab" })}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all group"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary mb-1">
                    biotech
                  </span>
                  <span className="text-xs font-semibold text-on-surface-variant group-hover:text-primary">
                    Lab
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "doctor" })}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all group"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary mb-1">
                    medical_services
                  </span>
                  <span className="text-xs font-semibold text-on-surface-variant group-hover:text-primary">
                    Doctor
                  </span>
                </button>
              </div>
            </div>
            {/* <!-- Form Fields --> */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-label text-label-md text-on-surface-variant mb-2 ml-1">
                  Full Name
                </label>
                <input
                  className="w-full h-14 px-5 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-label text-label-md text-on-surface-variant mb-2 ml-1">
                  Email or Phone Number
                </label>
                <input
                  class="w-full h-14 px-5 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="name@email.com"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block font-label text-label-md text-on-surface-variant mb-2 ml-1">
                    Password
                  </label>
                  <input
                    className="w-full h-14 px-5 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="••••••••"
                    type="password"
                  />
                  {/* <!-- Password Strength --> */}
                  {/* <div className="mt-2 flex gap-1 px-1">
                    <div className="h-1 w-1/3 rounded-full bg-secondary"></div>
                    <div className="h-1 w-1/3 rounded-full bg-secondary"></div>
                    <div className="h-1 w-1/3 rounded-full bg-surface-container-high"></div>
                  </div> */}
                  {/* <p className="text-[10px] text-secondary mt-1 font-medium ml-1">
                    Medium strength password
                  </p> */}
                </div>
                <div>
                  <label class="block font-label text-label-md text-on-surface-variant mb-2 ml-1">
                    Confirm Password
                  </label>
                  <input
                    className="w-full h-14 px-5 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all placeholder:text-outline"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>
              <div className="pt-2">
                <button
                  className="w-full h-14 primary-gradient text-white font-semibold rounded-xl bg-blue-950  items-center justify-center gap-2"
                  type="submit"
                >
                  <span>Get Started</span>
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="relative py-4 flex items-center">
                <div className="flex-grow border-t border-surface-container-high"></div>
                <span class="flex-shrink mx-4 text-outline text-sm font-medium">
                  or continue with
                </span>
                <div className="flex-grow border-t border-surface-container-high"></div>
              </div>
              <button
                className="w-full h-14 bg-surface-container-lowest border border-outline-variant/30 text-on-surface font-semibold rounded-xl hover:bg-surface-container-low transition-all active:scale-[0.98] flex items-center justify-center gap-3"
                type="button"
              >
                <img
                  alt="Google logo"
                  className="w-5 h-5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtwCsBJddeb-gmHO-rKm1pe0-ZpzhM94TRp86aKB5qYhu_WpzclkpDsCgGVIa2csBW0ZYi6xSHuMNAwzGhT_X4ko5P723vwkcfubLPXLU1NypE0n5Um7mIdzSyiLZ9FoqkYofkWOcnGV7nZ6eefROg-xe5Iexg7jD6WKrsgKISMIZRkRn_W593Hxx08hOa1PECLxtl434QV4ZBKpGQiPLya3eYkIp744IzchpXBx6Nyxb8CRtx5aMYraVT2xnFwGZG75kTi3k_AhY"
                />
                <span>Continue with Google</span>
              </button>
            </form>
            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="text-on-surface-variant text-sm">
                Already have an account?
                <a class="text-primary font-bold hover:underline ml-1" href="login">
                  Sign In
                </a>
              </p>
              <div classNmae="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/5 text-on-secondary-container">
                <span className="material-symbols-outlined text-sm">
                  encrypted
                </span>
                <span className="text-xs font-semibold tracking-wide">
                  SECURE &amp; ENCRYPTED
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
