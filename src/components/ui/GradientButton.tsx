import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outline";
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, children, size = "md", variant = "filled", ...props }, ref) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    if (variant === "outline") {
      return (
        <motion.button
          ref={ref}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "relative rounded-lg font-semibold text-foreground gradient-border transition-all duration-300 hover:shadow-lg",
            sizeClasses[size],
            className
          )}
          {...(props as any)}
        >
          {children}
        </motion.button>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.03, boxShadow: "0 0 40px -5px hsl(325 90% 52% / 0.4)" }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          "gradient-bg rounded-lg font-semibold text-white transition-all duration-300 glow-pink",
          sizeClasses[size],
          className
        )}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);
GradientButton.displayName = "GradientButton";

export default GradientButton;
