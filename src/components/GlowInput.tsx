import React from "react";

export interface GlowInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

/**
 * GlowInput — a text field with a neon focus glow.
 */
export const GlowInput = React.forwardRef<HTMLInputElement, GlowInputProps>(
  ({ value, onChange, placeholder, className, ...rest }, ref) => {
    const classes = ["pgr-input", className ?? ""].filter(Boolean).join(" ");

    return (
      <input
        ref={ref}
        className={classes}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);

GlowInput.displayName = "GlowInput";
