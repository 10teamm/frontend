import ModalButton from "./common/ModalButton";
import ModalBackground from "./common/ModalBackground";
import { useModalEscapeKey } from "@/hooks/useModalEscapeKey";

import { reportOptions } from "@/configs/reportOptions";
import SVGCheckBox from "../common/SVGCheckBox";
import { useReportModal } from "@/hooks/useReportModal";
import ModalCanvas from "./common/ModalCanvas";

interface Props {
  onClose: () => void;
  reviewId: number;
}

const ReportModal = ({ onClose, reviewId }: Props) => {
  useModalEscapeKey(onClose);

  const { selected, handleSubmit, toggleReason } = useReportModal({
    reviewId,
    onClose,
  });
  return (
    <ModalBackground onClose={onClose}>
      <ModalCanvas onClose={onClose} title="이 댓글을 신고하시겠습니까?">
        <div className="w-full h-fit flex flex-col gap-[16px]">
          <div className="w-full h-fit flex flex-wrap gap-[8px] items-center">
            <p className="w-fit h-full flex justify-center items-center text-[16px] max-[700px]:text-[14px]">
              사유를 선택해주세요.
            </p>
            <p className="w-fit h-[20px] text-[var(--deactivated-text)] flex justify-center items-center text-[14px] max-[700px]:text-[12px]">
              신고 사유가 여러 개일 경우 대표 1개만 선택해주세요.
            </p>
          </div>
          <div className="w-full h-fit grid grid-cols-2 gap-x-2 gap-y-2">
            {reportOptions.map((option, i) => (
              <div
                key={i}
                className="w-fit h-fit flex gap-[16px] max-[700px]:gap-[8px]"
              >
                <SVGCheckBox
                  key={i}
                  id={"id-" + i}
                  checked={selected === i + 1}
                  onChange={() => toggleReason(i + 1)}
                />
                <label
                  htmlFor={"id-" + i}
                  className="cursor-pointer text-[16px] max-[700px]:text-[14px]"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-fit flex flex-col gap-[8px]">
          <ModalButton
            onClick={() => handleSubmit()}
            text="확인"
            bgcolor="--main-color"
            textcolor="--main-text"
          />
          <ModalButton
            onClick={onClose}
            text="취소"
            bgcolor="--indicator-disabled"
            textcolor="--place-neutral"
          />
        </div>
      </ModalCanvas>
    </ModalBackground>
  );
};

export default ReportModal;
