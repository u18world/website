import Link from "next/link";
import { Button } from "@/components/ui/button";
import { career_object } from "@/config/carrers";

export const ObjectSection = () => {
  return (
    <section id="carrer" className="container text-center py-12 sm:py-24">
      <h2 className="text-3xl md:text-4xl font-bold">
        Our{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Carrer{" "}
        </span>
        options
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {career_object.map((prod) => (
          <div
            key={prod.id}
            className="bg-muted/50 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
          >
            <div className="rounded-lg overflow-hidden p-4 aspect-w-1 aspect-h-1 group-hover:opacity-75">
              <img
                src={prod.image}
                alt={prod.title}
                width={400}
                height={300}
                className="w-full h-full object-center object-cover rounded-xl"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{prod.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {prod.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-900 dark:text-gray-50 font-bold">
                  <Link href={prod.read_more}>
                    <Button size="sm">Read More</Button>
                  </Link>
                </span>
                <Link href={prod.enroll_now}>
                  <Button size="sm">Enroll Now</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
