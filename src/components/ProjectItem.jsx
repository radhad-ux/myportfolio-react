import React from "react";

export default function ProjectItem({ data, onClick }) {
  const { title, image, isCompleted } = data;
  const imageURL = require(`../assets/images/project/${image}`);

  return (
    // Incorrect tag -1, dont use the <>, go directly with project_item
    // Nesting -1
    // You have <><div.project_item><div.popup> for the code and can be make a single tag
    <>
      <div className="project_item">
        {/* Nesting -1 again (yes double nesting in the project) */}
        {/* This code is a bit hard to read. */}
        {/* Refactor the project_text into a property to make it easy to parse */}
        <div
          onClick={isCompleted ? onClick : null}
          className={isCompleted ? "popup" : "overlay"}
        >
          {isCompleted === false && (
            <div className="project_text">
              {/* Naming -1, comming soon is not a title. The project name is the title. Comming soon is just extra information/notification */}
              <h4>Coming Soon</h4>
            </div>
          )}

          <img
            className="project_image"
            src={imageURL}
            alt="Project item I am working on"
          />
          <h3 className="project_title">{title}</h3>
        </div>
      </div>
    </>
  );
}
