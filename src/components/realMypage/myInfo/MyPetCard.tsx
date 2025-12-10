import type { PetData } from "@/types/apiResponseTypes";
import DefaultButtonCancel from "@/components/common/DefaultButtonCancel";
import { deletePet } from "@/lib/myInfoUtils";
import DefaultButtonConfirm from "@/components/common/DefaultButtonConfirm";
import { useState } from "react";
import ModalPortal from "@/components/modals/common/ModalPortal";
import MyPetEditModal from "@/components/modals/MyPetEditModal";
import MyPetDescBox from "./MyPetDescBox";

interface Props {
  petData?: PetData;
}
const MyPetCard = ({ petData }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-[816px] w-full h-fit border-[1px] border-[var(--search-element-border)] rounded-[16px] px-[32px] py-[24px] flex flex-col gap-[24px]">
      <div className="w-fit h-fit flex gap-[32px] max-[1220px]:flex-col max-[1220px]:items-center max-[1220px]:gap-[12px] max-[1220px]:mx-auto">
        <div className="max-w-[300px] aspect-[3/2] overflow-hidden rounded-[16px]">
          <img
            src={petData?.imageUrl}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full h-fit flex flex-col gap-[4px]">
          <div className="w-full h-[40px] flex gap-[32px] items-center max-[1220px]:gap-[4px]">
            <p className="w-[56px] h-[22px] text-[16px] max-[1220px]:text-[12px] max-[1220px]:w-[40px]">
              성별
            </p>
            <img
              src={`/assets/icons/${petData?.gender === "M" ? "male.png" : "female.png"}`}
              className="w-6 h-6 max-[1220px]:w-5 max-[1220px]:h-5"
            />
          </div>
          <MyPetDescBox label="이름" value={petData?.name || ""} />
          <MyPetDescBox label="종류" value={petData?.type || ""} />
          <MyPetDescBox label="생년월일" value={petData?.birth || ""} />
          <MyPetDescBox label="사이즈" value={petData?.size || ""} />
        </div>
      </div>
      <div className="w-full h-fit flex gap-[10px] justify-end max-[1220px]:hidden">
        <DefaultButtonConfirm
          text="수정하기"
          textSize={14}
          w={77}
          h={36}
          onClick={() => setIsOpen(true)}
        />
        <DefaultButtonCancel
          text="삭제하기"
          textSize={14}
          w={77}
          h={36}
          onClick={() => deletePet(petData?.petId!)}
        />
      </div>
      <div className="w-full h-fit max-[1220px]:flex gap-[10px] justify-center hidden">
        <DefaultButtonConfirm
          text="수정"
          textSize={12}
          w={60}
          h={32}
          onClick={() => setIsOpen(true)}
        />
        <DefaultButtonCancel
          text="삭제"
          textSize={12}
          w={60}
          h={32}
          onClick={() => deletePet(petData?.petId!)}
        />
      </div>
      {isOpen && (
        <ModalPortal>
          <div className="App">
            <MyPetEditModal
              onClose={() => setIsOpen(false)}
              petData={petData!}
            />
          </div>
        </ModalPortal>
      )}
    </div>
  );
};

export default MyPetCard;
