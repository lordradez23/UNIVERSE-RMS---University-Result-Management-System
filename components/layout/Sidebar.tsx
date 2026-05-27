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
    <aside className="hidden w-64 flex-col border-r bg-white md:flex">
      <nav className="flex-1 space-y-1 px-4 py-6">
        {filteredLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive 
                  ? "bg-primary text-white" 
                  : "text-neutral-600 hover:bg-neutral-100 hover:text-primary"
              )}
            >
              <Icon className="h-4 w-4" />
              {link.name}
            </Link>
          );
        })}
      </nav>
      
      <div className="border-t p-4">
        <Link
          href="/profile"
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors text-neutral-600 hover:bg-neutral-100 hover:text-primary",
            pathname === "/profile" && "bg-neutral-100 text-primary"
          )}
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </div>
    </aside>
  );
}
