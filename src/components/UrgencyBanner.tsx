
"use client";
import { useEffect, useState } from "react";
import { Timer, Zap } from "lucide-react";

export default function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({ h: 23, m: 59, s: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-primary/5 py-8 px-6 my-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="bg-primary/20 p-4 rounded-3xl animate-pulse">
            <Zap className="w-8 h-8 text-primary fill-current" />
          </div>
          <div>
            <h3 className="font-bold text-2xl text-foreground">Next Collection Batch Closing Soon!</h3>
            <p className="text-muted-foreground italic">Over 15 custom orders placed in the last hour</p>
          </div>
        </div>

        <div className="flex items-center gap-4 glass p-4 rounded-[2rem] border-primary/20">
          <Timer className="w-6 h-6 text-primary" />
          <div className="text-center px-4">
            <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground mb-1">Weekly Order Window ends in</p>
            <div className="flex items-center gap-3 text-2xl font-black text-primary font-mono tabular-nums">
              <span>{String(timeLeft.h).padStart(2, '0')}</span>
              <span className="opacity-50 text-sm">:</span>
              <span>{String(timeLeft.m).padStart(2, '0')}</span>
              <span className="opacity-50 text-sm">:</span>
              <span>{String(timeLeft.s).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
    </section>
  );
}
