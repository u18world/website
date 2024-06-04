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
import Balancer from "react-wrap-balancer";

export const metadata = {
  title: "Blog",
  description: "description"
};

export default async function BlogPage() {
  return (
    <div className="flex flex-col container max-w-4xl py-6 lg:py-10 justify-center text-center items-center">
      <div className="flex flex-col gap-6">
        <h3 className="text-4xl">Lorem ipsum dolor sit amet</h3>
        <h4 className="text-2xl opacity-70">
          <Balancer>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Balancer>
        </h4>
      </div>

      <hr className="my-8" />
      <div className="grid gap-10 md:grid-cols-2 grid-col-3 max-w-4xl">
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
        <article
          key="2intro"
          className="group relative flex flex-col space-y-2"
        >
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
        <article
          key="3intro"
          className="group relative flex flex-col space-y-2"
        >
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
        <article
          key="4intro"
          className="group relative flex flex-col space-y-2"
        >
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
