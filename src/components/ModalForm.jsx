import React from "react";

const ModalForm = ({ data }) => {
  const { title, description, screenshot, githubURL, websiteURL } = data;
  const imageURL = require(`../assets/images/project/${screenshot}`);

  return (
    <div className="container_popup">
      <div className="popup_left">
        <img src={imageURL} alt="project_popimage" />
      </div>
      <div className="popup_right">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="button_modal">
          <button className="button-primary">
            <a href={githubURL} target="_blank" rel="noreferrer">
              Git repository
            </a>
          </button>
          <button className="button-primary">
            <a href={websiteURL} target="_blank" rel="noreferrer">
              Visit website/app
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
