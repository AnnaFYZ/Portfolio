import React, { useState, useEffect } from "react";
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

// --- Helper Components ---

// Reusable animated heading
const AnimatedHeading = ({ children, className }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={className}
      style={{
        fontWeight: "bold",
        fontSize: "3rem",
        color: "#fff",
        marginBottom: "1.5rem",
      }}
    >
      {children}
    </motion.h2>
  );
};

// Reusable section component
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

// Reusable Button Component
const Button = ({
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
        "bg-primary text-white hover:bg-primary-hover shadow-lg hover:scale-105";
      break;
    case "secondary":
      variantClasses =
        "bg-secondary text-white hover:bg-secondary-hover hover:scale-105  border border-secondary";
      break;
    case "ghost":
      variantClasses = "text-white hover:bg-ghost-hover hover:scale-105";
      break;
    case "outline":
      variantClasses =
        "text-white border-outline hover:bg-outline-hover hover:border-outline-hover transition-colors duration-300 px-8 py-3 rounded-full flex items-center gap-2";
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
        gap: "0.5rem",
        ...(variant === "primary" && {
          backgroundImage: "linear-gradient(to right, #9B76E3, #00a2e2)",
          color: "#fff",
          "&:hover": {
            backgroundImage: "linear-gradient(to right, #7e57c2, #008ec4)",
            transform: "scale(1.05)",
          },
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }),
        ...(variant === "secondary" && {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "#fff",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            transform: "scale(1.05)",
          },
        }),
        ...(variant === "ghost" && {
          color: "#fff",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transform: "scale(1.05)",
          },
        }),
        ...(variant === "outline" && {
          color: "#fff",
          borderColor: "#00a2e2",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "rgba(0, 162, 226, 0.2)",
            borderColor: "#00a2e2",
          },
        }),
      }}
    >
      {children}
    </motion.button>
  );
};

// --- Sub-Components ---

// Navigation bar component
export const Navbar = () => {
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
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={
          isScrolled
            ? "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-nav-bg shadow-lg"
            : "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent"
        }
        style={{
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.9)" : "transparent",
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
            href="#"
            className="text-2xl font-bold text-white"
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}
          >
            &lt;DevFolio /&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
                style={{
                  color: "#d1d5db",
                  "&:hover": { color: "#fff" },
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
              className="text-gray-300 hover:text-white"
              style={{ color: "#d1d5db", "&:hover": { color: "#fff" } }}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 right-0 w-full sm:max-w-sm h-full bg-nav-bg text-white z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
        >
          <div className="flex flex-col space-y-8 p-6">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white"
                style={{ color: "#d1d5db", "&:hover": { color: "#fff" } }}
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>
            {/* Mobile Navigation Links */}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white text-xl"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                style={{
                  color: "#d1d5db",
                  "&:hover": { color: "#fff" },
                  fontSize: "1.25rem",
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

// Hero section component
export const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate image loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Section
      id="home"
      //className="bg-hero-gradient flex items-center justify-center h-screen"
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <motion.img
              src="https://placehold.co/200x200/EEE/31343C" // Replace with your image path
              alt="Your Name"
              className="rounded-full border-4 border-primary shadow-lg md:mr-8 mb-8 md:mb-0 profile-image"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                borderRadius: "50%",
                border: "4px solid #00a2e2",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                marginRight: "2rem",
                marginBottom: "2rem",
              }}
            />
            <div>
              <AnimatedHeading className="text-4xl sm:text-5xl md:text-6xl text-left">
                Hello, I'm{" "}
                <span className="text-primary" style={{ color: "#00a2e2" }}>
                  Your Name
                </span>
              </AnimatedHeading>
              <motion.p
                className="text-gray-300 text-lg sm:text-xl mb-12 text-left job-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                style={{
                  color: "#d1d5db",
                  fontSize: "1.125rem",
                  marginBottom: "3rem",
                }}
              >
                I'm a{" "}
                <span
                  className="font-semibold text-white"
                  style={{ fontWeight: "600", color: "#fff" }}
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
                  variant="outline"
                  className="px-8 py-3 rounded-full flex items-center gap-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  My Projects
                </Button>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

// About section component
export const AboutSection = () => {
  return (
    <Section
      id="about"
      className="bg-about-gradient text-gray-300"
      style={{ backgroundImage: "linear-gradient(to right, #9B76E3, #084770)" }}
    >
      <AnimatedHeading className="text-white">About Me</AnimatedHeading>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p
            className="text-lg leading-relaxed mb-6"
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
              marginBottom: "1.5rem",
            }}
          >
            Hello! My name is John Doe, and I'm a passionate software engineer
            based in [Your Location]. I have a strong background in developing
            web applications using various technologies.
          </p>
          <p
            className="text-lg leading-relaxed"
            style={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}
          >
            I enjoy solving complex problems and turning them into elegant and
            efficient solutions. I'm always eager to learn new things and stay
            up-to-date with the latest industry trends.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <User
              className="w-5 h-5 text-white"
              style={{ color: "#fff", height: "1.25rem", width: "1.25rem" }}
            />
            <span className="text-lg" style={{ fontSize: "1.125rem" }}>
              Name:
            </span>
            <span
              className="font-semibold text-white"
              style={{ fontWeight: "600", color: "#fff" }}
            >
              John Doe
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Briefcase
              className="w-5 h-5 text-white"
              style={{ color: "#fff", height: "1.25rem", width: "1.25rem" }}
            />
            <span className="text-lg" style={{ fontSize: "1.125rem" }}>
              Role:
            </span>
            <span
              className="font-semibold text-white"
              style={{ fontWeight: "600", color: "#fff" }}
            >
              Software Engineer
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Mail
              className="w-5 h-5 text-white"
              style={{ color: "#fff", height: "1.25rem", width: "1.25rem" }}
            />
            <span className="text-lg" style={{ fontSize: "1.125rem" }}>
              Email:
            </span>
            <span
              className="font-semibold text-white"
              style={{ fontWeight: "600", color: "#fff" }}
            >
              john.doe@example.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <File
              className="w-5 h-5 text-white"
              style={{ color: "#fff", height: "1.25rem", width: "1.25rem" }}
            />
            <span className="text-lg" style={{ fontSize: "1.125rem" }}>
              Resume:
            </span>
            <a
              href="#" // Replace with your resume link
              className="font-semibold text-white hover:text-primary transition-colors flex items-center gap-1"
              download // Add the download attribute
              style={{
                fontWeight: "600",
                color: "#fff",
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
    </Section>
  );
};

// Skills section component
export const SkillsSection = () => {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Python", level: 70 },
    { name: "SQL", level: 75 },
  ];

  return (
    <Section
      id="skills"
      className="bg-gray-900 text-gray-300"
      style={{ backgroundColor: "#111827", color: "#d1d5db" }}
    >
      <AnimatedHeading className="text-primary" style={{ color: "#00a2e2" }}>
        My Skills
      </AnimatedHeading>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => {
          return (
            <motion.div
              key={skill.name}
              className="space-y-2"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="text-lg font-medium text-white"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "500",
                    color: "#fff",
                  }}
                >
                  {skill.name}
                </span>
                <span
                  className="text-sm text-gray-400"
                  style={{ fontSize: "0.875rem", color: "#9ca3af" }}
                >
                  {skill.level}%
                </span>
              </div>
              <div
                className="w-full bg-gray-700 rounded-full h-2.5"
                style={{
                  backgroundColor: "#374151",
                  borderRadius: "0.375rem",
                  height: "0.625rem",
                }}
              >
                <motion.div
                  className="bg-primary h-2.5 rounded-full progress-bar"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: "#00a2e2",
                    borderRadius: "0.375rem",
                    height: "0.625rem",
                  }}
                  initial={{ width: "0%" }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

// Projects section component
export const ProjectsSection = () => {
  const projects = [
    {
      title: "Project 1: E-commerce Website",
      description:
        "Developed a full-stack e-commerce website with user authentication, product browsing, shopping cart, and checkout functionality.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      link: "#", // Replace with your project link
      image: "https://placehold.co/600x400/EEE/31343C", // Replace with your image URL
    },
    {
      title: "Project 2: Data Visualization Dashboard",
      description:
        "Created an interactive dashboard to visualize and analyze data using various charts and graphs.",
      technologies: ["React", "D3.js", "Node.js", "GraphQL"],
      link: "#", // Replace with your project link
      image: "https://placehold.co/600x400/EEE/31343C", // Replace with your image URL
    },
    {
      title: "Project 3: Mobile Task Manager",
      description:
        "Built a mobile application to manage tasks and increase productivity.  Included features like reminders, categories, and progress tracking.",
      technologies: ["React Native", "Firebase"],
      link: "#",
      image: "https://placehold.co/600x400/EEE/31343C",
    },
  ];

  return (
    <Section
      id="projects"
      className="bg-projects-gradient text-gray-300"
      style={{ backgroundImage: "linear-gradient(to right, #3DDC97, #084770)" }}
    >
      <AnimatedHeading className="text-white">My Projects</AnimatedHeading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          return (
            <motion.div
              key={project.title}
              className="bg-project-card rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                backgroundColor: "#374151",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
                  transform: "scale(1.02)",
                },
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                style={{ width: "100%", height: "12rem", objectFit: "cover" }}
              />
              <div
                className="p-6 space-y-4"
                style={{ padding: "1.5rem", spaceY: "1rem" }}
              >
                <h3
                  className="text-xl font-semibold text-white"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-gray-400 leading-relaxed"
                  style={{ color: "#9ca3af", lineHeight: "1.75rem" }}
                >
                  {project.description}
                </p>
                <div
                  className="flex flex-wrap gap-2"
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-tech-tag text-primary px-3 py-1 rounded-full text-sm"
                      style={{
                        backgroundColor: "rgba(0, 162, 226, 0.2)",
                        color: "#00a2e2",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "1rem",
                        fontSize: "0.875rem",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-primary hover:text-primary-hover transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#00a2e2",
                    "&:hover": { color: "#008ec4" },
                    transition: "color 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  View Project{" "}
                  <ArrowRight
                    className="w-4 h-4"
                    style={{ height: "1rem", width: "1rem" }}
                  />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

// Contact section component
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    // Basic client-side validation
    if (
      !formData.message.trim()
    ) {
      setSubmitError("Please write something.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://getform.io/f/63f551d4-c8ee-4512-947c-6bac09a8a707",
        {
          method: "POST",
          body: formData,
        }
      );

    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    } 
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      className="bg-contact-gradient text-gray-300"
      style={{ backgroundImage: "linear-gradient(to right, #084770, #0f172a)" }}
    >
      <AnimatedHeading className="text-white">Contact Me</AnimatedHeading>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p
            className="text-lg leading-relaxed mb-6"
            style={{
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
              marginBottom: "1.5rem",
            }}
          >
            I'm always open to new opportunities and collaborations. Feel free
            to reach out to me through the contact form below or connect with me
            on my social media.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Mail
                className="w-5 h-5 text-white"
                style={{ color: "#fff", height: "1.25rem", width: "1.25rem" }}
              />
              <span
                className="text-lg text-white"
                style={{ fontSize: "1.125rem", color: "#fff" }}
              >
                Email:
              </span>
              <a
                href="mailto:hrychaniuk@gmail.com" // Replace with your email
                className="text-primary hover:text-primary-hover transition-colors"
                style={{
                  color: "#00a2e2",
                  "&:hover": { color: "#008ec4" },
                  transition: "color 0.2s ease",
                }}
              >
                hrychaniuk@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Github
                className="w-5 h-5 text-white"
                style={{ color: "#fff", height: "1.25rem", width: "1.25rem" }}
              />
              <span
                className="text-lg text-white"
                style={{ fontSize: "1.125rem", color: "#fff" }}
              >
                GitHub:
              </span>
              <a
                href="https://github.com/AnnaFYZ" // Replace with your GitHub profile
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover transition-colors"
                style={{
                  color: "#00a2e2",
                  "&:hover": { color: "#008ec4" },
                  transition: "color 0.2s ease",
                }}
              >
                AnnaFYZ
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin
                className="w-5 h-5 text-white"
                style={{ color: "#fff", height: "1.25rem", width: "1.25rem" }}
              />
              <span
                className="text-lg text-white"
                style={{ fontSize: "1.125rem", color: "#fff" }}
              >
                LinkedIn:
              </span>
              <a
                href="https://www.linkedin.com/in/anna-hrychaniuk-51b681238" // Replace with your LinkedIn profile
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover transition-colors"
                style={{
                  color: "#00a2e2",
                  "&:hover": { color: "#008ec4" },
                  transition: "color 0.2s ease",
                }}
              >
                Anna Hrychaniuk
              </a>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#fff",
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-primary focus:ring-primary bg-gray-800 text-white"
                placeholder="Your Name"
                style={{
                  marginTop: "0.25rem",
                  width: "100%",
                  borderRadius: "0.375rem",
                  border: "1px solid #4b5563",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                  padding: "0.75rem",
                  backgroundColor: "#2d3748",
                  color: "#fff",
                  "&:focus": {
                    outline: "none",
                    borderColor: "#00a2e2",
                    boxShadow: "0 0 0 3px rgba(0, 162, 226, 0.15)",
                  },
                }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#fff",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-primary focus:ring-primary bg-gray-800 text-white"
                placeholder="you@example.com"
                style={{
                  marginTop: "0.25rem",
                  width: "100%",
                  borderRadius: "0.375rem",
                  border: "1px solid #4b5563",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                  padding: "0.75rem",
                  backgroundColor: "#2d3748",
                  color: "#fff",
                  "&:focus": {
                    outline: "none",
                    borderColor: "#00a2e2",
                    boxShadow: "0 0 0 3px rgba(0, 162, 226, 0.15)",
                  },
                }}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  color: "#fff",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-600 shadow-sm focus:border-primary focus:ring-primary bg-gray-800 text-white"
                placeholder="Your message..."
                style={{
                  marginTop: "0.25rem",
                  width: "100%",
                  borderRadius: "0.375rem",
                  border: "1px solid #4b5563",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                  padding: "0.75rem",
                  backgroundColor: "#2d3748",
                  color: "#fff",
                  "&:focus": {
                    outline: "none",
                    borderColor: "#00a2e2",
                    boxShadow: "0 0 0 3px rgba(0, 162, 226, 0.15)",
                  },
                  resize: "vertical",
                }}
              ></textarea>
            </div>
            <Button
              type="submit"
              onClick={handleSubmit}
              variant="primary"
              disabled={isSubmitting}
              className="w-full"
              style={{ width: "100%" }}
            >
              {isSubmitting ? (
                <>
                  <Loader2
                    className="animate-spin w-5 h-5 mr-2"
                    style={{
                      height: "1.25rem",
                      width: "1.25rem",
                      marginRight: "0.5rem",
                    }}
                  />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
            {submitError && (
              <p
                className="text-red-500 text-sm"
                style={{ color: "#dc2626", fontSize: "0.875rem" }}
              >
                {submitError}
              </p>
            )}
            {submitSuccess && (
              <p
                className="text-green-500 text-sm"
                style={{ color: "#16a34a", fontSize: "0.875rem" }}
              >
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

// Main App component
const App = () => {
  return (
    <div
      className="bg-gray-900"
      style={{ backgroundColor: "hsla(120, 81%, 88%, 0.99)" }}
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default App;
