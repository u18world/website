"use client";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "@/context/AuthContext";
import { QueryProvider } from "@/react-query/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BrowserRouter>
      <QueryProvider>
        <AuthProvider>
       

          <div className="relative flex flex-col">
            <div className="flex-1">{children}</div>
          </div>

         </AuthProvider>
      </QueryProvider>
    </BrowserRouter>

  );
}
