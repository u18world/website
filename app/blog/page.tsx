import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Blog",
  description: "description"
};

export default async function BlogPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">some description</p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid gap-10 sm:grid-cols-2">
        <article key="intro" className="group relative flex flex-col space-y-2">
          <Link href="/blog/intro">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Title</CardTitle>
                <CardDescription>Description</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4 flex flex-col space-y-1.5">
                    <Image
                      src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="img"
                      width={804}
                      height={452}
                      className="rounded-md border bg-muted transition-colors"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="text-muted-foreground">avalynndev</p>
                <p className="text-sm text-muted-foreground">24/7/1020</p>
              </CardFooter>
            </Card>
          </Link>
        </article>
      </div>
    </div>
  );
}
