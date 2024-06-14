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
          "https://static.wixstatic.com/media/5bd82e_b4dfe584df74495fb44d7b7ed7d1797c~mv2.jpg/v1/fill/w_1903,h_607,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5bd82e_b4dfe584df74495fb44d7b7ed7d1797c~mv2.jpg"
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
              Medical & Paramedical
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
              <p>5 days</p>
            </div>
            <p className="text-xs leading-5 text-muted-foreground md:text-sm md:leading-6 mt-2">
              Experience the healthcare industry. Live in the roles of doctors,
              paramedics and other medical staff through practical skills,
              interactions and on-site visits.
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
              <TabsTrigger value="5">Day 5</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="1" className="mt-4">
            Introduction to Medicine and Interaction with Doctors
            <br /> - Introduction to the course objectives and outline.
            <br /> - Overview of different fields in medicine and paramedical.
            communication. <br /> - Panel discussion with experienced doctors
            from various specialties.
            <br /> - Q&A session for students to interact with doctors and ask
            questions about their specialties.
          </TabsContent>
          <TabsContent value="2" className="mt-4">
            Hands-on Activities and Communication Skills
            <br /> - Workshop on effective communication skills for healthcare
            professionals.
            <br /> - Role-playing scenarios to practice patient-doctor
            communication. <br /> - Practical sessions on networking within the
            medical community.
            <br /> - Group activities to develop teamwork skills essential in
            healthcare settings.
          </TabsContent>
          <TabsContent value="3" className="mt-4">
            Understanding Diverse Medical Fields
            <br /> - Rotating sessions where students visit different
            departments (e.g., surgery, internal medicine, pediatrics).
            <br /> - Talks from specialists in each department about their
            roles, challenges, and rewards. <br /> - Case study discussions
            related to the fields visited in the morning.
            <br /> - Small group discussions on the interdisciplinary nature of
            healthcare and the importance of collaboration.
          </TabsContent>
          <TabsContent value="4" className="mt-4">
            Hands-on Clinical Skills and Decision Making
            <br /> - Simulation exercises focusing on clinical skills such as
            patient examination, taking medical histories, and basic procedures.
            <br /> - Workshops on decision-making under pressure and
            prioritizing patient care. <br /> - Interactive sessions with
            paramedics to understand their roles and responsibilities.
            <br /> - Scenario-based learning to simulate emergency situations
            and appropriate responses.
          </TabsContent>
          <TabsContent value="5" className="mt-4">
            Medical Site Exposure <br /> - Guided tour of a hospital or medical
            facility.
            <br /> - Observation of medical procedures and interactions between
            healthcare professionals and patients. <br /> - Debriefing session
            where students reflect on their experiences throughout the week.{" "}
            <br /> - Wrap-up session with insights from instructors and advice
            for students pursuing careers in medicine and paramedical fields.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
