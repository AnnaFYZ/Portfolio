import React, { useState, useEffect, useRef } from "react";
import Projects from "./Projects";
import ContactSection from "./Contacts";
import { motion } from "framer-motion";
import {
  Menu,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Loader2,
  User,
  Briefcase,
  File,
  Download,
  XCircle,
} from "lucide-react";
import "./styles/tailwind.css";
import "devicon/devicon.min.css";
import SkillsBubble from "./skills";

export const Button = ({
  children,
  variant = "primary",
  onClick,
  className,
  ...props
}) => {
  let baseClasses =
    "px-6 py-3 rounded-full transition-all duration-300 font-semibold flex items-center gap-2";
  let variantClasses = "";

  switch (variant) {
    case "primary":
      variantClasses =
        "bg-[hsla(120,60%,75%,1)] text-[hsla(244,16%,17%,0.95)] hover:bg-[hsla(120,60%,65%,1)] border border-[hsla(120,50%,55%,1)]";
      break;
    case "secondary":
      variantClasses =
        "bg-[hsla(35,50%,95%,0.9)] text-[hsla(244,16%,17%,0.95)] border border-[hsla(35,50%,50%,1)] hover:bg-[hsla(35,50%,90%,1)] shadow-md";
      break;
    case "outline":
      variantClasses =
        "border border-[hsla(244,16%,17%,0.95)] text-[hsla(244,16%,17%,0.95)] hover:bg-[hsla(35,50%,90%,0.8)]";
      break;
    default:
      variantClasses = "bg-primary text-white hover:bg-primary-hover";
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${className || ""}`;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={combinedClasses}
      {...props}
      style={{
        padding: "0.75rem 1.5rem",
        borderRadius: "2rem",
        transition: "all 0.3s ease",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
        textAlign: "center", 
        maxWidth: "200px", 
        width: "fit-content", 
      }}
    >
      {children}
    </motion.button>
  );
};

const AnimatedHeading = ({ children, ...props }) => {
  return (
    <motion.h2
      className="motion-heading"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        fontWeight: "bold",
        fontSize: "3rem",
        color: "hsla(244, 16%, 17%, 0.95)",
        marginBottom: "0.5rem",
      }}
      {...props}
    >
      {children}
    </motion.h2>
  );
};

const Section = ({ children, className, id }) => {
  return (
    <section id={id} className={className} style={{ padding: "4rem 0" }}>
      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {children}
      </div>
    </section>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#aboutMe" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contacts", href: "#contacts" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-[100vw] z-50 transition-all duration-300"
        style={{
          backgroundColor: "hsla(120, 81%, 88%, 0.9)",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div
          className="container mx-auto px-4 py-4 flex items-center justify-between"
          style={{ maxWidth: "1200px" }}
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold"
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "hsla(244, 16%, 17%, 0.95)",
              fontFamily: '"Fleur De Leah", cursive',
            }}
          >
            &lt;Anna&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors duration-200"
                style={{
                  color: "hsla(244, 16%, 17%, 0.95)",
                  fontWeight: "500",
                  transition: "color 0.2s ease",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              style={{ color: "hsla(244, 16%, 17%, 0.95)" }}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 right-0 w-full sm:max-w-sm h-full text-white z-50"
          style={{ backgroundColor: "rgba(63, 79, 63, 0.95)" }}
        >
          <div className="flex flex-col space-y-8 p-6">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: "hsla(244, 16%, 17%, 0.95)" }}
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>
            {/* Mobile Navigation Links */}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xl"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: "hsla(244, 16%, 17%, 0.95)",
                  fontWeight: "500",
                  transition: "color 0.2s ease",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const WaveVideo = () => {
    const videoRef = useRef(null);
    useEffect(() => {
      const video = videoRef.current;
      const handleEnded = () => {
        video.currentTime = 0;
      }
      if (video) {
        video.addEventListener("ended", handleEnded);
      }
      return () => {
        if (video) {
          video.removeEventListener("ended", handleEnded);
        }
      };
    }, []);

     const handleMouseEnter = () => {
       if (videoRef.current) {
         videoRef.current.currentTime = 0;
         videoRef.current.play();
       }
     };

      const handleMouseLeave = () => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      };


    return (
      <div>
          <video
            ref={videoRef}
            src="./images/waving.mp4"
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover waiving-video"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
    );
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Section
      id="home"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right, #0f172a, #00a2e2, #000000)",
      }}
    >
      <div className="text-center">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <Loader2
              className="animate-spin text-white h-10 w-10"
              style={{ color: "#fff", height: "2.5rem", width: "2.5rem" }}
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:flex md:flex-row items-center justify-between gap-2 px-4 sm:px-8 lg:px-16">
            <div className="hidden md:block flex-0.5" />
            <div className="text-center md:text-left max-w-[150px] sm:max-w-sm md:max-w-xl">
              <AnimatedHeading id="hero-section-heading">
                Hello, I'm{" "}
                <span
                  className="text-3xl sm:text-6xl md:text-7xl"
                  style={{ color: "#00a2e2" }}
                >
                  Anna
                </span>
              </AnimatedHeading>
              <motion.p
                className="hero-section-p text-gray-300 text-lg sm:text-xl mb-12 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                style={{
                  color: "#3f4f3f",
                  fontWeight: "500",
                  fontSize: "1.125rem",
                  marginBottom: "3rem",
                }}
              >
                I'm a{" "}
                <span
                  className="font-semibold text-white"
                  style={{ fontWeight: "600", color: "#00a2e2" }}
                >
                  Software Engineer
                </span>
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
              >
                <Button
                  variant="primary"
                  className="hero-section-button px-8 py-3 rounded-full flex items-center gap-2 text-primary border-primary hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={() => {
                    const section = document.getElementById("projects");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                  My Projects
                </Button>
              </motion.div>
            </div>
            <div className="mt-8 md:mt-0">
              <WaveVideo className="w-[200px] md:w-auto mx-auto" controls />
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

function HomePage() {

  return (
    <div className="body">
      <Navbar />
      <div id="topOfPage" className="homepage scroller" tabIndex="0">
        <HeroSection />
      </div>
      <div className="line-separator"></div>
      <div
        id="aboutMe"
        style={{
          padding: "20px 5%",
          borderRadius: "10px",
          gap: "10px",
          flexWrap: "nowrap",
          scrollMarginTop: "6rem",
        }}
      >
        <AnimatedHeading>About Me</AnimatedHeading>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr] w-full px-4 max-w-full box-border">
          <div className="w-full max-w-full break-words">
            <img
              className="avatarPic"
              src="./images/edit.png"
              alt="pic of me"
            />
          </div>
          <div className="w-full max-w-full break-words">
            <p style={{ marginBottom: "10px" }}>
              As a passionate software developer, I believe technology should
              serve a purpose and make life easier for people. My journey into
              the world of software development began with a simple curiosity:
              what is an IP address, and how do you set up a network? From
              there, I dove deeper into the world of problem-solving, and the
              process of debugging became one of the aspects I find most
              intriguing. There’s something really satisfying about figuring out
              what went wrong and fixing it.
            </p>
            <p style={{ marginBottom: "10px" }}>
              I’m particularly driven by building systems that are not just
              functional, but impactful—solutions that genuinely help people in
              their day-to-day lives. Whether it's automating tasks or improving
              user experiences, I aim to create software that simplifies and
              enhances everyday activities.
            </p>
            <p style={{ marginBottom: "30px" }}>
              I also find working with data fascinating—organizing it in a way
              that makes sense and helps get the right information when it's
              needed. I’m always looking for ways to improve my skills, tackle
              new challenges, and work on projects that have a real impact.
            </p>
            <div className="grid grid-cols-[5rem_20rem] gap-4">
              <div className="flex gap-2 items-center">
                <User
                  className="w-5 h-5 text-white"
                  style={{
                    color: "hsla(244, 16%, 17%, 0.95)",
                    height: "1.25rem",
                    width: "1.25rem",
                  }}
                />
                <span className="text-lg" style={{ fontSize: "1.125rem" }}>
                  Name:
                </span>
              </div>
              <span
                className="font-semibold text-white"
                style={{
                  fontWeight: "600",
                  color: "hsla(244, 16%, 17%, 0.95)",
                }}
              >
                Anna Hrychaniuk
              </span>
            </div>
            <div className="grid grid-cols-[5rem_20rem] gap-4">
              <div className="flex gap-2 items-center">
                <Briefcase
                  className="w-5 h-5 text-white"
                  style={{
                    color: "hsla(244, 16%, 17%, 0.95)",
                    height: "1.25rem",
                    width: "1.25rem",
                  }}
                />
                <span className="text-lg" style={{ fontSize: "1.125rem" }}>
                  Role:
                </span>
              </div>
              <span
                className="font-semibold text-white"
                style={{
                  fontWeight: "600",
                  color: "hsla(244, 16%, 17%, 0.95)",
                }}
              >
                Software Engineer
              </span>
            </div>
            <div className="grid grid-cols-[5rem_20rem] gap-4">
              <div className="flex gap-2 items-center">
                <Mail
                  className="w-5 h-5 text-white"
                  style={{
                    color: "hsla(244, 16%, 17%, 0.95)",
                    height: "1.25rem",
                    width: "1.25rem",
                  }}
                />
                <span className="text-lg" style={{ fontSize: "1.125rem" }}>
                  Email:
                </span>
              </div>
              <span
                className="font-semibold text-white"
                style={{
                  fontWeight: "600",
                  color: "hsla(244, 16%, 17%, 0.95)",
                }}
              >
                hrychaniuk@gmail.com
              </span>
            </div>
            <div className="grid grid-cols-[6rem_20rem] gap-4">
              <div className="flex gap-2 items-center">
                <File
                  className="w-5 h-5 text-white"
                  style={{
                    color: "hsla(244, 16%, 17%, 0.95)",
                    height: "1.25rem",
                    width: "1.25rem",
                  }}
                />
                <span className="text-lg" style={{ fontSize: "1.125rem" }}>
                  Resume:
                </span>
              </div>
              <a
                href="https://drive.google.com/file/d/1mGWmCO9p2JVwNVKib1ej88wYljeejMCL/view?usp=sharing" // Replace with your resume link
                className="font-semibold text-white hover:text-primary transition-colors flex items-center gap-1"
                style={{
                  fontWeight: "600",
                  color: "#2f3f2f",
                  "&:hover": { color: "#00a2e2" },
                  transition: "color 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                Download{" "}
                <Download
                  className="w-4 h-4"
                  style={{ height: "1rem", width: "1rem" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="line-separator"></div>
      <div id="skills" className="scroller">
        <section
          id="contact"
          style={{
            padding: "20px 5%",
            borderRadius: "10px",
            color: "#d1d5db",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "10px",
            flexWrap: "nowrap",
          }}
        >
          <AnimatedHeading>My Skills</AnimatedHeading>
          <SkillsBubble />
        </section>
      </div>
      <div className="line-separator"></div>
      <div id="projects" className="scroller">
        <AnimatedHeading>My Projects</AnimatedHeading>
        <Projects />
      </div>
      <div className="line-separator"></div>
      <div id="contacts" className="scroller">
        <section
          id="contact"
          style={{
            padding: "20px 5%",
            borderRadius: "10px",
            color: "#d1d5db",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "10px",
            flexWrap: "nowrap",
          }}
        >
          <AnimatedHeading className="text-white">Contact Me</AnimatedHeading>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <ContactSection />
          </div>
        </section>
      </div>
      <div className="line-separator"></div>
      <footer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            width: "100%",
          }}
        >
          <div className="flex items-center gap-1">
            <Mail
              className="w-5 h-5 text-white"
              style={{
                color: "hsla(244, 16%, 17%, 0.95)",
                height: "1.25rem",
                width: "1.25rem",
              }}
            />
            <span
              className="text-lg text-white"
              style={{
                fontSize: "1.125rem",
                color: "hsla(244, 16%, 17%, 0.95)",
              }}
            >
              Email:
            </span>
            <a
              href="mailto:hrychaniuk@gmail.com" // Replace with your email
              className="text-primary hover:text-primary-hover transition-colors"
              style={{
                color: "#2f3f2f",
                fontWeight: "bold",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#008ec4")}
              onMouseLeave={(e) => (e.target.style.color = "#2f3f2f")}
            >
              hrychaniuk@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Github
              className="w-5 h-5 text-white"
              style={{
                color: "hsla(244, 16%, 17%, 0.95)",
                height: "1.25rem",
                width: "1.25rem",
              }}
            />
            <span
              className="text-lg text-white"
              style={{
                fontSize: "1.125rem",
                color: "hsla(244, 16%, 17%, 0.95)",
              }}
            >
              GitHub:
            </span>
            <a
              href="https://github.com/AnnaFYZ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover transition-colors"
              style={{
                color: "#2f3f2f",
                fontWeight: "bold",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#008ec4")}
              onMouseLeave={(e) => (e.target.style.color = "#2f3f2f")}
            >
              AnnaFYZ
            </a>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin
              className="w-5 h-5 text-white"
              style={{
                color: "hsla(244, 16%, 17%, 0.95)",
                height: "1.25rem",
                width: "1.25rem",
              }}
            />
            <span
              className="text-lg text-white"
              style={{
                fontSize: "1.125rem",
                color: "hsla(244, 16%, 17%, 0.95)",
              }}
            >
              LinkedIn:
            </span>
            <a
              href="https://www.linkedin.com/in/anna-hrychaniuk-51b681238"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover transition-colors"
              style={{
                color: "#2f3f2f",
                fontWeight: "bold",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#008ec4")}
              onMouseLeave={(e) => (e.target.style.color = "#2f3f2f")}
            >
              Anna Hrychaniuk
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
