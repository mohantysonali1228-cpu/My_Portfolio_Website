import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:mohantysonali1228@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailto;

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid-bg" />

      <div className="contact-container">
        {/* Header */}
        <motion.div
          className="contact-header"
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
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="contact-label">
            <span>07</span>
            CONTACT
          </div>

          <div className="contact-heading">
            <h2>
              Let&apos;s start
              <br />
              <span>a conversation.</span>
            </h2>

            <p>
              Whether you have an opportunity, project idea or
              simply want to connect, feel free to reach out.
            </p>
          </div>
        </motion.div>

        {/* Contact Layout */}
        <div className="contact-layout">
          {/* Left */}
          <motion.div
            className="contact-info"
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="contact-intro">
              <span>GET IN TOUCH</span>

              <h3>
                Have something
                <br />
                interesting in mind?
              </h3>

              <p>
                I am currently open to opportunities, internships,
                collaborations and software development projects.
              </p>
            </div>

            <div className="contact-details">
              <a
                href="mailto:mohantysonali1228@gmail.com"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Mail size={18} />
                </div>

                <div>
                  <span>EMAIL</span>
                  <strong>
                    mohantysonali1228@gmail.com
                  </strong>
                </div>

                <ArrowUpRight size={16} />
              </a>

              <a
                href="tel:+917894344436"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <Phone size={18} />
                </div>

                <div>
                  <span>PHONE</span>
                  <strong>+91 7894344436</strong>
                </div>

                <ArrowUpRight size={16} />
              </a>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={18} />
                </div>

                <div>
                  <span>LOCATION</span>
                  <strong>Bhubaneswar, Odisha</strong>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="contact-socials">
              <span>FIND ME ONLINE</span>

              <div>
                <a
                  href="https://www.linkedin.com/in/sonali-mohanty-7b"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/mohantysonali1228-cpu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="form-heading">
              <span>DROP A MESSAGE</span>

              <h3>
                Tell me about
                <br />
                your idea.
              </h3>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">YOUR NAME</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">YOUR EMAIL</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">SUBJECT</label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>

              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">
              {sent ? (
                <>
                  <CheckCircle2 size={16} />
                  Message Ready
                </>
              ) : (
                <>
                  Send Message
                  <Send size={15} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;