import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { LoginButton } from "@/components/auth/login-button";

const prisma = new PrismaClient();

export default async function ProfileInfo({ params }: any) {
  const id = params.id;
  const user = await prisma.user.findUnique({
    where: { id: id },
    include: {
      accounts: true, // Include related accounts if needed
      twoFactorConfirmation: true, // Include related twoFactorConfirmation if needed
    },
  });


  if(!user) {
    return (
      <div className="relative flex flex-col justify-center place-items-center min-h-screen">
        <h2 className="text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-black	 ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            No Info Found on the User{" "}
          </span>
          <span className="">🚧</span>
        </h2>
        <div className="items-center justify-between gap-4 grid grid-cols-2">
          <Link href="/">
            <Button variant="outline" className="h-12 w-24 text-lg font-mono">
              Go home
            </Button>
          </Link>
          <LoginButton asChild>
            <Button variant="outline" className="h-12 w-24 text-lg font-mono">
              Sign Up
            </Button>
          </LoginButton>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="pb-52 pt-16">
        <div className="w-full h-full max-w-3xl mx-auto bg-white dark:bg-gray-950 rounded-xl shadow-lg overflow-hidden">
          <Card className="w-full shadow-md">
            <CardHeader>
              <p className="text-2xl font-semibold text-center">Profile</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className="text-sm font-medium">ID</p>
                <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
                  {user?.id}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className="text-sm font-medium">Name</p>
                <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
                  {user?.name}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className="text-sm font-medium">Total Score</p>
                <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
                  {user?.total_score}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className="text-sm font-medium">Skill Score</p>
                <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
                  {user?.skill_score}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className="text-sm font-medium">Carrer Score</p>
                <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
                  {user?.carrer_score}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className="text-sm font-medium">Academic Score</p>
                <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
                  {user?.academic_score}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className="text-sm font-medium">Achievement Score</p>
                <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
                  {user?.achievements_score}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className="text-sm font-medium">Phone</p>
                <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
                  {user?.phone}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className="text-sm font-medium">Email</p>
                <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
                  {user?.email}
                </p>
              </div>
              <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className="text-sm font-medium">Role</p>
                <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
                  {user?.role}
                </p>
              </div>

              <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                <p className="text-sm font-medium">Two Factor Authentication</p>
                <Badge
                  variant={user?.isTwoFactorEnabled ? "default" : "destructive"}
                >
                  {user?.isTwoFactorEnabled ? "ON" : "OFF"}
                </Badge>
              </div>
            </CardContent>
          </Card>
          <div className="bg-gradient-to-r from-[#4c51bf] to-[#6b46c1] px-6 py-8 sm:px-10 sm:py-12">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 text-white rounded-full"></div>
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {user?.name}
                  </h2>
                  <p className="text-white/80 text-sm">Under-18 Champion</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Badge className="bg-white/20 text-white" variant="secondary">
                  Score: {user?.total_score}
                </Badge>
                <Badge className="bg-white/20 text-white" variant="secondary">
                  {user?.role}
                </Badge>
              </div>
            </div>
          </div>
          <div className="px-6 py-8 sm:px-10 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                {user?.name}
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                {user?.email}
              </div>
              <div className="space-y-1">
                <Label htmlFor="parent-name">Parent&apos;s Name</Label>
                Parent Name
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="class">Class</Label>
                  <Input disabled id="class" value="10th" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="city">City</Label>
                  <Input disabled id="city" value="Hyderabad" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="school">School</Label>
                  <Input disabled id="school" value="ABC High School" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="career-goals">Career Goals</Label>
                  <Input disabled id="career-goals" value="Software Engineer" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label htmlFor="hobbies">Hobbies</Label>
                  <Input
                    disabled
                    id="hobbies"
                    value="Reading, Coding, Swimming"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="achievements">Achievements</Label>
                  <Input disabled id="achievements" value="MIE Champion 2022" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-bold">Under-18 Score</h3>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold text-[#4c51bf]">850</div>
                </div>
                <div className="relative w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="absolute left-0 top-0 h-full w-[85%] bg-gradient-to-r from-[#4c51bf] to-[#6b46c1] rounded-full" />
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-bold">Under-18 Status Flowchart</h3>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-[#4c51bf] text-white rounded-lg p-4 space-y-2 text-center">
                    <div className="text-xs font-bold">Student</div>
                    <div className="text-xs">Score: 0-200</div>
                  </div>
                  <div className="bg-[#6b46c1] text-white rounded-lg p-4 space-y-2 text-center">
                    <div className="text-xs font-bold">Citizen</div>
                    <div className="text-xs">Score: 201-400</div>
                  </div>
                  <div className="bg-[#4c51bf] text-white rounded-lg p-4 space-y-2 text-center">
                    <div className="text-xs font-bold">Seeker</div>
                    <div className="text-xs">Score: 401-600</div>
                  </div>
                  <div className="bg-[#6b46c1] text-white rounded-lg p-4 space-y-2 text-center">
                    <div className="text-xs font-bold">Champion</div>
                    <div className="text-xs">Score: 601-800</div>
                  </div>
                  <div className="bg-[#4c51bf] text-white rounded-lg p-4 space-y-2 text-center">
                    <div className="text-xs font-bold ">Legend</div>
                    <div className="text-xs">Score: 801-950</div>
                  </div>
                  <div className="bg-[#6b46c1] text-white rounded-lg p-4 space-y-2 text-center">
                    <div className="text-xs font-bold">Superstar</div>
                    <div className="text-xs">Score: 951-1000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 px-6 py-8 sm:px-10 sm:py-12">
            <h3 className="text-lg font-bold mb-4">
              Upcoming Events in Hyderabad
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              <Card className="bg-white dark:bg-gray-950 shadow-lg">
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    MIE Hackathon
                  </CardTitle>
                  <CardDescription className="text-[#4c51bf]/80 dark:text-gray-400">
                    Join us for a 24-hour coding challenge to solve real-world
                    problems.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <CalendarDaysIcon className="h-5 w-5 text-[#4c51bf]/80 dark:text-gray-400" />
                    <div className="text-[#4c51bf]/80 dark:text-gray-400">
                      June 15, 2023
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LocateIcon className="h-5 w-5 text-[#4c51bf]/80 dark:text-gray-400" />
                    <div className="text-[#4c51bf]/80 dark:text-gray-400">
                      Hyderabad, India
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-[#4c51bf] hover:underline dark:text-white"
                    href="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-gray-950 shadow-lg">
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    U-18 Entrepreneurship Summit
                  </CardTitle>
                  <CardDescription className="text-[#6b46c1]/80 dark:text-gray-400">
                    Explore the world of entrepreneurship and learn from
                    successful young founders.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <CalendarDaysIcon className="h-5 w-5 text-[#6b46c1]/80 dark:text-gray-400" />
                    <div className="text-[#6b46c1]/80 dark:text-gray-400">
                      July 20, 2023
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LocateIcon className="h-5 w-5 text-[#6b46c1]/80 dark:text-gray-400" />
                    <div className="text-[#6b46c1]/80 dark:text-gray-400">
                      Hyderabad, India
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-[#6b46c1] hover:underline dark:text-white"
                    href="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
              <Card className="bg-white dark:bg-gray-950 shadow-lg">
                <CardHeader>
                  <CardTitle className=" dark:text-white">
                    U-18 Coding Bootcamp
                  </CardTitle>
                  <CardDescription className="text-[#4c51bf]/80 dark:text-gray-400">
                    Dive into the world of coding and learn from industry
                    experts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <CalendarDaysIcon className="h-5 w-5 text-[#4c51bf]/80 dark:text-gray-400" />
                    <div className="text-[#4c51bf]/80 dark:text-gray-400">
                      August 1-15, 2023
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <LocateIcon className="h-5 w-5 text-[#4c51bf]/80 dark:text-gray-400" />
                    <div className="text-[#4c51bf]/80 dark:text-gray-400">
                      Hyderabad, India
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-[#4c51bf] hover:underline dark:text-white"
                    href="#"
                  >
                    Learn More
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 px-6 py-8 sm:px-10 sm:py-12">
            <h3 className="text-lg font-bold mb-4">
              Now add more points to my score
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 space-y-4 shadow-lg">
                <h4 className="text-lg font-bold">I volunteered for</h4>
                <Input placeholder="Enter details" type="text" />
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 space-y-4 shadow-lg">
                <h4 className="text-lg font-bold">I participated in</h4>
                <Input placeholder="Enter details" type="text" />
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg p-6 space-y-4 shadow-lg">
                <h4 className="text-lg font-bold">I did</h4>
                <Input placeholder="Enter details" type="text" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button variant="default">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


function CalendarDaysIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function LocateIcon(props: any) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}
