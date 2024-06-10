"use client";

import { PrismaClient } from "@prisma/client";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { toast } from "sonner";
const prisma = new PrismaClient();

export default async function AdminPage() {
    const id = "clx8vj5mi0000m2i8z5ku2y3f";

    async function Update() {
      await prisma.user.update({
         where: { id: id },
         data: {
           score: 2,
         },
       });
    }
   
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
          🔑 Admin
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess
            message="You are allowed to see this content!"
          />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">
            Admin-only API Route
          </p>
          <Button onClick={Update}>
            set score to 2
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};