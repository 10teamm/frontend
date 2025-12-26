import MyPageScaffold from "@/components/layout/MyPageScaffold";
import RecentPlaces from "@/components/mypage/RecentPlaces";
import WishPlaces from "@/components/mypage/WishPlaces";

const MyWishPageFixed = () => {
  return (
    <MyPageScaffold title="최근 본 / 찜한 장소">
      <section className="w-full h-fit flex flex-col gap-[84px]">
        <RecentPlaces />
        <WishPlaces />
      </section>
    </MyPageScaffold>
  );
};

export default MyWishPageFixed;
