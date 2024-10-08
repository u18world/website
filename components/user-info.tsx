import { PrismaClient } from "@prisma/client";
import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const prisma = new PrismaClient();

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = async ({ user, label }: UserInfoProps) => {
  const user_details = await prisma.user.findUnique({
    where: { id: user?.id },
    include: {
      accounts: true, // Include related accounts if needed
      twoFactorConfirmation: true, // Include related twoFactorConfirmation if needed
    },
  });
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
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
            {user_details?.total_score}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Skill Score</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
            {user_details?.skill_score}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Carrer Score</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
            {user_details?.carrer_score}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Academic Score</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
            {user_details?.academic_score}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Achievement Score</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
            {user_details?.achievements_score}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <p className="text-sm font-medium">Phone</p>
          <p className="truncate text-xs max-w-[180px] font-mono p-1 rounded-md">
            {user_details?.phone}
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
          <Badge variant={user?.isTwoFactorEnabled ? "default" : "destructive"}>
            {user?.isTwoFactorEnabled ? "ON" : "OFF"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
