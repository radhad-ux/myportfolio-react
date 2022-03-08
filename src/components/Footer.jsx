import React from "react"; // -1

// Variable names -1 as soon as a I read the import, i though it was related to some Git command. I had to read the whole line to know it was just an image.
// githubIcon or IconGithub should be the correct name
import github from "../assets/images/contacticons/github.png";
import linkedin from "../assets/images/contacticons/linkedin.png";

export default function Footer() {
  // Here you write the code for generating the <a> just like you did on TechsInfo on ModalForm.jsx

  return (
    <div className="footer_links">
      <div className="social_media">
        {/* Duplication -1 */}
        {/* You can create a small component inside Footer.jsx to handle this icons */}
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
