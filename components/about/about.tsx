import { Statistics } from "@/components/about/stats";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components//ui/card";
import { FeatureProps } from "@/types";
import { features } from "@/config/about";

export const About = () => {
  return (
    <section id="about" className="container pt-8 sm:pt-12">
      <div className="border rounded-lg py-12 p-8">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-between text-center">
            <h2 className="text-3xl md:text-4xl font-bold ">
              How It{" "}
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Works{" "}
              </span>
              Step-by-Step Guide
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis dolor pariatur sit!
            </p>
            <section className="container py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(({ title, description }: FeatureProps) => (
                  <Card key={title} className="bg-muted/50">
                    <CardHeader>
                      <CardTitle className="grid gap-4 place-items-center">
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>{description}</CardContent>
                  </Card>
                ))}
              </div>
            </section>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
