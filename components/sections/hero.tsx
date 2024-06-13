"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

export const HeroSection = () => {
  const [screen, setScreenSize] = useState(1000);
  useEffect(() => {
    const size = window.screen.height;
    setScreenSize(size);
  }, []);
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Link href="/elections">
            <Badge variant="outline" className="border-foreground text-sm py-2">
              <span className="mr-2 text-primary">
                <Badge>New</Badge>
              </span>
              <span> Under 18 Assembly </span>
            </Badge>
          </Link>

          <div className="max-w-screen-md mx-auto text-center text-7xl font-bold">
            <h1>
              Welcome to the
              <br />
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Under 18
              </span>
              World
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Explore a new world created for under-18s in India, with its own
            elected leaders, career opportunities, and superpowers.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow no-underline space-x-2 group cursor-pointer relative hover:shadow-2xl transition duration-200 shadow-zinc-900 text-sm">
              Explore the World
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="/" target="_blank">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="pb-8 pt-8 px-2 rounded-md flex md:items-center md:justify-center">
        <div className="max-w-[84rem] w-full mx-auto relative z-20">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <iframe
            src="https://kushiaw.netlify.app/"
            className="rouded-lg leading-none items-center border border-t-2 border-secondary border-t-primary/30 rounded-md w-full"
            title="Game"
            height={screen - 350}
          />
        </div>
      </div>
    </section>
  );
};
