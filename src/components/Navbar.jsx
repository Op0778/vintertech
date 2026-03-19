import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="https://i.ibb.co/9mw9PRJg/vinter-tech-logo-removebg-preview.png"
        alt="logo"
      />

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/internships">Internships</Link>
        <Link to="/contact">Contact</Link>
      </div>

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
