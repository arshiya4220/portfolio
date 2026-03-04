import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocioLinks from "./components/socioLinks";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience"
import Contact from "./components/Contact";
import Education from "./components/Education";
function App() {
  return (
  <div>
    <NavBar/>
    <Home />
    <SocioLinks />
    <About />
        <Experience />

    <Education />
        <Portfolio />

    <Contact />
  </div>
  );
}
export default App;