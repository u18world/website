const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-24 pb-24 flex items-center justify-center antialiased dark:bg-grid-white/[0.02] bg-grid-black/[0.02] relative overflow-hidden">
      {children}
    </div>
  );
};

export default AuthLayout;
