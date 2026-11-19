import React, { useState } from "react";
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Inbox, 
  Briefcase, 
  HelpCircle, 
  ExternalLink, 
  ShieldCheck, 
  Database
} from "lucide-react";
import Logo from "../components/Logo";
import { isSupabaseConfigured } from "../services/supabaseClient";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const adminNav = [
    { name: "Overview", path: "/admin", icon: LayoutDashboard, end: true },
    { name: "Enquiries", path: "/admin/enquiries", icon: Inbox },
    { name: "Services", path: "/admin/services", icon: Briefcase },
    { name: "FAQ Management", path: "/admin/faqs", icon: HelpCircle }
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#F8FAFC" }}>
      {/* Sidebar for Desktop */}
      <aside
        style={{
          width: "270px",
          backgroundColor: "#101B35",
          color: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          flexShrink: 0,
          borderRight: "1px solid #1E2E52"
        }}
        className="admin-sidebar-desktop"
      >
        {/* Brand header */}
        <div style={{ padding: "1.75rem 1.5rem", borderBottom: "1px solid #1E2E52" }}>
          <Logo variant="dark" size="small" showTagline={false} linkTo="/admin" />
          <div style={{ marginTop: "0.5rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span style={{ fontSize: "0.72rem", color: "#8da6ff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Management Console
            </span>
          </div>
        </div>

        {/* Navigation list */}
        <nav style={{ padding: "1.25rem 1rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
          {adminNav.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.7rem 1rem",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.9rem",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "#FFFFFF" : "#A3ADC2",
                  backgroundColor: isActive ? "#315BE8" : "transparent",
                  textDecoration: "none",
                  transition: "all var(--transition-fast)"
                })}
              >
                <Icon size={18} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Database Sync Status & Exit Link */}
        <div style={{ padding: "1.25rem 1rem", borderTop: "1px solid #1E2E52" }}>
          <div
            style={{
              padding: "0.75rem",
              borderRadius: "var(--radius-sm)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              fontSize: "0.78rem",
              color: "#A3ADC2",
              marginBottom: "1rem"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: isSupabaseConfigured ? "#10B981" : "#F59E0B", marginBottom: "0.25rem", fontWeight: 600 }}>
              <Database size={14} />
              <span>{isSupabaseConfigured ? "PostgreSQL Connected" : "Local Storage Mode"}</span>
            </div>
            <span>{isSupabaseConfigured ? "Syncing live via Supabase" : "Ready for backend connection"}</span>
          </div>

          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.6rem 0.75rem",
              borderRadius: "var(--radius-sm)",
              color: "#A3ADC2",
              fontSize: "0.85rem",
              textDecoration: "none",
              border: "1px solid #1E2E52"
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <ExternalLink size={15} />
              <span>View Live Website</span>
            </span>
          </Link>
        </div>
      </aside>

      {/* Main Admin Content Body */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Top Header Bar */}
        <header
          style={{
            height: "64px",
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid var(--color-border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 1.5rem"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "var(--color-primary-navy)"
              }}
            >
              DZAVO Administration
            </span>
            <span className="badge badge-royal" style={{ fontSize: "0.72rem" }}>
              Architecture Ready
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-secondary-text)" }}>
              <ShieldCheck size={16} style={{ color: "#10B981" }} />
              <span>Protected Environment</span>
            </div>
          </div>
        </header>

        {/* Dynamic Outlet */}
        <main style={{ flex: 1, padding: "2rem", overflowY: "auto" }}>
          <Outlet />
        </main>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .admin-sidebar-desktop {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

