"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import api from "@/components/shared/api";
import { AuthGuard } from "@/components/layout/AuthGuard";

export default function UploadResultsPage() {
  const [formData, setFormData] = useState({
    studentId: "",
    courseCode: "",
    courseName: "",
    score: "",
    semester: "Semester 1",
    academicYear: "2024/2025",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccess(false);

    try {
      await api.post("/lecturer/results/", {
        ...formData,
        score: parseFloat(formData.score),
      });
      setSuccess(true);
      setFormData({
        studentId: "",
        courseCode: "",
        courseName: "",
        score: "",
        semester: "Semester 1",
        academicYear: "2024/2025",
      });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      alert("Failed to upload result. Please check the data and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthGuard allowedRoles={["LECTURER", "ADMIN"]}>
      <div className="mx-auto max-w-2xl space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Upload Results</h1>
          <p className="mt-2 text-muted">Submit undergraduate results to the system database.</p>
        </div>

        <Card>
          <CardTitle>Result Details</CardTitle>
          <CardDescription>Enter the student information and course performance details.</CardDescription>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Student ID"
                placeholder="REG/2024/001"
                value={formData.studentId}
                onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                required
              />
              <Input
                label="Score (0-100)"
                type="number"
                min="0"
                max="100"
                placeholder="85"
                value={formData.score}
                onChange={(e) => setFormData({ ...formData, score: e.target.value })}
                required
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Course Code"
                placeholder="CS101"
                value={formData.courseCode}
                onChange={(e) => setFormData({ ...formData, courseCode: e.target.value })}
                required
              />
              <Input
                label="Course Name"
                placeholder="Intro to Programming"
                value={formData.courseName}
                onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                required
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Semester</label>
                <select 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.semester}
                  onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                >
                  <option>Semester 1</option>
                  <option>Semester 2</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Academic Year</label>
                <select 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  value={formData.academicYear}
                  onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                >
                  <option>2023/2024</option>
                  <option>2024/2025</option>
                </select>
              </div>
            </div>

            {success && (
              <div className="rounded-md bg-green-50 p-4 text-sm font-medium text-green-700 border border-green-100">
                Result uploaded successfully!
              </div>
            )}

            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
              <Button type="submit" isLoading={isLoading}>Submit Result</Button>
            </div>
          </form>
        </Card>
      </div>
    </AuthGuard>
  );
}
