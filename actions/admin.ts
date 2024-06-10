"use server";
import { PrismaClient } from "@prisma/client";
import { currentRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

const prisma = new PrismaClient();

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    await prisma.user.update({
      where: { id: "clx8vj5mi0000m2i8z5ku2y3f" },
      data: {
        score: 2,
      },
    });
    return { success: "Allowed Server Action!" };
  }

  return { error: "Forbidden Server Action!" }
};
