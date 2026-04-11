import React from "react";

export default function ChackOut() {
  return (
    <>
      <main class="min-h-screen pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* <!-- Left Side: Order Details (Editorial Style) --> */}
          <div class="lg:col-span-5 space-y-8">
            <section>
              <button class="flex items-center gap-2 text-primary font-semibold mb-6 group transition-all">
                <span
                  class="material-symbols-outlined group-hover:-translate-x-1 transition-transform"
                  data-icon="arrow_back"
                >
                  arrow_back
                </span>
                Back to Cart
              </button>
              <h1 class="text-5xl font-bold font-headline tracking-tighter text-on-surface mb-2">
                Order Review
              </h1>
              <p class="text-on-surface-variant body-lg">
                Review your medical supplies before proceeding to secure
                payment.
              </p>
            </section>
            <div class="bg-surface-container-low rounded-xl p-8 space-y-6">
              <div class="space-y-4">
                {/* <!-- Medicine Item 1 --> */}
                <div class="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-xl">
                  <div class="w-16 h-16 rounded-lg overflow-hidden bg-surface-variant flex-shrink-0">
                    <img
                      class="w-full h-full object-cover"
                      data-alt="close-up of white medicine tablets in professional pharmaceutical packaging with clean lighting"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBaHesZ2yNrhpAi0Zz1HwvRKWHnPOuLEen8WadBNvGQZF81uyWwy2r4kPDw9jQrqmE4efdOTJd75xJyCLExgCP3zEmxj_VfzjQ7rHVZRqkdo2wstZY3TcThqoAh721zbtlW7RrVuZ9G8xmwTYJmyyTGukZkbgov9zm3cRKqKDUxNTXj0S4nGzkuzyCnHDZBL2u08kAERyyYbkAUbiGUVC7ZqgSF_uhluwsDiQBA_2bvkieFobRWnn6y0EOCNO_5NzEvYDc6PBnL3A"
                    />
                  </div>
                  <div class="flex-grow">
                    <h3 class="font-headline font-bold text-on-surface">
                      Paracetamol 500mg
                    </h3>
                    <p class="text-sm text-on-surface-variant">
                      Strip of 10 Tablets
                    </p>
                  </div>
                  <div class="text-right">
                    <span class="block font-bold text-on-surface">$12.50</span>
                    <span class="text-xs text-on-surface-variant">Qty: 2</span>
                  </div>
                </div>
                {/* <!-- Medicine Item 2 --> */}
                <div class="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-xl">
                  <div class="w-16 h-16 rounded-lg overflow-hidden bg-surface-variant flex-shrink-0">
                    <img
                      class="w-full h-full object-cover"
                      data-alt="bottle of orange vitamin c capsules standing on a clean white surface with soft shadows"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhJVwRzUuSM6iBLU-4Di_rIWUg0-lM6jDwTxh85J0J2al5wpiTeAl_tRfiUpDZAvYAoZQUnLwjR26ofzY3XtFbT5cpYO80bvIF1nglgbuehY7M9BVF3nvSsUu16rlfP2ePRd6wqBAlHc5BFbr7fVL2in9sNMLBU6GVnRaK_W0JsMySLb4UdEh-Qk7YBwoO-CY2TuPDqkJu26phcGVVJWypYrxMqwPq45OUmFNnMgCEWs2d7azdOE-eMmYn5T1dftTjrvW65xpvXe4"
                    />
                  </div>
                  <div class="flex-grow">
                    <h3 class="font-headline font-bold text-on-surface">
                      Vitamin C 1000mg
                    </h3>
                    <p class="text-sm text-on-surface-variant">
                      Bottle of 60 Gummies
                    </p>
                  </div>
                  <div class="text-right">
                    <span class="block font-bold text-on-surface">$24.00</span>
                    <span class="text-xs text-on-surface-variant">Qty: 1</span>
                  </div>
                </div>
              </div>
              {/* <!-- Summary Breakdown --> */}
              <div class="pt-6 space-y-3">
                <div class="flex justify-between items-center text-on-surface-variant">
                  <span>Subtotal</span>
                  <span class="font-medium">$49.00</span>
                </div>
                <div class="flex justify-between items-center text-on-surface-variant">
                  <span>Delivery Fee</span>
                  <span class="font-medium">$5.00</span>
                </div>
                <div class="flex justify-between items-center text-secondary font-semibold">
                  <span>Discount Applied</span>
                  <span>-$2.45</span>
                </div>
                <div class="pt-4 flex justify-between items-center">
                  <span class="text-xl font-bold font-headline">Total</span>
                  <span class="text-3xl font-extrabold font-headline tracking-tight text-primary">
                    $51.55
                  </span>
                </div>
              </div>
              {/* <!-- Promo Code --> */}
              <div class="pt-4">
                <div class="flex gap-2">
                  <input
                    class="flex-grow bg-surface-container-highest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary placeholder:text-outline outline-none"
                    placeholder="Promo code"
                    type="text"
                  />
                  <button class="px-6 py-3 bg-surface-container-high text-on-primary-fixed-variant font-bold rounded-lg hover:bg-surface-variant transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-3 p-4 bg-secondary-container/20 rounded-xl">
              <span
                class="material-symbols-outlined text-on-secondary-container"
                data-icon="verified_user"
              >
                verified_user
              </span>
              <p class="text-sm text-on-secondary-container font-medium">
                All medicines are verified by Clinical Serenity certified
                pharmacists.
              </p>
            </div>
          </div>
          {/* <!-- Right Side: Checkout Form (Structured & Clean) --> */}
          <div class="lg:col-span-7">
            <div class="bg-surface-container-lowest premium-shadow rounded-xl p-8 md:p-12">
              <div class="flex items-center justify-between mb-10">
                <h2 class="text-2xl font-bold font-headline">
                  Secure Checkout
                </h2>
                <div class="flex items-center gap-2 text-secondary font-semibold">
                  <span
                    class="material-symbols-outlined text-lg"
                    data-icon="lock"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    lock
                  </span>
                  <span class="label-md tracking-wider">SECURE PAYMENT</span>
                </div>
              </div>
              <form class="space-y-10">
                {/* <!-- Delivery Address Section --> */}
                <div class="space-y-6">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <h3 class="text-lg font-bold font-headline">
                      Delivery Details
                    </h3>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="col-span-full">
                      <label class="block label-md text-on-surface-variant mb-2">
                        Full Name
                      </label>
                      <input
                        class="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                        type="text"
                        value="Dr. Alexander Wright"
                      />
                    </div>
                    <div>
                      <label class="block label-md text-on-surface-variant mb-2">
                        Phone Number
                      </label>
                      <input
                        class="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                        type="tel"
                        value="+1 (555) 012-3456"
                      />
                    </div>
                    <div>
                      <label class="block label-md text-on-surface-variant mb-2">
                        ZIP Code
                      </label>
                      <input
                        class="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                        type="text"
                        value="90210"
                      />
                    </div>
                    <div class="col-span-full">
                      <label class="block label-md text-on-surface-variant mb-2">
                        Address
                      </label>
                      <textarea
                        class="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none resize-none"
                        rows="3"
                      >
                        742 Evergreen Terrace, Medical District, Springfield
                      </textarea>
                    </div>
                  </div>
                </div>
                {/* <!-- Payment Options Section --> */}
                <div class="space-y-6">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <h3 class="text-lg font-bold font-headline">
                      Payment Method
                    </h3>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* <!-- Card Option (Active) --> */}
                    <label class="relative flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer group">
                      <input
                        checked=""
                        class="sr-only"
                        name="payment"
                        type="radio"
                      />
                      <span
                        class="material-symbols-outlined text-3xl text-primary"
                        data-icon="credit_card"
                      >
                        credit_card
                      </span>
                      <span class="font-bold text-on-surface">Credit Card</span>
                      <div class="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <span
                          class="material-symbols-outlined text-white text-xs"
                          data-icon="check"
                        >
                          check
                        </span>
                      </div>
                    </label>
                    {/* <!-- UPI Option --> */}
                    <label class="relative flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-transparent bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group">
                      <input class="sr-only" name="payment" type="radio" />
                      <span
                        class="material-symbols-outlined text-3xl text-on-surface-variant"
                        data-icon="account_balance"
                      >
                        account_balance
                      </span>
                      <span class="font-bold text-on-surface-variant">
                        UPI Transfer
                      </span>
                    </label>
                    {/* <!-- COD Option --> */}
                    <label class="relative flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-transparent bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer group">
                      <input class="sr-only" name="payment" type="radio" />
                      <span
                        class="material-symbols-outlined text-3xl text-on-surface-variant"
                        data-icon="payments"
                      >
                        payments
                      </span>
                      <span class="font-bold text-on-surface-variant">
                        Cash / POD
                      </span>
                    </label>
                  </div>
                  {/* <!-- Card Details (Expanded) --> */}
                  <div class="p-6 bg-surface-container-low rounded-xl space-y-4">
                    <div>
                      <label class="block label-md text-on-surface-variant mb-2">
                        Card Number
                      </label>
                      <div class="relative">
                        <input
                          class="w-full bg-surface-container-lowest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                          type="text"
                          value="**** **** **** 4242"
                        />
                        <span
                          class="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant"
                          data-icon="credit_score"
                        >
                          credit_score
                        </span>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div>
                        <label class="block label-md text-on-surface-variant mb-2">
                          Expiry Date
                        </label>
                        <input
                          class="w-full bg-surface-container-lowest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                          placeholder="MM/YY"
                          type="text"
                        />
                      </div>
                      <div>
                        <label class="block label-md text-on-surface-variant mb-2">
                          CVV
                        </label>
                        <input
                          class="w-full bg-surface-container-lowest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
                          placeholder="***"
                          type="password"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- CTA Section --> */}
                <div class="pt-6 space-y-4">
                  <button
                    class="w-full py-5 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white text-lg font-bold font-headline tracking-wide hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                    type="submit"
                  >
                    Place Secure Order
                    <span
                      class="material-symbols-outlined"
                      data-icon="shield_lock"
                    >
                      shield_lock
                    </span>
                  </button>
                  <p class="text-center text-sm text-on-surface-variant">
                    By placing the order, you agree to Clinical Serenity's{" "}
                    <a class="text-primary underline" href="#">
                      Terms &amp; Conditions
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
