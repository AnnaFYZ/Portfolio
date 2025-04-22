import React, { useState, useEffect, useRef } from "react";
import projectsData from "./projectsdata.json";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex !== 2 ? prevIndex + 1 : 0));
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
    }
  };

  return (
    <div className="projects">
      {projectsData.map((project, idx) => (
        <div className="projectCard" key={idx}>
          <h2 className="text-xl font-bold text-primary mb-2">{project.h3}</h2>

          {project.mediaType === "carousel" && project.img ? (
            <img
              className="bigImage"
              src={project.img[currentIndex].src}
              alt={project.img[currentIndex].alt}
            />
          ) : project.mediaType === "video" && project.videoSrc ? (
            <video
              className="bigImage"
              ref={(el) => (videoRefs.current[idx] = el)}
              src={project.videoSrc}
              muted
              loop
              playsInline
              preload="auto"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              Your browser does not support the video tag.
            </video>
          ) : null}

          {project.summary && (
            <p>
              {expanded[idx]
                ? project.summary
                : project.summary.slice(0, 120) +
                  (project.summary.length > 120 ? "..." : "")}
              {project.summary.length > 120 && (
                <button
                  onClick={() =>
                    setExpanded((prev) => ({
                      ...prev,
                      [idx]: !prev[idx],
                    }))
                  }
                  className="ml-2 italic hover:opacity-70"
                >
                  {expanded[idx] ? "Read less" : "Read more"}
                </button>
              )}
            </p>
          )}

          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.link}
          </a>
          <a href={project.gitlink} target="_blank" rel="noopener noreferrer">
            {project.gitlink}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
