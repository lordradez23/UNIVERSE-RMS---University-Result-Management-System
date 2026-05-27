"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import api from "@/components/shared/api";
import { UserRole } from "@/types";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "STUDENT" as UserRole,
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await api.post("/register/", formData);
      router.push("/login?message=registration_success");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Registration failed. Please try again.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 texture-grid" />
      <div className="absolute inset-0 z-0 texture-noise" />
      
      <div className="absolute top-6 left-6 z-10">
        <Link href="/">
          <Button variant="ghost" className="h-12 w-12 p-0 flex items-center justify-center text-neutral-400 hover:text-white border border-transparent hover:border-white/10 hover:bg-white/5 transition-all">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
      </div>
      <div className="w-full max-w-md py-12 relative z-10">
        <Card>
          <div className="mb-8 text-center">
            <CardTitle className="text-3xl">Create Account</CardTitle>
            <CardDescription>
              Join the academic portal as a Student, Lecturer, or Administrator
            </CardDescription>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
            <Input
              label="Email Address"
              type="email"
              placeholder="john@university.edu"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />

            <div className="space-y-2">
              <label className="text-sm font-semibold text-neutral-300 tracking-tight">I am a...</label>
              <div className="grid grid-cols-3 gap-2">
                {["STUDENT", "LECTURER", "ADMIN"].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setFormData({ ...formData, role: r as UserRole })}
                    className={`rounded-xl border py-2.5 text-xs font-bold tracking-widest transition-all duration-200 ${
                      formData.role === r
                        ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                        : "bg-black/50 text-neutral-500 border-white/10 hover:bg-white/5 hover:text-neutral-300"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="rounded-xl bg-red-500/10 p-3 text-sm font-medium text-red-500 border border-red-500/20 text-center">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full" isLoading={isLoading}>
              Register
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-neutral-400">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-white hover:text-neutral-300 transition-colors">
              Sign In
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
