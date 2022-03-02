import React from "react";
import github from "../assets/images/contacticons/github.png";
import linkedin from "../assets/images/contacticons/linkedin.png";

export default function Footer() {
  return (
    <div className="footer_links">
      <div className="social_media">
        <a href="https://github.com/radhad-ux" target="_blank" rel="noreferrer">
          <img src={github} className="footer_image" alt="github_icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/radhadoreswamy/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} className="footer_image" alt="linkedin" />
        </a>
      </div>
      <div className="copy_right">
        <p> © 2022 @ Radha Doreswamy</p>
      </div>
    </div>
  );
}
