import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

import Home from "./Components/pages/Home";
import AboutMe from "./Components/pages/AboutMe";
import Experience from "./Components/pages/Experience";
import Gallery from "./Components/pages/Gallery";
import ContactMe from "./Components/pages/ContactMe";
import Research from "./Components/pages/Research";

function App() {
  return (
    <Router>
      {/* Main Website Wrapper */}
      <div className="min-h-screen bg-[#f3f1eb] text-[#1f2937] overflow-x-hidden relative">
        {/* Background Decorative Blurs */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          {/* Top Left Blur */}

          {/* Bottom Right Blur */}
          <div className="absolute -bottom-35 -right-35 w-95 h-95 bg-[#d5e2cf] rounded-full blur-3xl opacity-40"></div>

          {/* Center Soft Glow */}
          <div className="absolute top-[30%] left-[40%] w-62.5 h-62.5 bg-[#edf3ea] rounded-full blur-3xl opacity-30"></div>
        </div>

        {/* Navbar */}
        <NavBar />

        {/* Main Pages */}
        <main className="pt-32">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/research" element={<Research />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactMe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
