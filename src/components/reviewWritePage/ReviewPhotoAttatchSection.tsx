import MenuLabel from "./MenuLabel";
import DefaultButtonConfirm from "../common/DefaultButtonConfirm";
import AttatchedPhotoCard from "./AttatchedPhotoCard";

interface Props {
  images: File[];
  maxImages: number;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  openFilePicker: () => void;
  handleFilesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeImageByIndex: (index: number) => void;
}

const ReviewPhotoAttatchSection = ({
  images,
  maxImages,
  fileInputRef,
  openFilePicker,
  handleFilesChange,
  removeImageByIndex,
}: Props) => {
  return (
    <div className="w-full h-fit flex gap-[44px]">
      <MenuLabel text="사진 첨부" />
      {/* 사진 첨부 패널 */}
      <div className="w-full h-fit flex flex-col gap-[24px]">
        <div className="w-full h-[45px] flex gap-[24px] items-center">
          <div className="max-[700px]:hidden">
            <DefaultButtonConfirm
              text="사진 첨부하기"
              w={138}
              h={45}
              textSize={18}
              onClick={openFilePicker}
            />
          </div>
          <div className="max-[700px]:block hidden">
            <DefaultButtonConfirm
              text="첨부하기"
              w={72}
              h={40}
              textSize={14}
              onClick={openFilePicker}
            />
          </div>
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
              <AttatchedPhotoCard
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

export default ReviewPhotoAttatchSection;
