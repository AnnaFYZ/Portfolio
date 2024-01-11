import React from "react";
import Projects from "./Projects";

function HomePage() {
  return (
    <div className="body">
      <header className="main-header">
        <nav>
          <ul>
            <li>
              <a href="#topOfPage" className="header-link">
                To the top
              </a>
            </li>
            <li>
              <a href="#projects" className="header-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#aboutMe" className="header-link">
                About Me
              </a>
            </li>
            <li>
              <a href="#contacts" className="header-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div id="topOfPage" className="homepage" tabIndex="0">
        <section id="about">
          <header>
            <h2>
              Hello!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm
              &nbsp;&nbsp;&nbsp;
              <span id="anna">Anna</span>
              <br /> and I am happy to greet you here
            </h2>
          </header>
          <h4 style={{ margin: "2em 2em 2em 0" }}>I can work with:</h4>
          <div className="logos">
            <img
              className="logoPic"
              src="./logos/javascript-1.svg"
              alt="js-logo"
            />
            <img
              className="logoPic"
              src="./logos/-HPXhG__react.svg"
              alt="react-logo"
            />
            <img
              className="logoPic"
              src="./logos/nodejs-2.svg"
              alt="node-logo"
            />
            <img
              className="logoPic"
              src="./logos/postgre-sql.svg"
              alt="sql-logo"
            />
            <img
              className="logoPic"
              src="./logos/github-original-wordmark.svg"
              alt="GitHub-logo"
            />
            <img
              className="logoPic"
              src="./logos/python-vertical.svg"
              alt="python-logo"
            />
          </div>
        </section>
        <section id="greetPic">
          <div>
            <img
              className="greetingPic"
              src="./images/helloIMG.jpg"
              alt="i am greeting you"
            />
          </div>
        </section>
      </div>
      <div className="line-separator"></div>
      <div id="projects">
        <div className="projects">
          <Projects />
        </div>
      </div>
      <div className="line-separator"></div>
      <div id="aboutMe" className="about">
        <section id="mePic">
          <div>
            <img
              className="avatarPic"
              src="./images/20220730_181925.jpg"
              alt="pic of me"
            />
          </div>
        </section>
        <section className="text">
          <p>
            I am a determined introvert with a passion for building and
            witnessing the creation of things from the ground up.
          </p>
          <p>
            Each successfully solved coding task feels like a significant
            victory that I cherish every time 😊.
          </p>
          <p>
            The ultimate reward for me is when people enjoy using things that
            I've created.
          </p>
        </section>
      </div>
      <div className="line-separator"></div>
      <div id="contacts">
        <div className="contactHeader">
          <h2>
            You'll make me happy if you contact me even just to say 'Hello' or give your
            feedback
          </h2>
        </div>
        <form
          method="post"
          action="https://getform.io/f/63f551d4-c8ee-4512-947c-6bac09a8a707"
        >
          <textarea type="text" name="message"></textarea>
          <button id="submitBtn" type="submit">
            Send
          </button>
        </form>
        <section id="contact">
          <header>
            <h2>Or you can simply reach me via </h2>
          </header>
          <p>
            Email:{" "}
            <a href="mailto: hrychaniuk@gmail.com">hrychaniuk@gmail.com</a>
            <br />
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/anna-hrychaniuk-51b681238">
              https://www.linkedin.com/in/anna
            </a>
          </p>
        </section>
      </div>
      <div className="line-separator"></div>
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
