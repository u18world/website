const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-24 pb-24 flex items-center justify-center antialiased dark:bg-grid-white/[0.02] bg-grid-black/[0.02] relative overflow-hidden">
      <div className="dark:border-white/[0.2] border border-transparent max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
