import { LoaderCircle } from "lucide-react";

const LoadingWheel = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center gap-4 py-20">
      <LoaderCircle className="animate-spin w-10 h-10 text-[var(--main-color)]" />
      <p className="text-sm text-[var(--place-neutral)]">불러오는 중...</p>
    </div>
  );
};

export default LoadingWheel;
