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

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: RendererProps) => {
    if (completed) {
      return (
        <div className="core-active">
          CORE_SYSTEM_ACTIVE
        </div>
      );
    }

    return (
      <div className="countdown-row">
        <FlipCell value={days} label="Days" />
        <FlipCell value={hours} label="Hours" />
        <FlipCell value={minutes} label="Minutes" />
        <FlipCell value={seconds} label="Seconds" />
      </div>
    );
  };

  return (
    <section className="countdown-section">
      <div className="glass-card">
        <h2 className="heading">STARTS IN</h2>

        {mounted ? (
          <Countdown date={targetDate} renderer={renderer} />
        ) : (
          <div className="countdown-row opacity">
            <FlipCell value={0} label="Days" />
            <FlipCell value={0} label="Hours" />
            <FlipCell value={0} label="Minutes" />
            <FlipCell value={0} label="Seconds" />
          </div>
        )}
      </div>

      {/* GLOBAL + COMPONENT STYLES */}
      <style jsx global>{`
        /* ===== HARD STOP SCROLL FIX ===== */
        html,
        body {
          width: 100%;
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }

        /* ===== SECTION ===== */
        .countdown-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: linear-gradient(
            135deg,
            #05070c,
            #0b1220,
            #12091f
          );
        }

        /* ===== CARD ===== */
        .glass-card {
          max-width: 100%;
          padding: 3rem 3.5rem;
          border-radius: 20px;
          text-align: center;
          backdrop-filter: blur(18px);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.12),
            rgba(255, 255, 255, 0.04)
          );
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 0 60px rgba(0, 0, 0, 0.6);
          overflow: hidden;
        }

        /* ===== HEADING ===== */
        .heading {
          color: #fff;
          font-size: 1.4rem;
          margin-bottom: 2.5rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          opacity: 0.85;
        }

        /* ===== COUNTDOWN ROW ===== */
        .countdown-row {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          overflow: hidden;
        }

        /* ===== FLIP CELL ===== */
        .flip-wrapper {
          perspective: 1000px;
          width: 72px;
        }

        .flip-card {
          background: rgba(20, 20, 30, 0.9);
          border: 1px solid rgba(255, 78, 205, 0.35);
          border-radius: 12px;
          padding: 1rem 0;
          text-align: center;
          animation: flip 0.6s ease;
          box-shadow:
            0 0 18px rgba(255, 78, 205, 0.15),
            inset 0 0 18px rgba(0, 0, 0, 0.6);
        }

        .flip-wrapper:hover .flip-card {
          border-color: rgba(255, 78, 205, 0.9);
          box-shadow:
            0 0 30px rgba(255, 78, 205, 0.9),
            0 0 70px rgba(255, 78, 205, 0.45);
        }

        .flip-value {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          font-variant-numeric: tabular-nums;
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
        }

        .flip-label {
          margin-top: 0.45rem;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.6);
        }

        /* ===== CORE ACTIVE ===== */
        .core-active {
          font-size: 3rem;
          font-weight: 800;
          color: #ff4ecd;
          text-shadow:
            0 0 15px rgba(255, 78, 205, 0.9),
            0 0 40px rgba(255, 78, 205, 0.6);
          animation: pulse 1.4s infinite;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes flip {
          from {
            transform: rotateX(90deg);
            opacity: 0;
          }
          to {
            transform: rotateX(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.7;
          }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 640px) {
          .glass-card {
            padding: 2rem;
          }

          .flip-wrapper {
            width: 58px;
          }

          .flip-value {
            font-size: 1.5rem;
          }

          .flip-label {
            font-size: 0.5rem;
          }

          .countdown-row {
            gap: 1rem;
          }
        }

        .opacity {
          opacity: 0.4;
        }
      `}</style>
    </section>
  );
}

const FlipCell = ({ value, label }: { value: number; label: string }) => (
  <div className="flip-wrapper">
    <div key={value} className="flip-card">
      <div className="flip-value">
        {value < 10 ? `0${value}` : value}
      </div>
    </div>
    <div className="flip-label">{label}</div>
  </div>
);
