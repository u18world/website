"use server";
import { PrismaClient } from "@prisma/client";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

const prisma = new PrismaClient();

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    await prisma.user.update({
      where: { id: "clxcyviqm0000ysaa7inicp57" },
      data: {
        total_score: 7,
      },
    });
    return { success: "Ran Action!" };
  }

  return { error: "Forbidden Server Action!" }
};
