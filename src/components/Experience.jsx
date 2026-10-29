import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Database,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: "01",
      role: "Python Full Stack Intern",
      company: "Qlith Innovation Pvt. Ltd.",
      type: "Internship",
      period: "2025 – Present",
      location: "Bhubaneswar, Odisha",
      icon: Code2,
      description:
        "Worked on practical web development tasks and explored full-stack application development using Python, frontend technologies, databases and REST APIs.",
      technologies: [
        "Python",
        "HTML",
        "CSS",
        "JavaScript",
        "SQL",
        "REST API",
        "CRUD",
      ],
      responsibilities: [
        "Developing responsive web application interfaces.",
        "Working with Python-based backend logic.",
        "Creating CRUD operations and REST API workflows.",
        "Working with SQL and structured application data.",
      ],
    },
    {
      id: "02",
      role: "Data Science Intern",
      company: "CodSoft",
      type: "Internship",
      period: "2025",
      location: "Remote",
      icon: BrainCircuit,
      description:
        "Gained practical exposure to data science and machine learning concepts through project-based tasks and predictive modelling.",
      technologies: [
        "Python",
        "Machine Learning",
        "Data Analysis",
        "Prediction",
        "Jupyter",
      ],
      responsibilities: [
        "Explored datasets and performed basic data analysis.",
        "Worked on machine learning prediction problems.",
        "Implemented the Titanic Survival Prediction project.",
        "Improved understanding of data-driven problem solving.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      {/* Background */}
      <div className="experience-grid-bg" />

      <div className="experience-container">
        {/* =================================
            HEADER
        ================================= */}
        <motion.div
          className="experience-header"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="experience-label">
            <span>03</span>
            EXPERIENCE
          </div>

          <div className="experience-heading-content">
            <h2>
              Learning by
              <br />
              <span>building.</span>
            </h2>

            <p>
              My internship experiences have helped me turn academic
              knowledge into practical development and problem-solving
              skills.
            </p>
          </div>
        </motion.div>

        {/* =================================
            EXPERIENCE TIMELINE
        ================================= */}
        <div className="experience-timeline">
          <div className="timeline-line" />

          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                className="experience-item"
                key={experience.id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
              >
                {/* Timeline Node */}
                <div className="timeline-node">
                  <span>{experience.id}</span>
                </div>

                {/* Experience Card */}
                <div className="experience-card">
                  {/* Card Header */}
                  <div className="experience-card-header">
                    <div className="experience-title-area">
                      <div className="experience-icon">
                        <Icon size={22} />
                      </div>

                      <div>
                        <div className="experience-type">
                          {experience.type}
                        </div>

                        <h3>{experience.role}</h3>

                        <h4>{experience.company}</h4>
                      </div>
                    </div>

                    <div className="experience-date">
                      <CalendarDays size={14} />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="experience-meta">
                    <span>
                      <BriefcaseBusiness size={13} />
                      {experience.type}
                    </span>

                    <span>
                      <Database size={13} />
                      {experience.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="experience-description">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="experience-details">
                    <div className="details-title">
                      <span>KEY CONTRIBUTIONS</span>
                    </div>

                    <div className="responsibilities">
                      {experience.responsibilities.map((item) => (
                        <div
                          className="responsibility"
                          key={item}
                        >
                          <CheckCircle2 size={14} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="experience-tech">
                    <span className="tech-title">
                      TECHNOLOGIES
                    </span>

                    <div className="tech-list">
                      {experience.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="experience-card-bottom">
                    <span>
                      Practical Experience
                    </span>

                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =================================
            EXPERIENCE SUMMARY
        ================================= */}
        <motion.div
          className="experience-summary"
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="summary-left">
            <div className="summary-symbol">
              <Code2 size={21} />
            </div>

            <div>
              <span>MY APPROACH</span>

              <h3>
                Learn → Build → Improve
              </h3>
            </div>
          </div>

          <p>
            Every internship and project is an opportunity to
            understand technology better, solve practical problems
            and become a more confident developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;