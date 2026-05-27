"use client";

import { useAuth } from "@/components/shared/auth-context";
import { Button } from "@/components/ui/Button";
import { 
  Users, 
  ShieldAlert, 
  Database, 
  Server, 
  Activity, 
  Settings 
} from "lucide-react";
import Link from "next/link";

export function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">Command Center</h1>
          <p className="text-sm text-neutral-400">Welcome, {user?.fullName}. Here is the global system status.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/admin/users">
            <Button variant="outline" className="h-10 px-4 text-xs bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:text-white transition-all text-neutral-300">
              <Users className="mr-2 h-4 w-4" /> Manage Directory
            </Button>
          </Link>
          <Button variant="outline" className="h-10 px-4 text-xs bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:text-white transition-all text-neutral-300">
            <Settings className="mr-2 h-4 w-4" /> System Config
          </Button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[{
          name: "Active Sessions", value: "2,841", icon: Activity, color: "text-emerald-400", bg: "bg-emerald-500/10"
        }, {
          name: "Total Profiles", value: "14.5k", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10"
        }, {
          name: "Stored Results", value: "1.2M", icon: Database, color: "text-purple-400", bg: "bg-purple-500/10"
        }, {
          name: "Server Load", value: "18%", icon: Server, color: "text-rose-400", bg: "bg-rose-500/10"
        }].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 p-6 hover:bg-white/[0.04] transition-colors group">
              <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
                <Icon className={`h-24 w-24 ${stat.color}`} />
              </div>
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg} mb-4 border border-white/5`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <p className="text-sm font-medium text-neutral-400 tracking-tight">{stat.name}</p>
              <div className="flex items-center gap-3 mt-1">
                 <p className="text-3xl font-black text-white tracking-tighter">{stat.value}</p>
                 {stat.name === "Server Load" && (
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                 )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-black/60 border border-white/5 p-8 relative overflow-hidden flex flex-col">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-amber-500" />
                Security & Audit Logs
              </h2>
              <p className="text-sm text-neutral-500">Live feed of critical infrastructure events.</p>
            </div>
          </div>
          
          <div className="space-y-1 flex-1 font-mono text-[10px] leading-relaxed">
            <div className="flex items-center gap-4 text-emerald-400">
               <span>[10:42:01]</span>
               <span>AUTH_SUCCESS</span>
               <span className="text-neutral-500">Node-7: User ID 4092 logged in securely.</span>
            </div>
            <div className="flex items-center gap-4 text-amber-400">
               <span>[10:42:05]</span>
               <span>PERM_OVERRIDE</span>
               <span className="text-neutral-500">Node-2: Admin accessed locked transcript #829.</span>
            </div>
            <div className="flex items-center gap-4 text-emerald-400">
               <span>[10:45:12]</span>
               <span>BULK_UPLOAD</span>
               <span className="text-neutral-500">Node-1: Professor Davis uploaded 145 CSV records.</span>
            </div>
            <div className="flex items-center gap-4 text-rose-500">
               <span>[10:48:33]</span>
               <span>FAILED_AUTH</span>
               <span className="text-neutral-500">Node-9: Invalid password attempt from IP 192.168.1.5.</span>
            </div>
            <div className="flex items-center gap-4 text-emerald-400">
               <span>[10:50:00]</span>
               <span>SYSTEM_CHECK</span>
               <span className="text-neutral-500">Core: Automated daily ledger sync completed. Database optimal.</span>
            </div>
            <div className="flex items-center gap-4 text-blue-400 opacity-50 absolute bottom-8">
               <span className="animate-pulse">_ Awaiting live events...</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="rounded-3xl bg-white/[0.01] border border-white/5 p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Pending Authorizations</h2>
              <p className="text-sm text-neutral-500">Approvals required for system overrides or result modifications.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { id: "REQ-7294", type: "Grade Revaluation", requestedBy: "Prof. Smith", status: "Awaiting Admin" },
              { id: "REQ-7295", type: "Account Unlock", requestedBy: "Student 18X94", status: "Awaiting Admin" },
              { id: "REQ-7296", type: "Curriculum Change", requestedBy: "Head of Dept", status: "Awaiting Board" }
            ].map((req, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors gap-4 sm:gap-0">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-mono text-white">{req.id}</span>
                    <p className="text-sm font-bold text-white">{req.type}</p>
                  </div>
                  <p className="text-xs text-neutral-500">Requested by: <span className="text-neutral-300">{req.requestedBy}</span></p>
                </div>
                <Button size="sm" variant="outline" className="h-8 text-xs border-white/10 bg-transparent hover:bg-white/10">Read & Approve</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
