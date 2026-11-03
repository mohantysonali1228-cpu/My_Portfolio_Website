
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Github,
  Layers3,
  Terminal,
  Sparkles,
  ShoppingBasket,
  Building2,
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 110, damping: 14 },
  },
};

// Replace these GitHub profile URLs with the exact repository URLs.
const GITHUB_PROFILE = "https://github.com/mohantysonali1228-cpu";

const projects = [
  {
    number: "01",
    title: "Blinkit Grocery Website",
    category: "E-COMMERCE WEBSITE",
    description:
      "A Blinkit-inspired grocery shopping website where users can explore grocery products, browse categories, add products to their cart, and manage their shopping experience.",
    icon: ShoppingBasket,
    accent: "#84cc16",
    imageUrl:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&auto=format&fit=crop&q=80",
    technologies: [
      "HTML5",
      "Tailwind CSS",
      "JavaScript",
      "LocalStorage",
    ],
    highlights: [
      "Product categories and listings",
      "Add-to-cart and cart management",
      "Login and registration interface",
    ],
    // github:"https://github.com/mohantysonali1228-cpu/Grocery_-Delivery-_Website-",
    demo: "https://grocery-delivery-website-vqc2.vercel.app/",
  },
  {
    number: "02",
    title: "Real Estate Website",
    category: "REAL ESTATE WEB APPLICATION",
    description:
      "A modern and responsive real estate website designed to showcase properties, provide property information, and help users explore available real estate listings.",
    icon: Building2,
    accent: "#f59e0b",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&auto=format&fit=crop&q=80",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI",
    ],
    highlights: [
      "Property listing showcase",
      "Property and agent sections",
      "Responsive website design",
    ],
    github: GITHUB_PROFILE,
    demo: null,
  },
  {
    number: "03",
    title: "AI Resume Builder",
    category: "AI-POWERED WEB APPLICATION",
    description:
      "An AI-powered resume builder that helps users create professional and ATS-friendly resumes. Users can enter personal details, education, skills, and work experience to generate and enhance resume content.",
    icon: BrainCircuit,
    accent: "#a855f7",
    imageUrl:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=700&auto=format&fit=crop&q=80",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AI Integration",
    ],
    highlights: [
      "AI-powered resume content enhancement",
      "ATS-friendly resume generation",
      "Resume details and PDF support",
    ],
    github: GITHUB_PROFILE,
    demo: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-grid-bg" />

      <div className="projects-container">
        {/* Header */}
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="projects-label">
            <span>04</span>
            SELECTED PROJECTS
          </div>

          <div className="projects-heading-content">
            <div>
              <h2>
                Things I've
                <br />
                <span>built with purpose.</span>
              </h2>
            </div>

            <p>
              A showcase of practical software projects involving web
              development, e-commerce, Python, REST APIs, SQL databases,
              responsive interfaces, and machine learning.
            </p>
          </div>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="projects-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
            marginBottom: "4rem",
          }}
        >
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                className="project-card"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: `0 24px 45px -12px ${project.accent}35`,
                  borderColor: `${project.accent}75`,
                }}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "24px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  backdropFilter: "blur(14px)",
                  overflow: "hidden",
                }}
              >
                {/* Background Glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "120px",
                    height: "120px",
                    background: project.accent,
                    filter: "blur(65px)",
                    opacity: 0.2,
                    pointerEvents: "none",
                    borderRadius: "50%",
                  }}
                />

                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "190px",
                    overflow: "hidden",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.85) contrast(1.1)",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(10,10,15,0.9), transparent 65%)",
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
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: "8px",
                        background: "rgba(0,0,0,0.65)",
                        color: project.accent,
                        border: `1px solid ${project.accent}40`,
                      }}
                    >
                      {project.number}
                    </span>

                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background: "rgba(0,0,0,0.65)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: project.accent,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div
                  style={{
                    padding: "24px 22px 20px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "1.2px",
                        color: project.accent,
                        marginBottom: "6px",
                      }}
                    >
                      {project.category}
                    </span>

                    <h3
                      style={{
                        fontSize: "1.38rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        marginBottom: "10px",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: "1.6",
                        color: "rgba(255,255,255,0.65)",
                        marginBottom: "18px",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                        marginBottom: "20px",
                      }}
                    >
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "0.82rem",
                            color: "rgba(255,255,255,0.75)",
                          }}
                        >
                          <span
                            style={{
                              width: "5px",
                              height: "5px",
                              flexShrink: 0,
                              borderRadius: "50%",
                              background: project.accent,
                            }}
                          />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Technologies */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginBottom: "20px",
                      }}
                    >
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            padding: "4px 10px",
                            borderRadius: "8px",
                            background: "rgba(255,255,255,0.04)",
                            color: "rgba(255,255,255,0.85)",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                        paddingTop: "14px",
                      }}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, color: "#FFFFFF" }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "0.88rem",
                          fontWeight: 600,
                          color: "rgba(255,255,255,0.75)",
                          textDecoration: "none",
                        }}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>

                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{
                            scale: 1.05,
                            color: project.accent,
                          }}
                          whileTap={{ scale: 0.95 }}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "0.88rem",
                            fontWeight: 600,
                            color: project.accent,
                            textDecoration: "none",
                          }}
                        >
                          Live Preview
                          <ArrowUpRight size={16} />
                        </a>
                      ) : (
                        <span
                          style={{
                            fontSize: "0.82rem",
                            color: "rgba(255,255,255,0.35)",
                          }}
                        >
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          className="project-stats"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "18px",
            padding: "24px 28px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "3rem",
          }}
        >
          {/* Projects */}
          <div style={statStyle}>
            <div style={iconStyle("#38bdf8")}>
              <Terminal size={20} />
            </div>
            <div>
              <strong style={statNumberStyle}>03+</strong>
              <span style={statLabelStyle}>Projects Showcased</span>
            </div>
          </div>

          {/* Technology Areas */}
          <div style={statStyle}>
            <div style={iconStyle("#6366f1")}>
              <Layers3 size={20} />
            </div>
            <div>
              <strong style={statNumberStyle}>05+</strong>
              <span style={statLabelStyle}>Technology Areas</span>
            </div>
          </div>

          {/* ML Model */}
          <div style={statStyle}>
            <div style={iconStyle("#ec4899")}>
              <BrainCircuit size={20} />
            </div>
            <div>
              <strong style={statNumberStyle}>01</strong>
              <span style={statLabelStyle}>ML Model</span>
            </div>
          </div>

          {/* Banner */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              paddingLeft: "10px",
              borderLeft: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#38bdf8" }}>
              Always building new ideas
            </span>
            <Sparkles size={18} style={{ color: "#38bdf8" }} />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            padding: "32px 30px",
            borderRadius: "22px",
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(56,189,248,0.05))",
            border: "1px solid rgba(99,102,241,0.25)",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.76rem",
                fontWeight: 700,
                letterSpacing: "1.2px",
                color: "#38bdf8",
              }}
            >
              HAVE A PROJECT IDEA?
            </span>

            <h3
              style={{
                fontSize: "1.55rem",
                fontWeight: 700,
                color: "#FFFFFF",
                marginTop: "4px",
              }}
            >
              Let's build something impactful together.
            </h3>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "999px",
              background: "linear-gradient(135deg, #6366f1, #38bdf8)",
              color: "#FFFFFF",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            Start a conversation
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// Reusable statistics styles
const statStyle = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const iconStyle = (color) => ({
  width: "42px",
  height: "42px",
  borderRadius: "12px",
  background: `${color}26`,
  color,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const statNumberStyle = {
  display: "block",
  fontSize: "1.35rem",
  fontWeight: 800,
  color: "#FFFFFF",
};

const statLabelStyle = {
  fontSize: "0.8rem",
  color: "rgba(255,255,255,0.5)",
};

export default Projects;
