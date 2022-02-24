import "./styles/styles.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Tech from "./pages/Tech";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Project />
      <Tech />
    </div>
  );
}

export default App;
