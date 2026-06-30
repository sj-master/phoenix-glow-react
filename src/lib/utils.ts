import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names with Tailwind-aware conflict resolution.
 * Bundled into phoenix-glow-react so components are self-contained.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
