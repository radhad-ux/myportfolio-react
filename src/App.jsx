import "./styles/styles.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Tech from "./pages/Tech";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Project />
      <Tech />
      <Contact />
    </div>
  );
}

export default App;
