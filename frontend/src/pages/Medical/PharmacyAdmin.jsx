import { NavLink } from "react-router-dom";

const PharmacyAdmin = () => {
  return (
    <>
     <aside className="fixed left-0 top-0 h-screen w-64 flex flex-col p-4 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 mt-16">

      {/* Navigation */}
      <nav className="flex-1 space-y-1">

        <SidebarLink
          to="/pharmacy"
          icon="dashboard"
          label="Dashboard"
          filled
        />

        <SidebarLink
          to="/pharmacy/medicines"
          icon="medication"
          label="Medicines"
        />

        <SidebarLink
          to="/pharmacy/orders"
          icon="shopping_cart"
          label="Orders"
        />

        <SidebarLink
          to="/pharmacy/inventory"
          icon="inventory_2"
          label="Inventory"
        />

        <SidebarLink
          to="/pharmacy/analytics"
          icon="analytics"
          label="Analytics"
        />

      </nav>
    </aside>
    </>
  );
};

export default PharmacyAdmin;