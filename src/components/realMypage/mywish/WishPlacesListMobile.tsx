import type { WishItem } from "@/components/mypage/WishPlaces";
import WishRecentCardMobile from "./WishRecentCardMobile";

interface Props {
  wishList: WishItem[];
}

const WishPlacesListMobile = ({ wishList }: Props) => {
  return (
    <div className="w-full grid-cols-4 grid-rows-2 gap-[6px] max-[700px]:grid hidden mb-[36px]">
      {wishList.map((place, i) => (
        <WishRecentCardMobile key={i} cardData={place} />
      ))}
    </div>
  );
};

export default WishPlacesListMobile;
