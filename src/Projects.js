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
    <div>
      {/* <div className="body">
        <header className="main-header">
          <div></div>
          <nav>
            <ul>
              <li>
                <Link to="/contacts" className="header-link">
                  Contacts
                </Link>
              </li>
              <li>
                <Link to="/" className="header-link">
                  About Me
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div> */}

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
    </div>
  );
}

export default Projects;
