import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  Code2,
  Database,
  GraduationCap,
  Sparkles,
  MapPin,
  Terminal,
  CheckCircle2,
  Quote,
} from "lucide-react";

// ================= ANIMATION VARIANTS =================
const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardSpring = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

const About = () => {
  const stats = [
    {
      number: "01",
      value: "MCA",
      title: "Computer Science",
      subtitle: "GITAM, Bhubaneswar",
      accent: "#6366f1", // Indigo
      icon: GraduationCap,
    },
    {
      number: "02",
      value: "8.0",
      title: "Current CGPA",
      subtitle: "Academic Excellence",
      accent: "#38bdf8", // Sky Blue
      icon: Award,
    },
    {
      number: "03",
      value: "2+",
      title: "Internships",
      subtitle: "Python & Data Science",
      accent: "#10b981", // Emerald
      icon: Code2,
    },
    {
      number: "04",
      value: "3+",
      title: "Core Projects",
      subtitle: "ML & Web Applications",
      accent: "#ec4899", // Pink
      icon: BrainCircuit,
    },
  ];

  const focusAreas = [
    {
      number: "01",
      icon: Code2,
      accent: "#38bdf8",
      title: "Full Stack Development",
      description:
        "Building responsive, high-performance web applications with clean frontend interfaces, Python backend engines, and modular REST APIs.",
      tags: ["Python", "JavaScript", "HTML/CSS", "CRUD"],
    },
    {
      number: "02",
      icon: Database,
      accent: "#6366f1",
      title: "Backend & Databases",
      description:
        "Designing robust relational databases with SQL, integrating seamless API endpoints, and managing efficient data pipelines.",
      tags: ["REST APIs", "SQL", "PostgreSQL", "Data Architecture"],
    },
    {
      number: "03",
      icon: BrainCircuit,
      accent: "#a855f7",
      title: "Machine Learning & AI",
      description:
        "Developing predictive modeling solutions, passenger survival classifiers, and data analysis pipelines using Python and ML libraries.",
      tags: ["Machine Learning", "Pandas", "Predictive Models", "Data Analysis"],
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-background-grid" />

      <div className="about-container">
        {/* ================= HEADER ================= */}
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-label">
            <span>01</span>
            ABOUT ME
          </div>

          <h2>
            Building with curiosity.
            <br />
            <span>Growing with every line of code.</span>
          </h2>

          <div className="about-heading-line" />
        </motion.div>

        {/* ================= MAIN CONTENT (SPLIT LAYOUT) ================= */}
        <div className="about-main" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "40px", alignItems: "center" }}>
          {/* LEFT SIDE: STORY & QUICK DETAILS */}
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <p className="about-intro" style={{ fontSize: "1.25rem", lineHeight: 1.6, fontWeight: 500, color: "#FFFFFF", marginBottom: "1.2rem" }}>
              I&apos;m an <span className="highlight" style={{ color: "#38bdf8", fontWeight: 600 }}>MCA Computer Science student</span> based in Bhubaneswar, focused on building production-ready Python Full Stack and Machine Learning solutions.
            </p>

            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "1rem" }}>
              My technical journey is centered around developing scalable backend logic, crafting intuitive web experiences, and architecting reliable CRUD APIs. I combine structured computer science foundations with hands-on internship experience.
            </p>

            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: "2rem" }}>
              I continuously experiment with predictive data models and modern frameworks to transform complex technical ideas into elegant, impactful digital products.
            </p>

            {/* Quick Specs Pill Badges */}
            <div
              className="about-quick-info"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "14px",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: "16px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span className="quick-label" style={{ display: "block", fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", fontWeight: 700, letterSpacing: "1px", marginBottom: "4px" }}>
                  LOCATION
                </span>
                <strong style={{ fontSize: "0.92rem", color: "#FFFFFF", display: "flex", alignItems: "center", gap: "6px" }}>
                  <MapPin size={14} style={{ color: "#38bdf8" }} /> Bhubaneswar
                </strong>
              </div>

              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: "16px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span className="quick-label" style={{ display: "block", fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", fontWeight: 700, letterSpacing: "1px", marginBottom: "4px" }}>
                  DEGREE
                </span>
                <strong style={{ fontSize: "0.92rem", color: "#FFFFFF", display: "flex", alignItems: "center", gap: "6px" }}>
                  <GraduationCap size={14} style={{ color: "#6366f1" }} /> MCA (2025–27)
                </strong>
              </div>

              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: "16px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span className="quick-label" style={{ display: "block", fontSize: "0.72rem", color: "rgba(255,255,255,0.45)", fontWeight: 700, letterSpacing: "1px", marginBottom: "4px" }}>
                  ROLE
                </span>
                <strong style={{ fontSize: "0.92rem", color: "#FFFFFF", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Terminal size={14} style={{ color: "#10b981" }} /> Python Full Stack
                </strong>
              </div>
            </div>

            {/* Interactive Contact Button */}
            <motion.a
              href="#contact"
              className="about-button"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 26px",
                borderRadius: "999px",
                background: "linear-gradient(135deg, #6366f1, #38bdf8)",
                color: "#FFFFFF",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "0.95rem",
                boxShadow: "0 10px 25px -6px rgba(99, 102, 241, 0.5)",
              }}
            >
              Let&apos;s Work Together
              <ArrowUpRight size={17} />
            </motion.a>
          </motion.div>

          {/* RIGHT SIDE: 4 FLOATING HIGHLIGHT STAT CARDS */}
          <motion.div
            className="about-stats"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
            }}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  className="about-stat-card"
                  key={stat.number}
                  variants={cardSpring}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                    boxShadow: `0 20px 35px -10px ${stat.accent}35`,
                    borderColor: `${stat.accent}80`,
                  }}
                  style={{
                    position: "relative",
                    padding: "26px 20px",
                    borderRadius: "22px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(14px)",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  {/* Subtle Background Glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      width: "80px",
                      height: "80px",
                      background: stat.accent,
                      filter: "blur(40px)",
                      opacity: 0.25,
                      borderRadius: "50%",
                    }}
                  />

                  <div
                    className="stat-top"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <span style={{ fontFamily: "monospace", fontSize: "0.85rem", opacity: 0.45, fontWeight: 700 }}>
                      {stat.number}
                    </span>

                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.15 }}
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "12px",
                        background: `${stat.accent}18`,
                        color: stat.accent,
                        border: `1px solid ${stat.accent}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={20} />
                    </motion.div>
                  </div>

                  <div className="stat-bottom">
                    <strong style={{ display: "block", fontSize: "2rem", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "4px" }}>
                      {stat.value}
                    </strong>
                    <span style={{ display: "block", fontSize: "0.95rem", fontWeight: 600, color: stat.accent, marginBottom: "2px" }}>
                      {stat.title}
                    </span>
                    <span style={{ display: "block", fontSize: "0.76rem", color: "rgba(255,255,255,0.5)" }}>
                      {stat.subtitle}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ================= FOCUS AREAS SECTION ================= */}
        <motion.div
          className="focus-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "4.5rem",
            marginBottom: "2rem",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            paddingBottom: "1rem",
          }}
        >
          <div>
            <span style={{ fontSize: "0.78rem", letterSpacing: "1.5px", fontWeight: 700, color: "#38bdf8", textTransform: "uppercase" }}>
              DOMAINS & CAPABILITIES
            </span>
            <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#FFFFFF", marginTop: "4px" }}>
              My core areas of focus
            </h3>
          </div>

          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ color: "#6366f1" }}
          >
            <Sparkles size={24} />
          </motion.div>
        </motion.div>

        {/* FOCUS CARDS GRID */}
        <motion.div
          className="focus-grid"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "4rem",
          }}
        >
          {focusAreas.map((area) => {
            const Icon = area.icon;

            return (
              <motion.article
                className="focus-card"
                key={area.title}
                variants={cardSpring}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: `0 20px 40px -10px ${area.accent}30`,
                  borderColor: `${area.accent}70`,
                }}
                style={{
                  position: "relative",
                  padding: "30px 24px",
                  borderRadius: "22px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(14px)",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <span style={{ fontFamily: "monospace", fontSize: "0.85rem", opacity: 0.45, fontWeight: 700 }}>
                      0{area.number}
                    </span>

                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "14px",
                        background: `${area.accent}18`,
                        color: area.accent,
                        border: `1px solid ${area.accent}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "10px" }}>
                    {area.title}
                  </h3>

                  <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "rgba(255, 255, 255, 0.65)", marginBottom: "20px" }}>
                    {area.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "14px" }}>
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.76rem",
                        fontWeight: 600,
                        padding: "4px 10px",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,0.04)",
                        color: "rgba(255,255,255,0.8)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* ================= PERSONAL STATEMENT BANNER ================= */}
        <motion.div
          className="about-quote"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          style={{
            position: "relative",
            padding: "36px 30px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(56, 189, 248, 0.05) 100%)",
            border: "1px solid rgba(99, 102, 241, 0.25)",
            backdropFilter: "blur(16px)",
            textAlign: "center",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "300px",
              height: "200px",
              background: "#6366f1",
              filter: "blur(90px)",
              opacity: 0.15,
              pointerEvents: "none",
            }}
          />

          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "inline-flex", color: "#38bdf8", marginBottom: "10px" }}
          >
            <Quote size={28} />
          </motion.div>

          <p style={{ maxWidth: "680px", margin: "0 auto 12px", fontSize: "1.15rem", lineHeight: 1.6, fontWeight: 500, color: "#FFFFFF" }}>
            “I&apos;m not just writing lines of code — I&apos;m learning how to architect solutions that solve real-world problems and deliver practical value.”
          </p>

          <span style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "1px", color: "#38bdf8", textTransform: "uppercase" }}>
            — Sonali Mohanty
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;