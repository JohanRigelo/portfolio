import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-grid min-h-screen bg-bg text-text">
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Timeline />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
