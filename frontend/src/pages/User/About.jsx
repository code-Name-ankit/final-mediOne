import React from "react";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-xs font-bold tracking-widest uppercase">
              Empathetic Precision
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-background tracking-tighter leading-tight mb-6">
              About MediOne
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              Connecting you with medicines, labs, and doctors near you through
              a high-end clinical experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-95 transition-all">
                Get Started
              </button>
              <button className="bg-surface-container-high text-on-primary-fixed-variant px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-highest transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="bg-white/40 backdrop-blur-md rounded-[3rem] p-4 relative border border-white/20">
              <img
                alt="Modern Medical Consultation"
                className="rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover"
                data-alt="Modern clinical doctor using a digital tablet in a bright minimalist office with soft blue and green accents and natural light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOjjuhWwiSTZUC2Kmn0FyVQxpDUx3ByPpEVQcXyvlwdh-3twtpfr64gsrwj325EC0LZgI-rwhKWn9FjE8RndhddFWzpihnoHs5A7DXZfDNWgX-jSzPNUPZQMpDTdM6294wULK69ckKuof0M9Ymgwv9Ow9QyA8Pdq6UZ4Znx75JnuBrvyrsOF9_xvW1ClP8_S1G8y42dxFXB_4Kxjrdy34Wls4YvH6uGmLhU962ps3CFHLeLNvRJj9auQz4dGwTdcUQRa1R6UyOQNs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section (Asymmetric Bento) */}
      <section class="py-24 bg-surface-container-low">
        <div class="max-w-7xl mx-auto px-8">
          <div class="grid lg:grid-cols-12 gap-8">
            <div class="lg:col-span-8 bg-surface-container-lowest p-12 rounded-[2rem] flex flex-col justify-center">
              <h2 class="font-headline text-3xl md:text-4xl font-bold mb-6 text-on-surface">
                Our Mission
              </h2>
              <p class="text-xl text-on-surface-variant leading-relaxed">
                In a world of fragmented healthcare, MediOne acts as the
                digital bridge. We solve the complexity of finding trusted local
                services by curating a network of verified medicine providers,
                labs, and physicians—all accessible through one seamless
                editorial interface. We believe healthcare should feel less like
                a chore and more like care.
              </p>
            </div>
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-secondary-container p-8 rounded-[2rem]">
                <div className="text-4xl font-bold text-on-secondary-container mb-2">
                  500+
                </div>
                <div className="text-on-secondary-container/80 font-medium">
                  Verified Clinics
                </div>
              </div>
              <div className="bg-primary-fixed p-8 rounded-[2rem]">
                <div className="text-4xl font-bold text-on-primary-fixed-variant mb-2">
                  15k+
                </div>
                <div className="text-on-primary-fixed-variant/80 font-medium">
                  Active Patients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Features Overview */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-4">
              A Holistic Approach
            </h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* <!-- Medicine Finder --> */}
            <div className="group p-8 rounded-[2.5rem] bg-surface-container-lowest transition-all duration-300 hover:bg-white border border-transparent hover:border-outline-variant/15 hover:shadow-2xl hover:shadow-primary/5">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">map</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Medicine Finder</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Real-time map integration to locate rare medicines at pharmacies
                within your immediate vicinity.
              </p>
            </div>
            {/* <!-- Lab Tests --> */}
            <div className="group p-8 rounded-[2.5rem] bg-surface-container-lowest transition-all duration-300 hover:bg-white border border-transparent hover:border-outline-variant/15 hover:shadow-2xl hover:shadow-primary/5">
              <div className="w-16 h-16 bg-secondary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">
                  biotech
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Lab Tests</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Schedule professional home collection for over 500 types of
                diagnostic tests with digital reports.
              </p>
            </div>
            {/* <!-- Doctor Consultation --> */}
            <div className="group p-8 rounded-[2.5rem] bg-surface-container-lowest transition-all duration-300 hover:bg-white border border-transparent hover:border-outline-variant/15 hover:shadow-2xl hover:shadow-primary/5">
              <div className="w-16 h-16 bg-tertiary-fixed-dim/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-tertiary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl">
                  video_chat
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Consultations</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Instant video or chat access to board-certified specialists
                without the clinical waiting room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-surface-container">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="font-headline text-4xl font-bold text-center mb-20">
            Simple Three-Step Access
          </h2>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 -translate-y-1/2"></div>
            <div className="grid lg:grid-cols-3 gap-12 relative">
              <div className="bg-surface-container-lowest p-10 rounded-[2rem] text-center shadow-sm relative border border-outline-variant/5">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <h4 className="text-xl font-bold mb-4 mt-4">Search</h4>
                <p className="text-on-surface-variant">
                  Describe your symptoms or type the specific medical service
                  you need.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-[2rem] text-center shadow-sm relative border border-outline-variant/5">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <h4 className="text-xl font-bold mb-4 mt-4">Choose</h4>
                <p className="text-on-surface-variant">
                  Compare verified providers based on distance, ratings, and
                  expert availability.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-[2rem] text-center shadow-sm relative border border-outline-variant/5">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <h4 className="text-xl font-bold mb-4 mt-4">Get Service</h4>
                <p className="text-on-surface-variant">
                  Confirm your booking and receive your service at home or at
                  the facility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-4xl font-bold mb-12">
              The MediOne Advantage
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-surface-container-low hover:bg-white transition-colors border border-transparent hover:border-outline-variant/20">
                <span
                  className="material-symbols-outlined text-primary mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  speed
                </span>
                <h5 className="font-bold mb-2">Fast Service</h5>
                <p className="text-sm text-on-surface-variant">
                  Instant matches for urgent needs.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container-low hover:bg-white transition-colors border border-transparent hover:border-outline-variant/20">
                <span
                  className="material-symbols-outlined text-secondary mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
                <h5 className="font-bold mb-2">Trusted Providers</h5>
                <p className="text-sm text-on-surface-variant">
                  Only board-certified clinicians.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container-low hover:bg-white transition-colors border border-transparent hover:border-outline-variant/20">
                <span
                  className="material-symbols-outlined text-primary mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  security
                </span>
                <h5 className="font-bold mb-2">Secure Platform</h5>
                <p className="text-sm text-on-surface-variant">
                  HIPAA-compliant data encryption.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-surface-container-low hover:bg-white transition-colors border border-transparent hover:border-outline-variant/20">
                <span
                  className="material-symbols-outlined text-secondary mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  touch_app
                </span>
                <h5 className="font-bold mb-2">Easy to Use</h5>
                <p className="text-sm text-on-surface-variant">
                  Designed for all age groups.
                </p>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="bg-primary p-1 rounded-3xl overflow-hidden rotate-3 shadow-2xl">
              <img
                alt="Healthcare Professional"
                className="w-full h-96 object-cover rounded-[1.25rem]"
                data-alt="Close up of a healthcare professional in white scrubs using a modern digital medical dashboard with clean minimalist UI"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSNhWksViWCtjxs93BKWa3jLKxeYIJVlX3-OpAqhWdY3P598_pV0wWXaMfNcePgB7PTZkmFjwPHHCeFk26a-Ef_eqW08_EJiitPwpQQ15ffDC21Emm5LqH5JPGlX-nwubckYBjCmMzZ3W0EKl1QiURdhgJ0xkCY8mvfOmIDZryVWifK_AoUcdrlgh7LcGzYP2CJ3QU5llQjn5eaHlA0nr-p1nHFiweFsbHhXmJkn1aXYzRVi2hdVKec3yiyF_ejg13I9aG8mEG9ZU"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-bold mb-4">
              Led by Experts
            </h2>
            <p className="text-on-surface-variant">
              The visionaries behind our clinical serenity model.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative">
                <img
                  alt="Dr. Sarah Mitchell"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  data-alt="Portrait of a female doctor with dark hair and glasses in professional attire against a neutral light grey background"
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <h4 className="text-xl font-bold">Dr. Sarah Mitchell</h4>
              <p className="text-primary font-medium mb-2">
                Chief Medical Officer
              </p>
            </div>
            <div className="group">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative">
                <img
                  alt="James Wilson"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  data-alt="Professional man with short dark hair in a crisp blue shirt looking confident in a clean office setting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQbyq1oEM9AOCOAFrap0Cqu92GpTzsobLJlI64WWXboEztaA2f8WqEFuQ69MSxuwI9E1WoHfeVlzKM_ZyBxF42WKNrhiAuCL4JkKYhquA78RhnzMeIW3Z4ezm1gBPMcuqVUYYS1Zj70advlW2PE6wAGYcplMY-m4wOyVGI_5weIBtH-kWfTsqmSDdTa5LW1OKekF_4wLuwX4LMsn6dy5wLPJo5Cx8XpIjEP4nh7eKKlkt6K8n3jdi-HCVe1Erj2zOscpXvTxmYGk0"
                />
              </div>
              <h4 className="text-xl font-bold">James Wilson</h4>
              <p className="text-primary font-medium mb-2">
                Head of Technology
              </p>
            </div>
            <div className="group">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative">
                <img
                  alt="Elena Rodriguez"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  data-alt="Hispanic woman in professional business attire with a warm smile in a modern glass office environment"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCygrvFQDa4q9J22kjy13QnBOwGaPRc2CMt0XQRz6I5eXMSTWAmcr5Tzuf2pWMWPraRChDIaVHAJd_H8NZCdVBEiXxhKkUg_QPT9pj5huFu9oCyABw58QCFIr4fsbz-1i2OIVa9UrP7zaR7rR3vJssbW7L_aAYaLt7_4YDTpVINXbiJiGP3rKE3e81IriykH1112xZyl1mxRoyzCwn8KidN9zgXhraqLW5LWpYeqwPMw5Y0ssIR6gE3mUQR-VnPh8LDNFKRcVHus5A"
                />
              </div>
              <h4 className="text-xl font-bold">Elena Rodriguez</h4>
              <p className="text-primary font-medium mb-2">Operations Lead</p>
            </div>
            <div className="group">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 relative">
                <img
                  alt="Marcus Chen"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  data-alt="Portrait of a professional man with modern haircut wearing a casual blazer in a bright architectural setting"
                  src="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </div>
              <h4 className="text-xl font-bold">Marcus Chen</h4>
              <p className="text-primary font-medium mb-2">
                Patient Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section (Testimonials)  */}
      <section className="py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 relative text-white">
            {/* Quote Icon */}
            <div className="absolute top-0 right-0 p-12 text-primary-fixed/20">
              <span className="material-symbols-outlined text-[10rem]">
                format_quote
              </span>
            </div>

            <div className="relative z-10 max-w-2xl">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-secondary-fixed"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>

              {/* Review Text */}
              <h3 className="text-3xl md:text-4xl font-headline font-bold leading-tight mb-8">
                "MediOne found a rare medication for my mother within 10
                minutes when five local pharmacies said they were out of stock.
                It truly is a lifesaver."
              </h3>

              {/* User Info */}
              <div className="flex items-center gap-4">
                {/* 👇 Image instead of initials */}
                <img
                  src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="doctor"
                  className="w-14 h-14 rounded-full object-cover border-2 border-white"
                />

                <div>
                  <div className="font-bold text-xl">Arjun Deshmukh</div>
                  <div className="text-primary-fixed opacity-80">
                    Verified User • Bangalore
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8">
            Start using MediOne today
          </h2>
          <p className="text-xl text-on-surface-variant mb-12">
            Experience the future of healthcare connectivity. Simple, fast, and
            secure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-gradient-to-br from-primary to-primary-container text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-primary/20 hover:scale-105 transition-all">
              Get Started
            </button>
            <button className="w-full sm:w-auto bg-white border border-outline-variant/30 text-on-surface px-10 py-5 rounded-2xl font-bold text-xl hover:bg-surface-container-low transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
