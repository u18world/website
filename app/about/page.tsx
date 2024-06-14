import { Hero } from "@/components/about/hero";
import { About } from "@/components/about/about";
import { Team } from "@/components/about/team";
import { FAQSection } from "@/components/about/faq";

export default function AboutPage() {
  return (
    <>
      <Hero/>
      <About />
      <Team />
      <FAQSection />
    </>
  );
}
