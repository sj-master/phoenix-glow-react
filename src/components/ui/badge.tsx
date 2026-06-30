/**
 * PHX-IT • Phoenix UI
 * © Skyler Jones — All rights reserved.
 * https://phoenixsecure.dev
 */
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-phoenix-orange/50 bg-phoenix-orange/10 text-phoenix-orange hover:bg-phoenix-orange/20",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border-border",
        phoenix: "border-phoenix-orange/50 bg-phoenix-orange/10 text-phoenix-orange hover:bg-phoenix-orange/20 phoenix-glow-orange",
        pink: "border-phoenix-pink/50 bg-phoenix-pink/10 text-phoenix-pink hover:bg-phoenix-pink/20 phoenix-glow-pink",
        purple: "border-phoenix-purple/50 bg-phoenix-purple/10 text-phoenix-purple hover:bg-phoenix-purple/20 phoenix-glow-purple",
        blue: "border-phoenix-blue/50 bg-phoenix-blue/10 text-phoenix-blue hover:bg-phoenix-blue/20 phoenix-glow-blue",
        cyan: "border-phoenix-cyan/50 bg-phoenix-cyan/10 text-phoenix-cyan hover:bg-phoenix-cyan/20 phoenix-glow-cyan",
        green: "border-phoenix-green/50 bg-phoenix-green/10 text-phoenix-green hover:bg-phoenix-green/20 phoenix-glow-green",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
