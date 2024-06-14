import Link from "next/link";
import { Button } from "@/components/ui/button";
import { blogs } from "@/config/blog";

export const BlogSection = () => {
  return (
    <section id="carrer" className="container text-center py-12 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((prod) => (
          <Link href={prod.href}>
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
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
