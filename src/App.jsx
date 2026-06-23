import GridBackground from "./components/GridBackground";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certs from "./components/Certs";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <GridBackground />
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Certs />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
