import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Quote, ArrowUpRight } from "lucide-react";

const STRENGTHS_DATA = [
  {
    number: "01",
    title: "Quick Learner",
    tag: "Speed & Adaptability",
    description:
      "Rapidly absorbs complex system architectures, modern toolchains, and emerging tech stacks.",
    accent: "#eab308", // Gold
    // Illustration: Learning / Brain / Tech Skill
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "02",
    title: "Problem Solving",
    tag: "Analytical Logic",
    description:
      "Breaks down intricate computational challenges into optimized, modular, and reliable code.",
    accent: "#38bdf8", // Sky Cyan
    // Illustration: Algorithm / Logic / Code Architecture
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "03",
    title: "Team Player",
    tag: "Collaboration",
    description:
      "Thrives in collaborative sprint environments, active peer reviews, and cross-functional team delivery.",
    accent: "#6366f1", // Indigo
    // Illustration: Team Collaboration / Tech Pair Programming
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "04",
    title: "Communication",
    tag: "Clarity & Voice",
    description:
      "Articulates complex workflows, technical documentation, and ideas with precision and clarity.",
    accent: "#a855f7", // Purple
    // Illustration: Communication / Discussion
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "05",
    title: "Adaptability",
    tag: "Flexibility",
    description:
      "Easily maneuvers across changing tech frameworks, API updates, and high-tempo release cycles.",
    accent: "#10b981", // Emerald
    // Illustration: Dynamic Evolution / Creative Technology
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
  },
  {
    number: "06",
    title: "Goal Oriented",
    tag: "Execution Discipline",
    description:
      "Maintains laser focus on sprint milestones, clean deliverables, and consistent output.",
    accent: "#f43f5e", // Rose Red
    // Illustration: Target / Strategy / Achievement
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
  },
];

// Stagger Animation Setup
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.94 },
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

const Strengths = () => {
  return (
    <section id="strengths" className="strengths-section">
      <div className="strengths-grid-bg" />

      <div className="strengths-container">
        {/* ================= HEADER ================= */}
        <motion.div
          className="strengths-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="strengths-label">
            <span>06</span>
            CORE STRENGTHS
          </div>

          <div className="strengths-heading">
            <h2>
              More than
              <br />
              <span>technical skills.</span>
            </h2>

            <p>
              The foundational traits, collaborative mindset, and execution qualities
              that power my growth and delivery as an engineer.
            </p>
          </div>
        </motion.div>

        {/* ================= VISUAL IMAGE CARDS GRID ================= */}
        <motion.div
          className="strengths-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "26px",
            marginBottom: "3.5rem",
          }}
        >
          {STRENGTHS_DATA.map((strength) => (
            <motion.article
              className="strength-card"
              key={strength.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: `0 24px 45px -12px ${strength.accent}40`,
                borderColor: `${strength.accent}80`,
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                borderRadius: "24px",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.09)",
                backdropFilter: "blur(16px)",
                overflow: "hidden",
                cursor: "pointer",
                transition: "border-color 0.3s ease",
              }}
            >
              {/* Radial Accent Glow */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "120px",
                  height: "120px",
                  background: strength.accent,
                  filter: "blur(60px)",
                  opacity: 0.22,
                  pointerEvents: "none",
                  borderRadius: "50%",
                  zIndex: 0,
                }}
              />

              {/* 1. TOP IMAGE CONTAINER WITH ZOOM EFFECT */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "185px",
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

                {/* Dark Gradient Overlay over image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10, 10, 15, 0.85) 0%, transparent 60%)",
                  }}
                />

                {/* Floating Top Badges */}
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
                      backdropFilter: "blur(8px)",
                      color: strength.accent,
                      border: `1px solid ${strength.accent}40`,
                    }}
                  >
                    {strength.number}
                  </span>

                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 45 }}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "rgba(0, 0, 0, 0.6)",
                      backdropFilter: "blur(8px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                    }}
                  >
                    <ArrowUpRight size={16} />
                  </motion.div>
                </div>
              </div>

              {/* 2. CONTENT DIRECTLY BELOW IMAGE */}
              <div
                style={{
                  padding: "24px 20px 22px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  zIndex: 1,
                }}
              >
                {/* Category Tag */}
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

                {/* Main Strength Title Below Image */}
                <h3
                  style={{
                    fontSize: "1.38rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "10px",
                    letterSpacing: "0.2px",
                  }}
                >
                  {strength.title}
                </h3>

                {/* Description */}
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

        {/* ================= MINDSET BANNER (QUOTE) ================= */}
        <motion.div
          className="strength-quote"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          style={{
            position: "relative",
            padding: "36px 30px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(56, 189, 248, 0.04) 100%)",
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
            style={{ display: "inline-flex", color: "#38bdf8", marginBottom: "12px" }}
          >
            <Quote size={30} />
          </motion.div>

          <span
            style={{
              display: "block",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "#38bdf8",
              marginBottom: "8px",
            }}
          >
            ENGINEERING MINDSET
          </span>

          <h3
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "12px",
              lineHeight: 1.35,
            }}
          >
            “Stay curious. Keep learning. Build with purpose.”
          </h3>

          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "0.95rem",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.65)",
            }}
          >
            Continuous curiosity, deliberate coding practice, and collaborative discipline
            are the cornerstones of delivering impactful software engineering solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Strengths;