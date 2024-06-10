import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="pt-24 pb-24 flex items-center justify-center antialiased dark:bg-grid-white/[0.02] bg-grid-black/[0.02] relative overflow-hidden">
      <Navbar />
      {children}
    </div>
  );
}
 
export default ProtectedLayout;