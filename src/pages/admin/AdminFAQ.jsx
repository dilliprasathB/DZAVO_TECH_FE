import React, { useState } from "react";
import { Plus, Edit, Trash2, Search, X } from "lucide-react";
import { faqs as initialFaqs, faqCategories } from "../../data/faqs";

export default function AdminFAQ() {
  const [faqsList, setFaqsList] = useState(initialFaqs);
  const [editingFaq, setEditingFaq] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    const form = e.target;
    const updated = {
      ...editingFaq,
      question: form.question.value,
      answer: form.answer.value,
      category: form.category.value
    };

    if (editingFaq.isNew) {
      delete updated.isNew;
      setFaqsList([...faqsList, { ...updated, id: `faq-${Date.now()}` }]);
    } else {
      setFaqsList(faqsList.map((f) => (f.id === updated.id ? updated : f)));
    }
    setEditingFaq(null);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    setFaqsList(faqsList.filter((f) => f.id !== deleteTarget.id));
    setDeleteTarget(null);
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
        <div>
          <h1 style={{ fontSize: "1.75rem", margin: 0, color: "var(--color-primary-navy)" }}>
            FAQ Knowledge Base Management
          </h1>
          <p style={{ color: "var(--color-secondary-text)", margin: "0.25rem 0 0" }}>
            Maintain answers to corporate, technical, and operational client inquiries.
          </p>
        </div>

        <button
          type="button"
          onClick={() =>
            setEditingFaq({
              id: "",
              question: "",
              answer: "",
              category: "General & Process",
              isNew: true
            })
          }
          className="btn btn-primary"
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
        >
          <Plus size={18} />
          <span>Add New FAQ</span>
        </button>
      </div>

      <div className="card" style={{ backgroundColor: "#FFFFFF", padding: 0, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
          <thead>
            <tr style={{ backgroundColor: "var(--color-surface-subtle)", borderBottom: "1px solid var(--color-border-subtle)", color: "var(--color-primary-navy)", fontFamily: "var(--font-heading)", fontWeight: 700 }}>
              <th style={{ padding: "1rem 1.25rem" }}>Question</th>
              <th style={{ padding: "1rem 1.25rem" }}>Category</th>
              <th style={{ padding: "1rem 1.25rem" }}>Answer Excerpt</th>
              <th style={{ padding: "1rem 1.25rem", textAlign: "right" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {faqsList.map((f) => (
              <tr key={f.id} style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <td style={{ padding: "1rem 1.25rem", fontWeight: 600, color: "var(--color-primary-navy)" }}>
                  {f.question}
                </td>
                <td style={{ padding: "1rem 1.25rem" }}>
                  <span className="badge badge-royal">{f.category}</span>
                </td>
                <td style={{ padding: "1rem 1.25rem", color: "var(--color-secondary-text)", maxWidth: "420px" }}>
                  {f.answer.slice(0, 90)}...
                </td>
                <td style={{ padding: "1rem 1.25rem", textAlign: "right" }}>
                  <div style={{ display: "inline-flex", gap: "0.5rem" }}>
                    <button type="button" onClick={() => setEditingFaq(f)} className="btn btn-sm btn-outline"><Edit size={15} /></button>
                    <button type="button" onClick={() => setDeleteTarget(f)} className="btn btn-sm btn-outline" style={{ color: "var(--color-error)" }}><Trash2 size={15} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingFaq && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(16, 27, 53, 0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", zIndex: 9999 }} onClick={() => setEditingFaq(null)}>
          <div className="card" style={{ backgroundColor: "#FFFFFF", maxWidth: "600px", width: "100%", padding: "2rem" }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginTop: 0, marginBottom: "1.5rem" }}>{editingFaq.isNew ? "Add Question" : "Edit Question"}</h3>
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label className="form-label form-label-required">Question</label>
                <input name="question" defaultValue={editingFaq.question} required className="form-input" />
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select name="category" defaultValue={editingFaq.category} className="form-select">
                  {faqCategories.filter((c) => c !== "All").map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label form-label-required">Comprehensive Answer</label>
                <textarea name="answer" rows={5} defaultValue={editingFaq.answer} required className="form-textarea" />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
                <button type="button" onClick={() => setEditingFaq(null)} className="btn btn-outline">Cancel</button>
                <button type="submit" className="btn btn-primary">Save Question</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {deleteTarget && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(16, 27, 53, 0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", zIndex: 9999 }} onClick={() => setDeleteTarget(null)}>
          <div className="card" style={{ backgroundColor: "#FFFFFF", maxWidth: "420px", width: "100%", padding: "2rem" }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ margin: "0 0 1rem 0", color: "var(--color-error)" }}>Delete FAQ</h3>
            <p style={{ marginBottom: "1.5rem" }}>Are you sure you want to delete this FAQ question?</p>
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

