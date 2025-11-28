import { useModalEscapeKey } from "@/hooks/useModalEscapeKey";
import ModalBackground from "./common/ModalBackground";
import ModalButton from "./common/ModalButton";
import { fetchWithDraw } from "@/lib/myInfoUtils";
import { useNavigate } from "react-router-dom";
import ModalCanvas from "./common/ModalCanvas";

interface Props {
  onClose: () => void;
}
const WithDrawModal = ({ onClose }: Props) => {
  useModalEscapeKey(onClose);
  const navigate = useNavigate();
  return (
    <ModalBackground onClose={onClose}>
      <ModalCanvas onClose={onClose} title="정말 탈퇴하시겠어요?">
        <div className="w-full h-[120px] flex flex-col gap-[8px]">
          <ModalButton
            onClick={() => {
              fetchWithDraw(navigate);
              onClose();
            }}
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

export default WithDrawModal;
