"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3rd-card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative pb-40  pt-20 md:pt-40 overflow-hidden px-2 rounded-md flex md:items-center md:justify-center  antialiased dark:bg-grid-white/[0.02] bg-grid-black/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="max-w-[84rem] w-full mx-auto  relative z-20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pb-40">
            <div className="flex flex-col items-start xl:px-0 px-8">
              <svg
                width="236"
                height="68"
                viewBox="0 0 236 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 0.5H89C90.6569 0.5 92 1.84315 92 3.5V29C92 30.6569 93.3431 32 95 32H148.5C150.157 32 151.5 33.3431 151.5 35V64C151.5 65.6569 152.843 67 154.5 67H235.5"
                  stroke="url(#paint0_linear)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    gradientUnits="userSpaceOnUse"
                    x1="280"
                    y1="0"
                    x2="400.5"
                    y2="50"
                  >
                    <stop stopColor="#2EB9DF" stopOpacity="0"></stop>
                    <stop stopColor="#2EB9DF"></stop>
                    <stop offset="1" stopColor="#9E00FF" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h1 className="text-3xl md:text-7xl font-bold mb-6 relative text-left dark:text-zinc-100 text-zinc-700 max-w-4xl">
                <span
                  className="tracking-tighter	text-4xl md:text-7xl font-bold text-start text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50"
                  data-brr="1"
                >
                  Welcome to the Under 18 World
                </span>
              </h1>
              <h2 className="relative font-regular text-sm sm:text-xl text-zinc-500 tracking-wide mb-8 text-left max-w-2xl antialiased leading-loose __className_b15a0a">
                Explore a new world created for under-18s in India, with its own
                elected leaders, career opportunities, and superpowers.
              </h2>
              <div className="flex sm:flex-row flex-col space-y-2 justify-center sm:space-y-0 sm:space-x-4 sm:justify-start mb-4 w-full">
                <a
                  className="bg-slate-900 no-underline flex space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-zinc-900 p-px font-semibold text-white px-4 py-2 w-full sm:w-52 h-14 rounded-2xl text-sm text-center items-center justify-center"
                  href="/"
                >
                  Explore the World
                </a>
                <a
                  className="w-full sm:w-52 text-sm bg-white bg-black dark:bg-black h-14 border border-transparent  dark:text-white dark:border-white flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                  href="/"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}

export const projects = [
  {
    title: "The Service Commission",
    description:
      "Consisting of IAS officers and election officials, the Service Commission ensures the smooth functioning of the Under-18 World.",
    link: "",
  },
  {
    title: "The Rulers",
    description:
      "The elected under-18 leaders, including the Prime Minister, Chief Ministers, and MLAs, govern the Under-18 World.",
    link: "",
  },
  {
    title: "The Team",
    description:
      "A group of 4 important decision-makers who work alongside the Rulers to shape the future of the Under-18 World.",
    link: "",
  },
];
