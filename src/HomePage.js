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

      <div id="topOfPage" className="homepage scroller" tabIndex="0">
        <section id="about">
          <header>
            <h2>
              Hello!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm
              &nbsp;&nbsp;&nbsp;
              <span id="anna">Anna</span>
              <br /> and I am happy to greet you here
            </h2>
          </header>
          <h4 className="headerH4">I am a web developer with experience in</h4>
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
          <div style={{ display: "grid" }}>
            <img
              className="greetingPic"
              src="./images/helloIMG.jpg"
              alt="i am greeting you"
            />
          </div>
        </section>
      </div>
      <div className="line-separator"></div>
      <div id="projects" className="scroller">
        <Projects />
      </div>
      <div className="line-separator"></div>
      <div id="aboutMe" className="about scroller">
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
      <div id="contacts" className="scroller">
        <div className="contactHeader">
          <h2>
            You'll make me happy if you contact me even just to say 'Hello' or
            give your feedback
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
        <a className="footerLink" href="https://github.com/AnnaFYZ">
          <img
            className="footerPic"
            src="./logos/github-original-wordmark.svg"
            alt="GitHub-logo"
          />
        </a>
        <a
          className="footerLink"
          href="https://www.linkedin.com/in/anna-hrychaniuk-51b681238"
        >
          <img
            className="footerPic"
            src="./logos/linkedin_logo.png"
            alt="GitHub-logo"
          />
        </a>
      </footer>
    </div>
  );
}

export default HomePage;
