"use client";
import { SessionProvider } from "next-auth/react";

export default function NextAuthSessionsProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
