import React from "react";

//const ProjectItem = ({ data }) => {

const ProjectItem = ({ data }) => {
  const { title, image } = data;
  const imageObject = require(`../assets/images/project/${image}`);

  return (
    <div className="project_item">
      <img
        className="project_image"
        src={imageObject}
        alt="Project picture I am working on"
      />
      <h3 className="project_title">{title}</h3>
    </div>
  );
};

export default ProjectItem;
