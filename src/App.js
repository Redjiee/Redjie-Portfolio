import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Certificates from "./Components/Certificates";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Header />
      <div className="pt-20"> {/* offset so content doesn’t hide behind fixed header */}
        <Hero />
        <About />
        <Services />
        <Skills />
        <Project />
        <Certificates />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
