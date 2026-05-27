"use client";

import { useAuth } from "@/components/shared/auth-context";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { 
  FileText, 
  Upload, 
  Users, 
  GraduationCap,
  BookOpen,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const { user } = useAuth();

  const stats = {
    STUDENT: [
      { name: "My GPA", value: "3.84", icon: GraduationCap, color: "text-blue-600" },
      { name: "Courses Completed", value: "12", icon: BookOpen, color: "text-green-600" },
      { name: "Current Semester", value: "Fall 2024", icon: Calendar, color: "text-orange-600" },
    ],
    LECTURER: [
      { name: "Classes Taught", value: "4", icon: BookOpen, color: "text-blue-600" },
      { name: "Results Uploaded", value: "148", icon: Upload, color: "text-green-600" },
      { name: "Pending Submissions", value: "2", icon: FileText, color: "text-orange-600" },
    ],
    ADMIN: [
      { name: "Total Users", value: "1,240", icon: Users, color: "text-blue-600" },
      { name: "Total Results", value: "8,432", icon: FileText, color: "text-green-600" },
      { name: "System Status", value: "Optimal", icon: ShieldCheck, color: "text-orange-600" },
    ],
  };

  const roleStats = stats[user?.role || "STUDENT"];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user?.fullName}</h1>
        <p className="mt-2 text-muted">Here is what's happening with your account today.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {roleStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.name} className="flex items-center gap-4 border-none shadow-md">
              <div className="rounded-full bg-neutral-100 p-3">
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-muted">{stat.name}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>A summary of your latest updates and notifications.</CardDescription>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-3 border-b pb-4 last:border-0 last:pb-0">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-medium">New result published for CS101</p>
                  <p className="text-xs text-muted">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks you might want to perform.</CardDescription>
          <div className="grid gap-2">
            {user?.role === "STUDENT" && (
              <Link href="/results">
                <Button variant="secondary" className="w-full justify-start">View All Results</Button>
              </Link>
            )}
            {user?.role === "LECTURER" && (
              <Link href="/lecturer/results/upload">
                <Button variant="secondary" className="w-full justify-start">Upload New Result</Button>
              </Link>
            )}
            {user?.role === "ADMIN" && (
              <Link href="/admin/users">
                <Button variant="secondary" className="w-full justify-start">Manage System Users</Button>
              </Link>
            )}
            <Link href="/profile">
              <Button variant="outline" className="w-full justify-start">Update Profile Settings</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

// Add missing icon import manually for clarity
function ShieldCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
