import MenuLabel from "../reviewWritePage/MenuLabel";
import DefaultButtonConfirm from "../common/DefaultButtonConfirm";
import type { MixedImage } from "@/types/forFrontTypes";
import AttatchedEditPhotoCard from "./AttatchedEditPhotoCard";

interface Props {
  images: MixedImage[];
  maxImages: number;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  openFilePicker: () => void;
  handleFilesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeImageByIndex: (index: number) => void;
}

const ReviewEditAttatchSection = ({
  images,
  maxImages,
  fileInputRef,
  openFilePicker,
  handleFilesChange,
  removeImageByIndex,
}: Props) => {
  return (
    <div className="w-full h-[210px] flex gap-[44px]">
      <MenuLabel text="사진 첨부" />
      {/* 사진 첨부 패널 */}
      <div className="w-full h-[210px] flex flex-col gap-[24px]">
        <div className="w-full h-[45px] flex gap-[24px] items-center">
          <DefaultButtonConfirm
            text="사진 첨부하기"
            w={138}
            h={45}
            textSize={18}
            onClick={openFilePicker}
          />
          <p className="w-fit h-fit text-[14px]">
            {images.length + "/" + maxImages}
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,.png"
            multiple
            className="hidden"
            onChange={handleFilesChange}
          />
        </div>
        {/* 사진 목록 패널 */}
        <div className="w-full h-fit overflow-x-auto scrollbar-hide">
          <div className="flex gap-[16px] w-max max-[700px]:gap-[10px]">
            {images.map((image, i) => (
              <AttatchedEditPhotoCard
                key={i}
                img={image}
                onXClick={() => removeImageByIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewEditAttatchSection;
