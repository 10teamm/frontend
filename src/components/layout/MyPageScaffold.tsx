import type { ReactNode } from "react";
import MyPageContainerFixed from "./MyPageContainerFixed";
import SideBarFixed from "../realMypage/common/SideBarFixed";
import SideBarMobile from "../realMypage/common/SideBarMobile";

interface Props {
  title: string;
  children: ReactNode;
}
const MyPageScaffold = ({ title, children }: Props) => {
  return (
    <MyPageContainerFixed>
      <title>어디가냥?같이가개! | 마이페이지</title>
      <h1 className="w-fit h-[38px] font-semibold flex items-center text-[24px] max-[1220px]:hidden">
        {title}
      </h1>
      <h1 className="w-fit h-fit font-semibold items-center text-[22px] max-[1220px]:flex hidden">
        마이페이지
      </h1>
      <div className="w-full h-fit flex gap-[106px] max-[1220px]:flex-col max-[1220px]:gap-[40px]">
        <SideBarFixed />
        <SideBarMobile />
        <main className="w-full h-fit flex flex-col gap-[44px]">
          {children}
        </main>
      </div>
    </MyPageContainerFixed>
  );
};

export default MyPageScaffold;
