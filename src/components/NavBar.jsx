import React from "react";
import Logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <nav className="navbar_links">
      <a href="#home" className="big_screen">
        <img src={Logo} alt="An orange logo with the initial RD" />
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
            <img src={Logo} alt="An orange logo with the initial RD" />
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
}
