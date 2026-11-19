import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Code2, 
  ShieldCheck, 
  Users,
  Palette,
  Cpu,
  Zap,
  Sparkles,
  Layers
} from "lucide-react";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";
import { services } from "../data/services";
import { useInView } from "../hooks/useInView";

export default function Home() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const coreServices = services.slice(0, 3);

  // Scroll animation triggers
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [diffRef, diffInView] = useInView({ threshold: 0.1 });
  const [approachRef, approachInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });

  return (
    <div style={{ overflow: "hidden" }}>
      {/* 1. HERO SECTION WITH FULL-WIDTH VIDEO BACKGROUND */}
      <section
        ref={heroRef}
        className="section-hero"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#0A1329",
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "clamp(580px, 80vh, 760px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "clamp(5rem, 8vw, 7.5rem)",
          paddingBottom: "clamp(4.5rem, 7vw, 6.5rem)"
        }}
      >
        {/* Full-width Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
            pointerEvents: "none",
            opacity: isVideoLoaded ? 1 : 0.85,
            transition: "opacity 1.2s ease"
          }}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-digital-world-5244/1080p.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-network-connection-lines-in-cyberspace-31908-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Navy Transparent Overlay for maximum text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(10, 19, 41, 0.84) 0%, rgba(16, 27, 53, 0.90) 50%, rgba(10, 19, 41, 0.95) 100%)",
            zIndex: 2,
            pointerEvents: "none"
          }}
        />

        {/* Ambient Subtle Radial Glow Effect */}
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "450px",
            background: "radial-gradient(circle, rgba(49, 91, 232, 0.28) 0%, rgba(16, 27, 53, 0) 70%)",
            pointerEvents: "none",
            zIndex: 2
          }}
        />

        {/* Subtle geometric dot ambient pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.12) 1.2px, transparent 1.2px)",
            backgroundSize: "32px 32px",
            opacity: 0.5,
            zIndex: 2,
            pointerEvents: "none"
          }}
        />

        {/* Hero Centered Content */}
        <div className="container" style={{ position: "relative", zIndex: 3, width: "100%" }}>
          <div
            style={{
              maxWidth: "920px",
              margin: "0 auto",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            {/* Centered Dual Badges / Labels */}
            <div
              className={`animate-fade-in-up`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "0.6rem",
                marginBottom: "1.75rem"
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#E2E8F0",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  borderRadius: "var(--radius-full)",
                  padding: "0.35rem 0.9rem"
                }}
              >
                DZAVO TECHNOLOGY
              </span>
              <span
                className="badge badge-royal"
                style={{
                  fontSize: "0.75rem",
                  padding: "0.35rem 0.85rem",
                  letterSpacing: "0.06em",
                  boxShadow: "0 2px 10px rgba(49, 91, 232, 0.4)"
                }}
              >
                ENTERPRISE DIGITAL ENGINEERING
              </span>
            </div>

            {/* Centered Main Heading with Gradient Lighting Accent */}
            <h1
              className={`animate-fade-in-up delay-150`}
              style={{
                fontSize: "clamp(2.75rem, 5.2vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.12,
                color: "#FFFFFF",
                marginBottom: "1.5rem",
                letterSpacing: "-0.035em",
                textShadow: "0 2px 20px rgba(0, 0, 0, 0.4)"
              }}
            >
              Digital, Thoughtfully Built<span style={{ color: "var(--color-royal-blue)" }}>.</span>
            </h1>

            {/* Centered Description */}
            <p
              className={`lead animate-fade-in-up delay-200`}
              style={{
                marginBottom: "2.25rem",
                maxWidth: "740px",
                color: "#CBD5E1",
                lineHeight: 1.7,
                fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                textAlign: "center"
              }}
            >
              We help ambitious businesses turn ideas into useful digital experiences through design, technology and creative collaboration.
            </p>

            {/* Centered Action Buttons with Hover Polish */}
            <div
              className={`btn-group-responsive animate-fade-in-up delay-250`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "1.25rem",
                marginBottom: "3rem"
              }}
            >
              <Button to="/services" variant="primary" size="lg" icon={ArrowRight} className="hover-lift">
                Explore Our Services
              </Button>
              <Button
                to="/contact"
                variant="outline-white"
                size="lg"
                icon={ArrowUpRight}
                className="hover-lift"
                style={{
                  border: "1.5px solid rgba(255, 255, 255, 0.45)",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(6px)"
                }}
              >
                Start a Conversation
              </Button>
            </div>

            {/* Hero Interactive Proof Ribbon */}
            <div
              className={`animate-fade-in-up delay-300`}
              style={{
                width: "100%",
                maxWidth: "960px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                gap: "1rem"
              }}
            >
              {[
                { icon: ShieldCheck, label: "100% Client Ownership", sub: "Complete IP & code handover" },
                { icon: Zap, label: "Sub-Second LCP", sub: "Enterprise performance benchmarks" },
                { icon: Users, label: "Senior Practitioners", sub: "Direct architect collaboration" },
                { icon: Sparkles, label: "Enterprise Scale", sub: "Worldwide digital deployment" }
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card-dark hover-lift"
                    style={{
                      padding: "1rem 1.2rem",
                      borderRadius: "var(--radius-md)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.85rem",
                      textAlign: "left",
                      transition: "all 0.3s ease"
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "rgba(49, 91, 232, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#93C5FD",
                        flexShrink: 0
                      }}
                    >
                      <ItemIcon size={18} />
                    </div>
                    <div>
                      <div style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "-0.01em", lineHeight: 1.25 }}>
                        {item.label}
                      </div>
                      <div style={{ color: "#94A3B8", fontSize: "0.75rem", marginTop: "2px", lineHeight: 1.3 }}>
                        {item.sub}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT MAKES DZAVO DIFFERENT SECTION */}
      <section
        ref={diffRef}
        style={{
          backgroundColor: "#F8FAFC",
          borderBottom: "1px solid var(--color-border-subtle)",
          paddingTop: "clamp(4.5rem, 7vw, 6rem)",
          paddingBottom: "clamp(4.5rem, 7vw, 6rem)"
        }}
      >
        <div className="container">
          {/* Section Header */}
          <div 
            className={`section-header text-center ${diffInView ? "animate-fade-in-up" : ""}`} 
            style={{ maxWidth: "760px", margin: "0 auto clamp(2.5rem, 4vw, 3.5rem)" }}
          >
            <span className="section-eyebrow">Core Principles</span>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 3.2vw, 2.75rem)" }}>
              What Makes DZAVO Different?
            </h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              We eliminate technical pretension and arbitrary complexity, focusing instead on purposeful design, calibrated technology, and genuine transparency.
            </p>
          </div>

          {/* 3 Distinctive Content Blocks with Staggered Entrance & Interactive Lift */}
          <div className="grid-3" style={{ alignItems: "stretch" }}>
            {/* Block 1: Design with Purpose */}
            <div
              className={`card hover-lift glow-on-hover ${diffInView ? "animate-fade-in-up delay-100" : ""}`}
              style={{
                padding: "2.5rem 2.25rem",
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "0 2px 10px -2px rgba(16, 27, 53, 0.04), 0 1px 3px rgba(16, 27, 53, 0.02)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                position: "relative"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--color-royal-blue-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-royal-blue)"
                  }}
                >
                  <Palette size={24} />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    color: "var(--color-royal-blue)",
                    letterSpacing: "0.08em"
                  }}
                >
                  01 / PURPOSE
                </span>
              </div>

              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.85rem" }}>
                Design with Purpose
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-secondary-text)", lineHeight: 1.65, margin: "0 0 1.5rem 0", flexGrow: 1 }}>
                Every interface has a clear reason and user-focused direction. We eliminate decorative clutter to deliver intuitive, goal-oriented digital products that elevate your brand.
              </p>

              <div style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--color-border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-primary-navy)", fontWeight: 600 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--color-royal-blue)" }} />
                  <span>Intentional user flows &amp; clear utility</span>
                </div>
              </div>
            </div>

            {/* Block 2: Technology with Direction */}
            <div
              className={`card hover-lift glow-on-hover ${diffInView ? "animate-fade-in-up delay-200" : ""}`}
              style={{
                padding: "2.5rem 2.25rem",
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "0 2px 10px -2px rgba(16, 27, 53, 0.04), 0 1px 3px rgba(16, 27, 53, 0.02)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                position: "relative"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#10B981"
                  }}
                >
                  <Cpu size={24} />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    color: "#10B981",
                    letterSpacing: "0.08em"
                  }}
                >
                  02 / DIRECTION
                </span>
              </div>

              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.85rem" }}>
                Technology with Direction
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-secondary-text)", lineHeight: 1.65, margin: "0 0 1.5rem 0", flexGrow: 1 }}>
                We choose technology based on the actual project requirements. Modern frameworks, modular architectures, and scalable foundations designed to grow alongside your business.
              </p>

              <div style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--color-border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-primary-navy)", fontWeight: 600 }}>
                  <CheckCircle2 size={16} style={{ color: "#10B981" }} />
                  <span>Right-sized, maintainable architectures</span>
                </div>
              </div>
            </div>

            {/* Block 3: Collaboration with Clarity */}
            <div
              className={`card hover-lift glow-on-hover ${diffInView ? "animate-fade-in-up delay-300" : ""}`}
              style={{
                padding: "2.5rem 2.25rem",
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "0 2px 10px -2px rgba(16, 27, 53, 0.04), 0 1px 3px rgba(16, 27, 53, 0.02)",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                position: "relative"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "rgba(16, 27, 53, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-primary-navy)"
                  }}
                >
                  <Users size={24} />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    color: "var(--color-primary-navy)",
                    letterSpacing: "0.08em"
                  }}
                >
                  03 / CLARITY
                </span>
              </div>

              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.85rem" }}>
                Collaboration with Clarity
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-secondary-text)", lineHeight: 1.65, margin: "0 0 1.5rem 0", flexGrow: 1 }}>
                Keep communication transparent throughout the project. Direct dialogue with senior specialists, honest scopes, and predictable milestones without confusing agency jargon or bureaucratic delay.
              </p>

              <div style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--color-border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-primary-navy)", fontWeight: 600 }}>
                  <CheckCircle2 size={16} style={{ color: "var(--color-royal-blue)" }} />
                  <span>Direct senior specialist communication</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BEYOND DIGITAL. BUILT FOR GROWTH. — THE DZAVO APPROACH */}
      <section
        ref={approachRef}
        className="section section-white"
        style={{
          borderBottom: "1px solid var(--color-border-subtle)",
          paddingTop: "clamp(4.5rem, 7vw, 6.5rem)",
          paddingBottom: "clamp(4.5rem, 7vw, 6.5rem)"
        }}
      >
        <div className="container">
          {/* Main Section Header — The DZAVO Approach */}
          <div
            className={`${approachInView ? "animate-fade-in-up" : ""}`}
            style={{
              maxWidth: "860px",
              margin: "0 auto clamp(3rem, 5vw, 4rem)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
              <span className="section-eyebrow" style={{ margin: 0 }}>
                THE DZAVO APPROACH
              </span>
            </div>

            <h2
              style={{
                fontSize: "clamp(2.1rem, 3.8vw, 3.2rem)",
                fontWeight: 800,
                lineHeight: 1.18,
                color: "var(--color-primary-navy)",
                marginBottom: "1.5rem",
                letterSpacing: "-0.035em",
                textAlign: "center"
              }}
            >
              We Don't Just Build Websites. We Build Digital Experiences.
            </h2>

            <p
              className="lead"
              style={{
                fontSize: "clamp(1.1rem, 1.8vw, 1.25rem)",
                color: "var(--color-secondary-text)",
                lineHeight: 1.72,
                maxWidth: "760px",
                margin: "0 auto",
                textAlign: "center"
              }}
            >
              Every business has a different vision. We combine thoughtful design, reliable technology and creative problem-solving to turn that vision into meaningful digital solutions.
            </p>
          </div>

          {/* Three Horizontally Arranged Feature Areas with Staggered Entrance */}
          <div
            className="grid-3"
            style={{
              alignItems: "stretch"
            }}
          >
            {/* Feature 01 — Thoughtful Design */}
            <div
              className={`hover-lift glow-on-hover ${approachInView ? "animate-fade-in-up delay-100" : ""}`}
              style={{
                padding: "2.5rem 2rem",
                backgroundColor: "var(--color-light-bg)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border-subtle)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Subtle top accent gradient line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, var(--color-royal-blue), #60A5FA)"
                }}
              />

              <div
                style={{
                  fontSize: "1.75rem",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  color: "var(--color-royal-blue)",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.02em"
                }}
              >
                01
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "1.25rem" }}>
                Thoughtful Design
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.95rem", color: "var(--color-main-text)" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--color-royal-blue)", marginTop: "2px", flexShrink: 0 }} />
                  <span>User-focused experiences.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.95rem", color: "var(--color-main-text)" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--color-royal-blue)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Clean and intuitive interfaces.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.95rem", color: "var(--color-main-text)" }}>
                  <CheckCircle2 size={18} style={{ color: "var(--color-royal-blue)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Consistent visual identity.</span>
                </li>
              </ul>
            </div>

            {/* Feature 02 — Smart Engineering */}
            <div
              className={`hover-lift glow-on-hover ${approachInView ? "animate-fade-in-up delay-200" : ""}`}
              style={{
                padding: "2.5rem 2rem",
                backgroundColor: "var(--color-light-bg)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border-subtle)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Subtle top accent gradient line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #10B981, #34D399)"
                }}
              />

              <div
                style={{
                  fontSize: "1.75rem",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  color: "#10B981",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.02em"
                }}
              >
                02
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "1.25rem" }}>
                Smart Engineering
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.95rem", color: "var(--color-main-text)" }}>
                  <CheckCircle2 size={18} style={{ color: "#10B981", marginTop: "2px", flexShrink: 0 }} />
                  <span>Modern development practices.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.95rem", color: "var(--color-main-text)" }}>
                  <CheckCircle2 size={18} style={{ color: "#10B981", marginTop: "2px", flexShrink: 0 }} />
                  <span>Scalable digital solutions.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.95rem", color: "var(--color-main-text)" }}>
                  <CheckCircle2 size={18} style={{ color: "#10B981", marginTop: "2px", flexShrink: 0 }} />
                  <span>Reliable architecture.</span>
                </li>
              </ul>
            </div>

            {/* Feature 03 — Creative Thinking */}
            <div
              className={`hover-lift glow-on-hover ${approachInView ? "animate-fade-in-up delay-300" : ""}`}
              style={{
                padding: "2.5rem 2rem",
                backgroundColor: "var(--color-light-bg)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--color-border-subtle)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
              }}
            >
              {/* Subtle top accent gradient line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #F59E0B, #FBBF24)"
                }}
              />

              <div
                style={{
                  fontSize: "1.75rem",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  color: "#F59E0B",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.02em"
                }}
              >
                03
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "1.25rem" }}>
                Creative Thinking
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.95rem", color: "var(--color-main-text)" }}>
                  <CheckCircle2 size={18} style={{ color: "#F59E0B", marginTop: "2px", flexShrink: 0 }} />
                  <span>Solutions built around business needs.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.95rem", color: "var(--color-main-text)" }}>
                  <CheckCircle2 size={18} style={{ color: "#F59E0B", marginTop: "2px", flexShrink: 0 }} />
                  <span>Fresh ideas and practical execution.</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem", fontSize: "0.95rem", color: "var(--color-main-text)" }}>
                  <CheckCircle2 size={18} style={{ color: "#F59E0B", marginTop: "2px", flexShrink: 0 }} />
                  <span>Continuous improvement.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section ref={servicesRef} className="section section-light">
        <div className="container">
          <div 
            className={`section-header ${servicesInView ? "animate-fade-in-up" : ""}`} 
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}
          >
            <div>
              <span className="section-eyebrow">
                Core Capabilities
              </span>
              <h2 className="section-title">
                End-to-End Digital Solutions
              </h2>
              <p className="section-desc">
                From responsive web applications and bespoke software to brand identity and strategic acquisition pipelines.
              </p>
            </div>

            <Button to="/services" variant="outline" icon={ArrowRight} className="hover-lift">
              View All Services
            </Button>
          </div>

          <div className="grid-3">
            {coreServices.map((service, idx) => (
              <div 
                key={service.id} 
                className={`${servicesInView ? `animate-fade-in-up delay-${(idx + 1) * 100}` : ""}`}
                style={{ height: "100%" }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE DZAVO TECHNOLOGY */}
      <section ref={whyRef} className="section section-white">
        <div className="container">
          <div className={`section-header text-center ${whyInView ? "animate-fade-in-up" : ""}`}>
            <span className="section-eyebrow">
              Why DZAVO Technology
            </span>
            <h2 className="section-title">
              Built on Discipline, Transparency &amp; Results
            </h2>
            <p className="section-desc" style={{ marginLeft: "auto", marginRight: "auto" }}>
              We eliminate agency friction by pairing you directly with experienced builders who care about your bottom line.
            </p>
          </div>

          <div className="grid-3">
            {/* Card 1: 100% Client Ownership */}
            <div 
              className={`card hover-lift glow-on-hover ${whyInView ? "animate-fade-in-up delay-100" : ""}`}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%"
              }}
            >
              <div>
                <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-royal-blue-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-royal-blue)", marginBottom: "1.5rem" }}>
                  <ShieldCheck size={24} />
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>100% Client Ownership</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
                  No proprietary lock-in. You retain complete intellectual property and source code ownership from day one, with complete documentation.
                </p>
              </div>
              <div style={{ marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid var(--color-border-subtle)", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-primary-navy)", fontWeight: 600 }}>
                <CheckCircle2 size={16} style={{ color: "var(--color-royal-blue)" }} />
                <span>Zero lock-in • Complete source repositories</span>
              </div>
            </div>

            {/* Card 2: Performance First */}
            <div 
              className={`card hover-lift glow-on-hover ${whyInView ? "animate-fade-in-up delay-200" : ""}`}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%"
              }}
            >
              <div>
                <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-royal-blue-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-royal-blue)", marginBottom: "1.5rem" }}>
                  <Code2 size={24} />
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Performance First</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
                  Every site and platform is audited for sub-second Core Web Vitals, accessible semantic HTML5, and strict security compliance.
                </p>
              </div>
              <div style={{ marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid var(--color-border-subtle)", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-primary-navy)", fontWeight: 600 }}>
                <CheckCircle2 size={16} style={{ color: "var(--color-royal-blue)" }} />
                <span>Sub-second LCP • WCAG AA compliance</span>
              </div>
            </div>

            {/* Card 3: Senior Partner Access */}
            <div 
              className={`card hover-lift glow-on-hover ${whyInView ? "animate-fade-in-up delay-300" : ""}`}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%"
              }}
            >
              <div>
                <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-royal-blue-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-royal-blue)", marginBottom: "1.5rem" }}>
                  <Users size={24} />
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>Senior Partner Access</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
                  No layers of junior account executives. You collaborate directly with senior architects and creative directors throughout your project lifecycle.
                </p>
              </div>
              <div style={{ marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid var(--color-border-subtle)", display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-primary-navy)", fontWeight: 600 }}>
                <CheckCircle2 size={16} style={{ color: "var(--color-royal-blue)" }} />
                <span>Direct architect access • Rapid turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT CTA */}
      <CTA
        title="Ready to Build Something Exceptional?"
        description="Whether you need a bespoke corporate web presence, a complex software engine, or a distinctive brand identity, let's schedule an initial discussion."
        primaryButtonText="Start a Conversation"
        primaryButtonTo="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonTo="/services"
      />
    </div>
  );
}
