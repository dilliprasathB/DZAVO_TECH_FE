import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Filter,
  Search,
  Sparkles,
  Cpu,
  Palette,
  Video,
  TrendingUp,
  Cloud,
  Check,
  ShieldCheck,
  Zap,
  Layout,
  Terminal,
  Database,
  GitBranch
} from "lucide-react";
import Button from "../components/Button";
import CTA from "../components/CTA";
import { services } from "../data/services";
import { useInView } from "../hooks/useInView";

// Tech stack mappings for each service discipline
const SERVICE_TECH_STACK = {
  "website-design-development": ["React 19", "Next.js", "TypeScript", "Headless CMS", "Core Web Vitals", "Edge CDN"],
  "ui-ux-design": ["Figma Systems", "Design Tokens", "Atomic UI", "WCAG 2.1 AA", "Interactive Prototyping"],
  "software-development": ["Java 21", "Spring Boot 3", "RESTful APIs", "PostgreSQL", "Clean Architecture", "Docker"],
  "branding-graphic-design": ["Vector Systems", "Typography Suites", "Brand Token Guides", "SVG / EPS Master Kits"],
  "video-editing-motion": ["4K Master Direction", "Motion Graphics", "Lottie Web Loops", "Audio Engineering"],
  "digital-marketing": ["Technical SEO", "GA4 Attribution", "Semantic Structured Data", "CRO Funnels"],
  "other-digital-solutions": ["Docker / K8s", "AWS / GCP Infrastructure", "Terraform IaC", "CI/CD Pipelines", "API Gateways"]
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCardTabs, setActiveCardTabs] = useState({});
  const navigate = useNavigate();

  const [heroRef, heroInView] = useInView({ threshold: 0.1 });

  const handleRequestService = (serviceSlug) => {
    navigate(`/contact?service=${encodeURIComponent(serviceSlug)}`);
  };

  const toggleCardTab = (serviceId, tabName) => {
    setActiveCardTabs((prev) => ({
      ...prev,
      [serviceId]: tabName
    }));
  };

  // Filter logic
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      // Category match
      let matchesCategory = true;
      if (activeCategory === "flagship") {
        matchesCategory = service.popular;
      } else if (activeCategory === "web-ui") {
        matchesCategory = ["web-dev", "ui-ux"].includes(service.id);
      } else if (activeCategory === "software-cloud") {
        matchesCategory = ["software-dev", "other-solutions"].includes(service.id);
      } else if (activeCategory === "brand-media") {
        matchesCategory = ["branding", "video-editing", "marketing"].includes(service.id);
      }

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        service.title.toLowerCase().includes(query) ||
        service.shortDescription.toLowerCase().includes(query) ||
        service.fullDescription.toLowerCase().includes(query) ||
        service.features.some((f) => f.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Interactive Architecture Layers Explorer
  const [selectedArchLayer, setSelectedArchLayer] = useState("frontend");

  const archLayers = {
    frontend: {
      title: "Client Interfaces & Interaction Layer",
      icon: Layout,
      subtitle: "High-performance reactive frontends engineered with precision typography and micro-interactions.",
      points: [
        "React 19 with modular component architecture and sub-second Largest Contentful Paint (LCP)",
        "Zero-runtime accessibility adherence (WCAG 2.1 AA) and fluid clamp-based responsive systems",
        "Semantic HTML5 structure and Schema.org structured data for organic search dominance",
        "Edge-rendered routing, dynamic lazy-loading, and instant navigation transitions"
      ],
      tags: ["React 19", "Next.js", "TypeScript", "Vite", "Tailwind / Vanilla CSS", "WCAG AA"]
    },
    backend: {
      title: "Enterprise Backend & API Engine",
      icon: Terminal,
      subtitle: "Robust Java 21 and Spring Boot 3 enterprise services built for throughput and security.",
      points: [
        "Spring Boot 3 RESTful microservices with Jakarta Bean Validation and rate-limiting filters",
        "Dual-stack networking, secure CORS whitelisting, and strict payload sanitization",
        "TLS 1.2/1.3 authenticated SMTP email delivery pipelines and transactional integrations",
        "OpenAPI / Swagger live documentation and automated integration test suites"
      ],
      tags: ["Java 21 LTS", "Spring Boot 3", "Jakarta Validation", "Spring Mail", "PostgreSQL", "REST APIs"]
    },
    cloud: {
      title: "Cloud Infrastructure & DevOps",
      icon: Cloud,
      subtitle: "Cloud-native, containerized environments designed for high availability and zero downtime.",
      points: [
        "Docker multi-stage containerization producing lightweight, production-hardened images",
        "Automated GitHub Actions CI/CD pipelines with automated test runs before deployment",
        "Cloud hosting (AWS, GCP, Vercel, Railway) with automated SSL/TLS certificate rotation",
        "Real-time health telemetry, exception alerting, and automated failover capabilities"
      ],
      tags: ["Docker", "Kubernetes", "AWS / GCP", "Terraform", "GitHub Actions", "SSL / TLS 1.3"]
    },
    design: {
      title: "Design Systems & Token Governance",
      icon: Palette,
      subtitle: "Scalable, multi-platform design tokens ensuring 100% brand fidelity across all screens.",
      points: [
        "Figma atomic component kits mapped directly to CSS custom properties and design tokens",
        "Consistent typography pairing (Manrope & DM Sans) optimized for high enterprise legibility",
        "Systematic color contrasts, dark-canvas accents, and crisp architectural elevation shadows",
        "Design-to-code parity that eliminates friction between creative design and engineering teams"
      ],
      tags: ["Figma Systems", "Design Tokens", "Atomic UI", "WCAG 2.1", "Responsive Grids"]
    }
  };

  return (
    <div style={{ overflow: "hidden" }}>
      {/* 1. Services Hero Header */}
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
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            background: "radial-gradient(circle, rgba(49, 91, 232, 0.2) 0%, rgba(16, 27, 53, 0) 70%)",
            pointerEvents: "none",
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <div style={{ maxWidth: "880px", margin: "0 auto" }}>
            
            {/* Eyebrow Pill */}
            <div className="animate-fade-in-up" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>
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
                Capabilities &amp; Specializations • 7 Core Disciplines
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
              Technical Rigor. Aesthetic{" "}
              <span className="gradient-text-light">Distinction</span>.
            </h1>

            <p 
              className="lead animate-fade-in-up delay-200" 
              style={{ color: "var(--color-light-muted)", maxWidth: "760px", margin: "0 auto 2.5rem", fontSize: "1.15rem", lineHeight: 1.7 }}
            >
              We deliver integrated digital solutions across seven specialized disciplines. Every project is scoped with bespoke architectural deliverables, verified performance standards, and complete source code ownership.
            </p>

            <div 
              className="animate-fade-in-up delay-300"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}
            >
              <Button to="/contact" variant="primary" size="lg" icon={ArrowUpRight}>
                Request a Consultation
              </Button>
              <Button to="/about" variant="outline-white" size="lg" icon={ArrowRight}>
                Our Engineering Standard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter & Search Controls Bar */}
      <section className="section section-light" style={{ paddingBottom: "2rem" }}>
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: "760px", margin: "0 auto 2.5rem" }}>
            <span className="section-eyebrow">Enterprise Directory</span>
            <h2 className="section-title">Explore Specialized Disciplines</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Filter by capability area or search for specific technical deliverables below.
            </p>
          </div>

          {/* Controls Bar with Category Pills & Search */}
          <div
            className="card"
            style={{
              padding: "1.25rem 1.75rem",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--color-white)",
              border: "1px solid var(--color-border-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.25rem",
              marginBottom: "3rem",
              boxShadow: "var(--shadow-card)"
            }}
          >
            {/* Filter Pills */}
            <div 
              className="filter-pills-container"
              style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}
            >
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`filter-pill ${activeCategory === "all" ? "active" : ""}`}
              >
                All Capabilities ({services.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("flagship")}
                className={`filter-pill ${activeCategory === "flagship" ? "active" : ""}`}
              >
                Flagships
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("web-ui")}
                className={`filter-pill ${activeCategory === "web-ui" ? "active" : ""}`}
              >
                Web &amp; UI/UX
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("software-cloud")}
                className={`filter-pill ${activeCategory === "software-cloud" ? "active" : ""}`}
              >
                Software &amp; Cloud
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("brand-media")}
                className={`filter-pill ${activeCategory === "brand-media" ? "active" : ""}`}
              >
                Brand &amp; Media
              </button>
            </div>

            {/* Quick Search Input */}
            <div style={{ position: "relative", minWidth: "260px", flex: "1 1 240px", maxWidth: "340px" }}>
              <Search 
                size={16} 
                style={{ 
                  position: "absolute", 
                  left: "1rem", 
                  top: "50%", 
                  transform: "translateY(-50%)", 
                  color: "var(--color-muted-text)",
                  pointerEvents: "none" 
                }} 
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search capabilities (e.g. React, API, Cloud)..."
                className="form-input"
                style={{
                  paddingLeft: "2.6rem",
                  paddingRight: searchQuery ? "2.2rem" : "1rem",
                  paddingTop: "0.55rem",
                  paddingBottom: "0.55rem",
                  fontSize: "0.875rem",
                  borderRadius: "var(--radius-full)"
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  style={{
                    position: "absolute",
                    right: "0.75rem",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "var(--color-secondary-text)",
                    cursor: "pointer",
                    fontSize: "0.9rem"
                  }}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Active Result Count */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", padding: "0 0.5rem" }}>
            <span style={{ fontSize: "0.9rem", color: "var(--color-secondary-text)" }}>
              Showing <strong>{filteredServices.length}</strong> {filteredServices.length === 1 ? "discipline" : "disciplines"} matching criteria
            </span>
            {(activeCategory !== "all" || searchQuery) && (
              <button
                type="button"
                onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                className="btn-text"
                style={{ fontSize: "0.85rem" }}
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Detailed Editorial Service Blocks */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {filteredServices.length === 0 ? (
              <div 
                className="card text-center"
                style={{ padding: "4rem 2rem", backgroundColor: "var(--color-white)" }}
              >
                <div 
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-surface-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                    color: "var(--color-secondary-text)"
                  }}
                >
                  <Search size={24} />
                </div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem", color: "var(--color-primary-navy)" }}>
                  No Matching Disciplines Found
                </h3>
                <p style={{ color: "var(--color-secondary-text)", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
                  We couldn't find any capabilities matching "{searchQuery}". Try clearing your search query or reset the category filters.
                </p>
                <Button 
                  variant="primary" 
                  onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                >
                  View All Capabilities
                </Button>
              </div>
            ) : (
              filteredServices.map((service, index) => {
                const isEven = index % 2 === 0;
                const activeTab = activeCardTabs[service.id] || "deliverables";
                const techTags = SERVICE_TECH_STACK[service.slug] || ["Enterprise Tested", "Full IP Transfer", "SLA Standard"];

                return (
                  <div
                    key={service.id}
                    id={service.slug}
                    className="card hover-lift glow-on-hover"
                    style={{
                      padding: "clamp(2rem, 3.5vw, 3.5rem)",
                      backgroundColor: "var(--color-white)",
                      borderRadius: "var(--radius-lg)",
                      border: "1px solid var(--color-border-subtle)",
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: isEven ? "1.15fr 1fr" : "1fr 1.15fr",
                        gap: "3.5rem",
                        alignItems: "center"
                      }}
                      className="grid-2"
                    >
                      {/* Visual Media Showcase */}
                      <div style={{ order: isEven ? 1 : 2 }}>
                        <div
                          style={{
                            position: "relative",
                            borderRadius: "var(--radius-md)",
                            overflow: "hidden",
                            border: "1px solid var(--color-border-subtle)",
                            boxShadow: "var(--shadow-card)",
                            maxHeight: "400px"
                          }}
                        >
                          <img
                            src={service.heroImage}
                            alt={service.title}
                            loading="lazy"
                            style={{
                              width: "100%",
                              height: "380px",
                              objectFit: "cover",
                              display: "block",
                              transition: "transform 0.5s ease"
                            }}
                          />
                          
                          {/* Discipline Number Overlay Pill */}
                          <div
                            style={{
                              position: "absolute",
                              top: "14px",
                              left: "14px",
                              backgroundColor: "rgba(16, 27, 53, 0.88)",
                              backdropFilter: "blur(6px)",
                              padding: "0.35rem 0.85rem",
                              borderRadius: "var(--radius-full)",
                              color: "#FFFFFF",
                              fontSize: "0.78rem",
                              fontWeight: 700,
                              letterSpacing: "0.06em",
                              textTransform: "uppercase",
                              border: "1px solid rgba(255, 255, 255, 0.15)"
                            }}
                          >
                            Discipline 0{index + 1}
                          </div>

                          {/* Bottom Tech Overlay Pill */}
                          <div
                            style={{
                              position: "absolute",
                              bottom: "14px",
                              left: "14px",
                              right: "14px",
                              backgroundColor: "rgba(16, 27, 53, 0.88)",
                              backdropFilter: "blur(8px)",
                              padding: "0.6rem 1rem",
                              borderRadius: "var(--radius-sm)",
                              color: "#FFFFFF",
                              fontSize: "0.825rem",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              border: "1px solid rgba(255, 255, 255, 0.15)"
                            }}
                          >
                            <span style={{ fontWeight: 600 }}>Delivery Standard</span>
                            <span style={{ color: "#93C5FD", fontWeight: 700 }}>100% IP Transfer</span>
                          </div>
                        </div>
                      </div>

                      {/* Content Details */}
                      <div style={{ order: isEven ? 2 : 1 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.85rem" }}>
                          <span className="badge badge-royal">
                            Enterprise Solution
                          </span>
                          {service.popular && (
                            <span className="badge badge-success">
                              Core Flagship
                            </span>
                          )}
                        </div>

                        <h2 style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)", marginBottom: "1rem", color: "var(--color-primary-navy)" }}>
                          <Link 
                            to={`/services/${service.slug}`} 
                            style={{ color: "var(--color-primary-navy)", textDecoration: "none" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-royal-blue)")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-primary-navy)")}
                          >
                            {service.title}
                          </Link>
                        </h2>

                        <p style={{ fontSize: "1.05rem", lineHeight: 1.68, color: "var(--color-secondary-text)", marginBottom: "1.5rem" }}>
                          {service.fullDescription}
                        </p>

                        {/* Interactive Scope / Features Tab Toggle */}
                        <div style={{ marginBottom: "1.75rem" }}>
                          <div 
                            style={{ 
                              display: "flex", 
                              alignItems: "center", 
                              gap: "0.5rem", 
                              borderBottom: "1px solid var(--color-border-subtle)",
                              paddingBottom: "0.5rem",
                              marginBottom: "1rem"
                            }}
                          >
                            <button
                              type="button"
                              onClick={() => toggleCardTab(service.id, "deliverables")}
                              style={{
                                background: "none",
                                border: "none",
                                padding: "0.3rem 0.6rem",
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                                color: activeTab === "deliverables" ? "var(--color-royal-blue)" : "var(--color-secondary-text)",
                                borderBottom: activeTab === "deliverables" ? "2px solid var(--color-royal-blue)" : "2px solid transparent",
                                cursor: "pointer",
                                transition: "all 0.2s ease"
                              }}
                            >
                              Included Deliverables
                            </button>
                            <button
                              type="button"
                              onClick={() => toggleCardTab(service.id, "features")}
                              style={{
                                background: "none",
                                border: "none",
                                padding: "0.3rem 0.6rem",
                                fontSize: "0.85rem",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                                color: activeTab === "features" ? "var(--color-royal-blue)" : "var(--color-secondary-text)",
                                borderBottom: activeTab === "features" ? "2px solid var(--color-royal-blue)" : "2px solid transparent",
                                cursor: "pointer",
                                transition: "all 0.2s ease"
                              }}
                            >
                              Technical Capabilities
                            </button>
                          </div>

                          {activeTab === "deliverables" ? (
                            <div className="animate-fade-in" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                              {service.deliverables.slice(0, 4).map((deliv, idx) => (
                                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.45rem", fontSize: "0.88rem" }}>
                                  <CheckCircle2 size={16} style={{ color: "var(--color-royal-blue)", marginTop: "2px", flexShrink: 0 }} />
                                  <span style={{ color: "var(--color-main-text)" }}>{deliv}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="animate-fade-in" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                              {service.features.slice(0, 4).map((feat, idx) => (
                                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.45rem", fontSize: "0.88rem" }}>
                                  <Zap size={16} style={{ color: "#10B981", marginTop: "2px", flexShrink: 0 }} />
                                  <span style={{ color: "var(--color-main-text)" }}>{feat}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Tech Stack Chips */}
                        <div style={{ marginBottom: "2rem" }}>
                          <span style={{ display: "block", fontSize: "0.775rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-secondary-text)", fontWeight: 700, marginBottom: "0.5rem" }}>
                            Core Architecture &amp; Stack
                          </span>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                            {techTags.map((tag, idx) => (
                              <span 
                                key={idx}
                                style={{
                                  fontSize: "0.75rem",
                                  fontWeight: 600,
                                  padding: "0.2rem 0.6rem",
                                  borderRadius: "var(--radius-xs)",
                                  backgroundColor: "var(--color-surface-subtle)",
                                  color: "var(--color-primary-navy)",
                                  border: "1px solid var(--color-border-subtle)"
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                          <Button
                            variant="primary"
                            onClick={() => handleRequestService(service.slug)}
                            icon={ArrowUpRight}
                          >
                            Request This Service
                          </Button>
                          <Button
                            to={`/services/${service.slug}`}
                            variant="outline"
                            icon={ArrowRight}
                          >
                            Deep Dive Specs
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* 3. Interactive Technology & Architecture Matrix */}
      <section className="section section-dark bg-grid-pattern-dark" style={{ borderTop: "1px solid var(--color-navy-border)" }}>
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: "780px", margin: "0 auto 3.5rem" }}>
            <span className="section-eyebrow">Enterprise Stack</span>
            <h2 className="section-title">The Four Architectural Layers</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              How our integrated technology stack ensures speed, security, and scalability across every deployment.
            </p>
          </div>

          {/* Interactive Layer Selector Tabs */}
          <div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(4, 1fr)", 
              gap: "1rem", 
              marginBottom: "2.5rem" 
            }}
            className="grid-4"
          >
            {[
              { id: "frontend", label: "01. Frontend & UI", icon: Layout },
              { id: "backend", label: "02. Backend & APIs", icon: Terminal },
              { id: "cloud", label: "03. Cloud & DevOps", icon: Cloud },
              { id: "design", label: "04. Design Systems", icon: Palette }
            ].map((layer) => {
              const Icon = layer.icon;
              const isActive = selectedArchLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setSelectedArchLayer(layer.id)}
                  className={`card ${isActive ? "card-dark" : ""}`}
                  style={{
                    padding: "1.25rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: isActive ? "rgba(49, 91, 232, 0.22)" : "rgba(20, 34, 68, 0.5)",
                    border: isActive ? "1px solid #315BE8" : "1px solid rgba(255, 255, 255, 0.08)",
                    color: "#FFFFFF",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all var(--transition-normal)",
                    boxShadow: isActive ? "0 4px 20px rgba(49, 91, 232, 0.3)" : "none"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div 
                      style={{ 
                        width: "36px", 
                        height: "36px", 
                        borderRadius: "var(--radius-sm)", 
                        backgroundColor: isActive ? "var(--color-royal-blue)" : "rgba(255, 255, 255, 0.08)",
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        color: "#FFFFFF" 
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <span style={{ fontSize: "0.95rem", fontWeight: 700 }}>{layer.label}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Layer Deep Dive Card */}
          {(() => {
            const current = archLayers[selectedArchLayer];
            const Icon = current.icon;
            return (
              <div
                className="animate-fade-in"
                style={{
                  backgroundColor: "rgba(20, 34, 68, 0.75)",
                  backdropFilter: "blur(14px)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid rgba(49, 91, 232, 0.3)",
                  padding: "clamp(2rem, 4vw, 3.5rem)",
                  boxShadow: "var(--shadow-elevated)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "var(--radius-sm)", backgroundColor: "rgba(49, 91, 232, 0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#93C5FD" }}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.65rem", color: "#FFFFFF", margin: 0 }}>{current.title}</h3>
                    <p style={{ margin: 0, color: "var(--color-light-muted)", fontSize: "0.95rem" }}>{current.subtitle}</p>
                  </div>
                </div>

                <div 
                  style={{ 
                    display: "grid", 
                    gridTemplateColumns: "1.4fr 1fr", 
                    gap: "3rem", 
                    marginTop: "2rem",
                    alignItems: "center" 
                  }}
                  className="grid-2"
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                    {current.points.map((pt, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                        <CheckCircle2 size={18} style={{ color: "#60A5FA", marginTop: "3px", flexShrink: 0 }} />
                        <span style={{ color: "#FFFFFF", fontSize: "0.975rem", lineHeight: 1.6 }}>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div 
                    style={{
                      backgroundColor: "rgba(10, 19, 41, 0.7)",
                      borderRadius: "var(--radius-md)",
                      padding: "2rem",
                      border: "1px solid rgba(255, 255, 255, 0.08)"
                    }}
                  >
                    <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#93C5FD", fontWeight: 700, display: "block", marginBottom: "1rem" }}>
                      Featured Technologies
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                      {current.tags.map((t, idx) => (
                        <span 
                          key={idx}
                          style={{
                            padding: "0.4rem 0.85rem",
                            borderRadius: "var(--radius-full)",
                            backgroundColor: "rgba(49, 91, 232, 0.18)",
                            border: "1px solid rgba(49, 91, 232, 0.4)",
                            color: "#FFFFFF",
                            fontSize: "0.85rem",
                            fontWeight: 600
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* 4. Pricing Policy Transparency Notice (STRICT CORPORATE REQUIREMENT: NO PRICING TIERS) */}
      <section className="section section-white" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: "760px", margin: "0 auto 3rem" }}>
            <span className="section-eyebrow">Transparency</span>
            <h2 className="section-title">Our Quoting &amp; Scope Philosophy</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              We do not offer commodity pricing packages or arbitrary subscription tiers because no two technological architectures are identical. We provide itemized, transparent project estimates based on verified engineering requirements.
            </p>
          </div>

          <div
            className="hover-lift"
            style={{
              maxWidth: "920px",
              margin: "0 auto",
              padding: "clamp(2rem, 3.5vw, 3.5rem)",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--color-surface-subtle)",
              border: "1px solid var(--color-border-subtle)",
              textAlign: "center"
            }}
          >
            <div
              style={{
                display: "inline-flex",
                width: "56px",
                height: "56px",
                borderRadius: "var(--radius-sm)",
                backgroundColor: "var(--color-royal-blue-subtle)",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-royal-blue)",
                marginBottom: "1.5rem"
              }}
            >
              <Code2 size={28} />
            </div>

            <h3 style={{ fontSize: "1.5rem", marginBottom: "0.85rem", color: "var(--color-primary-navy)" }}>
              Custom Architecture, Not Commodity Packages
            </h3>

            <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "var(--color-secondary-text)", maxWidth: "720px", margin: "0 auto 2rem" }}>
              Every engagement begins with an architectural evaluation. We define explicit deliverables, milestone delivery dates, and direct access to senior directors, ensuring total alignment with your business investment.
            </p>

            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(3, 1fr)", 
                gap: "1.5rem", 
                textAlign: "left",
                marginBottom: "2.5rem" 
              }}
              className="grid-3"
            >
              <div style={{ backgroundColor: "var(--color-white)", padding: "1.5rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-royal-blue)", textTransform: "uppercase" }}>Stage 01</span>
                <h4 style={{ fontSize: "1.05rem", marginTop: "0.25rem", marginBottom: "0.4rem", color: "var(--color-primary-navy)" }}>Scope Evaluation</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--color-secondary-text)", margin: 0 }}>Itemized technical breakdown with zero hidden surprises.</p>
              </div>

              <div style={{ backgroundColor: "var(--color-white)", padding: "1.5rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-royal-blue)", textTransform: "uppercase" }}>Stage 02</span>
                <h4 style={{ fontSize: "1.05rem", marginTop: "0.25rem", marginBottom: "0.4rem", color: "var(--color-primary-navy)" }}>Sprint Milestones</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--color-secondary-text)", margin: 0 }}>Structured, sprint-based delivery with weekly staging reviews.</p>
              </div>

              <div style={{ backgroundColor: "var(--color-white)", padding: "1.5rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border-subtle)" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-royal-blue)", textTransform: "uppercase" }}>Stage 03</span>
                <h4 style={{ fontSize: "1.05rem", marginTop: "0.25rem", marginBottom: "0.4rem", color: "var(--color-primary-navy)" }}>Complete Handover</h4>
                <p style={{ fontSize: "0.85rem", color: "var(--color-secondary-text)", margin: 0 }}>100% intellectual property, source code, and token transfer.</p>
              </div>
            </div>

            <Button to="/contact" variant="primary" size="lg" icon={ArrowUpRight}>
              Request a Bespoke Proposal
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Global CTA */}
      <CTA
        title="Have a Specific Service Requirement?"
        description="Share your technical objectives with our team in Chennai to receive a detailed breakdown of architectural deliverables and timeline."
        primaryButtonText="Request a Consultation"
        primaryButtonTo="/contact"
        secondaryButtonText="Learn About DZAVO"
        secondaryButtonTo="/about"
      />
    </div>
  );
}
