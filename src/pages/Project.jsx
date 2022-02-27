import React from "react";
import projectsdata from "../data/projectdata.json";
import ProjectItem from "../components/ProjectItem";
import ModalForm from "../components/ModalForm";

const Project = ({ setShowModal }) => {
  const ProjectList = projectsdata.map((data) => (
    <ProjectItem
      key={data.id}
      data={data}
      onClick={() => setShowModal(<ModalForm data={data} />)}
    />
  ));

  return (
    <div className="container_main" id="project">
      <h2 className="title">Projects</h2>
      <div className="container_sub">
        <div className="page_left">
          <p>
            Here are the projects I will be making during the Frontend course at
            Novare Potential.
          </p>
        </div>
        <div className="page_right">
          <div className="project_list">{ProjectList}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
