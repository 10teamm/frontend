import SideBarButton from "./SideBarButton";

const SideBarMobile = () => {
  return (
    <header className="w-full h-fit max-[1220px]:flex justify-between hidden border-t-[1px] border-b-[1px] py-[6px]">
      <SideBarButton
        href="/myinfo"
        inner="내 정보"
        isActive={location.pathname === "/myinfo"}
      />
      <SideBarButton
        href="/mywish"
        inner="최근 본 / 찜"
        isActive={location.pathname === "/mywish"}
      />
      <SideBarButton
        href="/myreview"
        inner="내 리뷰"
        isActive={location.pathname === "/myreview"}
      />
    </header>
  );
};

export default SideBarMobile;
