"use client";
import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";

const ClientPage = () => {
  const user = useCurrentUser();

  return (
    <UserInfo
      label="📱 Profile Details"
      user={user}
    />
  );
}
 
export default ClientPage;