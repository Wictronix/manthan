"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

type MagneticButtonProps = {
    href: string;
    children: React.ReactNode;
};

export default function MagneticButton({
    href,
    children,
}: MagneticButtonProps) {
    const ref = useRef<HTMLAnchorElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, {
        stiffness: 140,
        damping: 18,
        mass: 0.25,
    });

    const springY = useSpring(y, {
        stiffness: 140,
        damping: 18,
        mass: 0.25,
    });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const strength = 0.35;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        x.set(deltaX * strength);
        y.set(deltaY * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative inline-block"
        >
            <Link
                ref={ref}
                href={href}
                className="relative inline-flex items-center justify-center"
            >
                {/* Button Body */}
                <span
                    className="
                        relative z-10 px-10 py-4 rounded-full
                        text-lg font-medium tracking-wide
                        text-white
                        bg-white/5 backdrop-blur-md
                        border border-white/10
                        shadow-[0_0_0_0_rgba(255,255,255,0)]
                        active:translate-y-[1px]
                        transition-shadow duration-300
                    "
                >
                    {children}
                </span>

                {/* Magnetic Field (invisible but essential) */}
                <span className="absolute -inset-16 rounded-full" />
            </Link>
        </motion.div>
    );
}
