import { MainNavItem, SidebarNavItem } from "@/types";

interface MobileConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const mobileConfig: MobileConfig = {
  mainNav: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Leaders",
      href: "/leaders",
    },
    {
      title: "Careers",
      href: "/careers",
    },
    {
      title: "Superheroes",
      href: "/superheroes",
    },
    {
      title: "Elections",
      href: "/elections",
    },
    {
      title: "Contact",
      href: "/contact",
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