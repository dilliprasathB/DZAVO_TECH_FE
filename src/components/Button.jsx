import React from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = "right",
  fullWidth = false,
  className = "",
  style = {},
  ...rest
}) {
  const variantClass = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    "outline-white": "btn-outline-white",
    white: "btn-white",
    text: "btn-text"
  }[variant] || "btn-primary";

  const sizeClass = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg"
  }[size] || "";

  const combinedClasses = `btn ${variantClass} ${sizeClass} ${fullWidth ? "btn-full" : ""} ${className}`.trim();

  const content = (
    <>
      {loading && <Loader2 size={16} className="animate-spin" style={{ animation: "spin 1s linear infinite" }} />}
      {!loading && Icon && iconPosition === "left" && <Icon size={size === "sm" ? 14 : 18} />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === "right" && <Icon size={size === "sm" ? 14 : 18} />}
    </>
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={combinedClasses} style={style} {...rest}>
        {content}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a href={href} className={combinedClasses} style={style} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled || loading}
      onClick={onClick}
      style={style}
      {...rest}
    >
      {content}
    </button>
  );
}

