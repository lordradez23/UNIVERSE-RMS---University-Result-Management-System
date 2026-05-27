"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/shared/auth-context";
import { cn } from "@/components/shared/utils";
import { 
  LayoutDashboard, 
  FileText, 
  Upload, 
  Users, 
  Settings,
  ShieldCheck
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  const links = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard, roles: ["STUDENT", "LECTURER", "ADMIN"] },
    { name: "My Results", href: "/results", icon: FileText, roles: ["STUDENT"] },
    { name: "Upload Results", href: "/lecturer/results/upload", icon: Upload, roles: ["LECTURER"] },
    { name: "Manage Users", href: "/admin/users", icon: Users, roles: ["ADMIN"] },
    { name: "All Results", href: "/admin/results", icon: ShieldCheck, roles: ["ADMIN"] },
  ];

  const filteredLinks = links.filter(link => link.roles.includes(user?.role || ""));

  return (
    <aside className="hidden w-64 flex-col border-r border-white/5 bg-white/[0.01] backdrop-blur-xl md:flex shadow-[4px_0_24px_rgba(0,0,0,0.5)] z-20">
      <nav className="flex-1 space-y-2 px-4 py-8">
        {filteredLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 relative overflow-hidden",
                isActive 
                  ? "text-white bg-white/[0.05] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                  : "text-neutral-400 border border-transparent hover:bg-white/[0.02] hover:border-white/5 hover:text-white"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full shadow-[0_0_10px_#fff]" />
              )}
              <Icon className={cn("h-5 w-5 transition-transform duration-300", isActive ? "scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "group-hover:scale-110")} />
              {link.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="border-t border-white/5 p-4 mb-4">
        <Link
          href="/profile"
          className={cn(
            "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 relative overflow-hidden",
            pathname === "/profile" 
              ? "text-white bg-white/[0.05] border border-white/10"
              : "text-neutral-400 border border-transparent hover:bg-white/[0.02] hover:border-white/5 hover:text-white"
          )}
        >
          {pathname === "/profile" && (
             <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full shadow-[0_0_10px_#fff]" />
          )}
          <Settings className={cn("h-5 w-5 transition-transform duration-300", pathname === "/profile" ? "scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "group-hover:rotate-45")} />
          Settings
        </Link>
      </div>
    </aside>
  );
}
