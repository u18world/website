import { About } from "@/components/about/about";
import { Team } from "@/components/about/team";
import { FAQSection } from "@/components/about/faq";
export default function Page() {
  return (
    <>
      <div className="flex flex-col max-h-[100vh] pt-12">
        <section className="mx-auto max-w-7xl relative w-full h-[50vh] border rounded-lg md:rounded-xl overflow-hidden">
          <img
            className="h-full not-prose w-full object-cover object-bottom filter blur-sm"
            src={
              "https://honeysanime.com/wp-content/uploads/img-common/menu/banner-theme-manga.jpg"
            }
            width={920}
            height={80}
            alt="hero image"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4 px-4 sm:px-6 md:px-10 text-black">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                About Our U18 World
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl">
                Discover our story, our mission, and our talented team.
              </p>
            </div>
          </div>
        </section>
      </div>
      <About />
      <Team />
      <FAQSection />
    </>
  );
}
