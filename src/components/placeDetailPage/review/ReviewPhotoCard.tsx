import { usePhotoModalStore } from "@/stores/photoModalStore";
import MainCard from "../../mainPage/MainCard";
import type { ResponseImage } from "@/types/apiResponseTypes";

interface Props {
  img: string;
  index: number;
  photoList: ResponseImage[];
}

const ReviewPhotoCard = ({ img, index, photoList }: Props) => {
  const { modalOpen } = usePhotoModalStore();
  return (
    <MainCard
      className="w-[150px] aspect-square bg-cover cursor-pointer max-[1220px]:w-[120px] max-[700px]:w-[80px] flex-shrink-0 max-[1220px]:!rounded-[12px] max-[700px]:!rounded-[6px]"
      onClick={() => modalOpen(photoList, index)}
    >
      <img src={img} className="w-full h-full object-cover object-center" />
    </MainCard>
  );
};

export default ReviewPhotoCard;
