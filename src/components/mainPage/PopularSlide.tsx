import type { PopularCardData } from "@/types/apiResponseTypes";
import PopularCard from "./PopularCard";
import DummyPopularCard from "./DummyPopularCard";
import MorePopularCard from "./MorePopoularCard";

interface Props {
  placeList: PopularCardData[];
}
const PopularSlide = ({ placeList }: Props) => {
  const targetCount = 4;
  const actualCount = placeList.length;

  const shouldAddMoreCard = actualCount < targetCount;

  const dummyCount = Math.max(
    0,
    targetCount - actualCount - (shouldAddMoreCard ? 1 : 0)
  );

  const dummyArray = Array.from({ length: dummyCount });

  return (
    <div className="max-w-[1200px] w-full h-fit flex gap-[20px] max-[900px]:gap-[15px] max-[700px]:gap-[10px]">
      {placeList.map((place) => (
        <PopularCard key={place.contentId} place={place} />
      ))}

      {shouldAddMoreCard && <MorePopularCard />}
      {dummyArray.map((_, i) => (
        <DummyPopularCard key={`dummy-${i}`} />
      ))}
    </div>
  );
};

export default PopularSlide;
