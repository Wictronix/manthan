"use client";

import { useEffect, useRef } from "react";

const AmbientBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Configuration
        const particleCount = 100; // Reduced for clarity
        const connectionDistance = 150;
        const mouseParams = { x: -1000, y: -1000, radius: 200 };

        // Wave Config
        const wave = {
            y: height * 0.8,
            length: 0.01,
            amplitude: 50,
            frequency: 0.01,
            speed: 0.05, // Speed of the wave
            offset: 0
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 1.5 + 0.5; // Smaller particles
                this.color = Math.random() > 0.5 ? "rgba(236, 72, 153, 0.3)" : "rgba(167, 139, 250, 0.3)"; // Lower opacity
            }

            update(mouseX: number, mouseY: number) {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseParams.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseParams.radius - distance) / mouseParams.radius;
                    const directionX = forceDirectionX * force * 3;
                    const directionY = forceDirectionY * force * 3;
                    this.x -= directionX;
                    this.y -= directionY;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const drawLines = () => {
            if (!ctx) return;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = 1 - distance / connectionDistance;
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(167, 139, 250, ${opacity * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const drawWave = () => {
            if (!ctx) return;

            ctx.beginPath();
            ctx.moveTo(0, height);

            for (let i = 0; i < width; i++) {
                const y = height - 100 + Math.sin(i * wave.length + wave.offset) * wave.amplitude * Math.sin(wave.offset * 0.5);
                ctx.lineTo(i, y);
            }

            ctx.lineTo(width, height);
            ctx.fillStyle = "rgba(124, 58, 237, 0.03)";
            ctx.fill();

            ctx.strokeStyle = "rgba(236, 72, 153, 0.1)";
            ctx.lineWidth = 2;
            ctx.stroke();

            wave.offset += wave.speed;
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.update(mouseParams.x, mouseParams.y);
                p.draw();
            });

            drawLines();
            drawWave();

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseParams.x = e.clientX;
            mouseParams.y = e.clientY;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        initParticles();
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[1]"
            style={{ mixBlendMode: "normal" }}
        />
    );
};

export { AmbientBackground };
