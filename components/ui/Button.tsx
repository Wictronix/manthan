"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import React from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      href,
      variant = "primary",
      size = "md",
      fullWidth,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        "relative overflow-hidden rounded-xl text-white font-semibold \
        bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#22D3EE] \
        bg-[length:200%_200%] animate-gradient \
        border border-white/10 \
        shadow-[0_0_30px_rgba(236,72,153,0.45)] \
        hover:shadow-[0_0_45px_rgba(236,72,153,0.85)]",

      secondary:
        "relative overflow-hidden rounded-xl \
        bg-transparent text-neon-magenta \
        border border-neon-magenta/60 \
        hover:bg-neon-magenta/10 \
        hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]",

      accent:
        "relative overflow-hidden rounded-xl \
        bg-neon-magenta text-white \
        hover:bg-pink-600 \
        hover:shadow-[0_0_30px_rgba(236,72,153,0.7)]",

      outline:
        "relative overflow-hidden rounded-xl \
        bg-transparent text-white \
        border border-white/20 \
        hover:border-neon-magenta/60 \
        hover:bg-neon-magenta/5 \
        hover:text-neon-magenta",

      ghost:
        "relative overflow-hidden rounded-xl \
        bg-transparent text-text-muted \
        hover:text-white hover:bg-white/5",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs uppercase tracking-wider",
      md: "px-6 py-3 text-sm uppercase tracking-wider",
      lg: "px-8 py-4 text-base font-bold uppercase tracking-widest",
    };

    const classes = cn(
      "inline-flex items-center justify-center transition-all duration-300 \
      focus:outline-none disabled:opacity-50 disabled:pointer-events-none \
      group",
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className
    );

    const animationProps = {
      whileHover: { scale: 1.04, y: -3 },
      whileTap: { scale: 0.96 },
      transition: { type: "spring", stiffness: 420, damping: 18 } as const,
    };

    const ButtonContent = (
      <>
        {/* Neon Ring */}
        <span className="absolute inset-0 rounded-xl ring-1 ring-white/20 group-hover:ring-neon-magenta/70 transition-all duration-300" />

        {/* Inner Glow */}
        <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Shimmer */}
        {variant === "primary" && (
          <span className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.2s_linear] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        )}

        <span className="relative z-10">{children}</span>
      </>
    );

    if (href) {
      return (
        <Link href={href} className={fullWidth ? "w-full" : ""}>
          <motion.button {...animationProps} className={classes} {...(props as any)}>
            {ButtonContent}
          </motion.button>
        </Link>
      );
    }

    return (
      <motion.button ref={ref} {...animationProps} className={classes} {...props}>
        {ButtonContent}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
