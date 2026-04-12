import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/User/Home/Home";
import Medicine from "./pages/User/Medicine";
import Labe from "./pages/User/Labe";
import Doctor from "./pages/User/Doctor";
import About from "./pages/User/About";
import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import MedicalDetail from "./pages/User/MedicalDetail";
import ChackOut from "./pages/User/ChackOut";
import OrderSuccess from "./pages/User/OrderSuccess";
import LabDetail from "./pages/User/LabDetail";
import TestCheckout from "./pages/User/TestCheckout";

// Pharmacy imports
import Layout from "./pages/medical/Layout";
import Dashboard from "./pages/medical/Dashboard";
import Orders from "./pages/medical/Orders";
import Medicines from "./pages/medical/Medicines";

// Laboratory imports
import LabLayout from "./pages/laboratory/Layout";
import LabDashboard from "./pages/laboratory/Dashboard";
import TestBooking from "./pages/laboratory/TestBooking";
import Report from "./pages/laboratory/Report";

// Doctor imports
import DoctorLayout from "./pages/doctor/Layout";
import DoctorDashboard from "./pages/doctor/Dashboard";
import Appointments from "./pages/doctor/Appointments";
import Consultation from "./pages/doctor/Consultation";
import Prescriptions from "./pages/doctor/Prescriptions";
// import Analytics from "./pages/doctor/Analytics";

// Admin imports (if needed, can be added similarly to Pharmacy/Laboratory/Doctor)
import AdminLayout from "./pages/admin/Layout";
import AdminDashboard from "./pages/admin/Dashboard";
import Provider from "./pages/admin/Provider";
import User from "./pages/admin/User";

function App() {
  
  return (
    <BrowserRouter>
      {/* Navbar always visible */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicine" element={<Medicine />} />
        <Route path="/labe" element={<Labe />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/medical-detail" element={<MedicalDetail />} /> */}
         <Route path="/medical-detail/:id" element={<MedicalDetail />} />
        <Route path="/checkout" element={<ChackOut />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/lab-detail/" element={<LabDetail />} />
        <Route path="/test-checkout" element={<TestCheckout />} />


              {/* --- PHARMACY ROUTES (Dashboard with Sidebar - NO User Navbar/Footer) --- */}
        <Route path="/pharmacy" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="medicines" element={<Medicines />} />
        </Route>



        {/* --- LABORATORY ROUTES (Dashboard with Sidebar - NO User Navbar/Footer) --- */}
        <Route path="/laboratory" element={<LabLayout />}>
          <Route index element={<LabDashboard />} />  
          <Route path="test" element={<TestBooking />} />
          <Route path="report" element={<Report />} />
        </Route>

        {/* --- DOCTOR ROUTES (Dashboard with Sidebar - NO User Navbar/Footer) --- */}
        <Route path="/doctors" element={<DoctorLayout />}>
          <Route index element={<DoctorDashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="consultation" element={<Consultation />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          {/* <Route path="analytics" element={<Analytics />} /> */}
        </Route>

        {/* --- ADMIN ROUTES (Dashboard with Sidebar - NO User Navbar/Footer) --- */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="Provider" element={<Provider />} />
          <Route path="User" element={<User />} />
        </Route>


      </Routes>

      {/* Footer always visible */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
