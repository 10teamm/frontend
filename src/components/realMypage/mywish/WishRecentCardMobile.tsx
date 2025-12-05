import MainCard from "@/components/mainPage/MainCard";
import { useNavigate } from "react-router-dom";

interface Props {
  cardData: any;
}

const WishRecentCardMobile = ({ cardData }: Props) => {
  const navigate = useNavigate();

  return (
    <MainCard
      className="w-full max-w-[120px] aspect-[5/4] h-auto bg-cover bg-center relative rounded-[8px] flex-shrink-0"
      style={{
        backgroundImage: `url(${cardData.imageUrl || cardData.image || "/assets/images/common/default_thumbnail.jpg"})`,
      }}
      onClick={() => navigate(`/placedetail/${cardData.contentId}`)}
    ></MainCard>
  );
};

export default WishRecentCardMobile;
