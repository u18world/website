import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Section, Container } from "@/components/ui/craft";
import Balancer from "react-wrap-balancer";
import { Icons } from "@/components/icons";

const Footer = () => {
  return (
    <Section>
      <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
        <div className="flex flex-col gap-6 not-prose">
          <Link href="/">
            <h3 className="sr-only">Under18</h3>
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={25}
              className="hover:opacity-75 transition-all"
            ></Image>
          </Link>
          <p>
            <Balancer>Under 18 World</Balancer>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/about#team">Team</Link>
          <Link href="/careers">Careers</Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </Container>
      <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
        <div className="flex gap-2">
          <Link href="https://www.youtube.com/@TheUnder18World">
            <Button variant="outline" size="icon">
              <Icons.youtube />
            </Button>
          </Link>
          <Link href="https://x.com/under18world">
            <Button variant="outline" size="icon">
              <Icons.twitter />
            </Button>
          </Link>
          <Link href="https://www.instagram.com/theunder18world">
            <Button variant="outline" size="icon">
              <Icons.instagram />
            </Button>
          </Link>
        </div>
        <p className="text-muted-foreground">
          © WhatIsMyGoal. All rights reserved. 2024-present.
        </p>
      </Container>
    </Section>
  );
};

export default Footer;
