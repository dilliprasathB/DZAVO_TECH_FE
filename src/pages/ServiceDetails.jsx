import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Check,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles,
  GitBranch,
  Code2
} from "lucide-react";
import Button from "../components/Button";
import CTA from "../components/CTA";
import { getServiceBySlug, services } from "../data/services";
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

export default function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView({ threshold: 0.1 });

  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="section section-light" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
        <div className="container text-center" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <span className="badge badge-royal" style={{ marginBottom: "1rem" }}>Service Not Found</span>
          <h2 style={{ marginBottom: "1rem", color: "var(--color-primary-navy)" }}>Requested Discipline Unavailable</h2>
          <p style={{ marginBottom: "2rem", color: "var(--color-secondary-text)" }}>
            The service discipline you are looking for does not exist or has been relocated in our capability directory.
          </p>
          <Button to="/services" variant="primary" icon={ArrowLeft} iconPosition="left">
            Back to All Capabilities
          </Button>
        </div>
      </div>
    );
  }

  // Other services for bottom navigation
  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);
  const techTags = SERVICE_TECH_STACK[service.slug] || ["Enterprise Tested", "Full IP Transfer", "SLA Standard"];

  const handleRequestService = () => {
    navigate(`/contact?service=${encodeURIComponent(service.slug)}`);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      {/* 1. Breadcrumbs & Hero Header */}
      <section 
        ref={heroRef}
        className="section-hero section-dark bg-grid-pattern-dark" 
        style={{ 
          borderBottom: "1px solid var(--color-navy-border)",
          position: "relative",
          paddingTop: "clamp(5rem, 8vw, 7rem)",
          paddingBottom: "clamp(4rem, 6vw, 5.5rem)"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "350px",
            background: "radial-gradient(circle, rgba(49, 91, 232, 0.22) 0%, rgba(16, 27, 53, 0) 70%)",
            pointerEvents: "none",
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ marginBottom: "1.75rem" }}>
            <Link
              to="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#93C5FD",
                fontSize: "0.875rem",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#93C5FD")}
            >
              <ArrowLeft size={16} />
              <span>Back to All Capabilities</span>
            </Link>
          </div>

          <div style={{ maxWidth: "900px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.25rem" }}>
              <span className="section-eyebrow">
                Service Specification
              </span>
              {service.popular && (
                <span className="badge badge-success">
                  Core Flagship
                </span>
              )}
            </div>

            <h1 
              className="animate-fade-in-up"
              style={{ 
                fontSize: "clamp(2.4rem, 4.4vw, 3.8rem)", 
                marginTop: "0.5rem", 
                marginBottom: "1.25rem",
                color: "#FFFFFF",
                lineHeight: 1.15
              }}
            >
              {service.title}
            </h1>

            <p 
              className="lead animate-fade-in-up delay-100" 
              style={{ color: "var(--color-light-muted)", marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.7 }}
            >
              {service.shortDescription}
            </p>

            {/* Tech Tags Ribbon */}
            <div className="animate-fade-in-up delay-200" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
              {techTags.map((tag, idx) => (
                <span 
                  key={idx}
                  style={{
                    padding: "0.35rem 0.8rem",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "rgba(49, 91, 232, 0.18)",
                    border: "1px solid rgba(49, 91, 232, 0.4)",
                    color: "#FFFFFF",
                    fontSize: "0.8rem",
                    fontWeight: 600
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div 
              className="animate-fade-in-up delay-300"
              style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={handleRequestService}
                icon={ArrowUpRight}
              >
                Request This Service
              </Button>
              <Button
                to="/contact"
                variant="outline-white"
                size="lg"
              >
                Discuss Scope &amp; Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full Overview & Hero Media */}
      <section className="section section-white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: "center", gap: "4.5rem" }}>
            <div>
              <span className="section-eyebrow">Detailed Overview</span>
              <h2 className="section-title">Engineered for Scalability &amp; Commercial Impact.</h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "1.5rem", color: "var(--color-main-text)" }}>
                {service.fullDescription}
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "var(--color-secondary-text)", marginBottom: "2rem" }}>
                At DZAVO Technology, we bridge the gap between creative visual elegance and rock-solid system architecture. When you engage our team for {service.title.toLowerCase()}, you work directly with experienced senior practitioners who guarantee 100% full source code and intellectual property transfer.
              </p>

              <div 
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.25rem",
                  padding: "1.5rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-surface-subtle)",
                  border: "1px solid var(--color-border-subtle)"
                }}
              >
                <div>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-royal-blue)", textTransform: "uppercase", display: "block" }}>
                    Standard SLA
                  </span>
                  <strong style={{ fontSize: "1.05rem", color: "var(--color-primary-navy)" }}>
                    99.9% Architecture
                  </strong>
                </div>
                <div>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-royal-blue)", textTransform: "uppercase", display: "block" }}>
                    Delivery Guarantee
                  </span>
                  <strong style={{ fontSize: "1.05rem", color: "var(--color-primary-navy)" }}>
                    100% Code Handover
                  </strong>
                </div>
              </div>
            </div>

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
                  src={service.heroImage}
                  alt={service.title}
                  style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(16, 27, 53, 0.05) 0%, rgba(16, 27, 53, 0.7) 100%)",
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
                  <span style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#93C5FD", fontWeight: 700, display: "block", marginBottom: "0.2rem" }}>
                    Engineering Discipline
                  </span>
                  <strong style={{ fontSize: "1.1rem", color: "#FFFFFF" }}>
                    {service.title}
                  </strong>
                </div>
              </div>

              {/* Floating Badge */}
              <div
                className="animate-float"
                style={{
                  position: "absolute",
                  top: "-1.25rem",
                  right: "-1.25rem",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(12px)",
                  padding: "1rem 1.4rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border-subtle)",
                  boxShadow: "var(--shadow-elevated)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem"
                }}
              >
                <ShieldCheck size={20} style={{ color: "var(--color-royal-blue)" }} />
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-primary-navy)" }}>
                  Zero Proprietary Lock-in
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features & Deliverables Grid */}
      <section className="section section-light" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: "760px", margin: "0 auto 3.5rem" }}>
            <span className="section-eyebrow">Deliverable Blueprint</span>
            <h2 className="section-title">What You Receive in This Engagement</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Clear, itemized engineering deliverables with zero ambiguity, hidden fees, or subscription locks.
            </p>
          </div>

          <div className="grid-2" style={{ gap: "2.5rem" }}>
            {/* Features Column */}
            <div className="card hover-lift glow-on-hover" style={{ padding: "2.75rem", backgroundColor: "var(--color-white)", border: "1px solid var(--color-border-subtle)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-royal-blue-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-royal-blue)" }}>
                  <Zap size={22} />
                </div>
                <div>
                  <span className="badge badge-royal" style={{ marginBottom: "0.2rem" }}>Strategic Pillars</span>
                  <h3 style={{ fontSize: "1.35rem", color: "var(--color-primary-navy)", margin: 0 }}>
                    Core Technical Capabilities
                  </h3>
                </div>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.1rem", padding: 0, margin: 0 }}>
                {service.features.map((feat, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.95rem" }}>
                    <div style={{ width: "22px", height: "22px", borderRadius: "50%", backgroundColor: "var(--color-royal-blue-subtle)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-royal-blue)", flexShrink: 0, marginTop: "2px" }}>
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <span style={{ color: "var(--color-main-text)", fontWeight: 500, lineHeight: 1.5 }}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables Column */}
            <div className="card hover-lift glow-on-hover" style={{ padding: "2.75rem", backgroundColor: "var(--color-white)", border: "1px solid var(--color-border-subtle)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-sm)", backgroundColor: "var(--color-success-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981" }}>
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <span className="badge badge-success" style={{ marginBottom: "0.2rem" }}>Physical &amp; Code Assets</span>
                  <h3 style={{ fontSize: "1.35rem", color: "var(--color-primary-navy)", margin: 0 }}>
                    Verified Deliverables
                  </h3>
                </div>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.1rem", padding: 0, margin: 0 }}>
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.95rem" }}>
                    <div style={{ width: "22px", height: "22px", borderRadius: "50%", backgroundColor: "var(--color-success-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "#10B981", flexShrink: 0, marginTop: "2px" }}>
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <span style={{ color: "var(--color-main-text)", fontWeight: 500, lineHeight: 1.5 }}>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complementary Capabilities List */}
      <section className="section section-white" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
        <div className="container">
          <div className="section-header text-center" style={{ maxWidth: "760px", margin: "0 auto 3rem" }}>
            <span className="section-eyebrow">Complementary Capabilities</span>
            <h2 className="section-title">Other Disciplines Offered by DZAVO</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Explore how our other engineering and creative capabilities integrate with {service.title}.
            </p>
          </div>

          <div className="grid-3">
            {otherServices.map((svc) => (
              <div 
                key={svc.id} 
                className="card hover-lift glow-on-hover" 
                style={{ 
                  padding: "2.25rem",
                  backgroundColor: "var(--color-surface-card)",
                  border: "1px solid var(--color-border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <h4 style={{ fontSize: "1.25rem", marginBottom: "0.75rem", color: "var(--color-primary-navy)" }}>{svc.title}</h4>
                  <p style={{ fontSize: "0.925rem", color: "var(--color-secondary-text)", marginBottom: "1.5rem", lineHeight: 1.6 }}>
                    {svc.shortDescription}
                  </p>
                </div>
                
                <Link
                  to={`/services/${svc.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--color-royal-blue)",
                    textDecoration: "none"
                  }}
                >
                  <span>Explore Discipline</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <CTA
        title={`Request ${service.title}`}
        description="Share your timeline and business goals with our senior engineering team to receive an itemized proposal."
        primaryButtonText="Request This Service"
        primaryButtonTo={`/contact?service=${encodeURIComponent(service.slug)}`}
        secondaryButtonText="All Capabilities"
        secondaryButtonTo="/services"
      />
    </div>
  );
}
