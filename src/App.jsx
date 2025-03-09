import Sidebar from "./components/sidebar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
// import FooterNav from "./components/FooterNav";

import CursorRing from "./components/CursorRing"; // Import CursorRing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./Pages/Projects";

function App() {
  return (
    <Router>
      <div className="flex relative">
        <CursorRing /> {/* Cursor Ring Component */}
        <Sidebar />
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        {/* <FooterNav /> */}
      </div>
    </Router>
  );
}

export default App;
