import type { ResponseImage } from "@/types/apiResponseTypes";
//import VisitedCheckBox from "./VisitedCheckBox";
import { usePhotoModalStore } from "@/stores/photoModalStore";

interface Props {
  title: string;
  thumbnail: string;
  imgList: ResponseImage[];
}

const PlaceMainSection = ({ title, thumbnail, imgList }: Props) => {
  const { modalOpen } = usePhotoModalStore();
  const extendedList = [{ imageId: 0, imageUrl: thumbnail }, ...imgList];
  return (
    <section className="w-[full] h-[510px] flex flex-col items-center gap-[16px] pt-[88px] pb-[64px] max-[700px]:h-[460px]">
      {/* 제목 */}
      <h2 className="w-fit h-[51px] text-[32px] font-semibold max-[700px]:text-[24px]">
        {title}
      </h2>
      {/* 썸네일 + 사진 갯수 */}
      <div className="w-[340px] h-[291px] flex flex-col gap-[16px]">
        {/* 썸네일 */}
        <div className="w-[340px] h-[255px] rounded-[16px] overflow-hidden">
          <img
            src={thumbnail}
            className="w-full h-full cursor-pointer object-cover object-center"
            onClick={() => modalOpen(extendedList, 0)}
          />
        </div>
        <p className="w-full h-[20px] flex justify-center items-center max-[700px]:text-[14px]">{`(1/${extendedList.length})`}</p>
      </div>

      {/* <div className="w-[136px] h-[24px] flex gap-[4px] items-center">
        <label className="w-[108px] h-[20px] text-[14px]">
          방문한 장소인가요?
        </label>
        <VisitedCheckBox placeId={placeId} isVisited={isVisited} />
      </div> */}
    </section>
  );
};

export default PlaceMainSection;
