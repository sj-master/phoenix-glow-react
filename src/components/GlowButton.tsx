import React from "react";

export type GlowVariant =
  | "orange"
  | "pink"
  | "purple"
  | "blue"
  | "cyan"
  | "green"
  | "outline";

export interface GlowButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  /** Color theme of the button. Defaults to "orange". */
  variant?: GlowVariant;
  /** Enables the continuous neon pulse animation. */
  glow?: boolean;
  children?: React.ReactNode;
}

/**
 * GlowButton — a neon gradient button from the Phoenix Glow kit.
 */
export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ variant = "orange", glow = false, className, children, ...rest }, ref) => {
    const classes = [
      "pgr-btn",
      `pgr-btn--${variant}`,
      glow ? "pgr-btn--glow" : "",
      className ?? "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button ref={ref} className={classes} {...rest}>
        {children}
      </button>
    );
  }
);

GlowButton.displayName = "GlowButton";
