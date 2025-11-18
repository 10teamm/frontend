import type { Review } from "@/types/apiResponseTypes";
import MobileReviewCard from "./MobileReviewCard";

interface Props {
  reviews: Review[];
}
const MobileReviewList = ({ reviews }: Props) => {
  return (
    <section className="w-full h-fit flex-col gap-[16px] max-[700px]:flex hidden">
      {reviews.map((review) => (
        <MobileReviewCard key={review.reviewId} review={review} />
      ))}
    </section>
  );
};

export default MobileReviewList;
