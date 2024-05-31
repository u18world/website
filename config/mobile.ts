import { MainNavItem, SidebarNavItem } from "@/types";

interface MobileConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const mobileConfig: MobileConfig = {
  mainNav: [
    {
      title: "About",
      href: "/",
    },
    {
      title: "Leaders",
      href: "/",
    },
    {
      title: "Careers",
      href: "/",
    },
    {
      title: "Superheroes",
      href: "/",
    },
    {
      title: "Elections",
      href: "/",
    },
    {
      title: "Contact",
      href: "/",
    },
  ],
  sidebarNav: [
    {
      title: "Headdin w sub",
      items: [
        {
          title: "Sub one",
          href: "/",
          items: [],
        },
      ],
    },
  ],
};