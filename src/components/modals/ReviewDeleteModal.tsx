import { useModalEscapeKey } from "@/hooks/useModalEscapeKey";
import ModalBackground from "./common/ModalBackground";
import ModalButton from "./common/ModalButton";
import ModalCanvas from "./common/ModalCanvas";

interface Props {
  onClose: () => void;
  onConfirm: () => void;
}
const ReviewDeleteModal = ({ onClose, onConfirm }: Props) => {
  useModalEscapeKey(onClose);
  return (
    <ModalBackground onClose={onClose}>
      <ModalCanvas
        onClose={onClose}
        title={`리뷰를 삭제하시겠어요?\n삭제된 리뷰는 되돌릴 수 없어요.`}
      >
        <div className="w-full h-fit flex flex-col gap-[8px]">
          <ModalButton
            onClick={onConfirm}
            text="예"
            textcolor="--main-text"
            bgcolor="--main-color"
          />
          <ModalButton
            onClick={onClose}
            text="아니오"
            bgcolor="--indicator-disabled"
            textcolor="--place-neutral"
          />
        </div>
      </ModalCanvas>
    </ModalBackground>
  );
};

export default ReviewDeleteModal;
