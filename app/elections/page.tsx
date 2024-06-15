"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/icon";
import { icons } from "lucide-react";
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

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Election officers selection",
    description:
      "School selects two active students from class 6, 7, 8, 9 and 11 to take the role of election officers on the basis of under-18 service commission exam.",
  },
  {
    icon: "LineChart",
    title: "MLA eligibility and nomination",
    description:
      "Students willing to nominate should garner the support of 100 individuals, can nominate to one of the three parties by submitting details to the election officers.",
  },
  {
    icon: "Wallet",
    title: "Candidate finalisation for each of the parties ",
    description:
      "Party A - 30 nominations, Party B - 47 nominations, Party C -24 nominations. Based on popularity & internal voting, one candidate will be decided per party.",
  },
  {
    icon: "Sparkle",
    title: "The Elections",
    description:
      "Voters vote for one of the three parties. Highest votes would decide the  winner. ",
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


const world_cell = [
  {
    title: "Legislative Execution",
    description:
      "The Under-18 World Cell will be the base location for Under 18 MLA and IAS officers (now election officers) to execute proposed bills.",
  },
  {
    title: "Under-18 World Engagement",
    description:
      "Under 18 clans and their leaders will utilize the Under-18 World Cell as the primary location for engaging with Under 18 citizens.",
  },
  {
    title: "Under-18 Clans",
    description:
      "Selection of leaders for  writers, photography and designers clans. Activating the clans during the Under-18 elections",
  },
];

export default function Elections() {

  const tabs = [
    {
      title: "Parties",
      value: "parties",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-foreground bg-background">
          <h2 className="text-3xl md:text-4xl text-foreground text-center font-bold mb-2">
            Three U-18 Parties in the Under-18 World
          </h2>
          <div className="max-w-5xl mx-auto px-1 md:px-8">
            <HoverEffect items={parties} className="lg:grid-cols-3" />
          </div>
          <div className="justify-center flex items-center">
            <Link href="https://drive.google.com/file/d/1zYXwaS3wCPOgfMqla-k6--W5mUe6Glpp/view">
              <Button className="font-bold group/arrow no-underline space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-zinc-900 text-sm">
                Form 2B U-18 MLA nomination
              </Button>
            </Link>
          </div>
          <br />
          <div className="justify-center flex items-center">
            <Link href="htps://forms.gle/1jbDiz6GDiE19gm26">
              <Button className="font-bold group/arrow no-underline space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-zinc-900 text-sm">
                Form 2B Submission
              </Button>
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Constituencies",
      value: "constituencies",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-foreground bg-background">
          <h2 className="text-3xl md:text-4xl text-foreground text-center font-bold mb-2">
            School Constituencies
          </h2>
          <h3 className="p-4 text-zinc-40 text-center mb-2 ">
            This election is similar to Assembly elections.
            <br /> Each school branch is a constituency.
            <br /> One Under-18 MLA per constituency is elected to represent the
            constituency.
            <br /> Schools with more than 2,500 students will be considered as 2
            constituencies.
          </h3>
          <div className="w-full max-w-5xl mx-auto p-6 md:p-8">
            <div className="shadow rounded-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-lg bg-primary">
                      <h3 className="text-lg font-semibold mb-2 dark:text-background">
                        Legislative
                      </h3>
                      <div className="flex flex-col gap-2">
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                          <h4 className="text-base font-semibold mb-2">CM</h4>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                          <h4 className="text-base font-semibold mb-2">
                            The Team
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-primary">
                      <h3 className="text-lg font-semibold mb-2 dark:text-background">
                        Executive
                      </h3>
                      <div className="flex flex-col gap-2">
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                          <h4 className="text-base font-semibold mb-2">
                            10 IAS Officers
                          </h4>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                          <h4 className="text-base font-semibold mb-2">
                            6 Clan Lead
                          </h4>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="p-4 rounded-lg bg-primary">
                      <h3 className="text-lg font-semibold mb-2 dark:text-background">
                        Judiciary
                      </h3>
                      <div className="flex flex-col gap-2">
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                          <h4 className="text-base font-semibold mb-2">
                            Principal
                          </h4>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                          <h4 className="text-base font-semibold mb-2">
                            2 School coordinators
                          </h4>
                        </div>
                        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                          <h4 className="text-base font-semibold mb-2">
                            Parents
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "U18_Assembly",
      value: "assembly",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl pt-10 px-10 text-foreground bg-background">
          <h2 className="text-3xl md:text-4xl text-foreground text-center font-bold mb-2">
            Under 18-Assembly
          </h2>
          <h3 className="p-4 text-zinc-40 text-center mb-2 ">
            Elected Under-18 MLAs will participate in the Under-18 Assembly to
            draft and pass actionable bills.
            <br />
            Majority will be implemented by WhatIsMyGoal and larger bills will
            be presented to the government as recommendations.
          </h3>
          <h2 className="text-3xl text-foreground text-center font-bold mb-2">
            Powers
          </h2>
          <div className="w-full max-w-4xl mx-auto py-24 md:py-28 lg:py-30">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              <div className="relative">
                <div className="bg-[#f1c40f] rounded-2xl p-6 shadow-lg transform md:rotate-[5deg]">
                  <p className="text-gray-800 font-medium">
                    75% majority to pass a bill
                  </p>
                </div>
              </div>
              <div className="pt-10 relative">
                <div className="bg-[#2980b9] rounded-2xl p-6 shadow-lg transform md:-rotate-[10deg]">
                  <p className="text-white font-medium">
                    3/4 th of bills will be initiated by elected leaders
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#e74c3c] rounded-2xl p-6 shadow-lg transform md:rotate-[8deg]">
                  <p className="text-white font-medium">
                    1/4th of bills initiated by brands/<br/>partners through WMG
                  </p>
                </div>
              </div>
              <div className="pt-10 relative">
                <div className="bg-[#8e44ad] rounded-2xl p-6 shadow-lg transform md:-rotate-[7deg]">
                  <p className="text-white font-medium">
                    Special powers with the superheroes and The Team
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#27ae60] rounded-2xl p-6 shadow-lg transform md:-rotate-[5deg]">
                  <p className="text-white font-medium">
                    4 day assembly sessions
                  </p>
                </div>
              </div>
              <div className="pt-10 relative">
                <div className="bg-stone-300 rounded-2xl p-6 shadow-lg transform md:-rotate-[5deg]">
                  <p className="text-white font-medium">20 bills for 2 years</p>
                </div>
              </div>
              <div className="pt-10 md:pt-0 col-span-2 md:col-span-3 flex justify-center">
                <div className="bg-[#16a085] rounded-2xl p-6 shadow-lg transform">
                  <p className="text-white font-medium">
                    Full veto power of THE King!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Election_Officers",
      value: "officers",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-foreground bg-background">
          <h2 className="text-3xl md:text-4xl text-foreground text-center font-bold mb-2">
            Election Officers (IAS)
          </h2>
          <h3 className="p-4 text-zinc-40 text-center mb-2 ">
            10 students from each school from class 6, 7, 8, 9 and 11 are
            selected to be the election officers who conduct the elections &
            later take the role of IAS officers in the school constituency.
          </h3>
          <h2 className="text-2xl md:text-2xl text-foreground text-center font-bold mt-4 mb-2">
            Under-18 Election Officers are the Chiefs of the Under-18 World Cell
          </h2>
          <div className="max-w-5xl mx-auto px-1 md:px-8">
            <HoverEffect items={world_cell} className="lg:grid-cols-3" />
          </div>
        </div>
      ),
    },
    {
      title: "Voters",
      value: "voters",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-foreground bg-background">
          <h2 className="text-3xl md:text-4xl text-foreground text-center font-bold mb-2">
            Voters (Electors)
          </h2>
          <h3 className="p-4 text-zinc-40 text-center mb-2">
            Students from Grade 4 and above vote for their Under-18 MLA
            candidate from the school, who will represent them in the Under-18
            Assembly.
          </h3>

          <h2 className="text-2xl md:text-2xl text-foreground text-center font-bold mb-2">
            Selecting the right candidate in the under-18 elections
          </h2>
          <div className="max-w-5xl mx-auto px-1 md:px-16">
            <HoverEffect items={serviceList} />
          </div>
          <div className="justify-center flex items-center">
            <Link href="https://drive.google.com/file/d/1JUyWLzWlN5exoK8uBFE7FO6Uvp7ncUam/view">
              <Button className="font-bold group/arrow no-underline space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-zinc-900 text-sm">
                Form 6 U-18 Voter Registration
              </Button>
            </Link>
          </div>
          <br />
          <div className="justify-center flex items-center">
            <Link href="https://forms.gle/TYAvHYtvuyDavpBf6">
              <Button className="font-bold group/arrow no-underline space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-zinc-900 text-sm">
                Form 6 Submission
              </Button>
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="pt-12">
      <section className="mx-auto max-w-7xl relative w-full h-[60vh] rounded-lg md:rounded-xl overflow-hidden">
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
                <Button asChild>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLScqt2ZRUqXmWKMUSA8HMmZKcDXOoc_wbLD-s8R1WMfTssSS0w/viewform"
                    target="_blank"
                  >
                    Register your School
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[85rem] md:h-[55rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start mb-10 mt-10">
        <Tabs
          tabs={tabs}
        />
      </div>
      <section id="benefits" className="container py-12 sm:py-12">
        <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Under-18 Elections Roadmap
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
              ducimus reprehenderit architecto rerum similique facere odit
              deleniti necessitatibus quo quae.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 w-full">
            {benefitList.map(({ icon, title, description }, index) => (
              <Card
                key={title}
                className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
              >
                <CardHeader>
                  <div className="flex justify-between">
                    <Icon
                      name={icon as keyof typeof icons}
                      size={32}
                      color="hsl(var(--primary))"
                      className="mb-6 text-primary"
                    />
                    <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                      0{index + 1}
                    </span>
                  </div>

                  <CardTitle>{title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground">
                  {description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
