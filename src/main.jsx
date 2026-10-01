import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/App.jsx";
import About from "./pages/About.jsx";
import Members from "./pages/Members.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

      {/* Navbar har page par show hoga */}
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<About />} />

        {/* MEMBERS */}
        <Route path="/members" element={<Members />} />
      </Routes>

    </BrowserRouter>
  </StrictMode>
);