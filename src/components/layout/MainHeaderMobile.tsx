import { Link } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";

import LoginOnHeader from "./header/LoginOnHeader";
import { useEffect, useState } from "react";
import LoginProfileOnHeaderMobile from "./header/LoginProfileOnHeaderMobile";

const MainHeaderMobile = () => {
  const { isLoggedIn } = useAuthStore();

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (window.innerWidth > 700) return;

      if (currentScroll > lastScrollY && currentScroll > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed inset-0 h-[60px] bg-[var(--main-color)]
        flex justify-center font-dunggeunmiso font-bold text-[var(--header-text)] text-[24px]
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        z-30 max-[700px]:block hidden`}
    >
      <div className="w-full h-full flex justify-between items-center px-[20px]">
        <Link to={"/"} className="cursor-pointer">
          <img
            src="/assets/logo/main_logo.png"
            alt="main_logo"
            className="w-[170px]"
          />
        </Link>
        {isLoggedIn ? <LoginProfileOnHeaderMobile /> : <LoginOnHeader />}
      </div>
    </header>
  );
};

export default MainHeaderMobile;
