import { useAuthStore } from "@/stores/authStore";
import SVGIcons from "../common/SVGIcons";
import { heartClickedWithLogin } from "@/lib/placeDetailUtils";
import { loginConfirmAlert, mobileShare } from "@/lib/commonUtils";
import { useNavigate } from "react-router-dom";
import { usePlacePopularity } from "@/hooks/usePlacePopularity";

interface Props {
  placeId: string;
  likedCount: number;
  viewCount: number;
  isLiked: boolean;
}
const PlacePupularitySection = ({
  placeId,
  likedCount,
  viewCount,
  isLiked,
}: Props) => {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  const { likeChecked, likedAmount, setLikeChecked, setLikedAmount } =
    usePlacePopularity({
      likedCount,
      isLiked,
      placeId,
      isLoggedIn,
    });

  return (
    <section className="w-full h-[72px] flex flex-col gap-[16px] py-[16px] text-[var(--place-neutral)] max-[700px]:py-[8px] max-[700px]:gap-[8px]">
      <div className="w-full h-[24px] flex justify-between">
        <div className="w-fit flex gap-[16px]">
          <div className="w-fit h-fit flex gap-[4px] items-center">
            <button
              className="w-[24px] h-[24px] cursor-pointer max-[700px]:w-[16px] max-[700px]:h-[16px]"
              onClick={() => {
                isLoggedIn
                  ? heartClickedWithLogin(
                      placeId,
                      likeChecked,
                      setLikeChecked,
                      likeChecked,
                      setLikedAmount
                    )
                  : loginConfirmAlert(navigate);
              }}
            >
              <div className="w-full h-full block max-[700px]:hidden">
                <SVGIcons
                  name="placedetailHeart"
                  width={24}
                  height={24}
                  color={
                    likeChecked
                      ? "var(--main-color)"
                      : "var(--place-detail-heart)"
                  }
                />
              </div>
              <div className="w-full h-full hidden max-[700px]:block">
                <SVGIcons
                  name="placedetailHeart"
                  width={16}
                  height={16}
                  color={
                    likeChecked
                      ? "var(--main-color)"
                      : "var(--place-detail-heart)"
                  }
                />
              </div>
            </button>
            <p className="w-fit h-fit text-[16px] max-[700px]:text-[14px]">
              {likedAmount}
            </p>
          </div>
          <div className="w-fit flex gap-[2px] h-fit items-center">
            <div className="w-full h-full block max-[700px]:hidden">
              <SVGIcons
                name="placedetailView"
                width={24}
                height={24}
                color=""
              />
            </div>
            <div className="w-full h-full hidden max-[700px]:block">
              <SVGIcons
                name="placedetailView"
                width={16}
                height={16}
                color=""
              />
            </div>

            <p className="w-fit h-fit text-[16px] max-[700px]:text-[14px]">
              {viewCount}
            </p>
          </div>
        </div>
        <button
          className="w-fit h-fit flex gap-[2px] items-center cursor-pointer transition hover:underline underline-offset-[3px]"
          onClick={() => mobileShare(placeId)}
        >
          <div className="w-fit h-full block max-[700px]:hidden">
            <SVGIcons name="placedetailShare" width={24} height={24} color="" />
          </div>
          <div className="w-full h-full hidden max-[700px]:block">
            <SVGIcons name="placedetailShare" width={16} height={16} color="" />
          </div>
          <p className="text-[14px] font-semibold max-[700px]:hidden">
            공유하기
          </p>
        </button>
      </div>
      <hr className="w-full border-[1px] borer-[var(--search-element-border)]" />
    </section>
  );
};

export default PlacePupularitySection;
