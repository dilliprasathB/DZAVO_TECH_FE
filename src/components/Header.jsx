import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll detection for sticky glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        transition: "all var(--transition-normal)",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid var(--color-border-subtle)",
        boxShadow: isScrolled ? "0 4px 16px -2px rgba(16, 27, 53, 0.08)" : "0 1px 3px rgba(16, 27, 53, 0.04)"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: isScrolled ? "var(--header-height-scrolled)" : "var(--header-height)",
          transition: "height var(--transition-normal)"
        }}
      >
        {/* Typographic Logo */}
        <Logo variant="light" size="normal" />

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          style={{
            display: "none",
            alignItems: "center",
            gap: "1.75rem"
          }}
          className="desktop-nav-container"
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              style={({ isActive }) => ({
                fontFamily: "var(--font-heading)",
                fontSize: "0.925rem",
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "var(--color-royal-blue)" : "var(--color-main-text)",
                position: "relative",
                padding: "0.4rem 0",
                transition: "color var(--transition-fast)"
              })}
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: "var(--color-royal-blue)",
                        borderRadius: "2px"
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Header Actions: Let's Talk CTA & Mobile Hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div className="desktop-cta-btn" style={{ display: "none" }}>
            <Button to="/contact" variant="primary" size="sm" icon={ArrowUpRight}>
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="mobile-nav-toggle"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--color-border-subtle)",
              backgroundColor: "var(--color-white)",
              color: "var(--color-primary-navy)",
              cursor: "pointer",
              transition: "all var(--transition-fast)"
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer / Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            top: isScrolled ? "var(--header-height-scrolled)" : "var(--header-height)",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(16, 27, 53, 0.45)",
            backdropFilter: "blur(4px)",
            zIndex: 999,
            display: "flex",
            justifyContent: "flex-end"
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "340px",
              height: "100%",
              backgroundColor: "var(--color-white)",
              padding: "2rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "var(--shadow-elevated)",
              overflowY: "auto"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ paddingBottom: "1rem", borderBottom: "1px solid var(--color-border-subtle)" }}>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-secondary-text)"
                  }}
                >
                  Navigation Menu
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", marginTop: "0.75rem", gap: "0.4rem" }}>
                {navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/"}
                    style={({ isActive }) => ({
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.75rem 0.85rem",
                      borderRadius: "var(--radius-sm)",
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.05rem",
                      fontWeight: isActive ? 700 : 500,
                      backgroundColor: isActive ? "var(--color-royal-blue-subtle)" : "transparent",
                      color: isActive ? "var(--color-royal-blue)" : "var(--color-main-text)",
                      textDecoration: "none"
                    })}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight size={16} opacity={0.6} />
                  </NavLink>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--color-border-subtle)" }}>
              <Button to="/contact" variant="primary" fullWidth icon={ArrowUpRight}>
                Start a Conversation
              </Button>
              <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <a
                  href="mailto:dilliprasath1225@gmail.com"
                  style={{
                    fontSize: "0.825rem",
                    color: "var(--color-secondary-text)",
                    textDecoration: "none"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-royal-blue)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-secondary-text)")}
                >
                  dilliprasath1225@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inline styles for desktop media queries */}
      <style>{`
        @media (min-width: 901px) {
          .desktop-nav-container {
            display: flex !important;
          }
          .desktop-cta-btn {
            display: block !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

