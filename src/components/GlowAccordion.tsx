import React from "react";

export interface GlowAccordionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "onChange"> {
  title: React.ReactNode;
  /** Controlled open state. Omit for uncontrolled behavior. */
  open?: boolean;
  /** Default open state when uncontrolled. */
  defaultOpen?: boolean;
  onChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

/**
 * GlowAccordion — a collapsible panel with a glowing open state.
 * Works controlled (pass `open` + `onChange`) or uncontrolled (`defaultOpen`).
 */
export const GlowAccordion = React.forwardRef<HTMLDivElement, GlowAccordionProps>(
  ({ title, open, defaultOpen = false, onChange, className, children, ...rest }, ref) => {
    const isControlled = open !== undefined;
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const isOpen = isControlled ? open : internalOpen;

    const toggle = () => {
      const next = !isOpen;
      if (!isControlled) setInternalOpen(next);
      onChange?.(next);
    };

    const classes = ["pgr-accordion", className ?? ""].filter(Boolean).join(" ");

    return (
      <div ref={ref} className={classes} data-open={isOpen} {...rest}>
        <button
          type="button"
          className="pgr-accordion__trigger"
          aria-expanded={isOpen}
          onClick={toggle}
        >
          <span>{title}</span>
          <svg
            className="pgr-accordion__icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        <div className="pgr-accordion__panel" role="region">
          <div className="pgr-accordion__panel-inner">
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  }
);

GlowAccordion.displayName = "GlowAccordion";
