import React from "react";
import Logo from "../assets/Radha.png";

const NavBar = () => {
  return (
    <nav className="navbar_links">
      <a href="#home" className="big_screen">
        <img src={Logo} alt="Indian lady wearing jacket" />
        <span className="logo_title">Radha Doreswamy</span>
      </a>
      <ul className="nav_menu">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#home" className="mobile_screen">
            <img src={Logo} alt="Indian lady wearing jacket" />
          </a>
        </li>
        <li>
          <a href="#tech">Tech</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
