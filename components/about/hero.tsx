import { Spotlight } from "@/components/ui/spotlight";

export const Hero = () => {
  return (
    <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="orange"
      />
      <div className="text-center space-y-8">
        <div className="max-w-screen-md mx-auto text-center text-7xl font-bold">
          <h1>
            About the
            <br />
            <span className="text-transparent px-2 bg-gradient-to-r from-orange-300 to-primary bg-clip-text">
              Under 18 {""}
            </span>
            World
          </h1>
        </div>
        <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
          {`Welcome to the Under-18 World, where young minds lead the way! In
            this unique community, everyone in charge is under 18, bringing
            fresh ideas and energy to everything we do.`}
        </p>
      </div>
    </div>
  );
};
