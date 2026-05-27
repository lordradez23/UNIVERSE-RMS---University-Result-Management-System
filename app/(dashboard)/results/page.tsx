"use client";

import React, { useEffect, useState } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/Table";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Result } from "@/types";
import api from "@/components/shared/api";
import { formatDate } from "@/components/shared/utils";

export default function StudentResultsPage() {
  const [results, setResults] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await api.get("/results/me/");
        setResults(response.data);
      } catch (err: unknown) {
        console.error("Failed to fetch results:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Academic Results</h1>
        <p className="mt-2 text-muted">View your performance records across all semesters.</p>
      </div>

      <Card className="px-0 pt-6">
        <div className="px-6 pb-6">
          <CardTitle>Result Records</CardTitle>
          <CardDescription>All your verified academic results stored in the system.</CardDescription>
        </div>

        {isLoading ? (
          <div className="flex h-32 w-full items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        ) : results.length > 0 ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course Code</TableHead>
                <TableHead>Course Name</TableHead>
                <TableHead>Semester</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.id}>
                  <TableCell className="font-mono font-medium">{result.courseCode}</TableCell>
                  <TableCell>{result.courseName}</TableCell>
                  <TableCell>{result.semester}</TableCell>
                  <TableCell>{result.academicYear}</TableCell>
                  <TableCell>{result.score}</TableCell>
                  <TableCell>
                    <span className={cn(
                      "rounded-md px-2 py-1 text-xs font-bold",
                      ["A", "B+"].includes(result.grade) ? "bg-green-50 text-green-700" : 
                      ["D", "F"].includes(result.grade) ? "bg-red-50 text-red-700" : "bg-neutral-50 text-neutral-700"
                    )}>
                      {result.grade}
                    </span>
                  </TableCell>
                  <TableCell>{formatDate(result.updatedAt)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-sm font-medium text-muted">No results found in your account.</p>
            <p className="text-xs text-muted">Contact your lecturer if you expect a result to be posted.</p>
          </div>
        )}
      </Card>
    </div>
  );
}

// Internal helper for CN if needed or import
import { cn } from "@/components/shared/utils";
