import { useNavigate, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Current path track karne ke liye
  
  const user = JSON.parse(localStorage.getItem("user")); 

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Helper function: check karne ke liye ki path active hai ya nahi
  const isActive = (path) => location.pathname === path;

  // Active link ke liye style class
  const linkClass = (path) => 
    `transition-colors font-semibold ${
      isActive(path) 
        ? "text-blue-600 dark:text-blue-400" 
        : "text-slate-600 dark:text-slate-400 hover:text-blue-600"
    }`;

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-sm dark:shadow-none">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full font-headline tracking-tight font-medium">
        
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          {/* mediOne text ki jagah image */}
          <img 
            src="/logo1.png" 
            alt="MediOne Logo" 
            className="h-10 w-auto object-contain" 
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/medicine" className={linkClass("/medicine")}>Medicines</Link>
          <Link to="/labe" className={linkClass("/labe")}>Lab Tests</Link>
          <Link to="/doctor" className={linkClass("/doctor")}>Doctors</Link>
          <Link to="/about" className={linkClass("/about")}>About</Link>
        </div>

        {/* Action Buttons / Profile Section */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-5 py-2 text-blue-700 dark:text-blue-400 font-bold hover:bg-slate-50 rounded-lg transition-all"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-6 py-2 bg-blue-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Signup
              </button>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <div className="group relative flex items-center gap-3 cursor-pointer">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-slate-800 dark:text-white leading-none">{user.name || "User"}</p>
                  <p className="text-xs text-slate-500 uppercase">{user.role || "Patient"}</p>
                </div>
                
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500 shadow-sm">
                  <img 
                    alt="User profile" 
                    src={user.profilePic || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Hover Dropdown Menu */}
                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48">
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <button 
                      onClick={() => navigate("/pharmacy")}
                      className={`w-full text-left px-4 py-3 text-sm border-b border-slate-100 dark:border-slate-700 transition-colors ${isActive('/pharmacy') ? 'bg-blue-50 text-blue-600' : 'hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                    >
                      Pharmacy Dashboard
                    </button>
                    <button 
                      onClick={() => navigate("/laboratory")}
                      className={`w-full text-left px-4 py-3 text-sm border-b border-slate-100 dark:border-slate-700 transition-colors ${isActive('/laboratory') ? 'bg-blue-50 text-blue-600' : 'hover:bg-slate-50 dark:hover:bg-slate-700'}`}
                    >
                      Laboratory Dashboard
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 font-semibold transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;