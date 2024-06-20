import { statsProps } from "@/types";
import { stats } from "@/config/about";

export const Statistics = () => {
  return (
    <section id="statistics">
      <h2 className="text-2xl md:text-4xl font-bold pb-6">
        Our {""}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Under-18 {""}
        </span>
        Strength Today
      </h2>
      <div className="gap-8 items-center justify-center flex flex-col">
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
