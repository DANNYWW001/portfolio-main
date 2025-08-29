import React from "react";
import { projects } from "../data/project";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";


const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>FEATURED PROJECTS</h2>
      <p>
        Here is a selection of projects that highlight my expertise and passion
        for Full-stack development, demonstrating both technical proficiency and
        a focus on building impactful digital solutions.
      </p>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <div className="project-preview">
            <p>{project.type}</p>
            <img src={project.image} alt={project.alt} />
          </div>
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-info">
              <h4>PROJECT INFO</h4>
              {project.client && (
                <p>
                  Client <span>{project.client}</span>
                </p>
              )}
              <p>
                Year <span>{project.year}</span>
              </p>
              <p>
                Role <span>{project.role}</span>
              </p>
            </div>
            <div className="project-links">
              {project.liveUrl && (
                <a href={project.liveUrl}>
                  {project.client ? "VIEW PROJECT " : "LIVE DEMO "}
                  <MdArrowOutward />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl}>SEE ON GITHUB <FaGithub /></a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
