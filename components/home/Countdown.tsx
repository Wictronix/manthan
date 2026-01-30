"use client";

import { useEffect, useState } from "react";
import Countdown from "react-countdown";

interface RendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const targetDate = new Date("2026-02-12T00:00:00");

  useEffect(() => setMounted(true), []);

  const renderer = ({ days, hours, minutes, seconds, completed }: RendererProps) => {
    if (completed) {
      return (
        <div className="text-4xl md:text-6xl font-bold text-neon animate-pulse">
          CORE_SYSTEM_ACTIVE
        </div>
      );
    }

    return (
      <div className="flex gap-6 md:gap-10">
        <FlipCell value={days} label="Days" />
        <FlipCell value={hours} label="Hours" />
        <FlipCell value={minutes} label="Minutes" />
        <FlipCell value={seconds} label="Seconds" />
      </div>
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#05070c] via-[#0b1220] to-[#12091f] px-4">
      <div className="glass-card">
        <h2 className="heading">STARTS IN </h2>

        {mounted ? (
          <Countdown date={targetDate} renderer={renderer} />
        ) : (
          <div className="flex gap-6 md:gap-10 opacity-40">
            <FlipCell value={0} label="Days" />
            <FlipCell value={0} label="Hours" />
            <FlipCell value={0} label="Minutes" />
            <FlipCell value={0} label="Seconds" />
          </div>
        )}
      </div>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        .glass-card {
          backdrop-filter: blur(18px);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.12),
            rgba(255, 255, 255, 0.04)
          );
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 20px;
          padding: 3rem 4rem;
          box-shadow: 0 0 60px rgba(0, 0, 0, 0.6);
          text-align: center;
        }

        .heading {
          color: #ffffff;
          font-size: 1.5rem;
          margin-bottom: 2.5rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.85;
        }

        .neon {
          color: #ff4ecd;
          text-shadow:
            0 0 10px rgba(255, 78, 205, 0.8),
            0 0 25px rgba(255, 78, 205, 0.6);
        }

        .flip-wrapper {
          perspective: 1000px;
        }

        .flip-card {
          background: rgba(20, 20, 30, 0.9);
          border: 1px solid rgba(255, 78, 205, 0.3);
          border-radius: 12px;
          padding: 1.5rem 1.75rem;
          min-width: 90px;
          text-align: center;
          transform-style: preserve-3d;
          animation: flip 0.6s ease-in-out;
          box-shadow:
            0 0 15px rgba(255, 78, 205, 0.15),
            inset 0 0 20px rgba(0, 0, 0, 0.6);
          transition: box-shadow 0.4s, border-color 0.4s;
        }

        .flip-wrapper:hover .flip-card {
          border-color: rgba(255, 78, 205, 0.9);
          box-shadow:
            0 0 25px rgba(255, 78, 205, 0.9),
            0 0 60px rgba(255, 78, 205, 0.5);
        }

        .flip-value {
          font-size: 3rem;
          font-weight: 700;
          color: white;
          font-variant-numeric: tabular-nums;
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
        }

        .flip-label {
          margin-top: 0.75rem;
          font-size: 0.7rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
        }

        @keyframes flip {
          0% {
            transform: rotateX(90deg);
            opacity: 0;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

const FlipCell = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className="flip-wrapper">
      <div key={value} className="flip-card">
        <div className="flip-value">
          {value < 10 ? `0${value}` : value}
        </div>
      </div>
      <div className="flip-label">{label}</div>
    </div>
  );
};
