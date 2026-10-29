import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  CalendarDays,
  MapPin,
  Award,
  BookOpen,
  Sparkles,
} from "lucide-react";

// Stagger Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Education = () => {
  const education = [
    {
      year: "2025 – 2027",
      degree: "Master of Computer Applications",
      field: "Computer Science",
      institute: "GITAM, Bhubaneswar",
      score: "CGPA: 8.0",
      status: "Pursuing",
      accent: "#6366f1", // Indigo
      icon: GraduationCap,
    },
    {
      year: "2022 – 2025",
      degree: "Bachelor of Science",
      field: "Computer Science",
      institute: "Adikavi Sarala Das (Degree) College, Tirtol",
      score: "81.9%",
      status: "Completed",
      accent: "#38bdf8", // Sky blue
      icon: Award,
    },
    {
      year: "2020 – 2022",
      degree: "Higher Secondary (+2 Science)",
      field: "Science",
      institute: "Adikavi Sarala Das (Degree) College, Tirtol",
      score: "78.1%",
      status: "Completed",
      accent: "#a855f7", // Purple
      icon: BookOpen,
    },
    {
      year: "2019 – 2020",
      degree: "Matriculation",
      field: "Secondary Education",
      institute: "Garei G.P. High School",
      score: "78.3%",
      status: "Completed",
      accent: "#10b981", // Emerald
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-grid-bg" />

      <div className="education-container">
        {/* Animated Section Header */}
        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="education-label">
            <span>05</span>
            EDUCATION
          </div>

          <div className="education-heading">
            <h2>
              Academic
              <br />
              <span>journey.</span>
            </h2>

            <p>
              My academic journey has built a strong foundation in
              computer science, core engineering, and analytical problem-solving.
            </p>
          </div>
        </motion.div>

        {/* Education Timeline Grid */}
        <motion.div
          className="education-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="education-card"
                key={item.degree + index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  boxShadow: `0 20px 35px -10px ${item.accent}25`,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  borderLeft: `3px solid ${item.accent}`,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Background Ambient Glow */}
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "120px",
                    height: "120px",
                    background: item.accent,
                    filter: "blur(65px)",
                    opacity: 0.15,
                    pointerEvents: "none",
                    borderRadius: "50%",
                  }}
                />

                {/* Left Year Badge */}
                <div className="education-year">
                  <span>{item.year}</span>
                </div>

                {/* Floating Icon with Pulse */}
                <motion.div
                  className="education-icon"
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    background: `${item.accent}18`,
                    color: item.accent,
                    border: `1px solid ${item.accent}40`,
                  }}
                >
                  <Icon size={22} />
                </motion.div>

                {/* Main Content */}
                <div className="education-content">
                  <div className="education-top-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span
                      className="education-status"
                      style={{
                        background: item.status === "Pursuing" ? `${item.accent}20` : "rgba(255, 255, 255, 0.06)",
                        color: item.status === "Pursuing" ? item.accent : "inherit",
                        border: `1px solid ${item.status === "Pursuing" ? item.accent + "50" : "rgba(255, 255, 255, 0.1)"}`,
                      }}
                    >
                      {item.status}
                    </span>

                    <motion.span
                      style={{ color: item.accent, fontWeight: 700, fontSize: "0.95rem" }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.score}
                    </motion.span>
                  </div>

                  <h3>{item.degree}</h3>
                  <h4>{item.field}</h4>

                  <p className="education-institute">
                    {item.institute}
                  </p>

                  <div className="education-meta">
                    <span>
                      <CalendarDays size={14} />
                      {item.year}
                    </span>

                    <span>
                      <MapPin size={14} />
                      Odisha, India
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom Banner with Sparkle Badge */}
        <motion.div
          className="education-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "flex", alignItems: "center", color: "#6366f1" }}
          >
            <Sparkles size={22} />
          </motion.div>

          <span>
            Currently pursuing MCA at GITAM with a focus on Full Stack development, modern APIs, and Machine Learning applications.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;