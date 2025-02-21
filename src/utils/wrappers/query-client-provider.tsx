"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

interface CreateQueryClientProviderProps {
  children: React.ReactNode;
}

export default function CreateQueryClientProvider({
  children,
}: CreateQueryClientProviderProps) {
  const [mainQueryClient] = useState<QueryClient>(() => new QueryClient());

  return (
    <QueryClientProvider client={mainQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
