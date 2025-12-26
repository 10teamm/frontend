const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-[1200px] w-full mx-auto flex flex-col max-[1220px]:px-[15px] max-[700px]:gap-[36px]">
      {children}
    </main>
  );
};

export default MainContainer;
