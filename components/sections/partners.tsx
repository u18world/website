"use client";

import { Icon } from "@/components/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";

interface partnersProps {
  icon: string;
  name: string;
}

const partners: partnersProps[] = [
  {
    icon: "BadgeIndianRupee",
    name: "Zerodha Varsity",
  },
  {
    icon: "Clapperboard",
    name: "Arka Media Works",
  },
  {
    icon: "Rabbit",
    name: "WhatIsMyGoal",
  },
  {
    icon: "Globe",
    name: "Mana Yatri",
  },
  {
    icon: "Hospital",
    name: "Rainbow Hospital",
  },
  {
    icon: "Cpu",
    name: "Soshin Tech",
  },

  {
    icon: "Gavel",
    name: "Umashankar and Associates",
  },

  {
    icon: "Car",
    name: "ZF",
  },
  {
    icon: "WalletCards",
    name: "Zeni5",
  },
];

export const PartnersSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Our Partners
      </h2>

      <div className="mx-auto">
        <Marquee className="gap-[3rem]" fade innerClassName="gap-[3rem]">
          {partners.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color="currentColor"
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
