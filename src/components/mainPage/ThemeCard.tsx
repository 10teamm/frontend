import MainCard from "./MainCard";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  img: string;
}

const ThemeCard = ({ title, img }: Props) => {
  const navigate = useNavigate();
  return (
    <MainCard
      className="w-[150px] h-fit gap-[8px] cursor-pointer max-[700px]:w-[100px]"
      onClick={() => navigate(`/search?category=${title}`)}
    >
      <div className="w-full aspect-square overflow-hidden rounded-[16px]">
        <img
          src={img}
          alt={`thumbnail_{${title}}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-fit h-[29px] max-[700px]:mx-auto">
        <p className="text-[18px] font-semibold max-[1000px]:text-[16px] max-[850px]:text-[14px]">
          {title}
        </p>
      </div>
    </MainCard>
  );
};

export default ThemeCard;
