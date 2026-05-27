"use client";

import { useAuth } from "@/components/shared/auth-context";
import { Button } from "@/components/ui/Button";
import { LogOut, User as UserIcon } from "lucide-react";

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-white/5 bg-black/40 backdrop-blur-2xl px-6 md:px-10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-3">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
           <div className="absolute inset-0 rounded-xl bg-white opacity-20 blur-sm" />
           <span className="relative z-10 text-lg font-black tracking-tighter text-white">UN</span>
        </div>
        <span className="hidden text-sm font-medium tracking-widest text-neutral-400 md:inline uppercase">Universe RMS</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5 shadow-inner">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-600 border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <UserIcon className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-sm font-semibold text-white tracking-tight">{user?.fullName}</span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_#22c55e]" />
            {user?.role}
          </span>
        </div>
        <Button variant="ghost" size="sm" onClick={logout} className="h-10 px-4 gap-2 text-neutral-400 hover:text-white hover:bg-white/[0.05] border border-transparent hover:border-white/10 rounded-xl transition-all duration-300">
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline font-semibold">Terminate Session</span>
        </Button>
      </div>
    </header>
  );
}
