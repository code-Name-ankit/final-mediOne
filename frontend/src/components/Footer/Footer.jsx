import React from 'react'

export default function Footer() {
  return (
//   <!-- Footer -->
<footer class="bg-slate-50 dark:bg-slate-950 w-full rounded-t-3xl pt-12">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12 max-w-7xl mx-auto font-inter text-sm leading-relaxed">
<div class="space-y-4">
<div class="text-xl font-bold text-slate-900 dark:text-slate-100">MediOne</div>
<p class="text-slate-500 dark:text-slate-400">Revolutionizing local healthcare access with precision and empathy.</p>
<div class="flex gap-4">
<span class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:text-emerald-600 cursor-pointer transition-colors"><span class="material-symbols-outlined">public</span></span>
<span class="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:text-emerald-600 cursor-pointer transition-colors"><span class="material-symbols-outlined">alternate_email</span></span>
</div>
</div>
<div>
<h4 class="font-bold mb-6 text-slate-900 dark:text-slate-100 uppercase tracking-widest text-xs">Platform</h4>
<ul class="space-y-4">
<li><a class="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-all" href="#">For Patients</a></li>
<li><a class="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-all" href="#">For Pharmacies</a></li>
<li><a class="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-all" href="#">For Labs</a></li>
<li><a class="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-all" href="#">For Doctors</a></li>
</ul>
</div>
<div>
<h4 class="font-bold mb-6 text-slate-900 dark:text-slate-100 uppercase tracking-widest text-xs">Support</h4>
<ul class="space-y-4">
<li><a class="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-all" href="#">Privacy Policy</a></li>
<li><a class="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-all" href="#">Terms of Service</a></li>
<li><a class="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-all" href="#">Contact Us</a></li>
<li><a class="text-slate-500 dark:text-slate-400 hover:text-blue-500 transition-all" href="#">FAQs</a></li>
</ul>
</div>
<div>
<h4 class="font-bold mb-6 text-slate-900 dark:text-slate-100 uppercase tracking-widest text-xs">Newsletter</h4>
<p class="text-slate-500 dark:text-slate-400 mb-4">Get the latest health tips and service updates.</p>
<div class="flex gap-2">
<input class="bg-surface-container-high border-none rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-primary transition-all" placeholder="Email address" type="email"/>
<button class="bg-primary text-white p-2 rounded-xl"><span class="material-symbols-outlined">send</span></button>
</div>
</div>
</div>
<div class="max-w-7xl mx-auto px-8 py-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center text-slate-500 dark:text-slate-400">
<p>© 2024 MediOne. All rights reserved.</p>
<p class="mt-4 md:mt-0">Designed for Clinical Serenity</p>
</div>
</footer>
  )
}
