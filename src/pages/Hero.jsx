import "../styles/hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const fromLink = "https://forms.gle/aJfhq2v4VZ5ArAo39";
  return (
    <section className="hero container">
      <h1>Build. Learn. Grow.</h1>
      <p>Gain real-world experience by building innovative products with us.</p>
      <div className="hero-btns">
        <button
          className="primary"
          onClick={() => window.open(fromLink, "_blank")}
        >
          Join Internship
        </button>
        <button className="secondary" onClick={() => navigate("/internships")}>
          Learn More
        </button>
      </div>
    </section>
  );
}
