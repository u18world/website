import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { UserInfo } from "@/components/user-info";

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
      <UserInfo label="📱 Client component" user={user} />
    </main>
  );
}
