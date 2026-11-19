import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Configurable WhatsApp Number (defaults to official company number)
  const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "918610140943";
  const cleanNumber = rawNumber.replace(/[^0-9]/g, "");

  const prefilledMessage = encodeURIComponent(
    "Hello DZAVO Technology, I am interested in discussing a digital project for my business."
  );

  // Universal WhatsApp Link works smoothly on both iOS/Android apps and Desktop browser / WhatsApp Web
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${prefilledMessage}`;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
      }}
    >
      {/* Optional Interactive Greeting Pill */}
      {showTooltip && (
        <div
          role="status"
          style={{
            backgroundColor: "var(--color-primary-navy)",
            color: "var(--color-white)",
            padding: "0.75rem 1rem",
            borderRadius: "var(--radius-md)",
            fontSize: "0.85rem",
            maxWidth: "240px",
            boxShadow: "var(--shadow-card)",
            marginBottom: "0.75rem",
            border: "1px solid var(--color-navy-border)",
            position: "relative",
            animation: "fadeIn 0.2s ease"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
            <span style={{ fontWeight: 700, color: "#FFFFFF" }}>Direct Consultant</span>
            <button
              onClick={() => setShowTooltip(false)}
              aria-label="Dismiss message"
              style={{
                background: "transparent",
                border: "none",
                color: "var(--color-light-muted)",
                cursor: "pointer",
                padding: "2px"
              }}
            >
              <X size={14} />
            </button>
          </div>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--color-light-muted)", lineHeight: 1.4 }}>
            Chat directly with a DZAVO technical director via WhatsApp.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with DZAVO Technology on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#25D366", // Official WhatsApp Emerald Green
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 20px rgba(37, 211, 102, 0.4)",
          cursor: "pointer",
          transition: "transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease",
          textDecoration: "none",
          position: "relative"
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(37, 211, 102, 0.55)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.4)";
        }}
      >
        {/* WhatsApp Icon */}
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>

        {/* Online Status Dot */}
        <span
          style={{
            position: "absolute",
            top: "2px",
            right: "2px",
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            backgroundColor: "#10B981",
            border: "2px solid #FFFFFF"
          }}
        />
      </a>
    </div>
  );
}

