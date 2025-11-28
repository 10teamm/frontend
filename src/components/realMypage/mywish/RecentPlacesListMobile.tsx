import WishRecentCardMobile from "./WishRecentCardMobile";

interface Props {
  recentList: any[];
}

const RecentPlacesListMobile = ({ recentList }: Props) => {
  return (
    <div className="w-full h-fit max-[1220px]:block hidden overflow-x-auto scrollbar-hide">
      <div className="flex gap-[8px] w-max">
        {recentList.map((place, i) => (
          <WishRecentCardMobile key={i} cardData={place} />
        ))}
      </div>
    </div>
  );
};

export default RecentPlacesListMobile;
