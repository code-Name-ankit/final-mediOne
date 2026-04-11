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

// Pharmacy imports
import Layout from "./components/Layout";
import Dashboard from "./pages/medical/Dashboard";
import Orders from "./pages/medical/Orders";
import Medicines from "./pages/medical/Medicines";

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

        {/* --- PHARMACY ROUTES (Dashboard with Sidebar - NO User Navbar/Footer) --- */}
        <Route path="/pharmacy" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="medicines" element={<Medicines />} />
        </Route>
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
