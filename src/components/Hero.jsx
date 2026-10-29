
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
  Mail,
  Sparkles,
  Code2,
  Download,
} from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const section = document.querySelector("#projects");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToContact = () => {
    const section = document.querySelector("#contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background Grid */}
      <div className="hero-grid" />

      {/* Background Glow One */}
      <motion.div
        className="hero-glow hero-glow-one"
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Background Glow Two */}
      <motion.div
        className="hero-glow hero-glow-two"
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          {/* Availability Badge */}
          <motion.div
            className="hero-availability"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="availability-dot" />
            <span>Available for opportunities</span>
            <Sparkles size={13} />
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Sonali
            <span>Mohanty.</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Code2 size={20} />
            <span>Python Full Stack Developer</span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            MCA Computer Science student passionate about building clean,
            responsive and practical web applications using Python,
            JavaScript, SQL, REST APIs and Machine Learning.
          </motion.p>

          {/* Main Buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <motion.button
              className="hero-button hero-button-primary"
              onClick={scrollToProjects}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
              <ArrowUpRight size={18} />
            </motion.button>

            <motion.button
              className="hero-button hero-button-secondary"
              onClick={scrollToContact}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              Let&apos;s Connect
              <Mail size={17} />
            </motion.button>
          </motion.div>

          {/* Location + Education */}
          <motion.div
            className="hero-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div>
              <MapPin size={15} />
              <span>Bhubaneswar, Odisha</span>
            </div>

            <div>
              <Code2 size={15} />
              <span>MCA • 2025–2027</span>
            </div>
          </motion.div>

          {/* Social Links + Download CV */}
          <motion.div
            className="hero-socials"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span>Find me on</span>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/sonali-mohanty-7b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={17} />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/mohantysonali1228-cpu"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={17} />
            </motion.a>

            {/* Download CV */}
            <motion.a
              href="D:\Downloads\sonali mohanty c.v.PDF"
              download="Sonali-Mohanty-CV.pdf"
              className="download-cv-icon"
              aria-label="Download CV"
              title="Download CV"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={17} />
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT PHOTO */}
        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.92,
            x: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Rotating Ring One */}
          <motion.div
            className="photo-ring photo-ring-one"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Rotating Ring Two */}
          <motion.div
            className="photo-ring photo-ring-two"
            animate={{ rotate: -360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Main Photo Card */}
          <motion.div
            className="hero-photo-card"
            whileHover={{
              rotate: 0,
              y: -6,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
          >
            {/* Top Label */}
            <div className="photo-label">
              <span className="photo-label-dot" />
              PYTHON • WEB • ML
            </div>

            {/* Profile Photo */}
            <img
              src="/profile.jpg"
              alt="Sonali Mohanty"
              className="hero-profile-image"
            />

            {/* Gradient Overlay */}
            <div className="photo-gradient" />

            {/* Bottom Info */}
            <div className="photo-info">
              <div>
                <h3>Sonali Mohanty</h3>
                <p>Software Developer</p>
              </div>

              <div className="photo-number">01</div>
            </div>
          </motion.div>

          {/* Floating Python Card */}
          <motion.div
            className="floating-card floating-card-one"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="floating-icon python-icon">Py</div>

            <div>
              <strong>Python</strong>
              <span>Full Stack</span>
            </div>
          </motion.div>

          {/* Floating Machine Learning Card */}
          <motion.div
            className="floating-card floating-card-two"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="floating-icon ml-icon">ML</div>

            <div>
              <strong>Machine Learning</strong>
              <span>Exploring & Building</span>
            </div>
          </motion.div>

          {/* Floating Dots */}
          <motion.div
            className="floating-dot dot-one"
            animate={{
              y: [0, -15, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          <motion.div
            className="floating-dot dot-two"
            animate={{
              y: [0, 15, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
        }}
      >
        <span>Scroll to explore</span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
