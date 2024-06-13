import { About } from "@/components/about/about";
import { Team } from "@/components/about/team";
import { FAQSection } from "@/components/about/faq";
import { Spotlight } from "@/components/ui/spotlight";
export default function Page() {
  return (
    <>
      <div className="flex flex-col max-h-[100vh] pt-12">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="orange"
        />
        <div className="p-4 max-w-7xl py-12 mx-auto relative z-10 w-full pt-20">
          <h1 className="text-black text-4xl md:text-7xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">
            About the Under-18 World
          </h1>
          <p className="mt-4 font-normal text-base text-black dark:text-neutral-300 max-w-lg text-center mx-auto">
            Welcome to the Under-18 World, where young minds lead the way! In
            this unique community, everyone in charge is under 18, bringing
            fresh ideas and energy to everything we do.
          </p>
        </div>
      </div>
      <About />
      <Team />
      <FAQSection />
    </>
  );
}
