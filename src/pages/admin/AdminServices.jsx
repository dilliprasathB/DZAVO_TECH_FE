import React, { useState } from "react";
import { Plus, Edit, Trash2, Search, X, Check } from "lucide-react";
import { services as initialServices } from "../../data/services";

export default function AdminServices() {
  const [servicesList, setServicesList] = useState(initialServices);
  const [searchQuery, setSearchQuery] = useState("");
  const [editingService, setEditingService] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const filtered = servicesList.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSave = (e) => {
    e.preventDefault();
    const form = e.target;
    const updated = {
      ...editingService,
      title: form.title.value,
      slug: form.slug.value,
      shortDescription: form.shortDescription.value,
      fullDescription: form.fullDescription.value,
      popular: form.popular.checked
    };

    if (editingService.isNew) {
      delete updated.isNew;
      setServicesList([...servicesList, { ...updated, id: `svc-${Date.now()}` }]);
    } else {
      setServicesList(servicesList.map((s) => (s.id === updated.id ? updated : s)));
    }
    setEditingService(null);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    setServicesList(servicesList.filter((s) => s.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", margin: 0, color: "var(--color-primary-navy)" }}>
            Service Disciplines Management
          </h1>
          <p style={{ color: "var(--color-secondary-text)", margin: "0.25rem 0 0" }}>
            Add, update, or reorganize capabilities offered by DZAVO Technology.
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            setEditingService({
              id: "",
              slug: "",
              title: "",
              shortDescription: "",
              fullDescription: "",
              features: [],
              deliverables: [],
              popular: false,
              isNew: true
            })
          }
          className="btn btn-primary"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
        >
          <Plus size={18} />
          <span>Add New Discipline</span>
        </button>
      </div>

      {/* Search Bar */}
      <div style={{ marginBottom: "1.5rem", maxWidth: "360px" }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Filter disciplines..."
          className="form-input"
        />
      </div>

      {/* Services Table */}
      <div className="card" style={{ backgroundColor: "#FFFFFF", padding: 0, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
          <thead>
            <tr style={{ backgroundColor: "var(--color-surface-subtle)", borderBottom: "1px solid var(--color-border-subtle)", color: "var(--color-primary-navy)", fontFamily: "var(--font-heading)", fontWeight: 700 }}>
              <th style={{ padding: "1rem 1.25rem" }}>Title &amp; Slug</th>
              <th style={{ padding: "1rem 1.25rem" }}>Short Description</th>
              <th style={{ padding: "1rem 1.25rem" }}>Status</th>
              <th style={{ padding: "1rem 1.25rem", textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((svc) => (
              <tr key={svc.id} style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <td style={{ padding: "1rem 1.25rem" }}>
                  <strong style={{ color: "var(--color-primary-navy)", display: "block" }}>{svc.title}</strong>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-secondary-text)" }}>/services/{svc.slug}</span>
                </td>
                <td style={{ padding: "1rem 1.25rem", color: "var(--color-secondary-text)", maxWidth: "420px" }}>
                  {svc.shortDescription}
                </td>
                <td style={{ padding: "1rem 1.25rem" }}>
                  {svc.popular ? <span className="badge badge-royal">Core</span> : <span className="badge">Standard</span>}
                </td>
                <td style={{ padding: "1rem 1.25rem", textAlign: "right" }}>
                  <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                    <button
                      type="button"
                      onClick={() => setEditingService(svc)}
                      className="btn btn-sm btn-outline"
                      title="Edit"
                    >
                      <Edit size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeleteTarget(svc)}
                      className="btn btn-sm btn-outline"
                      style={{ color: "var(--color-error)" }}
                      title="Delete"
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

      {/* Edit / Add Modal */}
      {editingService && (
        <div
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
          onClick={() => setEditingService(null)}
        >
          <div
            className="card"
            style={{
              backgroundColor: "#FFFFFF",
              maxWidth: "600px",
              width: "100%",
              padding: "2rem",
              borderRadius: "var(--radius-lg)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <h3 style={{ margin: 0 }}>{editingService.isNew ? "Add New Service" : "Edit Service Discipline"}</h3>
              <button onClick={() => setEditingService(null)} style={{ background: "transparent", border: "none", cursor: "pointer" }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSave}>
              <div className="form-group">
                <label className="form-label form-label-required">Discipline Title</label>
                <input name="title" defaultValue={editingService.title} required className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">URL Slug</label>
                <input name="slug" defaultValue={editingService.slug} required className="form-input" />
              </div>

              <div className="form-group">
                <label className="form-label form-label-required">Summary Description</label>
                <textarea name="shortDescription" rows={2} defaultValue={editingService.shortDescription} required className="form-textarea" />
              </div>

              <div className="form-group">
                <label className="form-label">Full Overview</label>
                <textarea name="fullDescription" rows={4} defaultValue={editingService.fullDescription} className="form-textarea" />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
                <input type="checkbox" id="popular" name="popular" defaultChecked={editingService.popular} />
                <label htmlFor="popular" style={{ fontSize: "0.9rem", cursor: "pointer" }}>Flag as Core Discipline</label>
              </div>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                <button type="button" onClick={() => setEditingService(null)} className="btn btn-outline">Cancel</button>
                <button type="submit" className="btn btn-primary">Save Discipline</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {deleteTarget && (
        <div
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
          <div className="card" style={{ backgroundColor: "#FFFFFF", maxWidth: "440px", width: "100%", padding: "2rem" }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ margin: "0 0 1rem 0", color: "var(--color-error)" }}>Delete Discipline</h3>
            <p style={{ marginBottom: "1.5rem" }}>Are you sure you want to remove <strong>{deleteTarget.title}</strong>?</p>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
              <button type="button" onClick={() => setDeleteTarget(null)} className="btn btn-outline">Cancel</button>
              <button type="button" onClick={confirmDelete} className="btn btn-primary" style={{ backgroundColor: "var(--color-error)", borderColor: "var(--color-error)" }}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

