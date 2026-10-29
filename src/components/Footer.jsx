import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Linkedin,
  Github,
  Mail,
  Heart,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top */}
        <motion.div
          className="footer-top"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              SM<span>.</span>
            </a>

            <p>
              Python Full Stack Developer
              <br />
              MCA Student · Bhubaneswar
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>EXPLORE</span>

              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
            </div>

            <div>
              <span>CONNECT</span>

              <a href="#education">Education</a>
              <a href="#strengths">Strengths</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-socials">
            <span>SOCIAL</span>

            <a
              href="https://www.linkedin.com/in/sonali-mohanty-7b"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} />
            </a>

            <a
              href="https://github.com/mohantysonali1228-cpu"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} />
            </a>

            <a href="mailto:mohantysonali1228@gmail.com">
              <Mail size={16} />
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Sonali Mohanty.
            All rights reserved.
          </p>

          <p className="footer-made">
            Designed & built with
            <Heart size={12} />
            by Sonali
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;