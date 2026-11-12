
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) =>
        item.link.substring(1)
      );

      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (
            scrollPos >= top &&
            scrollPos < top + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setMenuOpen(false);

    const element = document.querySelector(link);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header
        className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}
      >
        <nav className="navbar">
          <div className="navbar-container">

            {/* LOGO */}
            <button
              className="navbar-logo"
              onClick={() => handleNavClick("#home")}
            >
              <span className="logo-text">Sonali</span>
              <span className="logo-dot"></span>
            </button>

            {/* DESKTOP NAVIGATION */}
            <div className="navbar-links">
              {navItems.map((item) => {
                const isActive =
                  activeSection === item.link.substring(1);

                return (
                  <button
                    key={item.name}
                    className={`navbar-link ${
                      isActive ? "active" : ""
                    }`}
                    onClick={() => handleNavClick(item.link)}
                  >
                    <span className="link-text">
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ACTION BUTTONS */}
            <div className="navbar-actions">
              <button
                className="hire-btn"
                onClick={() => handleNavClick("#contact")}
              >
                Let's Talk
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                className={`menu-button ${
                  menuOpen ? "active" : ""
                }`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>

          {/* MOBILE NAVIGATION */}
          <div
            className={`mobile-menu ${
              menuOpen ? "open" : ""
            }`}
          >
            <div className="mobile-menu-inner">
              {navItems.map((item, idx) => (
                <button
                  key={item.name}
                  className={`mobile-link ${
                    activeSection === item.link.substring(1)
                      ? "mobile-active"
                      : ""
                  }`}
                  style={{ "--item-index": idx }}
                  onClick={() => handleNavClick(item.link)}
                >
                  <span className="mobile-link-name">
                    {item.name}
                  </span>

                  <span className="arrow-wrap">
                    <span className="arrow">→</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* NAVBAR STYLES */}
      <style>{`

        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;
          padding: 18px 0;
          transition: all 0.4s ease;
        }

        .navbar-wrapper.scrolled {
          padding: 10px 0;
        }

        .navbar {
          width: min(1200px, 92%);
          margin: 0 auto;
          background: rgba(10, 14, 20, 0.65);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5);
          transition: all 0.35s ease;
        }

        .navbar-wrapper.scrolled .navbar {
          background: rgba(8, 11, 16, 0.90);
          border-color: rgba(141,244,180,0.18);
          box-shadow: 0 15px 35px -10px rgba(0,0,0,0.6);
        }

        .navbar-container {
          min-height: 60px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        /* LOGO */

        .navbar-logo {
          border: none;
          outline: none;
          background: transparent;
          cursor: pointer;
          font-size: 22px;
          font-weight: 800;
          color: #f1f5f9;
          display: flex;
          align-items: center;
          gap: 3px;
          letter-spacing: -0.5px;
          flex-shrink: 0;
        }

        .logo-dot {
          width: 7px;
          height: 7px;
          background: #8df4b4;
          border-radius: 50%;
          box-shadow: 0 0 10px #8df4b4;
          animation: pulseDot 2.2s infinite ease-in-out;
        }

        @keyframes pulseDot {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }

          50% {
            transform: scale(1.35);
            opacity: 0.7;
          }
        }

        /* DESKTOP NAV LINKS */

        .navbar-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: transparent;
          padding: 0;
          border: none;
          border-radius: 0;
          flex: 1;
        }

        .navbar-link {
          position: relative;
          border: none;
          background: transparent;
          color: #94a3b8;
          font-size: 13.5px;
          font-weight: 500;
          padding: 9px 11px;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .navbar-link:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.04);
        }

        .navbar-link.active {
          color: #8df4b4;
          background: rgba(141,244,180,0.08);
        }

        /* UNDERLINE REMOVED - COLORS UNCHANGED */

        .navbar-link.active::after {
          content: none;
          display: none;
        }

        /* ACTION BUTTONS */

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .hire-btn {
          border: 1px solid rgba(141,244,180,0.4);
          background: rgba(141,244,180,0.08);
          color: #8df4b4;
          font-size: 13px;
          font-weight: 600;
          padding: 9px 17px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .hire-btn:hover {
          background: #8df4b4;
          color: #080c10;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -4px rgba(141,244,180,0.4);
        }

        /* MOBILE MENU BUTTON */

        .menu-button {
          display: none;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          cursor: pointer;
          position: relative;
          padding: 0;
        }

        .menu-button span {
          position: absolute;
          left: 10px;
          width: 20px;
          height: 2px;
          background: #8df4b4;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .menu-button span:nth-child(1) {
          top: 13px;
        }

        .menu-button span:nth-child(2) {
          top: 19px;
        }

        .menu-button span:nth-child(3) {
          top: 25px;
        }

        .menu-button.active span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .menu-button.active span:nth-child(2) {
          opacity: 0;
        }

        .menu-button.active span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        /* MOBILE DRAWER */

        .mobile-menu {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          border-top: 1px solid transparent;
        }

        .mobile-menu.open {
          max-height: 450px;
          opacity: 1;
          border-top-color: rgba(255,255,255,0.06);
        }

        .mobile-menu-inner {
          padding: 12px 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mobile-link {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          border: none;
          background: rgba(255,255,255,0.02);
          border-radius: 10px;
          color: #94a3b8;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          opacity: 0;
          transform: translateX(-10px);
        }

        .mobile-menu.open .mobile-link {
          opacity: 1;
          transform: translateX(0);
          transition:
            opacity 0.3s ease calc(var(--item-index) * 45ms),
            transform 0.3s ease calc(var(--item-index) * 45ms);
        }

        .mobile-link:hover,
        .mobile-link.mobile-active {
          background: rgba(141,244,180,0.08);
          color: #8df4b4;
        }

        .arrow-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .mobile-link:hover .arrow-wrap {
          transform: translateX(4px);
        }

        /* RESPONSIVE */

        @media (max-width: 1050px) {
          .navbar-links {
            gap: 2px;
          }

          .navbar-link {
            padding: 9px 7px;
            font-size: 12px;
          }
        }

        @media (max-width: 860px) {
          .navbar-links {
            display: none;
          }

          .menu-button {
            display: block;
          }

          .hire-btn {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            width: 94%;
          }

          .navbar-container {
            padding: 0 14px;
          }

          .navbar-wrapper {
            padding: 12px 0;
          }
        }

      `}</style>
    </>
  );
};

export default Navbar;
