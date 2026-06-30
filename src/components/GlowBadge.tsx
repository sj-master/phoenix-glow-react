import React from "react";

export type GlowBadgeColor =
  | "orange"
  | "pink"
  | "purple"
  | "blue"
  | "cyan"
  | "green";

export interface GlowBadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> {
  text?: string;
  /** Glow color of the badge. Defaults to "orange". */
  color?: GlowBadgeColor;
  children?: React.ReactNode;
}

/**
 * GlowBadge — a glowing pill label.
 */
export const GlowBadge = React.forwardRef<HTMLSpanElement, GlowBadgeProps>(
  ({ text, color = "orange", className, children, ...rest }, ref) => {
    const classes = ["pgr-badge", `pgr-badge--${color}`, className ?? ""]
      .filter(Boolean)
      .join(" ");

    return (
      <span ref={ref} className={classes} {...rest}>
        {children ?? text}
      </span>
    );
  }
);

GlowBadge.displayName = "GlowBadge";
