import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Projects from "./Components/Projects.jsx"
import TechStack from "./Components/TechStack.jsx"
import Footer from "./Components/Footer.jsx"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Footer />
      </main>
      
    </>
  );
}

export default App;
