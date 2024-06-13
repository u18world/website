"use client";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { HoverEffect } from "@/components/ui/party-hover-effect";
import Link from "next/link";
import { Tabs } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceProps {
  title: string;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Know your Candidates",
    description:
      "Take time to learn about the candidates competing in the Under-18 elections. Look into their proposed policies. Pay attention to how each candidate plans to add value to the school ecosystem through their ideas and initiatives.",
  },
  {
    title: "Assess their Values and Priorities",
    description:
      "Think about what matters most to you and what you want to see changed or improved in your school. Assess how each candidate's beliefs and goals align with yours, including their commitment to enhancing the school environment.",
  },

];

export default function TabsDemo() {
  
  const tabs = [
    {
      title: "Parties",
      value: "parties",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl md:text-4xl">
            Three U-18 Parties in the Under-18 World
          </p>
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={parties} />
          </div>
        </div>
      ),
    },
    {
      title: "Constituencies",
      value: "constituencies",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl md:text-4xl">School Constituencies</p>
          <p>
            This election is similar to Assembly elections.
            <br /> Each school branch is a constituency.
            <br /> One Under-18 MLA per constituency is elected to represent the
            constituency.
            <br /> Schools with more than 2,500 students will be considered as 2
            constituencies.
          </p>
        </div>
      ),
    },
    {
      title: "Under-18 Assembly",
      value: "assembly",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl md:text-4xl">
            Three U-18 Parties in the Under-18 World
          </p>
        </div>
      ),
    },
    {
      title: "Election Officers",
      value: "officers",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-xl md:text-4xl">
            Three U-18 Parties in the Under-18 World
          </p>
        </div>
      ),
    },
    {
      title: "Voters",
      value: "voters",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <h2 className="text-3xl md:text-4xl text-primary text-center font-bold mb-4">
              Voters
            </h2>
            <h3 className="text-xl text-center mb-8">
              Students from Grade 4 and above vote for their Under-18 MLA
              candidate from the school, who will represent them in the Under-18
              Assembly.
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
              {serviceList.map(({ title, description}) => (
                <Card
                  key={title}
                  className="bg-muted/60 dark:bg-card h-full relative"
                >
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
        </div>
      ),
    },
  ];

  return (
    <>
        <section className="py-12 px-6 ">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            <MediaPlayer
              aspectRatio="16/9"
              src="youtube/BYhRZoPvNfs"
              className="rounded-2xl"
            >
              <MediaProvider />
              <DefaultVideoLayout icons={defaultLayoutIcons} />
            </MediaPlayer>
            <div className="space-y-4">
              <h2 className="tracking-tighter	text-4xl font-bold text-start text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
                Under-18 Elections
              </h2>
              <p className="text-zinc-400">
                Under-18 elections are a crucial part of the Under-18 World,
                with an &apos;Under-18 World Cell&apos; in each school being the
                core of the world&apos;s functionality within the school.
              </p>
              <div className="flex gap-4">
                <Link href="#">
                  <Button className="">Discover Careers</Button>
                </Link>
                <Link href="#">
                  <Button variant="ghost">Discover Careers</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-40 mt-20">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}


const parties = [
  {
    title: "Green Party - Focused on Sustainability",
    description:
      "Aims to take care of our environment, which is like our home. Will Implement measures to keep our home healthy and beautiful.",
  },
  {
    title: "Future Party - Focused on technology",
    description:
      "Aims to take you on exciting journeys to explore your future. Will ensure that students would be prepared for the challenges of the future. Will invest more in STE(A)M  education and promote entrpreeurship.",
  },
  {
    title: "People's Party - Equal educational pportunities for all",
    description:
      "Aims to make sure that everyone has fair and equal chance in life. Will ensure you the chance to learn, have good jobs, be treated fairly, and have support when you need it.",
  },
];
