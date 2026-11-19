import React, { useState, useEffect, useMemo } from "react";
import { 
  Search, 
  Trash2, 
  Eye, 
  Check, 
  Mail, 
  Phone, 
  Building, 
  Calendar, 
  X, 
  AlertTriangle 
} from "lucide-react";
import { getEnquiries } from "../../services/api";

export default function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Selected for viewing details in modal
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  // Selected for delete confirmation
  const [deleteTarget, setDeleteTarget] = useState(null);

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

  const handleStatusChange = (id, newStatus) => {
    const updated = enquiries.map((enq) =>
      enq.id === id ? { ...enq, status: newStatus } : enq
    );
    setEnquiries(updated);
    localStorage.setItem("dzavo_enquiries", JSON.stringify(updated));
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
    }
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    const filtered = enquiries.filter((enq) => enq.id !== deleteTarget.id);
    setEnquiries(filtered);
    localStorage.setItem("dzavo_enquiries", JSON.stringify(filtered));
    setDeleteTarget(null);
    if (selectedEnquiry && selectedEnquiry.id === deleteTarget.id) {
      setSelectedEnquiry(null);
    }
  };

  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      const matchesStatus =
        statusFilter === "All" || (item.status || "New") === statusFilter;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.fullName.toLowerCase().includes(q) ||
        item.email.toLowerCase().includes(q) ||
        (item.company && item.company.toLowerCase().includes(q)) ||
        (item.service && item.service.toLowerCase().includes(q));

      return matchesStatus && matchesQuery;
    });
  }, [enquiries, statusFilter, searchQuery]);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {/* Title & Stats */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", margin: 0, color: "var(--color-primary-navy)" }}>
            Inbound Project Enquiries
          </h1>
          <p style={{ color: "var(--color-secondary-text)", margin: "0.25rem 0 0" }}>
            Review, evaluate and manage prospective client requirements submitted through the website.
          </p>
        </div>
      </div>

      {/* Filter and Search Controls Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          backgroundColor: "#FFFFFF",
          padding: "1.25rem 1.5rem",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-subtle)",
          marginBottom: "1.5rem"
        }}
      >
        {/* Status Pills */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {["All", "New", "In Review", "Contacted", "Closed"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`btn btn-sm ${statusFilter === st ? "btn-secondary" : "btn-outline"}`}
              style={{ borderRadius: "var(--radius-full)" }}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Search */}
        <div style={{ position: "relative", minWidth: "260px" }}>
          <Search size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--color-secondary-text)" }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, company, email..."
            className="form-input"
            style={{ paddingLeft: "2.4rem", fontSize: "0.875rem" }}
          />
        </div>
      </div>

      {/* Enquiries Table or Empty State */}
      <div
        className="card"
        style={{
          backgroundColor: "#FFFFFF",
          padding: 0,
          overflow: "hidden",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-subtle)"
        }}
      >
        {loading ? (
          <div style={{ padding: "3rem", textAlign: "center", color: "var(--color-secondary-text)" }}>
            Loading enquiries repository...
          </div>
        ) : filteredEnquiries.length === 0 ? (
          <div style={{ padding: "4rem 2rem", textAlign: "center" }}>
            <p style={{ color: "var(--color-secondary-text)", marginBottom: "1rem" }}>
              No enquiries match the current filters.
            </p>
            <button
              onClick={() => {
                setStatusFilter("All");
                setSearchQuery("");
              }}
              className="btn btn-outline btn-sm"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ backgroundColor: "var(--color-surface-subtle)", borderBottom: "1px solid var(--color-border-subtle)", color: "var(--color-primary-navy)", fontFamily: "var(--font-heading)", fontWeight: 700 }}>
                  <th style={{ padding: "1rem 1.25rem" }}>Client / Contact</th>
                  <th style={{ padding: "1rem 1.25rem" }}>Company</th>
                  <th style={{ padding: "1rem 1.25rem" }}>Discipline</th>
                  <th style={{ padding: "1rem 1.25rem" }}>Status</th>
                  <th style={{ padding: "1rem 1.25rem" }}>Date</th>
                  <th style={{ padding: "1rem 1.25rem", textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEnquiries.map((enq) => (
                  <tr
                    key={enq.id}
                    style={{
                      borderBottom: "1px solid var(--color-border-subtle)",
                      transition: "background-color var(--transition-fast)"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(49, 91, 232, 0.02)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    <td style={{ padding: "1rem 1.25rem" }}>
                      <strong style={{ color: "var(--color-primary-navy)", display: "block" }}>{enq.fullName}</strong>
                      <span style={{ fontSize: "0.8rem", color: "var(--color-secondary-text)" }}>{enq.email}</span>
                    </td>
                    <td style={{ padding: "1rem 1.25rem", color: "var(--color-main-text)" }}>
                      {enq.company || "—"}
                    </td>
                    <td style={{ padding: "1rem 1.25rem" }}>
                      <span style={{ fontSize: "0.85rem", color: "var(--color-royal-blue)", fontWeight: 600 }}>
                        {enq.service || "General"}
                      </span>
                    </td>
                    <td style={{ padding: "1rem 1.25rem" }}>
                      <select
                        value={enq.status || "New"}
                        onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                        style={{
                          fontSize: "0.8rem",
                          padding: "0.25rem 0.6rem",
                          borderRadius: "var(--radius-xs)",
                          border: "1px solid var(--color-border-strong)",
                          backgroundColor: "#FFFFFF"
                        }}
                      >
                        <option value="New">New</option>
                        <option value="In Review">In Review</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                    <td style={{ padding: "1rem 1.25rem", fontSize: "0.8rem", color: "var(--color-secondary-text)" }}>
                      {enq.createdAt ? new Date(enq.createdAt).toLocaleDateString() : "Recent"}
                    </td>
                    <td style={{ padding: "1rem 1.25rem", textAlign: "right" }}>
                      <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                        <button
                          type="button"
                          onClick={() => setSelectedEnquiry(enq)}
                          className="btn btn-sm btn-outline"
                          title="View Details"
                          style={{ padding: "0.35rem 0.65rem" }}
                        >
                          <Eye size={15} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteTarget(enq)}
                          className="btn btn-sm btn-outline"
                          title="Delete Enquiry"
                          style={{ padding: "0.35rem 0.65rem", color: "var(--color-error)" }}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* View Detail Modal */}
      {selectedEnquiry && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(16, 27, 53, 0.6)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            zIndex: 9999
          }}
          onClick={() => setSelectedEnquiry(null)}
        >
          <div
            className="card"
            style={{
              backgroundColor: "#FFFFFF",
              maxWidth: "640px",
              width: "100%",
              padding: "2.5rem",
              borderRadius: "var(--radius-lg)",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "var(--shadow-elevated)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", borderBottom: "1px solid var(--color-border-subtle)", paddingBottom: "1rem" }}>
              <div>
                <span className="badge badge-royal" style={{ marginBottom: "0.25rem" }}>
                  Enquiry ID: {selectedEnquiry.id}
                </span>
                <h3 style={{ fontSize: "1.35rem", margin: 0 }}>{selectedEnquiry.fullName}</h3>
              </div>
              <button
                onClick={() => setSelectedEnquiry(null)}
                style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--color-secondary-text)" }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--color-secondary-text)", display: "block" }}>Email</span>
                <a href={`mailto:${selectedEnquiry.email}`} style={{ fontWeight: 600 }}>{selectedEnquiry.email}</a>
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--color-secondary-text)", display: "block" }}>Phone</span>
                <span style={{ fontWeight: 600 }}>{selectedEnquiry.phone}</span>
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--color-secondary-text)", display: "block" }}>Company</span>
                <span style={{ fontWeight: 600 }}>{selectedEnquiry.company || "—"}</span>
              </div>
              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--color-secondary-text)", display: "block" }}>Preferred Channel</span>
                <span style={{ fontWeight: 600, textTransform: "capitalize" }}>{selectedEnquiry.contactMethod || "Email"}</span>
              </div>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--color-secondary-text)", display: "block", marginBottom: "0.25rem" }}>
                Target Discipline
              </span>
              <span className="badge badge-royal" style={{ fontSize: "0.85rem" }}>
                {selectedEnquiry.service}
              </span>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--color-secondary-text)", display: "block", marginBottom: "0.5rem" }}>
                Project Overview
              </span>
              <div style={{ padding: "1.25rem", backgroundColor: "var(--color-surface-subtle)", borderRadius: "var(--radius-sm)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                {selectedEnquiry.description}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
              <button
                type="button"
                onClick={() => setSelectedEnquiry(null)}
                className="btn btn-primary"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {deleteTarget && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(16, 27, 53, 0.6)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            zIndex: 9999
          }}
          onClick={() => setDeleteTarget(null)}
        >
          <div
            className="card"
            style={{
              backgroundColor: "#FFFFFF",
              maxWidth: "460px",
              width: "100%",
              padding: "2rem",
              borderRadius: "var(--radius-md)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--color-error)", marginBottom: "1rem" }}>
              <AlertTriangle size={24} />
              <h3 style={{ margin: 0, fontSize: "1.25rem" }}>Confirm Deletion</h3>
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--color-secondary-text)", marginBottom: "1.5rem" }}>
              Are you sure you want to delete the enquiry from <strong>{deleteTarget.fullName}</strong>? This action cannot be undone.
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
              <button
                type="button"
                onClick={() => setDeleteTarget(null)}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                className="btn btn-primary"
                style={{ backgroundColor: "var(--color-error)", borderColor: "var(--color-error)" }}
              >
                Delete Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

