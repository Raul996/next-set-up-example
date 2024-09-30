"use client";

// _app.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Component } from "react";

type MyAppProps = {
  children: React.ReactNode;
};

export default function MyApp({ children }: MyAppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
