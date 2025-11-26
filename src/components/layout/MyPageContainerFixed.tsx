const MyPageContainerFixed = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="max-w-[1200px] w-full mx-auto flex flex-col pt-[88px] pb-[72px] gap-[44px] relative 
      max-[1220px]:px-[15px] max-[700px]:pt-[96px] max-[700px]:gap-[24px] max-[1220px]:max-w-[400px] max-[1220px]:mx-auto"
    >
      {children}
    </div>
  );
};

export default MyPageContainerFixed;
