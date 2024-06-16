"use client";
import { PrismaClient } from "@prisma/client";
import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
const prisma = new PrismaClient();

const ClientPage = async () => {
  
  const user = useCurrentUser();
  const user_details = await prisma.user.findUnique({
    where: { id: user?.id },
    include: {
      accounts: true, // Include related accounts if needed
      twoFactorConfirmation: true, // Include related twoFactorConfirmation if needed
    },
  });

  return (
    <UserInfo
      label="📱 Profile Details"
      user={user}
      user_details={user_details}
    />
  );
}
 
export default ClientPage;