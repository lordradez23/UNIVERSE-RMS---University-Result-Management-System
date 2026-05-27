"use client";

import { useAuth } from "@/components/shared/auth-context";
import { StudentDashboard } from "@/components/dashboards/StudentDashboard";
import { LecturerDashboard } from "@/components/dashboards/LecturerDashboard";
import { AdminDashboard } from "@/components/dashboards/AdminDashboard";

export default function DashboardPage() {
  const { user } = useAuth();
  
  // Guard the rendering (though AuthGuard in layout should handle undefined users)
  if (!user) return <div className="p-8 text-neutral-500 animate-pulse text-sm">Initializing secure workspace...</div>;

  // Context-aware Router
  if (user.role === "ADMIN") {
    return <AdminDashboard />;
  }

  if (user.role === "LECTURER") {
    return <LecturerDashboard />;
  }

  // Default to student view for STUDENT role
  return <StudentDashboard />;
}
