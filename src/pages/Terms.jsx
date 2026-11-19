import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "../components/Button";

export default function Terms() {
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
              Terms of Engagement
            </h1>
            <p className="lead" style={{ color: "var(--color-light-muted)" }}>
              The foundational contractual and professional principles governing client engagements with DZAVO Technology.
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
              <h2 style={{ fontSize: "1.45rem", marginBottom: "1rem" }}>1. Master Service Agreements &amp; Scopes of Work</h2>
              <p style={{ lineHeight: 1.7, color: "var(--color-secondary-text)" }}>
                All design, engineering, and consulting services provided by DZAVO Technology are executed under a bilateral Master Services Agreement (MSA) accompanied by an itemized Statement of Work (SOW) defining clear milestones, deliverables, and acceptance criteria.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.45rem", marginBottom: "1rem" }}>2. Complete Intellectual Property Transfer</h2>
              <p style={{ lineHeight: 1.7, color: "var(--color-secondary-text)" }}>
                Upon settlement of project milestone invoices, DZAVO Technology assigns full, unencumbered, worldwide legal ownership of all custom-developed source code, Figma design files, vector assets, and system documentation directly to the client. DZAVO retains no proprietary claim over bespoke client software.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.45rem", marginBottom: "1rem" }}>3. Quoting, Invoicing &amp; Milestones</h2>
              <p style={{ lineHeight: 1.7, color: "var(--color-secondary-text)" }}>
                DZAVO does not offer generic package pricing or public subscription rates. Project investment is calculated on an itemized deliverable model. Work commences upon receipt of the initial deposit, and subsequent payments are tied strictly to verified milestone completion sign-offs.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.45rem", marginBottom: "1rem" }}>4. Code Warranty &amp; Performance Verification</h2>
              <p style={{ lineHeight: 1.7, color: "var(--color-secondary-text)" }}>
                All deliverables undergo multi-browser and device QA prior to deployment. We provide a complimentary post-launch warranty period to remediate any functional regressions against approved specifications.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.45rem", marginBottom: "1rem" }}>5. Jurisdiction &amp; Inquiries</h2>
              <p style={{ lineHeight: 1.7, color: "var(--color-secondary-text)" }}>
                For contractual or legal inquiries regarding our Terms of Engagement, please contact our legal team at <a href="mailto:dilliprasath1225@gmail.com">dilliprasath1225@gmail.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

