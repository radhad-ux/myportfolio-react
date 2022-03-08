//NPM packages
import { useState } from "react";

//Project files
import "./styles/styles.css";
import Modal from "./components/Modal";
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Tech from "./pages/Tech";

// Naming -1
// The pages folder should be called sections as they arent pages but part of a single page

// Format
// the export should be putted here
function App() {
  // Local state
  const [showModal, setShowModal] = useState(null);

  // Good component orgnization
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Project setShowModal={setShowModal} />
      <Tech />
      <Contact />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default App;
