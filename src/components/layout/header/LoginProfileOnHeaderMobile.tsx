import { useState } from "react";
import { useAuthStore } from "@/stores/authStore";
import MobileMyMenu from "./MobileMyMenu";

const LoginProfileOnHeaderMobile = () => {
  const { profileImg } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <img
        src={profileImg!}
        alt="thumbnail"
        className="w-[32px] h-[32px] rounded-full cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      <MobileMyMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default LoginProfileOnHeaderMobile;
