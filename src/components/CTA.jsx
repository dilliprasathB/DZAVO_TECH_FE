import React from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Button from "./Button";

export default function CTA({
  title = "Ready to Turn Your Ideas Into Digital Experiences?",
  description = "Partner with our senior architects, designers and engineers. We deliver bespoke web platforms, accessible interfaces and scalable software tailored to your commercial vision.",
  primaryButtonText = "Start a Conversation",
  primaryButtonTo = "/contact",
  secondaryButtonText = "Explore Our Services",
  secondaryButtonTo = "/services",
  showTrustBadges = true
}) {
  return (
    <section className="section section-dark bg-grid-pattern-dark" style={{ position: "relative", overflow: "hidden", borderTop: "1px solid var(--color-navy-border)" }}>
      {/* Subtle Geometric Background Motif */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(49, 91, 232, 0.22) 0%, rgba(16, 27, 53, 0) 70%)",
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-40%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(49, 91, 232, 0.15) 0%, rgba(16, 27, 53, 0) 70%)",
          pointerEvents: "none"
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <span className="section-eyebrow">
            Initiate Collaboration
          </span>

          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#FFFFFF",
              marginTop: "1rem",
              marginBottom: "1.25rem"
            }}
          >
            {title}
          </h2>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.68,
              color: "var(--color-light-muted)",
              marginBottom: "2.5rem",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            {description}
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: showTrustBadges ? "2.5rem" : 0
            }}
          >
            <Button
              to={primaryButtonTo}
              variant="primary"
              size="lg"
              icon={ArrowUpRight}
            >
              {primaryButtonText}
            </Button>

            {secondaryButtonText && (
              <Button
                to={secondaryButtonTo}
                variant="outline-white"
                size="lg"
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>

          {/* Trust Guarantees */}
          {showTrustBadges && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "2rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--color-navy-border)",
                fontSize: "0.85rem",
                color: "var(--color-light-muted)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <CheckCircle2 size={16} style={{ color: "#315BE8" }} />
                <span>NDA &amp; Confidentiality Assured</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <CheckCircle2 size={16} style={{ color: "#315BE8" }} />
                <span>Itemized Technical Estimates</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <CheckCircle2 size={16} style={{ color: "#315BE8" }} />
                <span>Direct Access to Senior Engineers</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

