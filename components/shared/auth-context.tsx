"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { User, AuthTokens, AuthContextType } from "@/types";
import api from "@/components/shared/api";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [tokens, setTokens] = useState<AuthTokens | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadSession = async () => {
      const storedTokens = localStorage.getItem("auth_tokens");
      if (storedTokens) {
        try {
          const parsedTokens: AuthTokens = JSON.parse(storedTokens);
          setTokens(parsedTokens);
          
          // Fetch user profile
          const response = await api.get("/profile/");
          setUser(response.data);
      } catch (error: unknown) {
        console.error("Failed to load session:", error);
        localStorage.removeItem("auth_tokens");
      }
      }
      setIsLoading(false);
    };

    loadSession();
  }, []);

  const login = async (newTokens: AuthTokens) => {
    localStorage.setItem("auth_tokens", JSON.stringify(newTokens));
    setTokens(newTokens);
    
    // Fetch profile after login
    try {
      const response = await api.get("/profile/");
      setUser(response.data);
      router.push("/dashboard");
    } catch (error: unknown) {
      console.error("Failed to fetch profile after login:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("auth_tokens");
    setUser(null);
    setTokens(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, tokens, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
