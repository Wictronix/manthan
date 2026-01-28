"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    background?: "default" | "dark" | "elevated" | "none";
    pattern?: "grid" | "dot" | "none";
    mask?: "radial" | "linear" | "none";
    showOrbs?: boolean;
    orbColor?: "primary" | "secondary";
}

const Section = ({
    className,
    children,
    container = true,
    background = "default",
    pattern = "none",
    mask = "none",
    showOrbs = false,
    orbColor = "primary",
    ...props
}: SectionProps) => {
    const backgrounds = {
        default: "bg-transparent",
        dark: "bg-secondary-surface",
        elevated: "bg-elevated-section",
        none: "bg-transparent",
    };

    const patterns = {
        grid: "bg-grid",
        dot: "bg-dot",
        none: "",
    };

    const masks = {
        radial: "mask-radial-fade",
        linear: "mask-linear-fade",
        none: "",
    };

    const orbs = {
        primary: "bg-grad-mid/10 shadow-[0_0_100px_rgba(124,58,237,0.1)]",
        secondary: "bg-neon-magenta/5 shadow-[0_0_100px_rgba(236,72,153,0.05)]",
    };

    return (
        <section
            className={cn(
                "py-20 md:py-32 relative overflow-hidden",
                backgrounds[background],
                className
            )}
            {...props}
        >
            {/* Pattern Layer */}
            {pattern !== "none" && (
                <div className={cn(
                    "absolute inset-0 z-0 opacity-[0.05]",
                    patterns[pattern],
                    masks[mask]
                )} />
            )}

            {/* Ambient Orbs */}
            {showOrbs && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                    <div className={cn(
                        "absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[120px] animate-float",
                        orbs[orbColor]
                    )} />
                    <div className={cn(
                        "absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full blur-[100px] animate-float",
                        orbs[orbColor === "primary" ? "secondary" : "primary"]
                    )} style={{ animationDelay: '2s' }} />
                </div>
            )}

            {container ? (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};

export { Section };
