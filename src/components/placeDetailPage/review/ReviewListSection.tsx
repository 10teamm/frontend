import ReviewList from "./ReviewList";
import SortButton from "../../common/SortButton";
import type { Review } from "@/types/apiResponseTypes";
import MobileReviewList from "./MobileReviewList";

interface Props {
  sort: "r" | "c";
  setSort: React.Dispatch<React.SetStateAction<"r" | "c">>;
  reviews: Review[];
  hasMore: boolean;
  loading: boolean;
  handleLoadMore: () => void;
}
const ReviewListSection = ({
  sort,
  setSort,
  reviews,
  hasMore,
  loading,
  handleLoadMore,
}: Props) => {
  return (
    <section className="w-full h-fit flex flex-col">
      {/* 정렬버튼 */}
      <div className="w-[148px] h-[24px] flex gap-[16px] ml-auto mb-[16px] max-[700px]:gap-[8px]">
        <SortButton
          name={"인기 순"}
          isActive={sort === "r"}
          onToggle={() => setSort("r")}
        />
        <SortButton
          name={"최신 순"}
          isActive={sort === "c"}
          onToggle={() => setSort("c")}
        />
      </div>

      {/* 리뷰 리스트 */}
      {loading ? (
        <p className="text-center text-[14px] text-[var(--place-neutral)] py-8">
          불러오는 중...
        </p>
      ) : reviews.length > 0 ? (
        <>
          <ReviewList reviews={reviews} />
          <MobileReviewList reviews={reviews} />
        </>
      ) : (
        <p className="text-center text-[14px] text-[var(--place-neutral)] py-8 border-t-1 border-b-1">
          작성된 리뷰가 없습니다.
        </p>
      )}

      {/* 더보기 버튼 */}
      {hasMore && reviews.length > 0 && (
        <button
          className="w-fit h-[24px] mx-auto flex gap-[2px] mt-[24px] items-center cursor-pointer hover:underline max-[700px]:h-[14px]"
          onClick={handleLoadMore}
          disabled={loading}
        >
          <p className="text-[14px] text-[var(--place-neutral)] max-[700px]:text-[10px]">
            {loading ? "불러오는 중..." : "댓글 더보기"}
          </p>
          <img
            className="h-full aspect-square"
            src="/assets/icons/more_review.png"
            alt="리뷰 더보기"
          />
        </button>
      )}
    </section>
  );
};

export default ReviewListSection;
