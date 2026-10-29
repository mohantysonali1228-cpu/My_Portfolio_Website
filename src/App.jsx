import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import {
  Sparkles,
  Quote,
  ArrowUpRight,
  GraduationCap,
  CalendarDays,
  MapPin,
  Award,
  BookOpen,
  Code2,
  Database,
  BrainCircuit,
  Terminal,
  CheckCircle2,
  Download,
} from "lucide-react";

// ================= ANIMATION VARIANTS =================
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardSpring = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 }
  }
};

// ================= HERO / CONTACT ICONS =================
const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63 0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.63-1.63-1.63z" />
  </svg>
);

// ================= DATA SETS =================
const ABOUT_STATS = [
  {
    number: "01",
    value: "MCA",
    title: "Computer Science",
    subtitle: "GITAM, Bhubaneswar",
    accent: "#6366f1",
    icon: GraduationCap,
  },
  {
    number: "02",
    value: "8.0",
    title: "Current CGPA",
    subtitle: "Academic Excellence",
    accent: "#38bdf8",
    icon: Award,
  },
  {
    number: "03",
    value: "2+",
    title: "Internships",
    subtitle: "Python & Data Science",
    accent: "#10b981",
    icon: Code2,
  },
  {
    number: "04",
    value: "5+",
    title: "Core Projects",
    subtitle: "ML & Web Applications",
    accent: "#ec4899",
    icon: BrainCircuit,
  },
];

const ABOUT_FOCUS = [
  {
    number: "01",
    icon: Code2,
    accent: "#38bdf8",
    title: "Full Stack Development",
    description: "Building responsive, high-performance web applications with clean frontend interfaces, Python backend engines, and modular REST APIs.",
    tags: ["Python", "JavaScript", "HTML/CSS", "CRUD"],
  },
  {
    number: "02",
    icon: Database,
    accent: "#6366f1",
    title: "Backend & Databases",
    description: "Designing robust relational databases with SQL, integrating seamless API endpoints, and managing efficient data pipelines.",
    tags: ["REST APIs", "SQL", "PostgreSQL", "Data Flow"],
  },
  {
    number: "03",
    icon: BrainCircuit,
    accent: "#a855f7",
    title: "Machine Learning & AI",
    description: "Developing predictive modeling solutions, passenger survival classifiers, and data analysis pipelines using Python and ML libraries.",
    tags: ["Machine Learning", "Pandas", "Predictive Models", "Data Analysis"],
  },
];

const SKILLS_DATA = [
  {
    name: "Python",
    category: "Backend & Core",
    color: "#3776AB",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
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
    category: "Data Flow",
    color: "#10B981",
    logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
  name: "React",
  category: "Frontend Library",
  color: "#61DAFB",
  logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
},
{
name: "MongoDB",
category: "Database",
color: "#47A248",
logoUrl:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
},
];

const STRENGTHS_DATA = [
  {
    number: "01",
    title: "Quick Learner",
    tag: "Speed & Adaptability",
    description: "Rapidly grasps complex programming logic, modern frameworks, and emerging engineering toolchains.",
    accent: "#eab308",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "02",
    title: "Problem Solving",
    tag: "Analytical Logic",
    description: "Breaks down intricate problems into clean, modular, and optimized logical implementations.",
    accent: "#38bdf8",
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "03",
    title: "Team Player",
    tag: "Collaboration",
    description: "Enjoys collaborating across cross-functional teams, conducting peer code reviews, and building together.",
    accent: "#6366f1",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "04",
    title: "Communication",
    tag: "Clarity & Voice",
    description: "Communicates technical concepts, project roadmaps, and requirements clearly to both peers and clients.",
    accent: "#a855f7",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "05",
    title: "Adaptability",
    tag: "Flexibility",
    description: "Highly versatile in fast-evolving development environments, eager to adopt new workflows and APIs.",
    accent: "#10b981",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "06",
    title: "Goal Oriented",
    tag: "Execution Discipline",
    description: "Laser-focused on delivering production-grade milestones with consistency, performance, and attention to detail.",
    accent: "#f43f5e",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
  },
];

const EDUCATION_DATA = [
  {
    year: "2025 — 2027",
    degree: "Master of Computer Applications",
    field: "Computer Science",
    institute: "GITAM, Bhubaneswar",
    result: "CGPA: 8.0",
    status: "PURSUING",
    accent: "#6366f1",
    icon: GraduationCap,
  },
  {
    year: "2022 — 2025",
    degree: "Bachelor of Science",
    field: "Computer Science",
    institute: "Adikavi Sarala Das (Degree) College, Tirtol",
    result: "81.9%",
    status: "COMPLETED",
    accent: "#38bdf8",
    icon: Award,
  },
  {
    year: "2020 — 2022",
    degree: "Higher Secondary (+2 Science)",
    field: "Science",
    institute: "Adikavi Sarala Das (Degree) College, Tirtol",
    result: "78.1%",
    status: "COMPLETED",
    accent: "#a855f7",
    icon: BookOpen,
  },
  {
    year: "2019 — 2020",
    degree: "Matriculation",
    field: "Secondary Education",
    institute: "Garei G.P. High School",
    result: "78.3%",
    status: "COMPLETED",
    accent: "#10b981",
    icon: BookOpen,
  },
];


const PROJECTS_DATA = [
  {
    number: "01",
    title: "Order Calculator",
    category: "WEB APPLICATION",
    description:
      "A billing calculator for calculating order quantities, discounts, and final invoice amounts.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/mohantysonali1228-cpu",
  },
  {
    number: "02",
    title: "Student Project Management",
    category: "CRUD APPLICATION",
    description:
      "An application for managing student project data, updating records, and handling API requests.",
    tech: ["Python", "REST API", "SQL", "CRUD"],
    link: "https://github.com/mohantysonali1228-cpu",
  },
  {
    number: "03",
    title: "Titanic Survival Prediction",
    category: "MACHINE LEARNING",
    description:
      "A machine learning project that analyzes passenger data and predicts survival outcomes.",
    tech: ["Python", "Pandas", "Machine Learning"],
    link: "https://github.com/mohantysonali1228-cpu",
  },
  {
    number: "04",
    title: "Blinkit Grocery Website",
    category: "E-COMMERCE",
    description:
      "A grocery shopping website with product categories, a shopping cart, and login and registration interfaces.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/mohantysonali1228-cpu",
  },
  {
    number: "05",
    title: "Real Estate Website",
    category: "REAL ESTATE",
    description:
      "A responsive property website showcasing real estate listings, property information, and agent sections.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://github.com/mohantysonali1228-cpu",
  },
  {
  number: "06",
  title: "AI Resume Builder",
  category: "AI / FULL STACK",
  description:
    "An AI-powered resume builder that helps users create professional, ATS-friendly resumes with AI-enhanced summaries and skills.",
  tech: ["React", "Node.js", "Express.js", "MongoDB", "AI"],
  link: "https://github.com/mohantysonali1228-cpu",
},
];


// ================= MAIN APP COMPONENT =================
function App() {
  return (
    <div className="portfolio">
      <Navbar />

      {/* ================= 1. HERO SECTION ================= */}
      <section id="home" className="hero-section">
        <div className="hero-glow hero-glow-left"></div>
        <div className="hero-glow hero-glow-right"></div>

        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="hero-label">
              HELLO, I'M
            </motion.div>

            <motion.h1 variants={fadeInUp}>
              Sonali<br /><span>Mohanty.</span>
            </motion.h1>

            <motion.h2 variants={fadeInUp}>
              Python Full Stack Developer
            </motion.h2>

            <motion.p variants={fadeInUp} className="hero-description">
              MCA Computer Science student based in Bhubaneswar, Odisha, passionate about Python
              development, web technologies, APIs, databases and Machine Learning.
            </motion.p>

            <motion.div variants={fadeInUp} className="hero-buttons">
              <motion.a 
                href="#projects" 
                className="primary-button"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects <span>↗</span>
              </motion.a>

              <motion.a 
                href="#contact" 
                className="secondary-button"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me <span>↗</span>
              </motion.a>
            </motion.div>

            {/* HERO SOCIALS & MAIL */}
            <motion.div 
              variants={fadeInUp} 
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "1.6rem"
              }}
            >
              <motion.a 
                href="mailto:mohantysonali1228@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 18px",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "inherit",
                  textDecoration: "none",
                  fontSize: "0.92rem",
                  backdropFilter: "blur(8px)"
                }}
                whileHover={{ scale: 1.04, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.96 }}
              >
                <MailIcon />
                <span>mohantysonali1228@gmail.com</span>
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/in/sonali-mohanty-7b" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "9999px",
                  background: "rgba(10, 102, 194, 0.15)",
                  border: "1px solid rgba(10, 102, 194, 0.4)",
                  color: "#0a66c2",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.98rem"
                }}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
                <span style={{ fontSize: "0.85rem" }}>↗</span>
              </motion.a>

              <motion.a 
                href="https://github.com/mohantysonali1228-cpu" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "9999px",
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.98rem"
                }}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <GitHubIcon />
                <span>GitHub</span>
                <span style={{ fontSize: "0.85rem" }}>↗</span>
              </motion.a>
              
{/* Download CV Button */}
<motion.a
  href="/Sonali-CV.pdf"
  download="Sonali-Mohanty-CV.pdf"
  aria-label="Download CV"
  title="Download CV"
  style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "10px 20px",
    borderRadius: "9999px",
    background: "rgba(16, 185, 129, 0.12)",
    border: "1px solid rgba(16, 185, 129, 0.4)",
    color: "#10b981",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "0.98rem",
    cursor: "pointer",
  }}
  whileHover={{
    scale: 1.06,
    y: -2,
    backgroundColor: "rgba(16, 185, 129, 0.22)",
  }}
  whileTap={{ scale: 0.95 }}
>
  <Download size={20} />
  <span>Download CV</span>
</motion.a>
            </motion.div>
          </motion.div>

          {/* HERO PHOTO (Smooth Floating & Glow Effect) */}
          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "relative" }}
            >
              <motion.div 
                className="image-border"
                whileHover={{ scale: 1.04, rotateZ: 1.5 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <div className="image-inner">
                  <img src="/sonali.jpg" alt="Sonali Mohanty" className="profile-image" />
                </div>
              </motion.div>

              <motion.div 
                className="image-badge"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <span></span>
                Available for Opportunities
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. ABOUT SECTION (UPDATED STATS & FOCUS CARDS) ================= */}
      <section id="about" className="section about-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label">01 — ABOUT ME</div>
            <h2 className="big-heading">
              Building with curiosity.<br /><span>Growing with every line of code.</span>
            </h2>
          </motion.div>

          {/* ABOUT MAIN GRID */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center", marginTop: "2.5rem" }}>
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75 }}
            >
              <p className="large-text" style={{ marginBottom: "1.2rem", fontWeight: 500 }}>
                I'm an <span style={{ color: "#38bdf8", fontWeight: 600 }}>MCA Computer Science student</span> based in Bhubaneswar, focused on building production-ready Python Full Stack and Machine Learning solutions.
              </p>
              <p className="normal-text" style={{ marginBottom: "1rem" }}>
                My technical journey is centered around developing scalable backend logic, crafting intuitive web experiences, and architecting reliable CRUD APIs. I combine structured computer science foundations with hands-on internship experience.
              </p>
              <p className="normal-text" style={{ marginBottom: "2rem" }}>
                I continuously experiment with predictive data models and modern frameworks to transform complex technical ideas into elegant, impactful digital products.
              </p>

              {/* Specs Badges */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "12px", marginBottom: "2rem" }}>
                <div style={{ padding: "12px 14px", borderRadius: "14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ display: "block", fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", fontWeight: 700, marginBottom: "4px" }}>LOCATION</span>
                  <strong style={{ fontSize: "0.9rem", color: "#FFF", display: "flex", alignItems: "center", gap: "6px" }}>
                    <MapPin size={14} style={{ color: "#38bdf8" }} /> Bhubaneswar
                  </strong>
                </div>
                <div style={{ padding: "12px 14px", borderRadius: "14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ display: "block", fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", fontWeight: 700, marginBottom: "4px" }}>DEGREE</span>
                  <strong style={{ fontSize: "0.9rem", color: "#FFF", display: "flex", alignItems: "center", gap: "6px" }}>
                    <GraduationCap size={14} style={{ color: "#6366f1" }} /> MCA (2025–27)
                  </strong>
                </div>
                <div style={{ padding: "12px 14px", borderRadius: "14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span style={{ display: "block", fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", fontWeight: 700, marginBottom: "4px" }}>ROLE</span>
                  <strong style={{ fontSize: "0.9rem", color: "#FFF", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Terminal size={14} style={{ color: "#10b981" }} /> Python Full Stack
                  </strong>
                </div>
              </div>
            </motion.div>

            {/* STATS CARDS */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "18px" }}
            >
              {ABOUT_STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.number}
                    variants={cardSpring}
                    whileHover={{ y: -8, scale: 1.03, boxShadow: `0 20px 35px -10px ${stat.accent}35`, borderColor: `${stat.accent}80` }}
                    style={{ position: "relative", padding: "24px 18px", borderRadius: "20px", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(14px)", cursor: "pointer", overflow: "hidden" }}
                  >
                    <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "80px", height: "80px", background: stat.accent, filter: "blur(40px)", opacity: 0.25, borderRadius: "50%" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                      <span style={{ fontFamily: "monospace", fontSize: "0.85rem", opacity: 0.45, fontWeight: 700 }}>{stat.number}</span>
                      <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `${stat.accent}18`, color: stat.accent, border: `1px solid ${stat.accent}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={18} />
                      </div>
                    </div>
                    <strong style={{ display: "block", fontSize: "1.9rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "4px" }}>{stat.value}</strong>
                    <span style={{ display: "block", fontSize: "0.92rem", fontWeight: 600, color: stat.accent }}>{stat.title}</span>
                    <span style={{ display: "block", fontSize: "0.74rem", color: "rgba(255,255,255,0.5)" }}>{stat.subtitle}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* FOCUS AREAS GRID */}
          <div style={{ marginTop: "4.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "1rem" }}>
              <div>
                <span style={{ fontSize: "0.78rem", letterSpacing: "1.5px", fontWeight: 700, color: "#38bdf8", textTransform: "uppercase" }}>DOMAINS & CAPABILITIES</span>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#FFFFFF", marginTop: "4px" }}>My core areas of focus</h3>
              </div>
              <Sparkles size={24} style={{ color: "#6366f1" }} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {ABOUT_FOCUS.map((area) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.title}
                    variants={cardSpring}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02, boxShadow: `0 20px 40px -10px ${area.accent}30`, borderColor: `${area.accent}70` }}
                    style={{ position: "relative", padding: "28px 22px", borderRadius: "22px", background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", backdropFilter: "blur(14px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                  >
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                        <span style={{ fontFamily: "monospace", fontSize: "0.85rem", opacity: 0.45, fontWeight: 700 }}>0{area.number}</span>
                        <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: `${area.accent}18`, color: area.accent, border: `1px solid ${area.accent}40`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon size={20} />
                        </div>
                      </div>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "8px" }}>{area.title}</h3>
                      <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "rgba(255, 255, 255, 0.65)", marginBottom: "18px" }}>{area.description}</p>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "14px" }}>
                      {area.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: "0.75rem", fontWeight: 600, padding: "4px 10px", borderRadius: "8px", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.08)" }}>{tag}</span>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. SKILLS SECTION (LOGOS ON TOP + LABEL BELOW) ================= */}
      <section id="skills" className="section dark-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="section-label">02 — TECHNICAL SKILLS</div>
            <h2 className="big-heading">
              My<br /><span>toolkit.</span>
            </h2>
          </motion.div>

          <motion.div 
            className="skills-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: "18px",
              marginTop: "2.5rem"
            }}
          >
            {SKILLS_DATA.map((skill) => (
              <motion.div 
                className="skill-card-updated" 
                key={skill.name}
                variants={cardSpring}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  boxShadow: `0 18px 35px -8px ${skill.color}45`,
                  borderColor: `${skill.color}80`
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px 14px",
                  borderRadius: "20px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                  cursor: "pointer",
                  overflow: "hidden"
                }}
              >
                <div style={{ position: "absolute", top: "15px", width: "45px", height: "45px", background: skill.color, filter: "blur(30px)", opacity: 0.25, pointerEvents: "none", borderRadius: "50%" }} />
                <motion.div whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }} transition={{ duration: 0.4 }} style={{ width: "46px", height: "46px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "12px", zIndex: 1 }}>
                  <img src={skill.logoUrl} alt={`${skill.name} logo`} style={{ width: "100%", height: "100%", objectFit: "contain", filter: skill.name === "GitHub" ? "invert(1)" : "none" }} loading="lazy" />
                </motion.div>
                <strong style={{ fontSize: "0.95rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "3px", zIndex: 1 }}>{skill.name}</strong>
                <span style={{ fontSize: "0.74rem", color: "rgba(255, 255, 255, 0.55)", zIndex: 1 }}>{skill.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= 4. EXPERIENCE SECTION ================= */}
      <section id="experience" className="section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="section-label">03 — EXPERIENCE</div>
            <h2 className="big-heading">
              Where I've<br /><span>learned by doing.</span>
            </h2>
          </motion.div>

          <div className="experience-list">
            <motion.div 
              className="experience-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
            >
              <div className="experience-year">INTERNSHIP</div>
              <div className="experience-content">
                <div className="experience-tag">PYTHON FULL STACK INTERN</div>
                <h3>Qlith Innovation Pvt. Ltd.</h3>
                <p>Worked on Python Full Stack development, web technologies, APIs, CRUD operations and practical software development projects.</p>
                <div className="experience-tech">Python · Web Development · APIs · CRUD</div>
              </div>
              <div className="experience-arrow">↗</div>
            </motion.div>

            <motion.div 
              className="experience-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="experience-year">INTERNSHIP</div>
              <div className="experience-content">
                <div className="experience-tag">DATA SCIENCE INTERN</div>
                <h3>CodSoft</h3>
                <p>Worked with data science and machine learning concepts through practical projects and predictive modeling tasks.</p>
                <div className="experience-tech">Python · Data Science · Machine Learning</div>
              </div>
              <div className="experience-arrow">↗</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 5. PROJECTS SECTION ================= */}
      <section id="projects" className="section dark-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="section-label">04 — PROJECTS</div>
            <h2 className="big-heading">
              Selected<br /><span>work.</span>
            </h2>
          </motion.div>

          <motion.div 
            className="projects-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {PROJECTS_DATA.map((project) => (
              <motion.div
                className="project-card"
                key={project.number}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-top">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-link">View Project ↗</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= 6. EDUCATION SECTION ================= */}
      <section id="education" className="section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="section-label">05 — EDUCATION</div>
            <h2 className="big-heading">Academic<br /><span>journey.</span></h2>
          </motion.div>

          <motion.div 
            className="education-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {EDUCATION_DATA.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  className="education-card"
                  key={item.degree}
                  variants={fadeInUp}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.25 }}
                  style={{ borderLeft: `3px solid ${item.accent}` }}
                >
                  <div className="education-year">{item.year}</div>
                  <div className="education-main">
                    <div className="education-status">{item.status}</div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Icon size={18} style={{ color: item.accent }} /> {item.degree}
                    </h3>
                    <p>{item.institute}</p>
                    <strong>{item.result}</strong>
                  </div>
                  <div className="education-arrow">↗</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ================= 7. STRENGTHS SECTION (IMAGE ON TOP + LABEL BELOW) ================= */}
      <section id="strengths" className="section dark-section">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="section-label">06 — STRENGTHS</div>
            <h2 className="big-heading">
              What I<br /><span>bring.</span>
            </h2>
          </motion.div>

          <motion.div 
            className="strength-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
              marginTop: "2.5rem"
            }}
          >
            {STRENGTHS_DATA.map((strength) => (
              <motion.article
                className="strength-card-updated"
                key={strength.title}
                variants={cardSpring}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: `0 20px 40px -12px ${strength.accent}40`,
                  borderColor: `${strength.accent}80`,
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "22px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(14px)",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                {/* 1. TOP IMAGE WITH ZOOM ANIMATION */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "175px",
                    overflow: "hidden",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <motion.img
                    src={strength.imageUrl}
                    alt={strength.title}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.85) contrast(1.1)",
                    }}
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(10, 10, 15, 0.85) 0%, transparent 60%)",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "16px",
                      right: "16px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: "8px",
                        background: "rgba(0, 0, 0, 0.6)",
                        color: strength.accent,
                        border: `1px solid ${strength.accent}40`,
                      }}
                    >
                      {strength.number}
                    </span>

                    <div
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: "rgba(0, 0, 0, 0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>

                {/* 2. TEXT CONTENT BELOW IMAGE */}
                <div
                  style={{
                    padding: "22px 20px 20px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "1.2px",
                      color: strength.accent,
                      marginBottom: "6px",
                    }}
                  >
                    {strength.tag}
                  </span>

                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "8px",
                    }}
                  >
                    {strength.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: "1.6",
                      color: "rgba(255, 255, 255, 0.65)",
                      margin: 0,
                    }}
                  >
                    {strength.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= 8. CONTACT SECTION ================= */}
      <section id="contact" className="contact-section">
        <div className="contact-glow"></div>

        <motion.div 
          className="section-container contact-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="section-label">07 — CONTACT</div>
          <h2 className="contact-heading">
            Let's build<br /><span>something great.</span>
          </h2>

          <p className="contact-description">
            I'm open to software engineering opportunities, internships, collaborations and interesting development projects.
          </p>

          <motion.a
            href="mailto:mohantysonali1228@gmail.com"
            className="email-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Start a conversation <span>↗</span>
          </motion.a>

          {/* Social Links & Mail */}
          <div className="contact-details" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginTop: '2rem' }}>
            <a href="mailto:mohantysonali1228@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <MailIcon /> mohantysonali1228@gmail.com
            </a>

            <motion.a
              href="https://www.linkedin.com/in/sonali-mohanty-7b"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              whileHover={{ y: -3, scale: 1.05 }}
            >
              <LinkedInIcon /> LinkedIn ↗
            </motion.a>

            <motion.a
              href="https://github.com/mohantysonali1228-cpu"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              whileHover={{ y: -3, scale: 1.05 }}
            >
              <GitHubIcon /> GitHub ↗
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* ================= 9. FOOTER ================= */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">Sonali<span>.</span></div>
          <p>Python Full Stack Developer</p>
          <div className="footer-right">© 2026 Sonali Mohanty</div>
        </div>
      </footer>
    </div>
  );
}

export default App;