import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Compass } from "lucide-react";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        backgroundColor: "var(--color-light-bg)"
      }}
    >
      <div
        className="card"
        style={{
          maxWidth: "600px",
          width: "100%",
          padding: "3.5rem 2.5rem",
          textAlign: "center",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-card)",
          backgroundColor: "var(--color-white)",
          border: "1px solid var(--color-border-subtle)"
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "4.5rem",
            fontWeight: 800,
            color: "var(--color-royal-blue)",
            lineHeight: 1,
            display: "block",
            marginBottom: "1rem"
          }}
        >
          404
        </span>

        <h1 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
          Page Not Found
        </h1>

        <p style={{ color: "var(--color-secondary-text)", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "2.5rem" }}>
          The digital destination you are attempting to access does not exist, has been moved, or has had its URL updated.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Button to="/" variant="primary" icon={Home} iconPosition="left">
            Return to Home
          </Button>
          <Button to="/services" variant="outline" icon={Compass} iconPosition="left">
            Explore Capabilities
          </Button>
        </div>
      </div>
    </div>
  );
}

