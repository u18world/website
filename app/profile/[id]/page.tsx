import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
        <div>
            no info found on this kid
        </div>
    )
  }

  return (
    <main>
      <Card className="w-[600px] shadow-md">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">Details on {id}</p>
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
    </main>
  );
}
