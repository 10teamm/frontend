import { useState } from "react";
import ModalBackground from "./common/ModalBackground";
import PhotoSlideSection from "./photoSlideModal/PhotoSlideSection";
import { useModalEscapeKey } from "@/hooks/useModalEscapeKey";
import { usePhotoModalStore } from "@/stores/photoModalStore";
import PhotoSlideModalMobile from "./PhotoSlideModalMobile";

const PhotoSlideModal = () => {
  const { photoList, index, modalClose } = usePhotoModalStore();
  const [currentIdx, setCurrentIdx] = useState(index);

  useModalEscapeKey(modalClose);

  return (
    <>
      <div className="max-[1200px]:hidden">
        <ModalBackground onClose={modalClose}>
          <div
            className="max-w-[1000px] w-[90%] max-h-[800px] h-[90%] bg-white flex flex-col gap-[24px] items-center px-[24px] py-[24px] rounded-[24px]"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: `0px 0px 1px 0px rgba(0, 0, 0, 0.08),
            0px 1px 4px 0px rgba(0, 0, 0, 0.08),
            0px 2px 8px 0px rgba(0, 0, 0, 0.12)`,
            }}
          >
            <div className="w-full h-[32px] flex justify-between">
              <div className="w-[24x] h-[24px]"></div>
              <p className="w-fit h-full text-[20px] font-semibold flex justify-center items-center">
                사진 모아 보기
              </p>
              <button
                className="w-[24px] h-[24px] cursor-pointer"
                onClick={modalClose}
              >
                <img
                  className="w-full h-full"
                  src="/assets/buttons/modal_close.png"
                  alt="close button"
                />
              </button>
            </div>
            {/* 사진 확대 div */}
            <section className="w-[640px] h-[480px] bg-[var(--sem-bg-elevated-alt)] rounded-[24px] overflow-hidden">
              <img
                src={photoList[currentIdx]?.imageUrl ?? ""}
                alt="photo_big"
                className="w-full h-full object-contain"
              />
            </section>
            <p className="text-[16px]">{`${currentIdx + 1}/${photoList.length}`}</p>

            <PhotoSlideSection
              photoList={photoList}
              setIndex={setCurrentIdx}
              activeIndex={currentIdx}
            />
          </div>
        </ModalBackground>
      </div>
      <PhotoSlideModalMobile onClose={modalClose} photoList={photoList} />
    </>
  );
};

export default PhotoSlideModal;
