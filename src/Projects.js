import React, { useState, useEffect } from "react";
import projectsData from "./projectsdata.json";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex !== 2 ? prevIndex + 1 : 0));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
     <div className="projects">
        {projectsData.map((project) => {
          return (
            <div className="projectCard">
              <h2>{project.h3}</h2>

              <img
                className="bigImage"
                src={project.img[currentIndex].src}
                alt={project.img[currentIndex].alt}
              />
              <p>{project.summary}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
              <a href={project.gitlink} target="_blank" rel="noopener noreferrer">{project.gitlink}</a>
            </div>
          );
        })}
      </div>
  );
}

export default Projects;
