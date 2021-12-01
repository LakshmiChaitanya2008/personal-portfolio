import "./App.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectCards from "./components/ProjectCards";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SkillsMobile from "./components/SkillsMobile";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <ProjectCards />
      <Skills />
      <SkillsMobile />
      <Contact />
      <footer>No copyright issue. Feel free to use :)</footer>
    </div>
  );
}

export default App;
