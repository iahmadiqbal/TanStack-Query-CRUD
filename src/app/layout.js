"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryclient = new QueryClient();
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryclient}>
        <body>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
