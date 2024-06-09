"use client";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import Meteors from "@/components/ui/meteors";
import NumberTicker from "@/components/ui/number-ticker";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeroSection } from "@/components/sections/hero";
import { SponsorsSection } from "@/components/sections/sponsers";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  const [screen, setScreenSize] = useState(1000);
  useEffect(() => {
    const size = window.screen.height;
    setScreenSize(size);
  }, []);

  return (
    <div className="antialiased dark:bg-grid-white/[0.02] bg-grid-black/[0.02]">
      <HeroSection />
      <SponsorsSection />
      <LoginButton asChild>
        <Button variant="secondary" size="lg">
          Sign in
        </Button>
      </LoginButton>
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
              Under-18 elections are a crucial part of the Under-18 World, with
              an &apos;Under-18 World Cell&apos; in each school being the core
              of the world&apos;s functionality within the school.
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
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="tracking-tighter	text-4xl font-bold text-start text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
                Latest Updates
              </h2>
              <div className="mt-4 space-y-4">
                <Link href="#">
                  <div className="mt-4 relative flex items-center justify-center overflow-hidden rounded-lg border bg-background p-6 md:shadow-x">
                    <Image
                      alt="update"
                      className="rounded-lg mr-4 shadow-lg"
                      height={80}
                      src="https://generated.vusercontent.net/placeholder.svg"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width={80}
                    />
                    <div>
                      <h3 className="text-lg font-bold">
                        New Superhero Unveiled
                      </h3>
                      <p className="text-zinc-400 mt-1">
                        The Under-18 World has a new superhero with the power of
                        invisibility.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href="#">
                  <div className="mt-4 relative flex items-center justify-center overflow-hidden rounded-lg border bg-background p-6 md:shadow-x">
                    <img
                      alt="Update"
                      className="rounded-lg mr-4 shadow-lg"
                      height={80}
                      src="https://generated.vusercontent.net/placeholder.svg"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width={80}
                    />
                    <div>
                      <h3 className="text-lg font-bold">Elections Underway</h3>
                      <p className="text-zinc-400  mt-1">
                        The Under-18 World is holding its biennial elections,
                        with candidates campaigning across the country.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <Link href="#">
              <h2 className="tracking-tighter	text-4xl font-bold text-start text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
                Under-18 Score
              </h2>
              <div className="mt-4 relative flex items-center justify-center overflow-hidden rounded-lg border bg-background p-6 md:shadow-xl">
                <Meteors number={30} />
                <div className="mt-0 rounded-lg p-0 flex flex-col items-center text-center">
                  <div className="text-6xl font-mono text-white">
                    <NumberTicker value={85} />
                  </div>
                  <p className="text-zinc-400 ">
                    The current Under-18 World score, a measure of the overall
                    well-being and development of the under-18 population.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 px-6 ">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <img
              alt="Careers"
              className="rounded-lg shadow-lg"
              height={400}
              src="https://generated.vusercontent.net/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
          <div className="space-y-4">
            <h2 className="tracking-tighter	text-4xl font-bold text-start text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
              Under-18 Elections
            </h2>
            <p className="text-zinc-400">
              Under-18 elections are a crucial part of the Under-18 World, with
              an &apos;Under-18 World Cell&apos; in each school being the core
              of the world&apos;s functionality within the school.
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
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="tracking-tighter	text-4xl font-bold text-start text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
              Your Journey in U-18 World
            </h2>
            <p className="text-zinc-400">
              Your journey in the Under-18 World starts as an Under-18 student,
              then progresses to an Under-18 citizen, champion, crusader,
              ambassador, leader, and finally an Under-18 superstar.
            </p>
            <div className="flex gap-4">
              <Link href="#">
                <Button className="">Meet the superheroes</Button>
              </Link>
              <Link href="#">
                <Button variant="ghost">Learn More</Button>
              </Link>
            </div>
          </div>
          <div>
            <img
              alt="Superheroes"
              className="rounded-lg shadow-lg"
              height={400}
              src="https://generated.vusercontent.net/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
        </div>
      </section>
      <section className="py-12 px-6 ">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <img
              alt="Careers"
              className="rounded-lg shadow-lg"
              height={400}
              src="https://generated.vusercontent.net/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
          <div className="space-y-4">
            <h2 className="tracking-tighter	text-4xl font-bold text-start text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
              Explore Careers
            </h2>
            <p className="text-zinc-400">
              Under-18s in the Under-18 World can explore different skills and
              careers, with experts for 24 career domains.
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
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="tracking-tighter	text-4xl font-bold text-start text-black dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
              Superpowers and Superstars
            </h2>
            <p className="text-zinc-400">
              The Under-18 World has 14 superheroes with superpowers, and
              &apos;superstars&apos; who perform well.
            </p>
            <div className="flex gap-4">
              <Link href="#">
                <Button className="">Meet the superheroes</Button>
              </Link>
              <Link href="#">
                <Button variant="ghost">Learn More</Button>
              </Link>
            </div>
          </div>
          <div>
            <img
              alt="Superheroes"
              className="rounded-lg shadow-lg"
              height={400}
              src="https://generated.vusercontent.net/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

const projects = [
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
