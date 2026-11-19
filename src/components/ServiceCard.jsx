import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Layout, 
  Layers, 
  Cpu, 
  Palette, 
  Video, 
  TrendingUp, 
  Cloud, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";
import Button from "./Button";

const iconMap = {
  Layout,
  Layers,
  Cpu,
  Palette,
  Video,
  TrendingUp,
  Cloud
};

export default function ServiceCard({ service, layout = "grid" }) {
  const navigate = useNavigate();
  const IconComponent = iconMap[service.icon] || Layout;

  const handleRequestService = (e) => {
    e.stopPropagation();
    navigate(`/contact?service=${encodeURIComponent(service.slug)}`);
  };

  return (
    <div
      className="card card-interactive hover-lift glow-on-hover"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        padding: "2.5rem 2.25rem",
        position: "relative",
        borderRadius: "var(--radius-lg)",
        backgroundColor: "var(--color-surface-card)",
        border: "1px solid var(--color-border-subtle)"
      }}
      onClick={() => navigate(`/services/${service.slug}`)}
    >
      <div>
        {/* Top Icon & Badge Row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.75rem" }}>
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "var(--radius-sm)",
              backgroundColor: "var(--color-royal-blue-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-royal-blue)"
            }}
          >
            <IconComponent size={26} strokeWidth={1.8} />
          </div>

          {service.popular && (
            <span className="badge badge-royal">
              Core Discipline
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.35rem",
            fontWeight: 700,
            marginBottom: "0.85rem",
            color: "var(--color-primary-navy)"
          }}
        >
          {service.title}
        </h3>

        {/* Short Description */}
        <p
          style={{
            fontSize: "0.975rem",
            lineHeight: 1.6,
            color: "var(--color-secondary-text)",
            marginBottom: "1.5rem"
          }}
        >
          {service.shortDescription}
        </p>

        {/* Key Deliverables Bullet Points */}
        <div style={{ marginBottom: "2rem" }}>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.775rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-primary-navy)",
              display: "block",
              marginBottom: "0.75rem"
            }}
          >
            Key Deliverables
          </span>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {service.deliverables.slice(0, 3).map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "var(--color-main-text)"
                }}
              >
                <CheckCircle2 size={15} style={{ color: "var(--color-royal-blue)", marginTop: "3px", flexShrink: 0 }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "1.5rem",
          borderTop: "1px solid var(--color-border-subtle)",
          gap: "1rem"
        }}
      >
        <Link
          to={`/services/${service.slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "var(--color-royal-blue)"
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <span>Explore Details</span>
          <ArrowRight size={15} />
        </Link>

        <Button
          variant="outline"
          size="sm"
          onClick={handleRequestService}
        >
          Request This Service
        </Button>
      </div>
    </div>
  );
}

