import { useNavigate } from "react-router-dom";
import MainCard from "./MainCard";
import type { PopularCardData } from "@/types/apiResponseTypes";
import { getDistanceInKm } from "@/lib/searchResultCardUtils";
import { useLocationStore } from "@/stores/locationStore";
import { Navigation } from "lucide-react";

interface Props {
  place: PopularCardData;
}

const PopularCard = ({ place }: Props) => {
  const navigate = useNavigate();
  const { lat, lon, isCoordsSet } = useLocationStore();
  return (
    <MainCard
      className="relative max-w-[285px] w-full aspect-[285/380] bg-cover cursor-pointer"
      style={{
        backgroundImage: `url(${place.image || "/assets/images/common/default_thumbnail.jpg"})`,
      }}
      onClick={() => navigate(`/placedetail/${place.contentId}`)}
    >
      <div className="w-full h-full flex flex-col justify-between pl-[16px] pt-[4px] pb-[24px] text-[var(--card-text)] z-50 max-[900px]:pl-[12px] max-[700px]:pt-[8px] max-[700px]:pb-[16px] max-[600px]:pb-[10px]">
        {/* 상단 영역 */}
        <div className="h-fit pt-[16px] max-[900px]:pt-[12px] max-[700px]:pt-[8px]">
          <p className="h-fit text-[48px] font-bold max-[700px]:text-[32px] max-[600px]:text-[24px]">
            {place.ranking}
          </p>
          <p className="h-fit text-[24px] font-semibold break-words whitespace-normal max-[700px]:text-[18px] max-[600px]:text-[14px]">
            {place.title}
          </p>
        </div>
        {/* 하단 영역 */}
        <div className="">
          <p className="h-fit text-[16px] max-[700px]:hidden">
            {place.hashtag[4]}
          </p>
          <p className="h-fit text-[14px] max-[700px]:text-[12px] max-[600px]:text-[10px]">
            {isCoordsSet ? (
              <div className="flex flex-row items-center gap-[4px]">
                <p className="block max-[700px]:hidden">여기서</p>
                <Navigation className="hidden max-[700px]:block w-[10px]" />
                {`${getDistanceInKm(lon!, lat!, place.mapx, place.mapy)}km`}
              </div>
            ) : (
              "위치권한이 없습니다."
            )}
          </p>
        </div>
      </div>
      {/*상단 그라데이션*/}
      <div
        className="absolute top-0 left-0 w-full h-[42%] rounded-[16px] z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #000000 100%)`,
        }}
      ></div>

      {/*하단 그라데이션*/}
      <div
        className="absolute bottom-0 left-0 w-full h-[31%] rounded-[16px] z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 170%)`,
        }}
      ></div>

      {/* <div
        className="absolute bottom-0 left-0 w-full h-[120px] rounded-[16px] z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.33) 50%), url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(7px)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) -7.59%, rgba(0,0,0,0)) 100%",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) -7.59%, rgba(0,0,0,0)) 100%",
        }}
      /> */}
    </MainCard>
  );
};

export default PopularCard;
