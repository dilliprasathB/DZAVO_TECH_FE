import React from "react";
import Button from "./Button";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("[DZAVO ErrorBoundary]", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "3rem 1.5rem",
            backgroundColor: "var(--color-light-bg)"
          }}
        >
          <div
            style={{
              maxWidth: "560px",
              width: "100%",
              backgroundColor: "var(--color-white)",
              padding: "3rem 2.5rem",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border-subtle)",
              boxShadow: "var(--shadow-card)",
              textAlign: "center"
            }}
          >
            <span className="badge badge-royal" style={{ marginBottom: "1rem" }}>
              Application Notice
            </span>
            <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
              Something unexpected happened
            </h2>
            <p style={{ color: "var(--color-secondary-text)", marginBottom: "2rem" }}>
              We encountered an unexpected rendering error. You can reload the page or navigate safely back to the home page.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Button onClick={this.handleReload} variant="outline">
                Reload View
              </Button>
              <Button onClick={this.handleHome} variant="primary">
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

