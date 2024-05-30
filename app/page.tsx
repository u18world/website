"use client";
import React from "react";
import { Providers } from "@/app/provider";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {  Button } from '@/components/ui/button'
import Link from "next/link";

export default function Home() {
  return (
    <Providers>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <p
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              rel="noopener noreferrer"
            >
              Under 18 world website by unpaid labour
            </p>
          </div>
          <Dropdown className="bordered-md">
            <DropdownTrigger>
              <Button variant="outline">Open Menu</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Links">
              <DropdownItem key="404">
                <Link href="/404">404</Link>
              </DropdownItem>
              <DropdownItem key="blog">
                <Link href="/blog">Blog</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </main>
    </Providers>
  );
}
