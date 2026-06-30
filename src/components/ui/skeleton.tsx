/**
 * PHX-IT • Phoenix UI
 * © Skyler Jones — All rights reserved.
 * https://phoenixsecure.dev
 */
import { cn } from "../../lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />;
}

export { Skeleton };
