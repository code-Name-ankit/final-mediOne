import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const PharmacyLayout = () => {
  return (
    <div>
      <Sidebar />

          <main className="ml-64 p-8 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default PharmacyLayout;