export type UserRole = "STUDENT" | "LECTURER" | "ADMIN";

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  createdAt: string;
}

export interface Result {
  id: string;
  studentId: string;
  studentName: string;
  courseCode: string;
  courseName: string;
  score: number;
  grade: string;
  semester: string;
  academicYear: string;
  lecturerId: string;
  updatedAt: string;
}

export interface AuthTokens {
  access: string;
  refresh: string;
}

export interface AuthContextType {
  user: User | null;
  tokens: AuthTokens | null;
  login: (tokens: AuthTokens) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}
