import React from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck 
} from "lucide-react";
import Logo from "./Logo";
import { services } from "../data/services";
import { LinkedinIcon, GithubIcon, TwitterIcon, DribbbleIcon } from "./SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Start a Conversation", path: "/contact" }
  ];

  return (
    <footer
      style={{
        backgroundColor: "#FFFFFF",
        color: "#101B35",
        borderTop: "1px solid #E5E7EB",
        position: "relative",
        zIndex: 10
      }}
    >
      <div className="container" style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
        {/* Main Footer Grid */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1.2fr 1fr",
            gap: "3.5rem",
            marginBottom: "4rem"
          }}
        >
          {/* Column 1: Brand & Tagline */}
          <div>
            <div style={{ marginBottom: "1.25rem" }}>
              <Logo variant="light" size="normal" />
            </div>
            <p
              style={{
                color: "#737D90",
                fontSize: "0.95rem",
                lineHeight: "1.65",
                marginBottom: "1.5rem",
                maxWidth: "340px"
              }}
            >
              Turning Ideas Into Digital Experiences. We partner with ambitious enterprises and emerging innovators to engineer durable web platforms, accessible software, and distinctive brand identities.
            </p>

            {/* Social Icons in Navy/Royal Blue */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              {[
                { icon: LinkedinIcon, label: "DZAVO on LinkedIn", url: "https://linkedin.com" },
                { icon: GithubIcon, label: "DZAVO on GitHub", url: "https://github.com" },
                { icon: TwitterIcon, label: "DZAVO on X / Twitter", url: "https://twitter.com" },
                { icon: DribbbleIcon, label: "DZAVO on Dribbble", url: "https://dribbble.com" }
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "var(--radius-xs)",
                      backgroundColor: "#F5F7FA",
                      border: "1px solid #E5E7EB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#101B35",
                      transition: "all var(--transition-fast)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#315BE8";
                      e.currentTarget.style.borderColor = "#315BE8";
                      e.currentTarget.style.color = "#FFFFFF";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#F5F7FA";
                      e.currentTarget.style.borderColor = "#E5E7EB";
                      e.currentTarget.style.color = "#101B35";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.95rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#101B35",
                marginBottom: "1.5rem"
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", padding: 0, margin: 0 }}>
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    style={{
                      color: "#315BE8",
                      fontSize: "0.925rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      transition: "all var(--transition-fast)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#1E40AF";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#315BE8";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Digital Capabilities & Services */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.95rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#101B35",
                marginBottom: "1.5rem"
              }}
            >
              Capabilities
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", padding: 0, margin: 0 }}>
              {services.map((svc) => (
                <li key={svc.id}>
                  <Link
                    to={`/services/${svc.slug}`}
                    style={{
                      color: "#315BE8",
                      fontSize: "0.925rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      transition: "all var(--transition-fast)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#1E40AF";
                      e.currentTarget.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#315BE8";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Inquiries & Office */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.95rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "#101B35",
                marginBottom: "1.5rem"
              }}
            >
              Direct Inquiries
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <Mail size={18} style={{ color: "#315BE8", marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: "0.775rem", color: "#737D90", textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>General &amp; Press</span>
                  <a
                    href="mailto:dilliprasath1225@gmail.com"
                    style={{
                      margin: 0,
                      color: "#101B35",
                      fontSize: "0.925rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#315BE8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#101B35")}
                  >
                    dilliprasath1225@gmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <Phone size={18} style={{ color: "#315BE8", marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: "0.775rem", color: "#737D90", textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>Phone / WhatsApp</span>
                  <a
                    href="tel:+918610140943"
                    style={{
                      margin: 0,
                      color: "#101B35",
                      fontSize: "0.925rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#315BE8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#101B35")}
                  >
                    +91 8610140943
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <MapPin size={18} style={{ color: "#315BE8", marginTop: "3px", flexShrink: 0 }} />
                <div>
                  <span style={{ fontSize: "0.775rem", color: "#737D90", textTransform: "uppercase", letterSpacing: "0.06em", display: "block" }}>Location</span>
                  <p style={{ margin: 0, color: "#101B35", fontSize: "0.925rem", fontWeight: 600 }}>Chennai, Tamil Nadu, India</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.35rem" }}>
                <ShieldCheck size={16} style={{ color: "#10B981" }} />
                <span style={{ fontSize: "0.8rem", color: "#737D90" }}>
                  Enterprise Confidentiality Assured
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar with Light Grey Divider */}
        <div
          className="footer-bottom"
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid #E5E7EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            fontSize: "0.85rem",
            color: "#737D90"
          }}
        >
          <div>
            © {currentYear} DZAVO Technology. All rights reserved. Registered trademark.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <Link
              to="/privacy"
              style={{ color: "#737D90", textDecoration: "none", transition: "color var(--transition-fast)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#315BE8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#737D90")}
            >
              Privacy Policy
            </Link>
            <span style={{ color: "#D1D5DB" }}>•</span>
            <Link
              to="/terms"
              style={{ color: "#737D90", textDecoration: "none", transition: "color var(--transition-fast)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#315BE8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#737D90")}
            >
              Terms of Engagement
            </Link>
            <span style={{ color: "#D1D5DB" }}>•</span>
            <Link
              to="/admin"
              style={{ color: "#9CA3AF", textDecoration: "none", fontSize: "0.8rem", transition: "color var(--transition-fast)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#315BE8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
