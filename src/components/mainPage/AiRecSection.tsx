import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { useAiRecSection } from "@/hooks/useAiRecSection";
import AiRecCard from "./AiRecCard";
import { useCarouselController } from "@/hooks/useCarouselController";
import SectionTitle from "./SectionTitle";

const AiRecSection = () => {
  const { loading, resultList } = useAiRecSection();

  const { plugin, setApi, current, count, movePrev, moveNext, moveIndex } =
    useCarouselController(resultList);

  return (
    <section className="flex flex-col gap-[24px] w-full max-h-[483px] py-[36px] max-[700px]:py-0 max-[700px]:gap-[12px]">
      <SectionTitle title="AI 추천" />
      <Carousel
        className="relative max-w-[1200px] w-full"
        plugins={[plugin.current]}
        setApi={setApi}
      >
        <CarouselContent>
          {resultList.map((place, i) => (
            <CarouselItem key={i}>
              <AiRecCard place={place} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* 페이지 카운터 */}
        {!loading && resultList.length !== 0 && (
          <div className="absolute top-[243px] right-[46px] w-[56px] h-[32px] rounded-[60px] flex justify-center items-center gap-[4px] bg-[#8c8c8c] font-semibold text-[var(--main-text)] max-[700px]:hidden">
            <p>{current + 1}</p>
            <p>/</p>
            <p>{count}</p>
          </div>
        )}

        {/* 로딩 오버레이 */}
        {(loading || resultList.length === 0) && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 rounded-[16px]">
            <p className="text-white text-[24px] font-semibold">
              AI 추천 장소를 불러오고 있습니다.
            </p>
          </div>
        )}
      </Carousel>

      {/* 인디케이터 */}
      <div className="flex gap-[8px] w-full h-[8px] mx-auto justify-center items-center">
        <button className="w-[24px] h-[24px] cursor-pointer transition hover:brightness-20 active:brightness-10 max-[700px]:hidden">
          <img
            src="/assets/buttons/indicator_left.png"
            alt="left"
            className="w-full h-full"
            onClick={movePrev}
          />
        </button>
        {resultList.map((_, i) => (
          <button
            key={i}
            className={`h-full rounded-[16px] transition-width duration-500 ${i === current ? "w-[40px] bg-[var(--main-color)]" : "w-[8px] bg-[var(--indicator-disabled)]"} cursor-pointer`}
            onClick={() => {
              moveIndex(i);
            }}
          />
        ))}
        <button className="w-[24px] h-[24px] cursor-pointer transition hover:brightness-20 active:brightness-10 max-[700px]:hidden">
          <img
            src="/assets/buttons/indicator_right.png"
            alt="left"
            className="w-full h-full"
            onClick={moveNext}
          />
        </button>
      </div>
    </section>
  );
};

export default AiRecSection;
