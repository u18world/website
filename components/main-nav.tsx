"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden lg:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.globe className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80 text-foreground/60",
            pathname == "/about" ? "text-foreground" : "text-foreground/60"
          )}
        >
          About
        </Link>
        <Link
          href="/blog"
          className={cn(
            "transition-colors hover:text-foreground/80 text-foreground/60",
            pathname == "/blog" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Blog
        </Link>
        <Link
          href="/leaders"
          className={cn(
            "transition-colors hover:text-foreground/80 text-foreground/60",
            pathname == "/leaders" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Leaders
        </Link>
        <Link
          href="/careers"
          className={cn(
            "transition-colors hover:text-foreground/80 text-foreground/60",
            pathname == "/careers" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Careers
        </Link>
        <Link
          href="/superheroes"
          className={cn(
            "transition-colors hover:text-foreground/80 text-foreground/60",
            pathname == "/superheroes"
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Superheroes
        </Link>
        <Link
          href="/elections"
          className={cn(
            "transition-colors hover:text-foreground/80 text-foreground/60",
            pathname == "/elections" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Elections
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80 text-foreground/60",
            pathname == "/contact" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
