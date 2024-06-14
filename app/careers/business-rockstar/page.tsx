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
          "https://static.wixstatic.com/media/5bd82e_d3700d2b4d304e52aebe20bfed697a1e~mv2.png/v1/fill/w_1024,h_327,al_c,q_85,enc_auto/5bd82e_d3700d2b4d304e52aebe20bfed697a1e~mv2.png"
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
              Summer Kratos Mini Internship: Business Rockstar
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <Badge
                key={"price"}
                variant="outline"
                className="whitespace-nowrap"
              >
                ₹ 8,000
              </Badge>

              <Separator orientation="vertical" className="h-6" />
              <p>6 days/2hrs each</p>
            </div>
            <p className="text-xs leading-5 text-muted-foreground md:text-sm md:leading-6 mt-2">
              Explore the life of an entrepreneur. Talk to professionals from
              fields of your interest, and shadow the experts for a taste of the
              real deal.
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
              understanding.
              <br />
              3. After the 6-day program, select students to shadow
              professionals from different fields:{" "}
              <p className="pt-0 mt-0 px-4">
                <br /> - With the insights gained from the program, students
                shadow professionals from law, movie making, engineering and
                more <br />- Mentorship by professionals for project development
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
              <TabsTrigger value="5">Day 5</TabsTrigger>
              <TabsTrigger value="6">Day 6</TabsTrigger>
              <TabsTrigger value="7">Day 7</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="1" className="mt-4">
            - Introduction to the world of business <br />- Making an
            impactfulintroduction - Get an idea
          </TabsContent>
          <TabsContent value="2" className="mt-4">
            - Startup Roast: Analysing startups with a 13-point framework
            <br /> - Building the idea: Applying the learnings from other
            startups
          </TabsContent>
          <TabsContent value="3" className="mt-4">
            - Marketing and sales: AIDA model and MIE (My Internal External)
            circle framework <br />- Ethos, pathos and logos in marketing and
            sales (Negotiation techniques)
          </TabsContent>
          <TabsContent value="4" className="mt-4">
            - Building your MVP
          </TabsContent>
          <TabsContent value="5" className="mt-4">
            - Budgeting and financial analysis through on-site local business
            visits
          </TabsContent>
          <TabsContent value="6" className="mt-4">
            - Networking (Deeper understanding of the MIE circle framework) and
            making the first sale
            <br /> - Final project presentation, peer and mentor feedback
          </TabsContent>
          <TabsContent value="7" className="mt-4">
            - Meet professionals from fields of your interest and shadowing
            their work <br />- Assist the professional in one of their projects
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
