import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Education from "./Components/Education/Education";

function App() {
  return (
    <>
      <NavBar />

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
