import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import type { Metadata, Viewport } from "next";

import { fontSans } from "@/lib/fonts";
import { Toaster } from "@/components/ui/toaster";

import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";

import { cn } from "@/lib/utils";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteHeader />
          <div className="relative flex flex-col">
            <div className="flex-1">{children}</div>
          </div>
          <Toaster/>
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
