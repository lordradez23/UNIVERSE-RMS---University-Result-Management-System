import React from "react";
import { cn } from "@/components/shared/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("glass-card rounded-2xl p-8 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(255,255,255,0.05)]", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <h3 className={cn("text-3xl font-bold tracking-tighter text-white mb-2 leading-none", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={cn("text-base text-neutral-400 mb-6", className)}>
      {children}
    </p>
  );
}
