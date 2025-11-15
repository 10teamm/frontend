import { saveLoginLocation } from "@/lib/commonUtils";
import { LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginOnHeader = () => {
  const navigate = useNavigate();

  return (
    <button
      className="flex w-fit h-[25px] items-center cursor-pointer hover:underline underline-offset-[6px]"
      onClick={() => {
        saveLoginLocation();
        navigate("/login");
      }}
    >
      <p className="max-[700px]:hidden block">로그인</p>
      <LogIn className="max-[700px]:block hidden" strokeWidth={3} />
    </button>
  );
};

export default LoginOnHeader;
