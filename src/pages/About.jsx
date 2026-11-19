import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Award, 
  Lightbulb, 
  Users, 
  HeartHandshake, 
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Cpu,
  Layers,
  Code2,
  Sparkles,
  MapPin,
  Clock,
  Zap,
  Lock,
  GitBranch
} from "lucide-react";
import Button from "../components/Button";
import CTA from "../components/CTA";
import { useInView } from "../hooks/useInView";

export default function About() {
  const [activeStoryTab, setActiveStoryTab] = useState("solution");
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1 });
  const [diffRef, diffInView] = useInView({ threshold: 0.1 });
  const [processRef, processInView] = useInView({ threshold: 0.1 });

  const metrics = [
    { value: "100%", label: "IP Ownership Handover", desc: "You own all code, tokens & assets" },
    { value: "0", label: "Junior Bait-and-Switch", desc: "100% senior specialist execution" },
    { value: "< 1s", label: "Target Largest Contentful Paint", desc: "Verified performance benchmarks" },
    { value: "99.9%", label: "Architecture SLA Standards", desc: "Resilient enterprise systems" }
  ];

  const values = [
    {
      number: "01",
      icon: Target,
      title: "Radical Intentionality",
      description: "We never add a decorative element, a JavaScript dependency, or a backend service without a clear architectural justification and measurable business benefit."
    },
    {
      number: "02",
      icon: ShieldCheck,
      title: "Uncompromising Integrity",
      description: "We quote transparently, transfer 100% of the intellectual property to our clients, and provide honest technical counsel—even when that means advising against an unnecessary build."
    },
    {
      number: "03",
      icon: Lightbulb,
      title: "Disciplined Innovation",
      description: "We balance cutting-edge technologies like React 19 and distributed microservices with battle-tested security benchmarks, ISO-ready standards, and long-term architectural stability."
    },
    {
      number: "04",
      icon: HeartHandshake,
      title: "True Technical Partnership",
      description: "We do not operate as disconnected vendors. We embed as strategic collaborators who care deeply about your user acquisition, system uptime, and enduring market authority."
    }
  ];

  const comparisonData = [
    {
      criterion: "Code Quality & Foundations",
      conventional: "Bloated off-the-shelf templates, heavy plugins, fragile styling dependencies",
      dzavo: "Bespoke component architecture, semantic HTML5, zero unnecessary runtime bloat"
    },
    {
      criterion: "Team Composition",
      conventional: "Senior directors pitch the contract, then delegate execution to junior trainees",
      dzavo: "The senior specialists you consult with are the exact practitioners writing your code"
    },
    {
      criterion: "IP Rights & Handover",
      conventional: "Proprietary locks, held credentials, recurring maintenance ransom agreements",
      dzavo: "100% unencumbered IP transfer, complete Git repositories, and documentation on delivery"
    },
    {
      criterion: "Performance & Accessibility",
      conventional: "Unmeasured performance, high bounce rates, and basic WCAG non-compliance",
      dzavo: "Sub-second LCP benchmark guarantees, WCAG AA standards, and rigorous Lighthouse audits"
    },
    {
      criterion: "Client Communication",
      conventional: "Filtered through multiple account coordinators with days of delay",
      dzavo: "Direct, transparent dialogue with senior architects and immediate turnaround"
    }
  ];

  const lifecycleStages = [
    {
      step: "01",
      title: "Architectural Blueprint",
      icon: Layers,
      desc: "Deep requirements discovery, tech stack evaluation, and system topology definition before a single line of code is committed."
    },
    {
      step: "02",
      title: "Precision UI/UX Systems",
      icon: Sparkles,
      desc: "Atomic Figma components, tokenized design variables, and interactive click-through prototypes validated for cognitive flow."
    },
    {
      step: "03",
      title: "Modular Engineering",
      icon: Code2,
      desc: "Clean component implementation, strict TypeScript/Java validation, automated unit testing, and continuous integration."
    },
    {
      step: "04",
      title: "Verification & Full Handover",
      icon: GitBranch,
      desc: "Cross-device stress testing, Core Web Vitals audit, deployment pipelines, and total repository and credential handover."
    }
  ];

  return (
    <div style={{ overflow: "hidden" }}>
      {/* 1. Page Hero Section */}
      <section 
        ref={heroRef}
        className="section-hero section-dark bg-grid-pattern-dark" 
        style={{ 
          borderBottom: "1px solid var(--color-navy-border)",
          position: "relative",
          paddingTop: "clamp(5rem, 8vw, 7.5rem)",
          paddingBottom: "clamp(4.5rem, 7vw, 6.5rem)"
        }}
      >
        {/* Subtle Ambient Radial Lighting */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(circle, rgba(49, 91, 232, 0.22) 0%, rgba(16, 27, 53, 0) 70%)",
            pointerEvents: "none",
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
            
            {/* Live Status Badge */}
            <div 
              className={`animate-fade-in-up ${heroInView ? "" : ""}`}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.65rem", marginBottom: "1.25rem" }}
            >
              <div 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.35rem 0.95rem",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(49, 91, 232, 0.16)",
                  border: "1px solid rgba(49, 91, 232, 0.35)",
                  color: "#93C5FD",
                  fontSize: "0.825rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase"
                }}
              >
                <span className="status-dot-pulse" />
                Engineering Studio • Chennai, Tamil Nadu, India
              </div>
            </div>

            <h1 
              className="animate-fade-in-up delay-100"
              style={{ 
                marginTop: "0.5rem", 
                marginBottom: "1.5rem", 
                color: "#FFFFFF",
                fontSize: "clamp(2.4rem, 4.8vw, 4rem)",
                lineHeight: 1.15
              }}
            >
              Architecting Digital Experiences Built for{" "}
              <span className="gradient-text-light">Endurance</span>.
            </h1>

            <p 
              className="lead animate-fade-in-up delay-200" 
              style={{ color: "var(--color-light-muted)", maxWidth: "760px", margin: "0 auto 2.5rem", fontSize: "1.15rem", lineHeight: 1.7 }}
            >
              DZAVO Technology was founded on a simple conviction: ambitious enterprises deserve digital products crafted with the precision of high architecture, reliable technical rigor, and the soul of genuine human design.
            </p>

            <div 
              className="animate-fade-in-up delay-300"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}
            >
              <Button to="/services" variant="primary" size="lg" icon={ArrowRight}>
                Explore Our Capabilities
              </Button>
              <Button to="/contact" variant="outline-white" size="lg" icon={ArrowUpRight}>
                Start a Conversation
              </Button>
            </div>
          </div>

          {/* Quick Metrics Ribbon */}
          <div 
            className="animate-fade-in-up delay-400"
            style={{
              marginTop: "4.5rem",
              padding: "2rem",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "rgba(20, 34, 68, 0.65)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(49, 91, 232, 0.25)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem"
            }}
          >
            {metrics.map((m, idx) => (
              <div key={idx} style={{ textAlign: "center", borderRight: idx < metrics.length - 1 ? "1px solid rgba(255, 255, 255, 0.08)" : "none" }}>
                <span style={{ display: "block", fontSize: "clamp(2rem, 3vw, 2.5rem)", fontWeight: 800, color: "#FFFFFF", fontFamily: "var(--font-heading)", letterSpacing: "-0.02em" }}>
                  {m.value}
                </span>
                <span style={{ display: "block", fontSize: "0.925rem", fontWeight: 700, color: "#93C5FD", marginTop: "0.25rem", marginBottom: "0.2rem" }}>
                  {m.label}
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--color-light-muted)" }}>
                  {m.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Interactive Narrative: Our Story & Philosophy */}
      <section className="section section-white">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: "780px", margin: "0 auto 3.5rem" }}>
            <span className="section-eyebrow">Our Story &amp; Philosophy</span>
            <h2 className="section-title">From Industry Frustration to Creative Agency</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              We founded DZAVO Technology to counter the prevailing shortcut culture in modern web development.
            </p>
          </div>

          <div className="grid-2" style={{ alignItems: "center", gap: "4.5rem" }}>
            <div>
              {/* Interactive Narrative Tabs */}
              <div 
                style={{ 
                  display: "flex", 
                  gap: "0.5rem", 
                  backgroundColor: "var(--color-surface-subtle)", 
                  padding: "0.35rem", 
                  borderRadius: "var(--radius-full)",
                  marginBottom: "2rem",
                  width: "fit-content"
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveStoryTab("problem")}
                  className={`btn btn-sm ${activeStoryTab === "problem" ? "btn-secondary" : "btn-text"}`}
                  style={{ borderRadius: "var(--radius-full)", padding: "0.45rem 1.15rem", border: "none" }}
                >
                  The Industry Problem
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStoryTab("solution")}
                  className={`btn btn-sm ${activeStoryTab === "solution" ? "btn-secondary" : "btn-text"}`}
                  style={{ borderRadius: "var(--radius-full)", padding: "0.45rem 1.15rem", border: "none" }}
                >
                  The DZAVO Standard
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStoryTab("outcome")}
                  className={`btn btn-sm ${activeStoryTab === "outcome" ? "btn-secondary" : "btn-text"}`}
                  style={{ borderRadius: "var(--radius-full)", padding: "0.45rem 1.15rem", border: "none" }}
                >
                  Enterprise Impact
                </button>
              </div>

              {activeStoryTab === "problem" && (
                <div className="animate-fade-in">
                  <h3 style={{ fontSize: "1.45rem", marginBottom: "1rem", color: "var(--color-primary-navy)" }}>
                    The Proliferation of Disposable Templates
                  </h3>
                  <p style={{ marginBottom: "1.25rem", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    Over the past decade, web development became commoditized. Cookie-cutter website builders, bloated theme marketplaces, and shallow AI generators flooded the web with fragile products that all look identical, load sluggishly, and break under enterprise traffic.
                  </p>
                  <p style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
                    Clients were left trapped in maintenance contracts with proprietary tools, while senior agency leadership vanished the minute the initial contract was signed.
                  </p>
                </div>
              )}

              {activeStoryTab === "solution" && (
                <div className="animate-fade-in">
                  <h3 style={{ fontSize: "1.45rem", marginBottom: "1rem", color: "var(--color-primary-navy)" }}>
                    A Unified Discipline of Craft &amp; Engineering
                  </h3>
                  <p style={{ marginBottom: "1.25rem", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    DZAVO Technology was built to restore engineering rigor and design intentionality to digital agency engagements. By combining senior software architects, typographic purists, and brand strategists under one unified discipline, we engineer software as enduring architecture.
                  </p>
                  <p style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
                    We write modular, semantic code. We design with design tokens and atomic consistency. Every digital surface we deliver is built to stand the test of time.
                  </p>
                </div>
              )}

              {activeStoryTab === "outcome" && (
                <div className="animate-fade-in">
                  <h3 style={{ fontSize: "1.45rem", marginBottom: "1rem", color: "var(--color-primary-navy)" }}>
                    Enduring Authority for Leading Brands
                  </h3>
                  <p style={{ marginBottom: "1.25rem", fontSize: "1.05rem", lineHeight: 1.7 }}>
                    Today, we partner with healthcare innovators, algorithmic fintech firms, venture capital practices, and forward-looking enterprises globally from our engineering studio in Chennai, India.
                  </p>
                  <p style={{ fontSize: "1.05rem", lineHeight: 1.7 }}>
                    Our clients enjoy lightning-fast load times, flawless responsiveness across every device breakpoint, and total codebase ownership upon completion.
                  </p>
                </div>
              )}

              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                <Button to="/services" variant="primary" icon={ArrowRight}>
                  Explore Our Services
                </Button>
                <Button to="/contact" variant="outline">
                  Talk to an Architect
                </Button>
              </div>
            </div>

            {/* Visual Media Showcase with Floating Animated Card */}
            <div style={{ position: "relative" }}>
              <div
                style={{
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  border: "1px solid var(--color-border-subtle)",
                  boxShadow: "var(--shadow-elevated)",
                  position: "relative"
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="DZAVO Technology collaborative engineering session"
                  style={{ width: "100%", height: "440px", objectFit: "cover", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(16, 27, 53, 0.1) 0%, rgba(16, 27, 53, 0.75) 100%)",
                    pointerEvents: "none"
                  }}
                />
                
                <div
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "1.5rem",
                    right: "1.5rem",
                    color: "#FFFFFF"
                  }}
                >
                  <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#93C5FD", fontWeight: 700, display: "block", marginBottom: "0.25rem" }}>
                    The DZAVO Engineering Ethos
                  </span>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.5 }}>
                    Senior engineering and design specialists collaborating directly on complex architectural challenges.
                  </p>
                </div>
              </div>

              {/* Floating Animated Achievement Card */}
              <div
                className="animate-float"
                style={{
                  position: "absolute",
                  top: "-1.5rem",
                  right: "-1.5rem",
                  backgroundColor: "rgba(255, 255, 255, 0.94)",
                  backdropFilter: "blur(12px)",
                  padding: "1.25rem 1.5rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border-subtle)",
                  boxShadow: "var(--shadow-elevated)",
                  maxWidth: "280px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-royal-blue-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-royal-blue)" }}>
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-secondary-text)", display: "block" }}>
                      Quality Guarantee
                    </span>
                    <strong style={{ fontSize: "0.9rem", color: "var(--color-primary-navy)" }}>
                      100% Unencumbered IP
                    </strong>
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: "0.78rem", color: "var(--color-secondary-text)", lineHeight: 1.4 }}>
                  Complete Git repository, documentation &amp; design token transfer upon delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Purpose: Mission & Vision (Dual Interactive Cards) */}
      <section className="section section-light" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: "760px", margin: "0 auto 3.5rem" }}>
            <span className="section-eyebrow">Guiding Light</span>
            <h2 className="section-title">Driven by Mission. Defined by Vision.</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Clear objectives and uncompromising benchmarks define our trajectory as a premier digital engineering practice.
            </p>
          </div>

          <div className="grid-2">
            {/* Mission Card */}
            <div 
              className="card hover-lift glow-on-hover" 
              style={{ 
                padding: "clamp(2rem, 3.5vw, 3.25rem)", 
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border-subtle)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div 
                style={{ 
                  position: "absolute", 
                  top: 0, 
                  left: 0, 
                  width: "100%", 
                  height: "4px", 
                  background: "linear-gradient(90deg, #315BE8 0%, #60A5FA 100%)" 
                }} 
              />
              
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "54px", height: "54px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-royal-blue-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-royal-blue)" }}>
                  <Target size={28} />
                </div>
                <div>
                  <span className="badge badge-royal" style={{ marginBottom: "0.25rem" }}>Core Purpose</span>
                  <h3 style={{ fontSize: "1.5rem", color: "var(--color-primary-navy)", margin: 0 }}>Our Mission</h3>
                </div>
              </div>

              <h4 style={{ fontSize: "1.25rem", lineHeight: 1.4, color: "var(--color-primary-navy)", marginBottom: "1rem" }}>
                To engineer digital experiences that establish lasting enterprise authority.
              </h4>

              <p style={{ lineHeight: 1.7, color: "var(--color-secondary-text)", marginBottom: "1.75rem" }}>
                Our mission is to help ambitious businesses convert complex ideas into resilient web platforms, accessible software, and iconic visual collateral. We remove technological friction, eliminate bloat, and provide a lasting competitive advantage.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--color-royal-blue)" }} />
                  <span>Sub-second load times engineered from the database to the DOM</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--color-royal-blue)" }} />
                  <span>Accessible WCAG AA visual design that broadens audience reach</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--color-royal-blue)" }} />
                  <span>Resilient Spring Boot &amp; modern React application architecture</span>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div 
              className="card hover-lift glow-on-hover" 
              style={{ 
                padding: "clamp(2rem, 3.5vw, 3.25rem)", 
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border-subtle)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div 
                style={{ 
                  position: "absolute", 
                  top: 0, 
                  left: 0, 
                  width: "100%", 
                  height: "4px", 
                  background: "linear-gradient(90deg, #10B981 0%, #34D399 100%)" 
                }} 
              />

              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ width: "54px", height: "54px", borderRadius: "var(--radius-sm)", backgroundColor: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981" }}>
                  <Compass size={28} />
                </div>
                <div>
                  <span className="badge badge-success" style={{ marginBottom: "0.25rem" }}>Long-term Trajectory</span>
                  <h3 style={{ fontSize: "1.5rem", color: "var(--color-primary-navy)", margin: 0 }}>Our Vision</h3>
                </div>
              </div>

              <h4 style={{ fontSize: "1.25rem", lineHeight: 1.4, color: "var(--color-primary-navy)", marginBottom: "1rem" }}>
                To define the global benchmark for thoughtful digital craftsmanship.
              </h4>

              <p style={{ lineHeight: 1.7, color: "var(--color-secondary-text)", marginBottom: "1.75rem" }}>
                We envision a digital landscape liberated from disposable templates and hollow aesthetics. We strive to be the international engineering partner of choice for technology leaders who refuse to compromise on design elegance, accessibility, and architectural longevity.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                  <CheckCircle2 size={16} style={{ color: "#10B981" }} />
                  <span>Elimination of proprietary agency lock-in for enterprise clients</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                  <CheckCircle2 size={16} style={{ color: "#10B981" }} />
                  <span>Setting the standard for human-first technical collaboration</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                  <CheckCircle2 size={16} style={{ color: "#10B981" }} />
                  <span>Empowering sustainable growth with transparent technical roadmaps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The 4 Non-Negotiable Core Values (Architectural Numbered Cards) */}
      <section ref={valuesRef} className="section section-white">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: "760px", margin: "0 auto 3.5rem" }}>
            <span className="section-eyebrow">Pillars of Craft</span>
            <h2 className="section-title">The Four Non-Negotiable Principles</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              These foundational standards dictate every pull request we merge, every layout we architect, and every client relationship we foster.
            </p>
          </div>

          <div className="grid-2">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx} 
                  className="card hover-lift glow-on-hover" 
                  style={{ 
                    padding: "2.5rem",
                    backgroundColor: "var(--color-surface-card)",
                    border: "1px solid var(--color-border-subtle)",
                    position: "relative"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
                    <div 
                      style={{ 
                        width: "52px", 
                        height: "52px", 
                        borderRadius: "var(--radius-sm)", 
                        backgroundColor: "var(--color-royal-blue-subtle)", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        color: "var(--color-royal-blue)", 
                        flexShrink: 0 
                      }}
                    >
                      <Icon size={26} />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                        <h3 style={{ fontSize: "1.35rem", color: "var(--color-primary-navy)", margin: 0 }}>
                          {val.title}
                        </h3>
                        <span 
                          style={{ 
                            fontFamily: "var(--font-heading)", 
                            fontSize: "1.5rem", 
                            fontWeight: 800, 
                            color: "rgba(49, 91, 232, 0.2)",
                            letterSpacing: "-0.04em" 
                          }}
                        >
                          {val.number}
                        </span>
                      </div>
                      <p style={{ fontSize: "1rem", lineHeight: 1.68, color: "var(--color-secondary-text)", margin: 0 }}>
                        {val.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. "The DZAVO Difference" — Enterprise Comparison Matrix */}
      <section ref={diffRef} className="section section-dark bg-grid-pattern-dark">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: "780px", margin: "0 auto 3.5rem" }}>
            <span className="section-eyebrow">Rethinking Agency Models</span>
            <h2 className="section-title">The DZAVO Difference</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              See how our engineering-first studio model delivers greater velocity, superior transparency, and enduring technical value compared to traditional digital agencies.
            </p>
          </div>

          <div 
            style={{
              backgroundColor: "rgba(20, 34, 68, 0.75)",
              backdropFilter: "blur(14px)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid rgba(49, 91, 232, 0.3)",
              overflow: "hidden",
              boxShadow: "var(--shadow-elevated)"
            }}
          >
            {/* Table Header */}
            <div 
              className="comparison-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1.4fr 1.4fr",
                padding: "1.25rem 2rem",
                backgroundColor: "rgba(10, 19, 41, 0.8)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}
            >
              <div style={{ color: "var(--color-light-muted)" }}>Engagement Dimension</div>
              <div style={{ color: "#EF4444", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <XCircle size={16} /> Conventional Agency Model
              </div>
              <div style={{ color: "#60A5FA", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <CheckCircle2 size={16} /> The DZAVO Engineering Model
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="comparison-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1.4fr 1.4fr",
                  padding: "1.5rem 2rem",
                  borderBottom: idx < comparisonData.length - 1 ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
                  backgroundColor: idx % 2 === 0 ? "transparent" : "rgba(255, 255, 255, 0.02)",
                  alignItems: "center",
                  fontSize: "0.95rem"
                }}
              >
                <div style={{ fontWeight: 700, color: "#FFFFFF" }}>
                  {row.criterion}
                </div>
                <div style={{ color: "var(--color-light-muted)", paddingRight: "1rem" }}>
                  {row.conventional}
                </div>
                <div style={{ color: "#FFFFFF", fontWeight: 500, display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                  <CheckCircle2 size={18} style={{ color: "#3B82F6", flexShrink: 0, marginTop: "2px" }} />
                  <span>{row.dzavo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Studio Methodology: 4-Phase Architecture Lifecycle */}
      <section ref={processRef} className="section section-white">
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: "760px", margin: "0 auto 3.5rem" }}>
            <span className="section-eyebrow">Our Methodology</span>
            <h2 className="section-title">The Four-Stage Architecture Lifecycle</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              How we take projects from strategic concept to production deployment with predictable velocity and zero surprises.
            </p>
          </div>

          <div className="grid-4">
            {lifecycleStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div
                  key={idx}
                  className="card hover-lift glow-on-hover"
                  style={{
                    padding: "2rem 1.75rem",
                    backgroundColor: "var(--color-surface-card)",
                    border: "1px solid var(--color-border-subtle)",
                    position: "relative"
                  }}
                >
                  <div 
                    style={{ 
                      fontSize: "2rem", 
                      fontFamily: "var(--font-heading)", 
                      fontWeight: 800, 
                      color: "rgba(49, 91, 232, 0.25)",
                      marginBottom: "1rem" 
                    }}
                  >
                    {stage.step}
                  </div>

                  <div 
                    style={{ 
                      width: "44px", 
                      height: "44px", 
                      borderRadius: "var(--radius-sm)", 
                      backgroundColor: "var(--color-royal-blue-subtle)", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      color: "var(--color-royal-blue)",
                      marginBottom: "1.25rem" 
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", color: "var(--color-primary-navy)" }}>
                    {stage.title}
                  </h3>

                  <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--color-secondary-text)", margin: 0 }}>
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Studio Location & Global Remote Delivery */}
      <section className="section section-light" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
        <div className="container">
          <div 
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              padding: "clamp(2rem, 4vw, 3.5rem)",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--color-white)",
              border: "1px solid var(--color-border-subtle)",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center"
            }}
            className="grid-2"
          >
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span className="badge badge-royal">
                  Headquarters &amp; Global Hub
                </span>
              </div>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "var(--color-primary-navy)" }}>
                Anchored in Chennai, India. Collaborating Worldwide.
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--color-secondary-text)", marginBottom: "1.5rem" }}>
                Our central studio operates from <strong>Chennai, Tamil Nadu, India</strong>, while our distributed architecture model enables synchronous collaboration with technology leaders across North America, Europe, the Middle East, and Asia-Pacific.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.925rem" }}>
                  <MapPin size={18} style={{ color: "var(--color-royal-blue)", flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, color: "var(--color-primary-navy)" }}>Chennai, Tamil Nadu, India</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.925rem" }}>
                  <Clock size={18} style={{ color: "var(--color-royal-blue)", flexShrink: 0 }} />
                  <span style={{ color: "var(--color-main-text)" }}>Consultation Hours: 09:00 – 18:00 IST / UTC+5:30</span>
                </div>
              </div>
            </div>

            <div 
              style={{
                backgroundColor: "var(--color-surface-subtle)",
                borderRadius: "var(--radius-md)",
                padding: "2rem",
                border: "1px solid var(--color-border-subtle)"
              }}
            >
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "var(--color-primary-navy)" }}>
                Global Collaboration Standards
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", padding: 0, margin: 0 }}>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.9rem" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--color-royal-blue)", marginTop: "3px", flexShrink: 0 }} />
                  <span>Asynchronous &amp; synchronous sprint reporting via Slack &amp; Loom</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.9rem" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--color-royal-blue)", marginTop: "3px", flexShrink: 0 }} />
                  <span>Weekly staging preview deployments with live review links</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.9rem" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--color-royal-blue)", marginTop: "3px", flexShrink: 0 }} />
                  <span>Standardized ISO and GDPR compliant data confidentiality</span>
                </li>
              </ul>
              
              <div style={{ marginTop: "1.5rem" }}>
                <Button to="/contact" variant="primary" fullWidth icon={ArrowUpRight}>
                  Schedule an Initial Briefing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Global CTA */}
      <CTA
        title="Ready to Build Digital Experiences That Endure?"
        description="Connect with our technical architects in Chennai to discuss how DZAVO Technology can elevate your product authority."
        primaryButtonText="Start a Conversation"
        primaryButtonTo="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonTo="/services"
      />
    </div>
  );
}
