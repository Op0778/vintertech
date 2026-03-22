import Founders from "./Founders";
import Hero from "./Hero";
import Internships from "./Internships";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Web Development Internship in India | Vinter Tech</title>
        <meta
          name="description"
          content="Join Vinter Tech for web development internship with React and Python, real-time projects, certificate, and placement support."
        />
      </Helmet>

      <h1>Welcome to Vinter Tech</h1>

      <Hero />
      <Founders />
      <Internships />
    </>
  );
}
