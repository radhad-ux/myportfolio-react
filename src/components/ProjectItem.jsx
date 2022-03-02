import React from "react";

const ProjectItem = ({ data, onClick }) => {
  const { title, image, isCompleted } = data;
  const imageURL = require(`../assets/images/project/${image}`);

  return (
    <>
      <div className="project_item">
        <div
          onClick={isCompleted ? onClick : null}
          className={isCompleted ? "popup" : "overlay"}
        >
          {isCompleted === false && (
            <div className="project_text">
              <h4>Coming Soon</h4>
            </div>
          )}

          <img
            className="project_image"
            src={imageURL}
            alt="Project picture I am working on"
          />
          <h3 className="project_title">{title}</h3>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
