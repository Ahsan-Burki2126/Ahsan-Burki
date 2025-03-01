import Sidebar from "./components/sidebar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import CursorRing from "./components/CursorRing";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <CursorRing />
        {/* Sidebar is hidden on mobile */}
        <div className="hidden md:flex">
          <Sidebar />
        </div>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
