import React from "react";

const ModalForm = ({ data }) => {
  const { title, image } = data;
  const imageURL = require(`../assets/images/project/${image}`);
  return (
    <div className="container_popup">
      <div className="popup_left">
        <img src={imageURL} alt="project_popimage" />
      </div>
      <div className="popup_right">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default ModalForm;
