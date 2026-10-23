import "./App.css";
import { useEffect } from "react";
import Lenis from "lenis";

import Header from "./components/Header";
import Schematics from "./components/Schematics";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import JoinTeamLocation from "./components/JoinTeamLocation";
import Services from "./components/Services";
import Publications from "./components/Publications";
import Community from "./components/Community";
import Projects from "./components/Projects";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    window.lenis = lenis;

    let raf;
    function animate(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(animate);
    }
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <>
      <Header />
      <Schematics />
      <AboutUs />
      <Projects />
      <Services />
      <Publications />
      <JoinTeamLocation />
      <Community />
      <Footer />
    </>
  );
}
