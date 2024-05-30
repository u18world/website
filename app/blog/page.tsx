import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog",
};

export default async function BlogPage() {

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            A blog built using Contentlayer. Posts are written in MDX.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid gap-10 sm:grid-cols-2">
        <article key="intro" className="group relative flex flex-col space-y-2">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
            width={804}
            height={452}
            className="rounded-md border bg-muted transition-colors"
          />
          <h2 className="text-2xl font-extrabold">Dummy</h2>
          <p className="text-muted-foreground">example dummy post</p>
          <p className="text-sm text-muted-foreground">24/7/1020</p>
          <Link href="/blog/intro" className="absolute inset-0">
            <span className="sr-only">View Article</span>
          </Link>
        </article>
      </div>
    </div>
  );
}
