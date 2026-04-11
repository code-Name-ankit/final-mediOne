import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {

  const menuItems = [
    { name: 'Dashboard', path: '/pharmacy', icon: 'dashboard' },
    { name: 'Medicines', path: '/pharmacy/medicines', icon: 'medication' },
    { name: 'Orders', path: '/pharmacy/orders', icon: 'shopping_cart' },
    { name: 'Inventory', path: '/pharmacy/inventory', icon: 'inventory_2' },
    { name: 'Analytics', path: '/pharmacy/analytics', icon: 'analytics' },
  ];

  return (
    <div className="flex min-h-screen">
      {/* --- SIDEBAR START --- */}
      <aside className="fixed left-0 top-0 h-full flex flex-col p-4 bg-slate-50 dark:bg-slate-900 w-64 border-r border-slate-200 dark:border-slate-800 z-50">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              medical_services
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-blue-800 dark:text-blue-300 leading-none">MediHelp</h1>
            <p className="text-xs text-slate-500 font-medium tracking-wide mt-0.5">Pharmacy Cloud</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/pharmacy'} 
              className={({ isActive }) => 
                `flex items-center gap-3 px-4 py-3 transition-all font-manrope text-sm tracking-tight rounded-xl ${
                  isActive 
                  ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 shadow-sm font-bold scale-[0.98]' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 font-medium'
                }`
              }
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Links (Settings/Support) */}
        <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 space-y-1">
          <NavLink to="/pharmacy/settings" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors text-sm font-medium rounded-xl">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </NavLink>
          <NavLink to="/pharmacy/support" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors text-sm font-medium rounded-xl">
            <span className="material-symbols-outlined">help</span>
            Support
          </NavLink>
        </div>
      </aside>
      {/* --- SIDEBAR END --- */}

      {/* Main Content Area */}
      <main className="ml-64 flex-1 bg-[#F8FAFC] min-h-screen"> 
   <div className="p-8">
    <Outlet />
  </div>
</main>
    </div>
  );
};

export default Layout;