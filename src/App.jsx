import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Internships from "./pages/Internships";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
