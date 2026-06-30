import React from "react";

export interface GlowCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Glow color used on hover. Defaults to "purple". */
  accent?: "orange" | "pink" | "purple" | "blue" | "cyan" | "green";
  /** Enables the lift + neon glow on hover. Defaults to true. */
  hoverGlow?: boolean;
  children?: React.ReactNode;
}

const ACCENT_VAR: Record<NonNullable<GlowCardProps["accent"]>, string> = {
  orange: "var(--pgr-orange)",
  pink: "var(--pgr-pink)",
  purple: "var(--pgr-purple)",
  blue: "var(--pgr-blue)",
  cyan: "var(--pgr-cyan)",
  green: "var(--pgr-green)",
};

/**
 * GlowCard — a neon-bordered panel that glows on hover.
 */
export const GlowCard = React.forwardRef<HTMLDivElement, GlowCardProps>(
  ({ accent, hoverGlow = true, className, style, children, ...rest }, ref) => {
    const accentColor = ACCENT_VAR[accent ?? "purple"];
    const classes = [
      "pgr-card",
      hoverGlow ? "pgr-card--hover-glow" : "",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        ref={ref}
        className={classes}
        style={{ "--pgr-accent": accentColor, ...style } as React.CSSProperties}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

GlowCard.displayName = "GlowCard";
