import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: "pink" | "purple" | "teal" | "none";
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glow = "none", children, ...props }, ref) => {
    const glowClass = {
      pink: "glow-pink",
      purple: "glow-purple",
      teal: "glow-teal",
      none: "",
    };

    return (
      <div
        ref={ref}
        className={cn("glass rounded-xl p-6", glowClass[glow], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";

export default GlassCard;
