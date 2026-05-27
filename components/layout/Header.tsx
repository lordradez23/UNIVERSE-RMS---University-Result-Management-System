"use client";

import { useAuth } from "@/components/shared/auth-context";
import { Button } from "@/components/ui/Button";
import { LogOut, User as UserIcon } from "lucide-react";

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-white px-6">
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold tracking-tight">RMS</span>
        <span className="hidden text-muted md:inline">| Result Management System</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-2 py-1 text-sm font-medium">
          <UserIcon className="h-4 w-4" />
          <span>{user?.fullName}</span>
          <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] uppercase text-neutral-600">
            {user?.role}
          </span>
        </div>
        <Button variant="ghost" size="sm" onClick={logout} className="gap-2">
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Logout</span>
        </Button>
      </div>
    </header>
  );
}
