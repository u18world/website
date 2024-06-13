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
import { Tabs } from "@/components/sections/tabs";
import { Button } from "@/components/ui/button";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Badge } from "@/components/ui/badge";

const serviceList = [
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

export default function Elections() {
  const imageUrl = "/image1.png";

  const imageUrl2 = "/image2.png";

  const tabs = [
    {
      title: "Parties",
      value: "parties",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold dark:text-background text-white bg-gradient-to-br to-[#fccf92] dark:to-[#cee6fa] dark:from-[#add8e6] from-[#f5893f]">
          <h2 className="text-3xl md:text-4xl text-background text-center font-bold mb-2">
            Three U-18 Parties in the Under-18 World
          </h2>
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={parties} className="lg:grid-cols-3" />
          </div>
        </div>
      ),
    },
    {
      title: "Constituencies",
      value: "constituencies",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold dark:text-background text-white bg-gradient-to-br to-[#fccf92] dark:to-[#cee6fa] dark:from-[#add8e6] from-[#f5893f]">
          <h2 className="text-3xl md:text-4xl text-background text-center font-bold mb-2">
            School Constituencies
          </h2>
          <h3 className="p-4 text-md text-center mb-2">
            This election is similar to Assembly elections.
            <br /> Each school branch is a constituency.
            <br /> One Under-18 MLA per constituency is elected to represent the
            constituency.
            <br /> Schools with more than 2,500 students will be considered as 2
            constituencies.
          </h3>
        </div>
      ),
    },
    {
      title: "Under-18 Assembly",
      value: "assembly",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold dark:text-background text-white bg-gradient-to-br to-[#fccf92] dark:to-[#cee6fa] dark:from-[#add8e6] from-[#f5893f]">
          <h2 className="text-3xl md:text-4xl text-background text-center font-bold mb-2">
            Under-18 Assembly
          </h2>
          <h3 className="p-4 text-md text-center mb-2">
            Elected Under-18 MLAs will participate in the Under-18 Assembly to
            draft and pass actionable bills.
            <br />
            Majority will be implemented by WhatIsMyGoal and larger bills will
            be presented to the government as recommendations.
          </h3>
        </div>
      ),
    },
    {
      title: "Election Officers",
      value: "officers",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold dark:text-background text-white bg-gradient-to-br to-[#fccf92] dark:to-[#cee6fa] dark:from-[#add8e6] from-[#f5893f]">
          <h2 className="text-3xl md:text-4xl text-background text-center font-bold mb-2">
            Election Officers
          </h2>
          <h3 className="p-4 text-md text-center mb-2">
            10 students from each school from class 6, 7, 8, 9 and 11 are
            selected to be the election officers who conduct the elections &
            later take the role of IAS officers in the school constituency.
            <br />
            They head the Under-18 World Cell of the school.
          </h3>
        </div>
      ),
    },
    {
      title: "Voters",
      value: "voters",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold dark:text-background text-white bg-gradient-to-br to-[#fccf92] dark:to-[#cee6fa] dark:from-[#add8e6] from-[#f5893f]">
          <h2 className="text-3xl md:text-4xl text-background text-center font-bold mb-2">
            Voters
          </h2>
          <h3 className="p-4 text-md text-center mb-2">
            Students from Grade 4 and above vote for their Under-18 MLA
            candidate from the school, who will represent them in the Under-18
            Assembly.
          </h3>
          <h2 className="text-2xl md:text-2xl text-background text-center font-bold mb-2">
            Selecting the right candidate in the under-18 elections
          </h2>
          <div className="max-w-5xl mx-auto px-16">
            <HoverEffect items={serviceList} />
          </div>
          <h2 className="text-2xl md:text-2xl text-background text-center font-bold mb-0">
            Engage in the under-18 elections through the Under-18 clans
          </h2>
          <div className="text-center items-center justify-center flex flex-col">
            <Badge>Hint: Hover over the images..</Badge>
          </div>
          <div className="max-w-5xl mx-auto px-16 grid grid-cols-1 md:grid-cols-2 mt-0">
            <div className="h-[30rem] relative flex items-center justify-center">
              <DirectionAwareHover imageUrl={imageUrl}>
                <p className="font-normal text-md">
                  Take an active role in the Under-18 elections
                  <br /> by participating in Under-18 clans, which
                  <br /> serve as platforms for discussion, debate, and
                  <br /> collaboration among student voters.
                </p>
              </DirectionAwareHover>
            </div>
            <div className="h-[30rem] relative flex items-center justify-center">
              <DirectionAwareHover imageUrl={imageUrl2}>
                <p className="font-normal text-md">
                  You can assume roles such as robotics <br />
                  engineer, anchors, reporters, or <br />
                  photographers, leveraging your
                  <br /> skills and interests to enhance <br />
                  the electoral experience for yourself
                  <br /> and other Under-18s.
                </p>
              </DirectionAwareHover>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-12">
      <section className="mx-auto max-w-7xl relative w-full h-[60vh] border rounded-lg md:rounded-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center py-24 px-6 ">
          <div className="grid md:grid-cols-2 gap-8 pt-4 pb-4">
            <MediaPlayer
              aspectRatio="16/9"
              src="youtube/BYhRZoPvNfs"
              className="rounded-2xl"
            >
              <MediaProvider />
              <DefaultVideoLayout icons={defaultLayoutIcons} />
            </MediaPlayer>
            <div className="space-y-4 p-2">
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
        </div>
      </section>
      <div className="h-[100rem] md:h-[80rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mb-40 mt-20">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
8;
