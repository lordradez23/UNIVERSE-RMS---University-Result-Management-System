"use client";

import { useAuth } from "@/components/shared/auth-context";
import { Button } from "@/components/ui/Button";
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Download, 
  BellRing, 
  TrendingUp, 
  Award 
} from "lucide-react";
import Link from "next/link";

export function StudentDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2">Welcome back, {user?.fullName}</h1>
          <p className="text-sm text-neutral-400">Here is your academic progress overview for the current semester.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-10 px-4 text-xs bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:text-white transition-all text-neutral-300">
            <Download className="mr-2 h-4 w-4" /> Get Transcript
          </Button>
          <Button variant="outline" className="h-10 px-4 text-xs bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:text-white transition-all text-neutral-300">
            <BellRing className="mr-2 h-4 w-4" /> Alerts
          </Button>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[{
          name: "Cumulative GPA", value: "3.84", icon: TrendingUp, color: "text-blue-400", bg: "bg-blue-500/10"
        }, {
          name: "Current Semester", value: "Fall 2024", icon: Calendar, color: "text-emerald-400", bg: "bg-emerald-500/10"
        }, {
          name: "Credits Earned", value: "48", icon: Award, color: "text-purple-400", bg: "bg-purple-500/10"
        }, {
          name: "Active Courses", value: "5", icon: BookOpen, color: "text-amber-400", bg: "bg-amber-500/10"
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

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 rounded-3xl bg-white/[0.01] border border-white/5 p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">Recent Academic History</h2>
              <p className="text-sm text-neutral-500">Your latest published results.</p>
            </div>
            <Link href="/results">
              <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white hover:bg-white/5">View All</Button>
            </Link>
          </div>
          
          <div className="space-y-6">
            {[
              { course: "CS-301: Advanced Data Structures", grade: "A", points: "4.0", date: "2 days ago" },
              { course: "MTH-205: Linear Algebra", grade: "A-", points: "3.7", date: "1 week ago" },
              { course: "PHY-110: Quantum Physics I", grade: "B+", points: "3.3", date: "2 weeks ago" }
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                  <div>
                    <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{item.course}</p>
                    <p className="text-xs font-mono text-neutral-500">{item.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-black text-white">{item.grade}</p>
                    <p className="text-[10px] text-neutral-500 uppercase tracking-widest">{item.points} PTS</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white/[0.01] border border-white/5 p-8 relative overflow-hidden flex flex-col items-center text-center">
           <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent opacity-50" />
           <h2 className="text-lg font-bold text-white tracking-tight w-full text-left mb-8 pb-4 border-b border-white/5 relative z-10">GPA Trajectory</h2>
           
           {/* Visual Ring Mockup */}
           <div className="relative flex items-center justify-center h-48 w-48 mb-8 relative z-10">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" strokeDasharray="552.9" strokeDashoffset="55" strokeLinecap="round" />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                 <span className="text-4xl font-black text-white tracking-tighter">3.84</span>
                 <span className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Top 15%</span>
              </div>
           </div>
           
           <p className="text-sm text-neutral-400 relative z-10">You are securely traversing your academic trajectory. Keep it up!</p>
        </div>
      </div>
    </div>
  );
}
