import { statsProps, FAQProps, TeamProps, FeatureProps } from "@/types";

export const features: FeatureProps[] = [
  {
    title: "Leadership and Governance",
    description:
      "Our rulers are the Under-18 MLAs. These young leaders create policies and make important decisions that shape our world.",
  },
  {
    title: "Administration",
    description:
      "Under-18 IAS officers execute policies and ensure smooth daily operations while helping citizens gain first-hand career and skill experience.",
  },
  {
    title: "Safety and Support",
    description:
      "The safety of our citizens is ensured by parents, schools, and WhatIsMyGoal. They provide guidance and protection to help our young leaders succeed.",
  },
  {
    title: "Innovation and Management",
    description:
      "We also have talented Under-18s working as the COO, CMO, CTO, and other key roles. Their skills and creativity drive our progress and innovation.",
  },
];

export const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Emma Smith",
    position: "Product Manager",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "John Doe",
    position: "Tech Lead",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Ashley Ross",
    position: "Frontend Developer",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },

      {
        name: "Instagram",
        url: "https://www.instagram.com/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=17",
    name: "Bruce Rogers",
    position: "Backend Developer",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com" },
      {
        name: "Facebook",
        url: "https://www.facebook.com/",
      },
    ],
  },
];


export const stats: statsProps[] = [
  {
    quantity: "160",
    description: "Schools in Hyderabad",
  },
  {
    quantity: "1.50k",
    description: "Under-18 Citizens",
  },
  {
    quantity: "105",
    description: "Under-18 MLAs",
  },
  {
    quantity: "2000",
    description: "Under-18 Entrepreneurs, movie makers etc.",
  },
];

export const FAQList: FAQProps[] = [
  {
    question: "Is this template free?",
    answer: "Yes. It is a free NextJS Shadcn template.",
    value: "item-1",
  },
  {
    question: "Duis aute irure dolor in reprehenderit in voluptate velit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam consectetur sapiente, iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
    value: "item-2",
  },
  {
    question:
      "Lorem ipsum dolor sit amet Consectetur natus dolor minus quibusdam?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis.",
    value: "item-3",
  },
  {
    question: "Excepteur sint occaecat cupidata non proident sunt?",
    answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    value: "item-4",
  },
  {
    question:
      "Enim ad minim veniam, quis nostrud exercitation ullamco laboris?",
    answer: "consectetur adipisicing elit. Sint labore.",
    value: "item-5",
  },
];
