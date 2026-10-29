
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Calculator,
  Database,
  Github,
  Layers3,
  Terminal,
  Sparkles,
  ShoppingBasket,
  Building2,
} from "lucide-react";

// ================= ANIMATION VARIANTS =================
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 14,
    },
  },
};

const Projects = () => {
  const projects = [
    {
      number: "01",
      title: "Order Calculator",
      category: "WEB APPLICATION",
      description:
        "A practical billing calculator that handles dynamic order quantities, discount calculations, and accurate final invoices.",
      icon: Calculator,
      accent: "#38bdf8",
      featured: true,
      imageUrl:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&auto=format&fit=crop&q=80",
      technologies: ["JavaScript", "HTML5", "CSS3", "Logic Engine"],
      highlights: [
        "Dynamic order calculation",
        "Clean user interface",
        "Instant billing logic",
      ],
      github: "https://github.com/mohantysonali1228-cpu",
      demo: "#",
    },
    {
      number: "02",
      title: "Student Project Management",
      category: "CRUD APPLICATION",
      description:
        "A project management application built with a Python backend and SQL for managing student submissions and project data.",
      icon: Database,
      accent: "#6366f1",
      featured: false,
      imageUrl:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&auto=format&fit=crop&q=80",
      technologies: ["Python", "REST API", "SQL", "CRUD"],
      highlights: [
        "GET and POST operations",
        "Project data management",
        "RESTful API architecture",
      ],
      github: "https://github.com/mohantysonali1228-cpu",
      demo: "#",
    },
    {
      number: "03",
      title: "Titanic Survival Prediction",
      category: "MACHINE LEARNING",
      description:
        "A machine learning model that analyzes passenger data and uses feature engineering to predict survival probabilities.",
      icon: BrainCircuit,
      accent: "#ec4899",
      featured: false,
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&auto=format&fit=crop&q=80",
      technologies: [
        "Python",
        "Machine Learning",
        "Pandas",
        "Scikit-Learn",
      ],
      highlights: [
        "Dataset feature analysis",
        "Predictive classification",
        "Data visualization",
      ],
      github: "https://github.com/mohantysonali1228-cpu",
      demo: "#",
    },
    {
      number: "04",
      title: "Blinkit Grocery Website",
      category: "E-COMMERCE WEBSITE",
      description:
        "A Blinkit-inspired grocery shopping website where users can explore grocery products, browse categories, add products to their cart, and manage their shopping experience.",
      icon: ShoppingBasket,
      accent: "#84cc16",
      featured: false,
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
      github: "https://github.com/mohantysonali1228-cpu",
      demo: "#",
    },
    {
      number: "05",
      title: "Real Estate Website",
      category: "REAL ESTATE WEB APPLICATION",
      description:
        "A modern and responsive real estate website designed to showcase properties, provide property information, and help users explore available real estate listings.",
      icon: Building2,
      accent: "#f59e0b",
      featured: false,
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
      github: "https://github.com/mohantysonali1228-cpu",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      {/* Background Grid */}
      <div className="projects-grid-bg" />

      <div className="projects-container">
        {/* ================= HEADER ================= */}
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
                Things I&apos;ve
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

        {/* ================= PROJECTS LIST ================= */}
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
                className={`project-card ${
                  project.featured ? "project-featured" : ""
                }`}
                key={project.title}
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
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.09)",
                  backdropFilter: "blur(14px)",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease",
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

                {/* Project Image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "190px",
                    overflow: "hidden",
                    borderBottom:
                      "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <motion.img
                    src={project.imageUrl}
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.85) contrast(1.1)",
                    }}
                    loading="lazy"
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(10,10,15,0.9) 0%, transparent 65%)",
                    }}
                  />

                  {/* Project Number and Icon */}
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
                        background: "rgba(0,0,0,0.65)",
                        backdropFilter: "blur(8px)",
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
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: project.accent,
                        border:
                          "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>
                </div>

                {/* ================= CARD CONTENT ================= */}
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
                        textTransform: "uppercase",
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
                            border:
                              "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "12px",
                        borderTop:
                          "1px solid rgba(255,255,255,0.08)",
                        paddingTop: "14px",
                      }}
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{
                          scale: 1.05,
                          color: "#FFFFFF",
                        }}
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
                        <span>Code</span>
                      </motion.a>

                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
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
                        <span>Live Preview</span>
                        <ArrowUpRight size={16} />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* ================= PROJECT STATS ================= */}
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
            backdropFilter: "blur(12px)",
            marginBottom: "3rem",
          }}
        >
          {/* Completed Projects */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(56,189,248,0.15)",
                color: "#38bdf8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Terminal size={20} />
            </div>
            <div>
              <strong
                style={{
                  display: "block",
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "#FFFFFF",
                }}
              >
                05+
              </strong>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Projects Showcased
              </span>
            </div>
          </div>

          {/* Technology Domains */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(99,102,241,0.15)",
                color: "#6366f1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Layers3 size={20} />
            </div>
            <div>
              <strong
                style={{
                  display: "block",
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "#FFFFFF",
                }}
              >
                05+
              </strong>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Technology Areas
              </span>
            </div>
          </div>

          {/* Machine Learning */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "rgba(236,72,153,0.15)",
                color: "#ec4899",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BrainCircuit size={20} />
            </div>
            <div>
              <strong
                style={{
                  display: "block",
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  color: "#FFFFFF",
                }}
              >
                01
              </strong>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                ML Model
              </span>
            </div>
          </div>

          {/* Banner Text */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              paddingLeft: "10px",
              borderLeft:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span
              style={{
                fontSize: "0.88rem",
                fontWeight: 600,
                color: "#38bdf8",
              }}
            >
              Always building new ideas
            </span>
            <Sparkles
              size={18}
              style={{ color: "#38bdf8", flexShrink: 0 }}
            />
          </div>
        </motion.div>

        {/* ================= CTA BANNER ================= */}
        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            padding: "32px 30px",
            borderRadius: "22px",
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(56,189,248,0.05) 100%)",
            border: "1px solid rgba(99,102,241,0.25)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.76rem",
                fontWeight: 700,
                letterSpacing: "1.2px",
                color: "#38bdf8",
                textTransform: "uppercase",
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
              Let&apos;s build something impactful together.
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
              background:
                "linear-gradient(135deg, #6366f1, #38bdf8)",
              color: "#FFFFFF",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.95rem",
              boxShadow:
                "0 10px 25px -6px rgba(99,102,241,0.5)",
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

export default Projects;