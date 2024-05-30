"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-between  max-h-screen">
      <Image alt="404 img" src="/404.png" height={600} width={600} />
      <div className="items-center justify-between ">
        <Link href="/">
          <Button variant="outline" className="h-12 w-24 text-lg font-mono">
            HOME
          </Button>
        </Link>
      </div>
    </main>
  );
}
