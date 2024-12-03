import "./projectsMenu.css";

import classNames from "classnames";
import projects from "./projectsData";
import { useState } from "react";

interface Project {
  title: string;
  image: string;
  description: JSX.Element;
  github: string;
  demo: string;
}

const ProjectsMenu = () => {
  const [activeProject, setActiveProject] = useState<number>(1);

  const handleProjectClick = (project: number) => {
    setActiveProject(project);
  };

  const renderContent = (project: Project): JSX.Element => {
    console.log(project);
    return (
      <div
        key={project.title}
        className={`project-sub-container-${activeProject}`}
      >
        <h3>{project.title}</h3>
        <img src={project.image} alt={project.title}></img>
        <div>{project.description}</div>
        <div className="link-container">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GITHUB
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            DEMO
          </a>
        </div>
      </div>
    );
  };

  const projectItems = ["PROJECT ONE", "PROJECT TWO", "PROJECT THREE"];

  return (
    <div className="project-menu">
      <div className="project-items-container">
        {projectItems.map((item, index) => (
          <div
            key={index}
            className={classNames("project-item", {
              activeProject: activeProject === index + 1,
            })}
            onClick={() => handleProjectClick(index + 1)}
          >
            <h2 className="title">{item}</h2>
          </div>
        ))}
      </div>
      <div className="project-sub-container">
        {renderContent(projects[activeProject])}
      </div>
    </div>
  );
};

export default ProjectsMenu;
