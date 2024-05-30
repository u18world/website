/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tf688WAfcBD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <main className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-[#4c51bf] to-[#7367f0] py-4 px-6 flex items-center justify-between">
        <Link
          className="text-white font-bold text-2xl flex items-center gap-2"
          href="#"
        >
          <GlobeIcon className="w-8 h-8" />
          Under-18 World
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-white">
          <Link className="hover:underline" href="#">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Leaders
          </Link>
          <Link className="hover:underline" href="#">
            Careers
          </Link>
          <Link className="hover:underline" href="#">
            Superheroes
          </Link>
          <Link className="hover:underline" href="#">
            Elections
          </Link>
          <Link className="hover:underline" href="#">
            Contact
          </Link>
        </nav>
        <Button
          className="text-white border-white hover:bg-white hover:text-[#4c51bf]"
          variant="outline"
        >
          Join Now
        </Button>
      </header>
      <section className="bg-[#f3f4f6] py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-[#4c51bf]">
              Welcome to the Under-18 World
            </h1>
            <p className="text-gray-700">
              Explore a new world created for under-18s in India, with its own
              elected leaders, career opportunities, and superpowers.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#4c51bf] text-white hover:bg-[#7367f0]">
                Explore the World
              </Button>
              <Button
                className="text-[#4c51bf] border-[#4c51bf] hover:bg-[#4c51bf] hover:text-white"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <img
              alt="Under-18 World"
              className="rounded-lg"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-[#f3f4f6] rounded-lg p-6 flex flex-col items-center text-center">
            <BriefcaseIcon className="w-12 h-12 text-[#4c51bf]" />
            <h3 className="text-2xl font-bold text-[#4c51bf] mt-4">
              The Service Commission
            </h3>
            <p className="text-gray-700 mt-2">
              Consisting of IAS officers and election officials, the Service
              Commission ensures the smooth functioning of the Under-18 World.
            </p>
          </div>
          <div className="bg-[#f3f4f6] rounded-lg p-6 flex flex-col items-center text-center">
            <CrownIcon className="w-12 h-12 text-[#4c51bf]" />
            <h3 className="text-2xl font-bold text-[#4c51bf] mt-4">
              The Rulers
            </h3>
            <p className="text-gray-700 mt-2">
              The elected under-18 leaders, including the Prime Minister, Chief
              Ministers, and MLAs, govern the Under-18 World.
            </p>
          </div>
          <div className="bg-[#f3f4f6] rounded-lg p-6 flex flex-col items-center text-center">
            <UsersIcon className="w-12 h-12 text-[#4c51bf]" />
            <h3 className="text-2xl font-bold text-[#4c51bf] mt-4">The Team</h3>
            <p className="text-gray-700 mt-2">
              A group of 4 important decision-makers who work alongside the
              Rulers to shape the future of the Under-18 World.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#4c51bf]">
                Latest Updates
              </h2>
              <div className="mt-4 space-y-4">
                <div className="bg-[#f3f4f6] rounded-lg p-4 flex items-center">
                  <img
                    alt="Update"
                    className="rounded-lg mr-4"
                    height={80}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#4c51bf]">
                      New Superhero Unveiled
                    </h3>
                    <p className="text-gray-700 mt-1">
                      The Under-18 World has a new superhero with the power of
                      invisibility.
                    </p>
                    <Link
                      className="text-[#4c51bf] hover:underline mt-2 inline-block"
                      href="#"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="bg-[#f3f4f6] rounded-lg p-4 flex items-center">
                  <img
                    alt="Update"
                    className="rounded-lg mr-4"
                    height={80}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#4c51bf]">
                      Elections Underway
                    </h3>
                    <p className="text-gray-700 mt-1">
                      The Under-18 World is holding its biennial elections, with
                      candidates campaigning across the country.
                    </p>
                    <Link
                      className="text-[#4c51bf] hover:underline mt-2 inline-block"
                      href="#"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#4c51bf]">
                Under-18 Score
              </h2>
              <div className="mt-4 bg-[#f3f4f6] rounded-lg p-6 flex flex-col items-center">
                <div className="text-6xl font-bold text-[#4c51bf]">85</div>
                <p className="text-gray-700 mt-2">
                  The current Under-18 World score, a measure of the overall
                  well-being and development of the under-18 population.
                </p>
                <Link
                  className="text-[#4c51bf] hover:underline mt-4 inline-block"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f3f4f6] py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <img
              alt="Careers"
              className="rounded-lg"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#4c51bf]">
              Explore Careers
            </h2>
            <p className="text-gray-700">
              Under-18s in the Under-18 World can explore different skills and
              careers, with experts for 24 career domains.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#4c51bf] text-white hover:bg-[#7367f0]">
                Discover Careers
              </Button>
              <Link className="text-[#4c51bf] hover:underline" href="#">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#4c51bf]">
              Superpowers and Superstars
            </h2>
            <p className="text-gray-700">
              The Under-18 World has 14 superheroes with superpowers, and
              &apos;superstars&apos; who perform well.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#4c51bf] text-white hover:bg-[#7367f0]">
                Meet the Superheroes
              </Button>
              <Link className="text-[#4c51bf] hover:underline" href="#">
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img
              alt="Superheroes"
              className="rounded-lg"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#f3f4f6] py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <img
              alt="Elections"
              className="rounded-lg"
              height={400}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#4c51bf]">
              Under-18 Elections
            </h2>
            <p className="text-gray-700">
              Under-18 elections are a crucial part of the Under-18 World, with
              an &apos;Under-18 World Cell&apos; in each school being the core
              of the world&apos;s functionality within the school.
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#4c51bf] text-white hover:bg-[#7367f0]">
                Explore Elections
              </Button>
              <Link className="text-[#4c51bf] hover:underline" href="#">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#4c51bf] text-white py-6 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <GlobeIcon className="w-8 h-8" />
            <span className="font-bold text-2xl">Under-18 World</span>
          </div>
          <nav className="flex items-center gap-6 mt-4 md:mt-0">
            <Link className="hover:underline" href="#">
              About
            </Link>
            <Link className="hover:underline" href="#">
              Leaders
            </Link>
            <Link className="hover:underline" href="#">
              Careers
            </Link>
            <Link className="hover:underline" href="#">
              Superheroes
            </Link>
            <Link className="hover:underline" href="#">
              Elections
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CrownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </svg>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
