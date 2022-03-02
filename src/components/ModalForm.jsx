import React from "react";

export default function ModalForm({ data }) {
  const {
    title,
    description,
    screenshot,
    technologies,
    githubURL,
    websiteURL,
  } = data;

  const imageURL = require(`../assets/images/project/${screenshot}`);
  const TechsInfo = technologies.map((data, index) => (
    <span key={index}>{data}</span>
  ));

  return (
    <div className="container_popup">
      <div className="popup_left">
        <img src={imageURL} alt="project_popimage" />
      </div>
      <div className="popup_right">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="popup_tech">{TechsInfo}</div>
        <div className="button_modal">
          <button className="btn-secondary" id="btn">
            <a href={githubURL} target="_blank" rel="noreferrer">
              Git repository
            </a>
          </button>
          <button className="btn-secondary">
            <a href={websiteURL} target="_blank" rel="noreferrer">
              Visit website/app
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
