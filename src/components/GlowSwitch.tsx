import React from "react";

export interface GlowSwitchProps {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  "aria-label"?: string;
  className?: string;
}

/**
 * GlowSwitch — an accessible toggle with a glowing "on" state.
 */
export const GlowSwitch = React.forwardRef<HTMLButtonElement, GlowSwitchProps>(
  ({ checked, onChange, disabled, className, id, ...rest }, ref) => {
    const classes = ["pgr-switch", className ?? ""].filter(Boolean).join(" ");

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        id={id}
        aria-checked={checked}
        disabled={disabled}
        className={classes}
        onClick={() => onChange?.(!checked)}
        {...rest}
      >
        <span className="pgr-switch__thumb" />
      </button>
    );
  }
);

GlowSwitch.displayName = "GlowSwitch";
