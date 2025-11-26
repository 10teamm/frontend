import DefaultButtonConfirm from "../common/DefaultButtonConfirm";
import DefaultButtonCancel from "../common/DefaultButtonCancel";

interface Props {
  setIsSaveOpen: (is: boolean) => void;
  setIsCancelOpen: (is: boolean) => void;
}

const ReviewSubmitSection = ({ setIsSaveOpen, setIsCancelOpen }: Props) => {
  return (
    <section className="w-full h-fit">
      <div className="w-full h-[45px] flex gap-[16px] justify-end max-[700px]:hidden">
        <DefaultButtonConfirm
          w={103}
          h={45}
          text="저장하기"
          textSize={18}
          onClick={() => setIsSaveOpen(true)}
        />
        <DefaultButtonCancel
          w={103}
          h={45}
          text="취소하기"
          textSize={18}
          onClick={() => setIsCancelOpen(true)}
        />
      </div>
      <div className="w-full h-fit hidden gap-[8px] max-[700px]:flex justify-center">
        <DefaultButtonConfirm
          w={68}
          h={36}
          text="저장"
          textSize={14}
          onClick={() => setIsSaveOpen(true)}
        />
        <DefaultButtonCancel
          w={68}
          h={36}
          text="취소"
          textSize={14}
          onClick={() => setIsCancelOpen(true)}
        />
      </div>
    </section>
  );
};

export default ReviewSubmitSection;
