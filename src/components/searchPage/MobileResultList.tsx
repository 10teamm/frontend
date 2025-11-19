import type { CardInputType } from "@/types/apiResponseTypes";
import MobileSearchResultCard from "./MobileSearchResultCard";

interface Props {
  searchDataList: CardInputType[];
}

const MobileResultList = ({ searchDataList }: Props) => {
  return (
    <div className="w-full flex-col gap-[10px] max-[700px]:flex hidden">
      {searchDataList.map((data) => (
        <MobileSearchResultCard key={data.contentId} cardData={data} />
      ))}
    </div>
  );
};

export default MobileResultList;
