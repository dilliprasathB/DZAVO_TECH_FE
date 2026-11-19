import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Inbox, 
  Briefcase, 
  HelpCircle,
  CheckCircle2, 
  Database,
  ExternalLink
} from "lucide-react";
import { services } from "../../data/services";
import { faqs } from "../../data/faqs";
import { getEnquiries } from "../../services/api";

export default function AdminDashboard() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getEnquiries();
        setEnquiries(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const stats = [
    { title: "Active Enquiries", value: enquiries.length, icon: Inbox, color: "#315BE8", path: "/admin/enquiries" },
    { title: "Service Disciplines", value: services.length, icon: Briefcase, color: "#10B981", path: "/admin/services" },
    { title: "Knowledge Base FAQs", value: faqs.length, icon: HelpCircle, color: "#8B5CF6", path: "/admin/faqs" }
  ];

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Welcome Banner */}
      <div
        style={{
          backgroundColor: "#101B35",
          color: "#FFFFFF",
          padding: "2rem 2.5rem",
          borderRadius: "var(--radius-lg)",
          marginBottom: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1.5rem"
        }}
      >
        <div>
          <span style={{ fontSize: "0.8rem", color: "#8da6ff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Administration Overview
          </span>
          <h1 style={{ fontSize: "1.85rem", color: "#FFFFFF", marginTop: "0.25rem", marginBottom: "0.5rem" }}>
            DZAVO Technology Command Center
          </h1>
          <p style={{ color: "var(--color-light-muted)", margin: 0, fontSize: "0.95rem" }}>
            Manage client enquiries, digital services, knowledge base, and corporate settings.
          </p>
        </div>

        <Link
          to="/admin/enquiries"
          className="btn btn-primary"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
        >
          <Inbox size={18} />
          <span>Review Enquiries ({enquiries.length})</span>
        </Link>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid-3" style={{ marginBottom: "2.5rem" }}>
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <Link
              key={idx}
              to={stat.path}
              className="card card-interactive"
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                padding: "1.75rem",
                backgroundColor: "#FFFFFF"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.85rem", color: "var(--color-secondary-text)", fontWeight: 600 }}>
                  {stat.title}
                </span>
                <div style={{ width: "36px", height: "36px", borderRadius: "var(--radius-sm)", backgroundColor: `${stat.color}15`, color: stat.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={18} />
                </div>
              </div>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 800, color: "var(--color-primary-navy)" }}>
                {loading ? "..." : stat.value}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Recent Enquiries & Architectural Integration Overview */}
      <div className="grid-2" style={{ gap: "2rem" }}>
        {/* Recent Enquiries Box */}
        <div className="card" style={{ backgroundColor: "#FFFFFF", padding: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1.25rem", margin: 0 }}>Recent Inbound Enquiries</h3>
            <Link to="/admin/enquiries" style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-royal-blue)" }}>
              View all
            </Link>
          </div>

          {loading ? (
            <p style={{ color: "var(--color-secondary-text)" }}>Loading enquiries...</p>
          ) : enquiries.length === 0 ? (
            <p style={{ color: "var(--color-secondary-text)" }}>No enquiries received yet.</p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {enquiries.slice(0, 4).map((enq) => (
                <div
                  key={enq.id}
                  style={{
                    padding: "1rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--color-surface-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <span style={{ fontWeight: 700, fontSize: "0.925rem", color: "var(--color-primary-navy)", display: "block" }}>
                      {enq.fullName}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-secondary-text)" }}>
                      {enq.company || "Independent"} • {enq.email}
                    </span>
                  </div>

                  <span
                    className="badge"
                    style={{
                      backgroundColor: enq.status === "New" ? "var(--color-royal-blue-subtle)" : "var(--color-surface-subtle)",
                      color: enq.status === "New" ? "var(--color-royal-blue)" : "var(--color-main-text)"
                    }}
                  >
                    {enq.status || "New"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Database & Supabase Architectural Readiness Box */}
        <div className="card" style={{ backgroundColor: "#FFFFFF", padding: "2rem" }}>
          <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Backend Architecture Status</h3>
          <p style={{ fontSize: "0.925rem", color: "var(--color-secondary-text)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            The DZAVO frontend architecture is structured for seamless plug-in with a PostgreSQL backend or Supabase managed database.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#10B981" }}>
              <CheckCircle2 size={16} />
              <span>Entity Schemas Prepared (Enquiries, Services, FAQs)</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#10B981" }}>
              <CheckCircle2 size={16} />
              <span>Row-Level Security (RLS) &amp; Auth Isolation Specification Documented</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#10B981" }}>
              <CheckCircle2 size={16} />
              <span>Configurable via VITE_API_BASE_URL &amp; VITE_SUPABASE_URL</span>
            </div>
          </div>

          <div
            style={{
              padding: "1rem",
              borderRadius: "var(--radius-sm)",
              backgroundColor: "var(--color-surface-subtle)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              color: "var(--color-primary-navy)"
            }}
          >
            VITE_API_BASE_URL={import.meta.env.VITE_API_BASE_URL || "(Preview Local Mode)"}
          </div>
        </div>
      </div>
    </div>
  );
}
