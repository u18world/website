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
              Our{" "}
              <span className="text-transparent px-2 bg-gradient-to-r from-blue-300 to-primary bg-clip-text">
                Carrer options
              </span>
            </h1>
          </div>
          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!`}
          </p>
        </div>
      </div>
      <CarrerSection />
    </>
  );
}
