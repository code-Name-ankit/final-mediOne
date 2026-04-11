import SidebarLink from "../../components/SidebarLink";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#f8fafc] border-r border-slate-200 flex flex-col px-4 py-6">

      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
          MH
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-800">mediOne</h2>
          <p className="text-xs text-slate-500">Pharmacy Cloud</p>
        </div>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        <SidebarLink to="/pharmacy" icon="dashboard" label="Dashboard" />
        <SidebarLink to="/pharmacy/orders" icon="shopping_cart" label="Orders" />
      </nav>

      <div className="mt-auto flex flex-col gap-1 pt-4 border-t border-slate-200">
        <SidebarLink to="/pharmacy/settings" icon="settings" label="Settings" />
        <SidebarLink to="/pharmacy/support" icon="help" label="Support" />
      </div>

    </aside>
  );
};

export default Sidebar;