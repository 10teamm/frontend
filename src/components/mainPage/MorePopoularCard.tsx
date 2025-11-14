import { useNavigate } from "react-router-dom";
import MainCard from "./MainCard";
import { CircleEllipsis } from "lucide-react";

const MorePopularCard = () => {
  const navigate = useNavigate();
  return (
    <MainCard
      className="max-w-[285px] w-full aspect-[285/380] bg-[var(--sem-bg-elevated-alt)] border-[1px] border-[var(--textarea-border)] flex justify-center items-center cursor-pointer"
      onClick={() => navigate("/popularoftoday")}
    >
      <CircleEllipsis className="text-[var(--place-detail-heart)]" />
    </MainCard>
  );
};

export default MorePopularCard;
