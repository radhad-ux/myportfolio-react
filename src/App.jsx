import "./styles/styles.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
