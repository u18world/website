import { CarrerSection } from "@/components/careers";
import { Spotlight } from "@/components/ui/spotlight";

export default function Careers() {
  return (
    <>
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="lightBlue"
        />
        <div className="text-center space-y-8">
          <div className="max-w-screen-md mx-auto text-center text-7xl font-bold">
            <h1>
              Explore, Experience and{" "}
              <span className="text-transparent px-2 bg-gradient-to-r from-blue-300 to-primary bg-clip-text">
                Master Careers
              </span>
            </h1>
          </div>
          <p className="mx-auto text-xl text-muted-foreground">
            {`
            Experience diverse careers through mini-internships with professionals. 
            Engage in hands-on activities, real-world projects, and conversations with experts in fields like entrepreneurship, medicine, and psychology.
            `}
          </p>
        </div>
      </div>
      <CarrerSection />
    </>
  );
}
