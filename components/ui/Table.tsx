import React from "react";
import { cn } from "@/components/shared/utils";

export function Table({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className="w-full overflow-auto">
      <table className={cn("w-full caption-bottom text-sm", className)}>
        {children}
      </table>
    </div>
  );
}

export function TableHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <thead className={cn("[&_tr]:border-b bg-neutral-50", className)}>
      {children}
    </thead>
  );
}

export function TableBody({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <tbody className={cn("[&_tr:last-child]:border-0", className)}>
      {children}
    </tbody>
  );
}

export function TableRow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <tr className={cn("border-b transition-colors hover:bg-neutral-50/50 data-[state=selected]:bg-neutral-100", className)}>
      {children}
    </tr>
  );
}

export function TableHead({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <th className={cn("h-12 px-4 text-left align-middle font-medium text-muted [&:has([role=checkbox])]:pr-0", className)}>
      {children}
    </th>
  );
}

export function TableCell({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <td className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}>
      {children}
    </td>
  );
}
