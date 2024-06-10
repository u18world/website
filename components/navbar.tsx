"use client";
import { Earth, Github, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginButton } from "@/components/auth/login-button";
import { ThemeToggle } from "@/components/theme-toggle";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/careers",
    label: "Careers",
  },
  {
    href: "/superheroes",
    label: "Superheroes",
  },
  {
    href: "/elections",
    label: "Elections",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "#leaders",
    label: "Leaders",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Showcase Your Value ",
    description: "Highlight how your product solves user problems.",
  },
  {
    title: "Build Trust",
    description:
      "Leverages social proof elements to establish trust and credibility.",
  },
  {
    title: "Capture Leads",
    description:
      "Make your lead capture form visually appealing and strategically.",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <Earth className="w-9 h-9 mr-2" />
        Under18
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Earth className="w-9 h-9 mr-2" />
                    Under18
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <LoginButton asChild>
                <Button variant="secondary" size="lg">
                  Sign in
                </Button>
              </LoginButton>
              <Separator className="mb-2 mt-2" />
              <ThemeToggle />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <div className="hidden lg:flex lg:w-full lg:justify-center">
        <NavigationMenu className="flex justify-center">
          <NavigationMenuList>
            {/** 
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-card text-base">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                  <Image
                    src=""
                    alt="RadixLogo"
                    className="h-full w-full rounded-md object-cover"
                    width={600}
                    height={600}
                  />
                  <ul className="flex flex-col gap-2">
                    {featureList.map(({ title, description }) => (
                      <li
                        key={title}
                        className="rounded-md p-3 text-sm hover:bg-muted"
                      >
                        <p className="mb-1 font-semibold leading-none text-foreground">
                          {title}
                        </p>
                        <p className="line-clamp-2 text-muted-foreground">
                          {description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            */}

            <NavigationMenuItem>
              {routeList.map(({ href, label }) => (
                <NavigationMenuLink key={href} asChild>
                  <Link href={href} className="justify-start text-base px-2">
                    {label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="hidden lg:flex">
        <LoginButton asChild>
          <Button size="lg">Sign in</Button>
        </LoginButton>
        <ThemeToggle />

        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link aria-label="View on GitHub" href="/" target="_blank">
            <Github className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
