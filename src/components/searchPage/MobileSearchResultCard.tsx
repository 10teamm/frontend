import { useNavigate } from "react-router-dom";
import SearchCard from "./SearchCard";
import MainCard from "../mainPage/MainCard";

import {
  getDistanceInKm,
  heartClickedWithLogin,
} from "@/lib/searchResultCardUtils";
import { mobileShare, loginConfirmAlert, removeTags } from "@/lib/commonUtils";
import { useLocationStore } from "@/stores/locationStore";
import SVGIcons from "../common/SVGIcons";
import SvgButton from "../common/SvgButton";
import type { CardInputType } from "@/types/apiResponseTypes";
import { useAuthStore } from "@/stores/authStore";
import { useSearchResultCard } from "@/hooks/useSearchResultCard";

interface Props {
  cardData: CardInputType;
}

const MobileSearchResultCard = ({ cardData }: Props) => {
  const { isLoggedIn } = useAuthStore();

  const { lon, lat } = useLocationStore();
  const navigate = useNavigate();

  const { liked, setLiked } = useSearchResultCard({
    isLoggedIn,
    isLiked: Boolean(cardData.wishData),
  });

  return (
    <div className="w-full h-[120px] border-b-[1px] pb-[16px]">
      <SearchCard
        className="w-full h-full flex flex-row gap-[14px] rounded-[12px] cursor-pointer"
        onClick={() => navigate(`/placedetail/${cardData.contentId}`)}
      >
        <MainCard
          className="h-full aspect-square bg-cover bg-center relative flex-shrink-0 rounded-[10px]"
          style={{
            backgroundImage: `url(${cardData.image || "/assets/images/common/default_thumbnail.jpg"})`,
          }}
        >
          <div className="absolute w-fit h-fit flex gap-[4px] bottom-[8px] right-[6px]">
            <SvgButton
              svgname={
                isLoggedIn
                  ? liked
                    ? "thumbnailHeartClicked"
                    : "thumbnailHeart"
                  : "thumbnailHeart"
              }
              width={24}
              height={24}
              onClick={() => {
                isLoggedIn
                  ? heartClickedWithLogin(
                      cardData.contentId.toString(),
                      liked,
                      setLiked
                    )
                  : loginConfirmAlert(navigate);
              }}
            />
            <SvgButton
              svgname="thumbnailShare"
              width={24}
              height={24}
              onClick={() => mobileShare(cardData.contentId.toString())}
            />
          </div>
        </MainCard>
        <div className="w-full h-fit flex flex-col gap-[6px]">
          <div className="w-full h-fit flex gap-[8px] items-center">
            <p className="text-[14px] font-semibold">{cardData.title}</p>
            <div className="w-fit h-full flex items-center">
              <SVGIcons
                name="star"
                width={12}
                height={12}
                color="var(--main-color)"
              />
              <p className="text-[10px]">
                {Math.round(cardData.avgScore * 10) / 10}
              </p>
            </div>
          </div>

          <p className="whitespace-nowrap text-[10px] text-[var(--card-subText)]">
            {cardData.regionName.sidoName +
              " " +
              cardData.regionName.sigunguName}
          </p>

          <div className="w-fit h-fit flex flex-row gap-[4px] items-center">
            <SVGIcons
              name="vector"
              width={10}
              height={10}
              color="var(--main-color)"
            />
            <p className="text-[8px]">
              {lon && lat
                ? getDistanceInKm(lon, lat, cardData.mapx, cardData.mapy) + "km"
                : "위치권한이 없습니다"}
            </p>
          </div>
          <p className="break-keep text-[10px] text-[var(--card-subText)]">
            {cardData.restDate && cardData.restDate.trim()
              ? removeTags(cardData.restDate)
              : "휴무정보 없음"}
          </p>
          {/* {cardData.hashtag.length > 0 && (
            <div className="w-full h-fit flex flex-wrap gap-[8px]">
              <TagLabel
                value={"#" + CONTENT_TYPE_NAME[cardData.contentTypeId]}
              />
              {cardData.hashtag.slice(0, 3).map((tag, i) => (
                <TagLabel key={i} value={tag} />
              ))}
            </div>
          )} */}
        </div>
      </SearchCard>
    </div>
  );
};

export default MobileSearchResultCard;
