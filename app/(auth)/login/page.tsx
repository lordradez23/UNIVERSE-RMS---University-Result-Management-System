"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { useAuth } from "@/components/shared/auth-context";
import api from "@/components/shared/api";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await api.post("/login/", { email, password });
      await login(response.data);
      router.push("/dashboard");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Invalid credentials. Please try again.");
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
      <div className="w-full max-w-md relative z-10">
        <Card>
          <div className="mb-8 text-center">
            <CardTitle className="text-3xl">Sign In</CardTitle>
            <CardDescription>
              Enter your credentials to access the Result Management System
            </CardDescription>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="name@university.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && (
              <div className="rounded-xl bg-red-500/10 p-3 text-sm font-medium text-red-500 border border-red-500/20 text-center">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full" isLoading={isLoading}>
              Sign In
            </Button>
          </form>

          <div className="mt-8 text-center text-sm text-neutral-400">
            Don't have an account?{" "}
            <Link href="/register" className="font-semibold text-white hover:text-neutral-300 transition-colors">
              Register here
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
