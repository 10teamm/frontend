import MyPageScaffold from "@/components/layout/MyPageScaffold";
import MyReviewSection from "@/components/realMypage/myreview/MyReviewSection";

const MyReviewPageFixed = () => {
  return (
    <MyPageScaffold title="방문한 장소 및 리뷰">
      <MyReviewSection />
    </MyPageScaffold>
  );
};

export default MyReviewPageFixed;
