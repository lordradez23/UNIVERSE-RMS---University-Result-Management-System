import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { GraduationCap, ShieldCheck, UserCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="flex h-20 w-full items-center justify-between border-b px-6 md:px-20">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8" />
          <span className="text-2xl font-bold tracking-tighter">UNIVERSE RMS</span>
        </div>
        <nav className="hidden gap-8 md:flex">
          <Link href="/login" className="text-sm font-medium hover:underline">Support</Link>
          <Link href="/login" className="text-sm font-medium hover:underline">About</Link>
        </nav>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link href="/register">
            <Button>Get Started</Button>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
            Streamlining Academic <br /> Excellence Management
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted">
            The secure portal for students, lecturers, and administrators to manage results, 
            track performance, and maintain academic integrity across the university.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/login">
              <Button size="lg" className="h-14 px-10 text-lg">Access Portal</Button>
            </Link>
            <Link href="/register">
              <Button size="lg" variant="outline" className="h-14 px-10 text-lg">Create Account</Button>
            </Link>
          </div>
        </div>

        <div className="mt-32 grid gap-12 sm:grid-cols-3 md:mt-48">
          <div className="flex flex-col items-center space-y-4">
            <div className="rounded-2xl bg-neutral-100 p-4">
              <UserCheck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Role-Based Access</h3>
            <p className="text-muted">Tailored dashboards for students, faculty, and admins.</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="rounded-2xl bg-neutral-100 p-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Secure Verification</h3>
            <p className="text-muted">State-of-the-art encryption protecting academic records.</p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <div className="rounded-2xl bg-neutral-100 p-4">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Real-time Analytics</h3>
            <p className="text-muted">Instant insights into student performance and progress.</p>
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-12 text-center text-sm text-muted">
        © 2024 University Result Management System. All rights reserved.
      </footer>
    </div>
  );
}
