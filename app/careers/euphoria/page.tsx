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
          "https://static.wixstatic.com/media/5bd82e_9b16a0a6d43444218724c2403a9a6351~mv2.png/v1/fill/w_1024,h_327,al_c,q_85,enc_auto/5bd82e_9b16a0a6d43444218724c2403a9a6351~mv2.png"
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
              Summer Euphoria Experience
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <Badge
                key={"price"}
                variant="outline"
                className="whitespace-nowrap"
              >
                ₹ 5,900+
              </Badge>

              <Separator orientation="vertical" className="h-6" />
              <p>2/5 days edutainment</p>
              <Separator orientation="vertical" className="h-6" />
              <p>Experience 5+ careers</p>
            </div>
            <p className="text-xs leading-5 text-muted-foreground md:text-sm md:leading-6 mt-2">
              Explore the roles of three to five career domains: engineering,
              entrepreneurship, design, psychology and art. Mix and and mingle
              with professionals, and get hands-on with activities.
            </p>
            <div className="flex flex-wrap items-center gap-1 mt-2">
              <Link href="https://payments.cashfree.com/forms/summerunder18privileges">
                <Button size="sm">Enroll Now</Button>
              </Link>
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
            </TabsList>
          </div>
          <TabsContent value="1" className="mt-4">
            - Live in the life of an engineer and a designer
            <br /> - Interact with an engineer and a designer
            <br /> - Hands-on activities related to engineering
          </TabsContent>
          <TabsContent value="2" className="mt-4">
            - Live in the life of an entrepreneur <br /> - Talk to founders and
            professionals from startup ecosystem <br /> - Dissect a startup and
            engage in a marketing activity
          </TabsContent>
          <TabsContent value="3" className="mt-4">
            - Live in the life of a psychologist <br /> - Talk to professionals
            and understand psychological concepts <br /> - Psychological
            analysis and hypothesis formation
          </TabsContent>
          <TabsContent value="4" className="mt-4">
            - Live in the life of an artist
            <br /> - Interact with artist to understand different avenues of
            business
            <br /> - Gallery walk and art stations
          </TabsContent>
          <TabsContent value="5" className="mt-4">
            - Reflection
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
