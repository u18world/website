import { MainNavItem, SidebarNavItem } from "@/types";

interface MobileConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const mobileConfig: MobileConfig = {
  mainNav: [
    {
      title: "Home",
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