import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Home,
  User,
  Briefcase,
  Image,
  Mail,
  Menu,
  X,
  BookOpen,
  GraduationCap,
} from "lucide-react";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      icon: <Home size={18} />,
      path: "/",
    },
    {
      name: "About Me",
      icon: <User size={18} />,
      path: "/about",
    },
    {
      name: "Experience",
      icon: <Briefcase size={18} />,
      path: "/experience",
    },
    {
      name: "Gallery",
      icon: <Image size={18} />,
      path: "/gallery",
    },
    {
      name: "Research",
      icon: <GraduationCap size={18} />,
      path: "/research",
    },
    {
      name: "Contact",
      icon: <Mail size={18} />,
      path: "/contact",
    },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-30 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Navbar Container */}
        <div className="bg-[#f8f6f1]/90 backdrop-blur-xl border border-[#e7e3dc] shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-[30px] px-6 md:px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-11 h-11 rounded-2xl bg-[#eef2ea] flex items-center justify-center shadow-md">
              <BookOpen className="text-[#4f6f52]" size={24} />
            </div>

            <div>
              <h1 className="text-[#1f2937] text-2xl font-bold tracking-wide">
                Safeena Naz
              </h1>

              <p className="text-[#7b8b7e] text-xs">Teacher Portfolio</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-3">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={index}
                  to={link.path}
                  className={`group relative flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 shadow-sm
                  
                  ${
                    isActive
                      ? "bg-[#5f7f65] text-white"
                      : "text-[#374151] hover:bg-[#5f7f65] hover:text-white"
                  }`}
                >
                  <span>{link.icon}</span>

                  <span>{link.name}</span>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 shadow-[0_10px_30px_rgba(95,127,101,0.35)]"></div>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className="bg-[#5f7f65] hover:bg-[#4f6f52] text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:scale-105">
                Let's Talk
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-11 h-11 rounded-xl bg-[#eef2ea] flex items-center justify-center text-[#4f6f52]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 bg-[#f8f6f1]/95 backdrop-blur-xl border border-[#e7e3dc] shadow-2xl rounded-3xl p-5">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={index}
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300
                      
                      ${
                        isActive
                          ? "bg-[#5f7f65] text-white"
                          : "text-[#374151] hover:bg-[#5f7f65] hover:text-white"
                      }`}
                  >
                    {link.icon}

                    <span>{link.name}</span>
                  </Link>
                );
              })}

              <Link to="/contact">
                <button className="w-full mt-3 bg-[#5f7f65] hover:bg-[#4f6f52] text-white py-4 rounded-2xl font-medium transition duration-300">
                  Let's Talk
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
