import { Link } from "react-router-dom";
import PopularSlide from "./PopularSlide";
import PopularToolTip from "./PopularTooltip";
import { usePopularPlaces } from "@/hooks/usePopularPlaces";
import SectionTitle from "./SectionTitle";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useCarouselController } from "@/hooks/useCarouselController";
import PopularTooltipMobile from "./PopularTooltipMobile";

const PopularSection = () => {
  const { resultList, slides, mobileSlides } = usePopularPlaces();

  const { setApi, movePrev, moveNext } = useCarouselController(slides);

  return (
    <section className="flex flex-col gap-[24px] w-full h-fit py-[36px] max-[700px]:py-0 max-[1280px]:gap-[12px] max-[700px]:gap-[24px]">
      {/* 텍스트 div */}
      <div className="flex justify-between items-center w-full h-fit">
        <div className="flex gap-[10px] w-fit h-full items-center">
          <SectionTitle title="인기" />
          <PopularToolTip />
          <PopularTooltipMobile />
        </div>

        <Link
          to={"/popularoftoday"}
          className="text-[14px] text-[var(--search-element-text)] mr-[8px] hover:underline max-[700px]:hidden"
        >
          더보기
        </Link>
      </div>
      <div className="w-fit flex flex-row gap-[12px] h-fit ml-auto hidden max-[1280px]:flex max-[700px]:hidden">
        <button className="w-[24px] h-[24px] cursor-pointer transition hover:brightness-20 active:brightness-10">
          <img
            src="/assets/buttons/indicator_left.png"
            alt="left"
            className="w-full h-full"
            onClick={movePrev}
          />
        </button>
        <button className="w-[24px] h-[24px] cursor-pointer transition hover:brightness-20 active:brightness-10">
          <img
            src="/assets/buttons/indicator_right.png"
            alt="left"
            className="w-full h-full"
            onClick={moveNext}
          />
        </button>
      </div>

      {resultList.length < 1 ? (
        <div className="w-full h-[160px] max-[700px]:h-[120px]">
          <p className="text-center text-[14px] text-[var(--place-neutral)] py-8">
            집계된 장소가 없습니다.
          </p>
        </div>
      ) : (
        <article>
          {/* 데스크톱 뷰 */}
          <Carousel
            className="relative w-full h-fit max-[700px]:hidden"
            setApi={setApi}
          >
            <CarouselContent>
              {slides.map((slide, i) => (
                <CarouselItem key={i}>
                  <PopularSlide placeList={slide} isMobile={false} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* 이동 버튼 */}
            <button
              className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[40px] h-[40px] cursor-pointer max-[1280px]:hidden"
              onClick={movePrev}
            >
              <img
                src="/assets/buttons/button_left.png"
                alt="left"
                className="w-full h-full transition hover:brightness-95 active:brightness-92"
              />
            </button>
            <button
              className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 w-[40px] h-[40px] cursor-pointer max-[1280px]:hidden"
              onClick={moveNext}
            >
              <img
                src="/assets/buttons/button_right.png"
                alt="right"
                className="w-full h-full transition hover:brightness-95 active:brightness-92"
              />
            </button>
          </Carousel>

          {/* 모바일 뷰 */}
          <Carousel className=" w-full h-fit hidden max-[700px]:block">
            <CarouselContent>
              {mobileSlides.map((slide, i) => (
                <CarouselItem key={i}>
                  <PopularSlide placeList={slide} isMobile={true} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </article>
      )}
    </section>
  );
};

export default PopularSection;
