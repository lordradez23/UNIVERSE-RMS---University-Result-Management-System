"use client";

import { useAuth } from "@/components/shared/auth-context";
import { Button } from "@/components/ui/Button";
import { 
  Users, 
  FileText, 
  UploadCloud, 
  BarChart, 
  CheckCircle2, 
  Clock 
} from "lucide-react";
import Link from "next/link";

export function LecturerDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">Educator Portal</h1>
          <p className="text-sm text-neutral-400">Welcome, {user?.fullName}. Here is your class management and submission overview.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/lecturer/results/upload">
            <Button className="h-10 px-6 bg-white text-black hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <UploadCloud className="mr-2 h-4 w-4" /> Secure Upload
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[{
          name: "Pending Uploads", value: "2", icon: Clock, color: "text-amber-400", bg: "bg-amber-500/10"
        }, {
          name: "Processed Results", value: "156", icon: CheckCircle2, color: "text-green-400", bg: "bg-green-500/10"
        }, {
          name: "Enrolled Students", value: "245", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10"
        }, {
          name: "Class Average", value: "76%", icon: BarChart, color: "text-purple-400", bg: "bg-purple-500/10"
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
              <p className="text-3xl font-black text-white mt-1 tracking-tighter">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-white/[0.01] border border-white/5 p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Active Workflows</h2>
              <p className="text-sm text-neutral-500">Your current grading assignments that require attention.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              { id: "CS-401 Final Exam", type: "Result Upload", count: 85, status: "Pending", due: "in 2 days" },
              { id: "MTH-205 Midterms", type: "Revaluation", count: 3, status: "Action Req.", due: "in 12 hrs" }
            ].map((task, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`h-2 w-2 rounded-full ${task.status === 'Pending' ? 'bg-amber-500 shadow-[0_0_8px_#f59e0b]' : 'bg-red-500 shadow-[0_0_8px_#ef4444]'}`} />
                  <div>
                    <p className="text-sm font-bold text-white tracking-tight">{task.id}</p>
                    <p className="text-xs text-neutral-500">{task.type} • {task.count} students</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-neutral-300">
                    {task.status}
                  </span>
                  <p className="text-[10px] text-neutral-500 mt-1 uppercase tracking-widest">{task.due}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white/[0.01] border border-white/5 p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">System Performance</h2>
              <p className="text-sm text-neutral-500">Class performance distribution across your modules.</p>
            </div>
            <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white hover:bg-white/5"><BarChart className="h-4 w-4" /></Button>
          </div>
          
          <div className="space-y-6">
             <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-neutral-400">
                   <span>A Grades (80-100)</span>
                   <span className="text-white">24%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5">
                   <div className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]" style={{width: '24%'}} />
                </div>
             </div>
             <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-neutral-400">
                   <span>B Grades (70-79)</span>
                   <span className="text-white">45%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5">
                   <div className="h-full bg-emerald-500 rounded-full" style={{width: '45%'}} />
                </div>
             </div>
             <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-neutral-400">
                   <span>C Grades (60-69)</span>
                   <span className="text-white">18%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5">
                   <div className="h-full bg-amber-500 rounded-full" style={{width: '18%'}} />
                </div>
             </div>
             <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-neutral-400">
                   <span>Fails (&lt;60)</span>
                   <span className="text-white">13%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/5">
                   <div className="h-full bg-red-500 rounded-full" style={{width: '13%'}} />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
