import React from "react";
import picture from "../assets/Radhanew.png";

const AboutMe = () => {
  return (
    <div className="container_main" id="about">
      <h2 className="title">About Me</h2>
      <div className="container_sub">
        <div className="page_left">
          <p>
            My name is Radha Doreswamy. I am a passionate FrontEnd Developer
            based in Stockholm, Sweden.
          </p>
          <p>
            I have a passion for developing user-friendly, accessible and
            responsive websites with JavaScript / ReactJS / HTML / CSS. I never
            stop learning and for me, each new project is another adventure.
          </p>
          <p>Scroll down to see some of my work!</p>
        </div>
        <div className="page_right">
          <img className="about_img" src={picture} alt="lady" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
