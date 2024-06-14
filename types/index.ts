import { Icons } from "@/components/icons";

export interface carrerProps {
  id: number;
  image: string;
  title: string;
  stock: boolean;
  description: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
}

export interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

export interface SociaNetworkslProps {
  name: string;
  url: string;
}

export interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

export interface statsProps {
  quantity: string;
  description: string;
}

export interface NavItem {
    title: string;
    href?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
    label?: string;
}
  
export interface NavItemWithChildren extends NavItem {
    items: NavItemWithChildren[];
}
  
export interface MainNavItem extends NavItem {}
export interface SidebarNavItem extends NavItemWithChildren {}

export interface MainNavProps {
    items?: NavItem[];
}

export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};
