import React from "react";

const Home = () => {
  return (
    <>
      <section className="relative px-6 py-20 lg:py-32 overflow-visible">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-headline font-extrabold tracking-tight text-on-surface leading-[1.1]">
              Find Medicines, Book Lab Tests &{" "}
              <span className="text-primary">Consult Doctors</span> Near You
            </h1>

            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              The ultimate digital corridor for all your health needs.
            </p>

            {/* Search Bar */}
            <div className="glass-search p-2 rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-2xl border border-white/20">
              <div className="flex items-center gap-2 px-4 w-full md:w-1/3 md:border-r border-outline-variant/30">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>

                <input
                  type="text"
                  placeholder="Your Location"
                  className="bg-transparent outline-none text-on-surface w-full font-medium"
                />
              </div>

              <div className="flex items-center gap-2 px-4 w-full md:flex-1">
                <span className="material-symbols-outlined text-outline">
                  search
                </span>

                <input
                  type="text"
                  placeholder="Search medicines, labs, or doctors..."
                  className="bg-transparent outline-none text-on-surface w-full font-medium"
                />
              </div>

              <button className="w-full md:w-auto bg-gradient-to-br from-primary to-primary-container text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-all">
                Search Now
              </button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative hidden lg:block overflow-visible">
            {/* Background blur */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

            {/* Image */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform rotate-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEgyWy4sKjrlamsjlAq3e6XLwAp9bypWUfllB9hhqx-r3Bzqsz7gXEwadCU7I30ir2PqDIGF8k1q31D-fGJcATt9pVRiWUII1RngaW7PD46dC6H0_GrXMr41Y9vs1AIe2aLP416oicO6x8V2OB-WRKAGmv6ikrBX97asV3H24qBoVG370c7RVX5VPKzlrSj6zG3oay6jRTXoCOcEDvWy9AS2zbgT4hDR8NS0vHrVTKVw-GkDoM6AugdX_kfmqfGg6Zcike8OaC474"
                alt="hospital"
                className="w-full h-[600px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-10 -left-10 z-50 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/50 max-w-xs transform -rotate-3 hover:rotate-0 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                </div>

                <div>
                  <div className="font-bold text-on-surface">
                    Verified Sources
                  </div>
                  <div className="text-sm text-on-surface-variant">
                    500+ Local Partners
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 sm:py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="group p-6 sm:p-8 bg-surface-container-lowest rounded-2xl sm:rounded-[2rem] hover:bg-primary transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary-fixed flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-white/20">
                <span
                  className="material-symbols-outlined text-primary text-2xl sm:text-3xl group-hover:text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  pill
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-headline font-bold mb-3 sm:mb-4 group-hover:text-white">
                Find Medicines
              </h3>

              <p className="text-sm sm:text-base text-on-surface-variant group-hover:text-white/80 mb-5 sm:mb-6">
                Instantly locate rare medicines and order from your nearest
                pharmacy.
              </p>

              <span className="material-symbols-outlined text-primary group-hover:text-white group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </div>

            {/* Card 2 */}
            <div className="group p-6 sm:p-8 bg-surface-container-lowest rounded-2xl sm:rounded-[2rem] hover:bg-secondary transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary-fixed flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-white/20">
                <span
                  className="material-symbols-outlined text-on-secondary-container text-2xl sm:text-3xl group-hover:text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  biotech
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-headline font-bold mb-3 sm:mb-4 group-hover:text-white">
                Book Lab Test
              </h3>

              <p className="text-sm sm:text-base text-on-surface-variant group-hover:text-white/80 mb-5 sm:mb-6">
                NABL accredited labs with professional home collection.
              </p>

              <span className="material-symbols-outlined text-secondary group-hover:text-white group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </div>

            {/* Card 3 */}
            <div className="group p-6 sm:p-8 bg-surface-container-lowest rounded-2xl sm:rounded-[2rem] hover:bg-tertiary transition-all duration-500 cursor-pointer shadow-sm hover:shadow-2xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-tertiary-fixed flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-white/20">
                <span
                  className="material-symbols-outlined text-on-tertiary-fixed-variant text-2xl sm:text-3xl group-hover:text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  medical_services
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-headline font-bold mb-3 sm:mb-4 group-hover:text-white">
                Consult Doctor
              </h3>

              <p className="text-sm sm:text-base text-on-surface-variant group-hover:text-white/80 mb-5 sm:mb-6">
                Book video or in-clinic appointments with verified doctors.
              </p>

              <span className="material-symbols-outlined text-tertiary group-hover:text-white group-hover:translate-x-2 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Services (Bento Grid) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-primary uppercase mb-2 sm:mb-4 block">
              Quick Access
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold">
              Health services at your doorstep
            </h2>
          </div>

          <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all">
            View all providers
            <span className="material-symbols-outlined">east</span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Lab Card */}
          <div className="md:col-span-2 bg-surface-container-low rounded-3xl overflow-hidden group">
            <div className="p-6 sm:p-8 pb-0">
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-bold rounded-full">
                OPEN NOW
              </span>

              <h4 className="text-xl sm:text-2xl font-bold mt-4">
                Apollo Diagnostics
              </h4>

              <p className="text-on-surface-variant flex items-center gap-1 mt-1 text-sm">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                0.8 miles away
              </p>
            </div>

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBszs353zc9Sp6DgxeHT0HLn4jWPzq147M8h8M60yxY6iyIJLlKC81jcVO_DiN6Q2sCttY95eUddxq2lIqybDi9IAdRDJYoI2ihA0VG6gp8sQVCTQzZgSE1Nr5sS-Cq8c47lsUHYjwWBocAYpjkviO-WwkZu-T4Un_5Kd0aFuCDYW3pTm94pyGBPOpxl6ghyiNF-jVUXRwORftQgWsOCZmJ4P8uTJg5CkU8JGWATm52L4ISULmtu-e7FOxDEkMZEySndIc4kF_DQtE"
              alt="lab"
              className="w-full h-48 sm:h-64 object-cover mt-6 group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Doctor Card */}
          <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-5 sm:mb-6">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG5m4C4kptGnGvxdcJk9kAycXtW7zV0ZgXYWpLoxZJWV9v_gGG_xPYPzZCumcwl2XhakVQPlS7QyBA38HmqDz54DDZdpN7rDZ81rIU6Gy0bpNywPfzt_zUKBQigI6dKCY71jQ4tllxX2WKWQrdw7tXfvIrw9BbFvgIyqLHyeQIS1ZULgzT4_IvFE8mUEKWvX5FeifB2IZUn-mOLsgm-zFP5SNf6dWoK1VwGUMl9dY6y9UmxoZfKi-X3trSu81uyjVAHK3sOS5jZy8"
                  alt="doctor"
                  className="w-full h-full object-cover"
                />
              </div>

              <h4 className="text-lg sm:text-xl font-bold">
                Dr. Sarah Mitchell
              </h4>

              <p className="text-on-surface-variant text-sm">
                Cardiologist • 12 yrs exp.
              </p>

              <div className="flex items-center gap-1 text-primary mt-2">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                <span class="font-bold text-sm">4.9 (120 reviews)</span>
              </div>
            </div>

            <button className="mt-6 sm:mt-8 py-2 sm:py-3 bg-surface-container-high rounded-xl font-bold hover:bg-primary hover:text-white transition-colors">
              Book Now
            </button>
          </div>

          {/* Pharmacy Card */}
          <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary-fixed flex items-center justify-center mb-5 sm:mb-6">
                <span
                  className="material-symbols-outlined text-primary text-2xl sm:text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  local_pharmacy
                </span>
              </div>

              <h4 className="text-lg sm:text-xl font-bold">
                HealthPlus Pharmacy
              </h4>

              <p className="text-on-surface-variant text-sm">
                24/7 Home Delivery
              </p>

              <div className="mt-3 flex gap-1 flex-wrap">
                <span className="px-2 py-1 bg-surface-container-high text-[10px] rounded font-bold">
                  VITAMINS
                </span>
                <span className="px-2 py-1 bg-surface-container-high text-[10px] rounded font-bold">
                  VACCINES
                </span>
              </div>
            </div>

            <button className="mt-6 sm:mt-8 py-2 sm:py-3 bg-surface-container-high rounded-xl font-bold hover:bg-primary hover:text-white transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </section>

      {/* Map Preview Section */}
      <section class="max-w-7xl mx-auto px-6 py-24">
        <div class="bg-surface-container-highest rounded-[3rem] overflow-hidden relative min-h-[500px] flex items-center px-12">
          <div class="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
              alt="map"
              className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            {/* <!-- Fake Pins --> */}
            <div class="absolute top-1/3 left-1/4 w-4 h-4 bg-primary border-4 border-white rounded-full animate-pulse"></div>
            <div class="absolute bottom-1/4 right-1/3 w-4 h-4 bg-secondary border-4 border-white rounded-full animate-pulse"></div>
            <div class="absolute top-1/2 right-1/4 w-4 h-4 bg-primary border-4 border-white rounded-full animate-pulse"></div>
          </div>
          <div class="relative z-10 max-w-md bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl border border-white/50">
            <h3 class="text-3xl font-headline font-bold mb-4">
              View Services Nearby
            </h3>
            <p class="text-on-surface-variant mb-8 leading-relaxed">
              Visualize all available healthcare providers in your immediate
              vicinity on an interactive map. Find the fastest route to care.
            </p>
            <button class="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all">
              <span class="material-symbols-outlined">map</span>
              View Interactive Map
            </button>
          </div>
        </div>
      </section>

      <section class="py-24 bg-surface-container-low/50">
        <div class="max-w-7xl mx-auto px-6 text-center">
          <h2 class="text-4xl font-headline font-bold mb-20 text-center">
            Healthcare simplified in 3 steps
          </h2>
          <div class="grid md:grid-cols-3 gap-16 relative">
            {/* Connector line for desktop */}
            <div class="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-dashed border-t-2 border-dashed border-outline-variant/30"></div>
            {/*  Step 1 */}
            <div class="relative z-10 flex flex-col items-center">
              <div class="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 border-4 border-primary-fixed">
                <span class="material-symbols-outlined text-4xl text-primary">
                  search
                </span>
              </div>
              <h4 class="text-xl font-bold mb-3">Search &amp; Locate</h4>
              <p class="text-on-surface-variant text-sm max-w-[200px]">
                Enter your location and the service or medicine you need.
              </p>
            </div>
            {/* Step 2 */}
            <div class="relative z-10 flex flex-col items-center">
              <div class="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 border-4 border-secondary-fixed">
                <span class="material-symbols-outlined text-4xl text-secondary">
                  touch_app
                </span>
              </div>
              <h4 class="text-xl font-bold mb-3">Select &amp; Confirm</h4>
              <p class="text-on-surface-variant text-sm max-w-[200px]">
                Compare prices, ratings and availability to make your choice.
              </p>
            </div>
            {/* Step 3 */}
            <div class="relative z-10 flex flex-col items-center">
              <div class="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 border-4 border-tertiary-fixed">
                <span class="material-symbols-outlined text-4xl text-tertiary">
                  done_all
                </span>
              </div>
              <h4 class="text-xl font-bold mb-3">Get Results</h4>
              <p class="text-on-surface-variant text-sm max-w-[200px]">
                Get home delivery, visit the lab, or start your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="grid lg:grid-cols-3 gap-10 sm:gap-12 items-center">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold mb-4 sm:mb-6">
              Trusted by over 10 million users
            </h2>

            <p className="text-on-surface-variant mb-6 sm:mb-8">
              Join the community of healthy users who rely on MediOne.
            </p>

            <div className="flex items-center gap-4">
              {/* Avatars */}
              <div className="flex -space-x-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-12 h-12 rounded-full border-4 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-12 h-12 rounded-full border-4 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  className="w-12 h-12 rounded-full border-4 border-white"
                />
              </div>

              <span className="text-on-surface-variant font-medium">
                4.8/5 Customer Rating
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-sm border border-outline-variant/10">
              {/* Stars FIX */}
              <div className="flex text-secondary mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined">
                    star
                  </span>
                ))}
              </div>

              <p className="text-base sm:text-lg italic text-on-surface mb-4 sm:mb-6">
                "MediOne made finding my medication so easy during shortage."
              </p>

              <div className="font-bold">Emily Watson</div>
              <div className="text-sm text-on-surface-variant">
                Verified User since 2021
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl shadow-sm border border-outline-variant/10">
              {/* Stars FIX */}
              <div className="flex text-secondary mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined">
                    star
                  </span>
                ))}
              </div>

              <p className="text-base sm:text-lg italic text-on-surface mb-4 sm:mb-6">
                "Home lab collection was fast and professional."
              </p>

              <div className="font-bold">James T.</div>
              <div className="text-sm text-on-surface-variant">
                Verified User since 2023
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
