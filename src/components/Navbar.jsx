import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <img
        className="logo"
        src="https://i.ibb.co/mVyfw3R9/vintertech-removebg-preview.png"
        alt="logo"
      />

      {/* Hamburger Menu */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/internships" onClick={() => setMenuOpen(false)}>
          Internships
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>

      {/* Desktop Auth Buttons */}
      {/* <div className="auth-btns">
        <Link to="/login">
          <button className="login">Login</button>
        </Link>

        <Link to="/register">
          <button className="register">Register</button>
        </Link>
      </div> */}
    </nav>
  );
}
