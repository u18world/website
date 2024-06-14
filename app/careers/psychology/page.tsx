import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Banner } from "@/components/banner";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Details() {
  return (
    <div className="mx-auto max-w-6xl pt-12">
      <Banner
        url={
          "https://static.wixstatic.com/media/5bd82e_c63aee86308540d4b0e7af421288c4e4~mv2.jpg/v1/fill/w_1903,h_607,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5bd82e_c63aee86308540d4b0e7af421288c4e4~mv2.jpg"
        }
        className="max-h-[20vh] md:max-h-[50vh]"
      />

      <div className="mx-auto my-8 max-w-4xl space-y-8 p-4 md:space-y-12 md:p-0 ">
        <main className="flex flex-col gap-4 md:flex-row">
          <article className="flex w-full flex-col gap-2 md:w-9/12">
            <Link href="/careers">
              <Button variant="linkHover2">Back</Button>
            </Link>
            <h1 className="text-lg font-bold md:text-4xl">
              Finance and Psychology
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <Badge
                key={"price"}
                variant="outline"
                className="whitespace-nowrap"
              >
                ₹ 6,000
              </Badge>

              <Separator orientation="vertical" className="h-6" />
              <p>4 days</p>
            </div>
            <p className="text-xs leading-5 text-muted-foreground md:text-sm md:leading-6 mt-2">
              Live in the roles of psychologists and finance experts. Mix and
              mingle with professionals, get hands-on with activities, and
              shadow the experts for a taste of the real deal.
            </p>
            <div className="flex flex-wrap items-center gap-1 mt-2">
              <Link href="https://payments.cashfree.com/forms/summerunder18privileges">
                <Button size="sm">Enroll Now</Button>
              </Link>
            </div>
            <h3 className="text-lg font-bold md:text-lg mt-4">
              Program Structure:
            </h3>
            <div className="text-xs leading-5 text-muted-foreground md:text-sm md:leading-6">
              1. Professional Interactions: Scheduled sessions with
              professionals in business for insights, Q&A, and networking.
              <br /> 2. On-site visits to local businesses for a firsthand
              understanding. <br /> 3. Real-World Projects:
              <p className="pt-0 mt-0 px-4">
                <br /> - Collaborative projects with industry relevance. <br />-
                Mentorship by professionals during project development.
              </p>{" "}
              <br /> 4. Certification and profile building:
              <p className="pt-0 mt-0 px-4">
                <br /> - Earn certifications from WhatIsMyGoal and reputable
                technical service providers, ensuring a well-rounded profile for
                future success.
              </p>
            </div>
          </article>
        </main>

        <Tabs defaultValue="1" className="w-full">
          <div className="">
            <TabsList>
              <TabsTrigger value="1">Day 1</TabsTrigger>
              <TabsTrigger value="2">Day 2</TabsTrigger>
              <TabsTrigger value="3">Day 3</TabsTrigger>
              <TabsTrigger value="4">Day 4</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="1" className="mt-4">
            - Exposure to the skills of a psychologist: Observation,
            self-awareness and communication
            <br /> - Introduction to the daily schedule of a psychologist
          </TabsContent>
          <TabsContent value="2" className="mt-4">
            - Practice the skills of a psychologist: Analytical and listening
            skills <br /> - Deep dive into the daily schedule of a psychologist
          </TabsContent>
          <TabsContent value="3" className="mt-4">
            - Prioritisation and budgeting <br /> - Understanding financial
            terms by analysing financial statements
          </TabsContent>
          <TabsContent value="4" className="mt-4">
            - Explore the different professions in the finance world
            <br /> - Understand market trends and human emotions entwined in an
            exploration of wealth and behaviour
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
