import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Section, Container } from "@/components/ui/craft";
import Balancer from "react-wrap-balancer";
import {Icons} from "@/components/icons";
import React from 'react'

const footer = () => {
  return (
    <footer>
      <Section>
        <Container className="grid md:grid-cols-[1.5fr_0.5fr_0.5fr] gap-12">
          <div className="flex flex-col gap-6 not-prose">
            <Link href="/">
              <h3 className="sr-only">nme</h3>
              <Image
                src={""}
                alt="Logo"
                width={120}
                height={27.27}
                className="dark:invert hover:opacity-75 transition-all"
              ></Image>
            </Link>
            <p>
              <Balancer>
                descript
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Website</h5>
            <Link href="/">Blog</Link>
            <Link href="/">Authors</Link>
            <Link href="/">Categories</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Legal</h5>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </Container>
        <Container className="border-t not-prose flex flex-col md:flex-row md:gap-2 gap-6 justify-between md:items-center">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Icons.youtube />
            </Button>
            <Button variant="outline" size="icon">
              <Icons.twitter />
            </Button>
            <Button variant="outline" size="icon">
              <Icons.instagram />
            </Button>
          </div>
          <p className="text-muted-foreground">
            © kushi
            . All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}

export default footer
