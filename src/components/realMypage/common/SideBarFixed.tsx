import { useLocation } from "react-router-dom";
import SideBarButton from "./SideBarButton";

const SideBarFixed = () => {
  const location = useLocation();
  return (
    <aside className="min-w-[155px] h-fit flex flex-col gap-[8px] max-[1220px]:hidden">
      <SideBarButton
        href="/myinfo"
        inner="내 정보"
        isActive={location.pathname === "/myinfo"}
      />
      <SideBarButton
        href="/mywish"
        inner="최근 본 / 찜한 장소"
        isActive={location.pathname === "/mywish"}
      />
      <SideBarButton
        href="/myreview"
        inner="방문한 장소 및 리뷰"
        isActive={location.pathname === "/myreview"}
      />
    </aside>
  );
};

export default SideBarFixed;
