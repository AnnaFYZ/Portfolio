import React, { useState } from "react";
import projectsData from "./projectsdata.json";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <div className="body">
        <header className="main-header">
          <h1></h1>
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
      </div>

      <main className="projects">
        {projectsData.map((project) => {
          return (
            <div>
              <h2>{project.h3}</h2>
              <img src={project.img.src} alt={project.img.alt} />
              <p>description to be added</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Projects;
