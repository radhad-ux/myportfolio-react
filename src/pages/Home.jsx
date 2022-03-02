import React from "react";
import Resume from "../assets/RadhaResume.pdf";

export default function Home() {
  return (
    <div className="home_page" id="home">
      <div className="home_page-content">
        <h2>Hello, I'm Radha Doreswamy</h2>
        <p>An aspiring Frontend Developer from Stockholm, Sweden </p>
        <button className="btn_primary" onClick={() => window.open(Resume)}>
          Download CV
        </button>
      </div>
    </div>
  );
}
