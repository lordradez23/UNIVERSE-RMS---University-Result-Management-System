"use client";

import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { AuthGuard } from "@/components/layout/AuthGuard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex h-screen flex-col overflow-hidden bg-black text-white relative">
        {/* Animated Texture Backgrounds */}
        <div className="absolute inset-0 z-0 texture-grid opacity-30 pointer-events-none" />
        <div className="absolute inset-0 z-0 texture-noise pointer-events-none" />

        <div className="relative z-10 flex h-full flex-col">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-8 md:py-10 bg-black/40">
              <div className="mx-auto max-w-7xl animate-fade-in relative z-10">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
