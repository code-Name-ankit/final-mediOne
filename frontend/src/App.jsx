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
      </Routes>

      {/* Footer always visible */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;