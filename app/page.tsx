import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Journey from "./components/journey";
import Contacts from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <About />
    <Skills />
    <Projects />
    <Journey />
    <Contacts />
    <Footer />
    </>
  );
}
