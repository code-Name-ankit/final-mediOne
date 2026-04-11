import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm dark:shadow-none">
      
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full font-headline tracking-tight font-medium">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter text-blue-700 dark:text-blue-400">
          MediOne
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a className="text-blue-700 dark:text-blue-400 font-bold  pb-1" href="/">
            Home
          </a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" href="medicine">
            Medicines
          </a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" href="labe">
            Lab Tests
          </a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" href="doctor">
            Doctors
          </a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors" href="about">
            About
          </a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 text-blue-700 dark:text-blue-400 font-bold hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-all scale-95 active:scale-90 duration-200">
            Login
          </button>

          <button className="px-6 py-2 bg-primary text-white rounded-xl font-bold hover:shadow-lg transition-all scale-95 active:scale-90 duration-200">
            Signup
          </button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;