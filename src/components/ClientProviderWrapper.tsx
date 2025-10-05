"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MyContextProvider } from "@/store/MyContext";

const queryClient = new QueryClient();

export function ClientProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <MyContextProvider>{children}</MyContextProvider>
    </QueryClientProvider>
  );
}
