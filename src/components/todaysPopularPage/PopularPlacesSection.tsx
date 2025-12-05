import { usePopularPlaces } from "@/hooks/usePopularPlaces";
import SearchResultList from "../searchPage/SearchResultList";
import MobileResultList from "../searchPage/MobileResultList";

const PopularPlacesSection = () => {
  const { loading, resultList } = usePopularPlaces();

  return (
    <section className="w-full flex flex-col gap-[32px] pt-[44px] pb-[32px] max-[700px]:mt-[60px]">
      <div className="w-full h-[55px] flex justify-between border-b-[1px]">
        <p className="font-semibold text-[24px] ">랭킹 Top 20</p>
      </div>
      {loading ? (
        <p className="text-center text-[14px] text-[var(--place-neutral)] py-8">
          불러오는 중...
        </p>
      ) : resultList.length < 1 ? (
        <p className="text-center text-[14px] text-[var(--place-neutral)] py-8">
          집계된 장소가 없습니다.
        </p>
      ) : (
        <>
          <SearchResultList searchDataList={resultList} />
          <MobileResultList searchDataList={resultList} />
        </>
      )}
    </section>
  );
};

export default PopularPlacesSection;
