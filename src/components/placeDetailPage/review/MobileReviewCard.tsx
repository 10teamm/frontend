import MainCard from "../../mainPage/MainCard";
import StarsFromRating from "./StarsFromRating";
import ReportModal from "../../modals/ReportModal";
import SVGIcons from "../../common/SVGIcons";

import { useState } from "react";
import type { Review } from "@/types/apiResponseTypes";
import { formatDateToString } from "@/lib/placeDetailUtils";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/stores/authStore";
import { heartClickedWithLogin, createMaskedNickname } from "@/lib/reviewUtils";
import { loginConfirmAlert } from "@/lib/commonUtils";
import { usePhotoModalStore } from "@/stores/photoModalStore";

interface Props {
  review: Review;
}

const MobileReviewCard = ({ review }: Props) => {
  const { isLoggedIn } = useAuthStore();
  const [likedAmount, setLikedAmount] = useState(review.recommendedNumber);
  const [likeChecked, setLikeChecked] = useState(review.isRecommended);
  const [reportOpen, setReportOpen] = useState(false);

  const { modalOpen } = usePhotoModalStore();

  const navigate = useNavigate();
  return (
    <div className="w-full h-fit flex flex-col border-b-[1px] pb-[16px] border-[var(--search-element-border)] gap-[4px]">
      <div className="w-full h-[20px] flex gap-[12px] items-center ">
        {/* 프로필 */}
        <div className="w-fit h-full flex gap-[8px] items-center">
          <img
            src={
              review.profileImageUrl ??
              "/assets/images/common/default_profile.png"
            }
            className="h-full aspect-square rounded-full"
          />
          <p className="w-fit text-[14px]">
            {createMaskedNickname(review.displayName)}
          </p>
        </div>
        {/* 날짜 */}
        <p className="text-[11px] text-[var(--search-element-text)]">
          {formatDateToString(new Date(review.createdAt)).slice(2)}
        </p>
      </div>
      <div className="w-full h-fit flex">
        <div className="w-[972px] h-full flex flex-col gap-[4px]">
          <div className="w-full h-[24px] flex justify-between items-center">
            {/* 별점 */}
            <StarsFromRating rating={review.score} />
            {/* 좋아요 */}
            <div className="w-fit h-fit flex gap-[6px] items-center">
              <div className="w-fit h-fit flex gap-[2px] items-center">
                <button
                  className="w-fit h-fit cursor-pointer"
                  onClick={() => {
                    isLoggedIn
                      ? heartClickedWithLogin(
                          review.reviewId,
                          likeChecked,
                          setLikeChecked,
                          likeChecked,
                          setLikedAmount
                        )
                      : loginConfirmAlert(navigate);
                  }}
                >
                  <SVGIcons
                    name="placedetailHeart"
                    width={12}
                    height={12}
                    color={
                      likeChecked
                        ? "var(--main-color)"
                        : "var(--place-detail-heart)"
                    }
                  />
                </button>
                <p className="w-fit h-fit text-[12px]">{likedAmount}</p>
              </div>
              <div className="w-px h-[12px] bg-[var(--search-element-border)]" />

              <button
                className="w-fit h-fit ml-auto text-[10px] cursor-pointer text-[var(--search-element-text)]"
                onClick={() => {
                  isLoggedIn
                    ? setReportOpen(true)
                    : loginConfirmAlert(navigate);
                }}
              >
                신고
              </button>
            </div>
          </div>
          {/* 리뷰 내용 */}
          <p className="w-full h-fit text-[12px] py-[8px] whitespace-pre-wrap">
            {review.content.trim()}
          </p>
          <div className="w-full h-fit flex justify-between">
            {review.images.length > 0 && (
              <div className="w-fit h-fit flex gap-[6px]">
                {review.images.map((image, i) => (
                  <MainCard
                    key={i}
                    className="h-[72px] aspect-square rounded-[10px]"
                    onClick={() => modalOpen(review.images, i)}
                  >
                    <img
                      src={image.imageUrl}
                      className="w-full h-full object-cover object-center"
                    />
                  </MainCard>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {reportOpen && (
        <ReportModal
          onClose={() => setReportOpen(false)}
          reviewId={review.reviewId}
        />
      )}
    </div>
  );
};

export default MobileReviewCard;
