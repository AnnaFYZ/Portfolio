import React, { useState } from "react";
import projectsData from "./projectsdata.json";
import { Link } from "react-router-dom";

function HomePage() {
  const [projectIndex, setProjectIndex] = useState(0);
  const projects = projectsData; 

  const displayProjects = (increment) => {
    const newIndex =
      (projectIndex + increment + projects.length) % projects.length;
    setProjectIndex(newIndex);
  };

  return (
    <div className="body">
      <header className="main-header">
        <h1>Anna</h1>
        <nav>
          <ul>
            <li>
              <Link to="/projects" className="header-link">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="header-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="homepage" tabIndex="0">
        <section id="about">
          <header>
            <h2>About Me</h2>
          </header>
          <p>
            Hi! My name is Anna. I am a persistent introvert who enjoys building
            and watching things from the beginning.
          </p>
          <p>
            The first language I was introduced to was Pascal at school when no
            one heard about C# or Phython yet {String.fromCodePoint(0x1f9d0)}
            however the main principles of if statements are still the same.
            Unfortunately i was not able to continue my coding path that time.
          </p>
          <p>
            My life path had brought to a point where I learnt about network
            architecture and loved it so much that decided to become a
            specialist in cybersecurity. So i entered the university where I
            learnt about C# and Java but only basics.
          </p>
          <p>
            Unfortunately the war started in my country did not let me to
            continue the education. I tried to attend online courses but theory
            without practice is very weak skill.
          </p>
          <p>
            Code Your Future helped me to come back into IT world. I've learnt
            basics of HTML, CSS and JavaScript but the most important they
            taught me how to learn further correctly and constantly develope my
            skills. I still but in 20 years time this world is still magnificent
            to me and an every solved coding task for me is still as a huge
            victory which i enjoy every time {String.fromCodePoint(0x1f60a)}.
          </p>
          <p>
            The most significant reward for me is when people like using things
            that i did.
          </p>
        </section>
        <section id="projects">
          <header>
            <h2>Projects Showcase</h2>
          </header>
          <p>
            Here are some of my projects. They may look simple to build but each
            of them holds a small combat and a victory inside. Victory of making
            something work in a way the developer wants.
          </p>
          <div id="container">
            <button
              id="previous"
              type="button"
              onClick={() => displayProjects(-1)}
            >
              {" "}
              &lt;&lt;{" "}
            </button>
            <div id="project" className="project">
              <h3 id="title">{projects[projectIndex].h3}</h3>
              <span id="id">{projects[projectIndex].id}</span>
              <img
                id="projectImg"
                src={projects[projectIndex].img.src}
                alt={projects[projectIndex].img.alt}
              />
              <p id="description">{projects[projectIndex].summary}</p>
              <a
                id="gitlink"
                href={projects[projectIndex].gitlink}
                target="_blank"
              >
                <img
                  src="/images/GitHub_Logo.png"
                  width="80px"
                  alt="GitHub Link"
                />
              </a>
              <br />
              <a
                id="projectlink"
                href={projects[projectIndex].link}
                target="_blank"
              >
                {projects[projectIndex].link}
              </a>
            </div>
            <button id="next" type="button" onClick={() => displayProjects(1)}>
              {" "}
              &gt;&gt;{" "}
            </button>
          </div>
        </section>
      </main>
      <footer>
        <h3>
          <a href="https://github.com/AnnaFYZ">
            <svg
              focusable="false"
              role="presentation"
              viewBox="0 0 98 96"
              width="48"
              height="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="currentColor"
              />
            </svg>
            GitHub Link
          </a>
        </h3>
      </footer>
    </div>
  );
}

export default HomePage;
