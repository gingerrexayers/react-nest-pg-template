import { createContext } from "react";
import type { User } from "@/types";

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export interface JwtPayload {
  email: string;
  id: number;
  name: string;
  iat: number;
  exp: number;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
