import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/App.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";   // 👈 ADD THIS

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />   {/* 👈 ADD THIS */}
      </Routes>

      <Footer />

    </BrowserRouter>
  </StrictMode>
);