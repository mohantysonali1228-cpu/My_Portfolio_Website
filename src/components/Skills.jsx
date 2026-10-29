import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Server, Database, BrainCircuit } from "lucide-react";

// Official Tech Logos (High-Res Clean SVGs from Devicon CDN)
const SKILLS_DATA = [
  {
    name: "HTML5",
    category: "Frontend",
    color: "#E34F26",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    category: "Styling",
    color: "#1572B6",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    category: "Web Logic",
    color: "#F7DF1E",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    category: "Backend & Core",
    color: "#3776AB",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "SQL",
    category: "Database",
    color: "#336791",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Git",
    category: "Version Control",
    color: "#F05032",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    category: "Repository",
    color: "#FFFFFF",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    category: "IDE / Editor",
    color: "#007ACC",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Machine Learning",
    category: "Data Science",
    color: "#150458",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "REST APIs",
    category: "Backend Services",
    color: "#6366F1",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "CRUD",
    category: "Data Architecture",
    color: "#10B981",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
  name: "React",
  category: "Frontend Library",
  color: "#61DAFB",
  logoUrl:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
},
{
name: "MongoDB",
category: "Database",
color: "#47A248",
logoUrl:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
},
];

// Stagger Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 130,
      damping: 14,
    },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-grid-bg" />

      <div className="skills-container">
        {/* ================= HEADER ================= */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="skills-label">
            <span>02</span>
            SKILLS & TECHNOLOGIES
          </div>

          <div className="skills-header-content">
            <div>
              <h2>
                Technologies I use to
                <br />
                <span>build ideas.</span>
              </h2>
            </div>
            <p>
              A hands-on technical skillset covering Python backend, modern web technologies,
              databases, REST APIs, Git workflows, and machine learning.
            </p>
          </div>
        </motion.div>

        {/* ================= 3D INTERACTIVE SKILL ICONS GRID ================= */}
        <motion.div
          className="skills-grid-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "20px",
            marginBottom: "3.5rem",
          }}
        >
          {SKILLS_DATA.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: `0 18px 35px -8px ${skill.color}45`,
                borderColor: `${skill.color}80`,
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "26px 16px",
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(14px)",
                cursor: "pointer",
                overflow: "hidden",
                transition: "border-color 0.3s ease",
              }}
            >
              {/* Radial Color Glow Behind the Logo */}
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  width: "55px",
                  height: "55px",
                  background: skill.color,
                  filter: "blur(35px)",
                  opacity: 0.3,
                  pointerEvents: "none",
                  borderRadius: "50%",
                }}
              />

              {/* Official Brand Logo */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                transition={{ duration: 0.4 }}
                style={{
                  width: "52px",
                  height: "52px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                  zIndex: 1,
                }}
              >
                <img
                  src={skill.logoUrl}
                  alt={`${skill.name} logo`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    filter: skill.name === "GitHub" ? "invert(1)" : "none",
                  }}
                  loading="lazy"
                />
              </motion.div>

              {/* Skill Name */}
              <strong
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  letterSpacing: "0.2px",
                  color: "#FFFFFF",
                  marginBottom: "4px",
                  zIndex: 1,
                }}
              >
                {skill.name}
              </strong>

              {/* Category Subtext */}
              <span
                style={{
                  fontSize: "0.76rem",
                  color: "rgba(255, 255, 255, 0.55)",
                  zIndex: 1,
                }}
              >
                {skill.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= SUMMARY BANNER ================= */}
        <motion.div
          className="skill-summary"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
        >
          <div className="summary-icon">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ color: "#6366f1" }}
            >
              <Sparkles size={28} />
            </motion.div>
          </div>

          <div className="summary-content">
            <span>CURRENT FOCUS</span>
            <h3>Python Full Stack & Modern API Architectures</h3>
            <p>
              Applying clean code principles across frontend, Python backend engines, relational SQL queries,
              and machine learning predictive models.
            </p>
          </div>

          <div className="summary-tags">
            {["Python", "HTML5 & CSS3", "JavaScript", "SQL", "Git & GitHub", "Machine Learning"].map((tag) => (
              <motion.span key={tag} whileHover={{ scale: 1.08, y: -2 }}>
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;