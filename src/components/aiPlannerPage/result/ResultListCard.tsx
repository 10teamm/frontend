import MainCard from "@/components/mainPage/MainCard";
import { removeTags } from "@/lib/commonUtils";
import type { PlannerDayContents } from "@/types/apiResponseTypes";

interface Props {
  cardData: PlannerDayContents;
  day: number;
  index: number;
}
const ResultListCard = ({ cardData, day, index }: Props) => {
  return (
    <div
      className="w-full h-fit flex gap-[10px] pb-[10px] border-b-[1px] border-[var(--search-element-border)] cursor-pointer"
      onClick={() => {
        window.open(
          `/placedetail/${cardData.contentId}`,
          "_blank",
          "noopener,noreferrer"
        );
      }}
    >
      {/* 사진 + 마커 */}

      <MainCard
        className="w-[150px] h-[150px] bg-cover max-[700px]:w-[100px] max-[700px]:h-[100px] relative flex-shrink-0"
        style={{
          backgroundImage: `url(${cardData.image || "/assets/images/common/default_thumbnail.jpg"})`,
        }}
      >
        <img
          className="absolute right-[4px] bottom-[8px] w-[48px] h-[48px] max-[700px]:w-[36px] max-[700px]:h-[36px]"
          src={`/assets/icons/markers/marker${day}_${index + 1}.png`}
        />
      </MainCard>

      {/* 장소 정보 */}
      <div className="w-[225px] h-fit flex flex-col gap-[4px]">
        <h3 className="w-full min-h-[29px] flex items-center text-[18px] font-semibold break-keep max-[700px]:text-[16px]">
          {cardData.title}
        </h3>
        <div className="w-full min-h-[42px] flex flex-col gap-[2px]">
          <p className="w-full min-h-[20px] flex items-center break-keep text-[14px] text-[var(--search-element-text)] max-[700px]:text-[12px]">
            {cardData.addr1 + " " + cardData.addr2}
          </p>
          <p className="w-full min-h-[20px] flex items-center break-keep text-[14px] text-[var(--search-element-text)] max-[700px]:text-[12px]">
            {cardData.rest && cardData.rest.trim()
              ? removeTags(cardData.rest)
              : "휴무정보 없음"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultListCard;
