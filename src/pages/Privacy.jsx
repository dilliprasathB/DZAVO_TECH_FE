import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import Button from "../components/Button";

export default function Privacy() {
  return (
    <div>
      <section className="section-hero section-dark" style={{ borderBottom: "1px solid var(--color-navy-border)" }}>
        <div className="container">
          <div style={{ maxWidth: "800px" }}>
            <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#8da6ff", fontSize: "0.85rem", textDecoration: "none", marginBottom: "1rem" }}>
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </Link>
            <h1 style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>
              Privacy Policy
            </h1>
            <p className="lead" style={{ color: "var(--color-light-muted)" }}>
              DZAVO Technology is committed to strict data privacy, enterprise confidentiality, and transparent information stewardship.
            </p>
            <span style={{ fontSize: "0.85rem", color: "var(--color-light-muted)" }}>
              Effective Date: November 16, 2026
            </span>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            <div>
              <h2 style={{ fontSize: "1.45rem", marginBottom: "1rem" }}>1. Information We Collect</h2>
              <p style={{ lineHeight: 1.7, color: "var(--color-secondary-text)" }}>
                When you submit a project enquiry or engage our design and engineering services, we collect information you explicitly provide, including your full name, business email address, phone number, company name, and project specifications. We do not sell, rent, or trade your contact information to third-party data brokers.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.45rem", marginBottom: "1rem" }}>2. How We Use Collected Data</h2>
              <p style={{ lineHeight: 1.7, color: "var(--color-secondary-text)" }}>
                We use your information exclusively to:
              </p>
              <ul style={{ paddingLeft: "1.5rem", marginTop: "0.75rem", lineHeight: 1.7, color: "var(--color-secondary-text)" }}>
                <li>Evaluate project scope and prepare itemized technical estimates.</li>
                <li>Communicate with you regarding your enquiry through your preferred channel.</li>
                <li>Fulfill our contractual obligations under executed master service agreements.</li>
                <li>Ensure compliance with applicable international digital laws and security standards.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "1.45rem", marginBottom: "1rem" }}>3. Intellectual Property &amp; Confidentiality</h2>
              <p style={{ lineHeight: 1.7, color: "var(--color-secondary-text)" }}>
                All proprietary client data, architecture diagrams, business models, and trade secrets shared with DZAVO Technology are protected by strict Non-Disclosure Agreements (NDAs). We never disclose client proprietary data in public case studies without explicit written authorization.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.45rem", marginBottom: "1rem" }}>4. Security &amp; Storage Protocols</h2>
              <p style={{ lineHeight: 1.7, color: "var(--color-secondary-text)" }}>
                We employ modern encryption standards (TLS 1.3, AES-256) for data transmission and storage. Access to enquiry submissions is restricted strictly to authorized senior engineering directors.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.45rem", marginBottom: "1rem" }}>5. Contact Our Data Protection Officer</h2>
              <p style={{ lineHeight: 1.7, color: "var(--color-secondary-text)" }}>
                If you have questions regarding this Privacy Policy or wish to request data deletion, contact us directly at <a href="mailto:dilliprasath1225@gmail.com">dilliprasath1225@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

