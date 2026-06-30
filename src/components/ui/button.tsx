/**
 * PHX-IT • Phoenix UI
 * © Skyler Jones — All rights reserved.
 * https://phoenixsecure.dev
 */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-phoenix-orange text-white hover:bg-phoenix-orange/90 border border-phoenix-orange/50 phoenix-glow-orange",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-phoenix-orange/50 bg-background hover:bg-phoenix-orange/10 hover:border-phoenix-orange text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-phoenix-orange underline-offset-4 hover:underline",
        phoenix: "bg-phoenix-orange text-white hover:bg-phoenix-orange/90 border border-phoenix-orange/50 phoenix-glow-orange",
        pink: "bg-phoenix-pink text-white hover:bg-phoenix-pink/90 border border-phoenix-pink/50 phoenix-glow-pink",
        purple: "bg-phoenix-purple text-white hover:bg-phoenix-purple/90 border border-phoenix-purple/50 phoenix-glow-purple",
        blue: "bg-phoenix-blue text-white hover:bg-phoenix-blue/90 border border-phoenix-blue/50 phoenix-glow-blue",
        cyan: "bg-phoenix-cyan text-white hover:bg-phoenix-cyan/90 border border-phoenix-cyan/50 phoenix-glow-cyan",
        green: "bg-phoenix-green text-white hover:bg-phoenix-green/90 border border-phoenix-green/50 phoenix-glow-green",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "phoenix",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
