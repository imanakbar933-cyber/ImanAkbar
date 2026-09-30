import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <a href="/" className="navbar-logo">
          <div className="logo-icon">
            <span>K</span>
            <svg
              className="dumbbell-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6.5 6.5h11v11h-11z" />
              <path d="M4 9h2v6H4z" />
              <path d="M18 9h2v6h-2z" />
              <path d="M2 10h2v4H2z" />
              <path d="M20 10h2v4h-2z" />
            </svg>
          </div>

          <div className="logo-text">
            <span className="logo-main">KINETIX</span>
            <span className="logo-sub">FITNESS CLUB</span>
          </div>
        </a>

        {/* NAVIGATION */}
        <nav className={`navbar-menu ${menuOpen ? "menu-open" : ""}`}>

          <a href="/" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>

          {/* SERVICES DROPDOWN (now contains Pages items) */}
          <div className="nav-item-dropdown">
            <button
              className="nav-link dropdown-toggle"
              onClick={toggleDropdown}
            >
              Services <span className="dropdown-arrow">▼</span>
            </button>

            <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
             
              <a href="#team" className="dropdown-item">Team</a>
              <a href="#classroom" className="dropdown-item">Classroom</a>
              <a href="#gallery" className="dropdown-item">Gallery</a>
              <a href="#faq" className="dropdown-item">FAQ</a>
              <a href="#schedules" className="dropdown-item">Schedules</a>
            </div>
          </div>

          <a href="#trainers" className="nav-link">Trainers</a>
          <a href="#membership" className="nav-link">Membership</a>
          <a href="#contact" className="nav-link">Contact</a>

          {/* MOBILE JOIN BUTTON */}
          <a href="#membership" className="mobile-join">Join Us</a>
        </nav>

        {/* RIGHT SIDE */}
        <div className="navbar-right">
          <a href="#membership" className="join-button">
            <span>Join Us</span>
            <span className="join-arrow">↗</span>
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            className={`menu-toggle ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;