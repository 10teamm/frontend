import { useModalEscapeKey } from "@/hooks/useModalEscapeKey";
import ModalBackground from "./common/ModalBackground";
import ModalButton from "./common/ModalButton";
import ModalCanvas from "./common/ModalCanvas";

interface Props {
  onClose: () => void;
  onConfirm: () => void;
}
const ReviewCancelModal = ({ onClose, onConfirm }: Props) => {
  useModalEscapeKey(onClose);
  return (
    <ModalBackground onClose={onClose}>
      <ModalCanvas
        onClose={onClose}
        title={`리뷰를 취소하시겠어요?\n이 페이지를 나가면 저장되지 않아요`}
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

export default ReviewCancelModal;
