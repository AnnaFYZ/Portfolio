import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiMicrosoftexcel,
  SiLooker,
  SiElectron,
  SiReact,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
  { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
  { name: "React.js", icon: <SiReact color="#61dafb" /> },
  { name: "Git", icon: <SiGit color="#f05032" /> },
  { name: "GitHub", image: "/logos/github-original-wordmark.svg" },
  { name: "Electron.js", icon: <SiElectron color="#47848F" /> },
  { name: "PostgreSQL", image: "/logos/postgre-sql.svg" },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "HTML", icon: <SiHtml5 color="#e34f26" /> },
  { name: "CSS", icon: <SiCss3 color="#1572b6" /> },
  { name: "Looker Studio", icon: <SiLooker color="#4285F4" /> },
  { name: "Excel", icon: <SiMicrosoftexcel color="#217346" /> },
  { name: "DrawSQL", image: "/logos/drawsql-log.svg" },
  { name: "Postman", image: "/logos/postman-icon-svgrepo-com.svg" },
];

const SkillsBubbles = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 my-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-lg border-4 border-primary bg-backgroundColor hover:scale-110 transition-transform"
          title={skill.name}
          style={{
            backgroundColor: "var(--paper)",
            borderColor: "#3f4f3f",
          }}
        >
          {skill.image ? (
            <img
              src={skill.image}
              alt={skill.name}
              className="w-[3.5rem] h-[3.5rem] object-contain"
            />
          ) : (
             <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl">{skill.icon}</div>
              <div className="text-sm mt-1 text-[var(--ink)]">{skill.name}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SkillsBubbles;
