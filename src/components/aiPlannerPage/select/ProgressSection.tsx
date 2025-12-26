import DefaultButtonCancel from "@/components/common/DefaultButtonCancel";
import DefaultButtonConfirm from "@/components/common/DefaultButtonConfirm";
import { usePlannerStep } from "@/hooks/usePlannerStep";
import { usePlannerSelectionStore } from "@/stores/plannerSelectionStore";
import { useNavigate } from "react-router-dom";

const ProgressSection = () => {
  const { region, schedule, mood } = usePlannerSelectionStore();
  const { next } = usePlannerStep();
  const canNext = !!region && !!schedule && !!mood;
  const navigate = useNavigate();
  return (
    <section className="w-full h-fit">
      <div className="w-full h-fit flex justify-end gap-[21px] max-[700px]:hidden">
        <DefaultButtonCancel
          w={72}
          h={45}
          text="이전"
          textSize={18}
          onClick={() => navigate("/")}
        />
        <DefaultButtonConfirm
          w={72}
          h={45}
          text="다음"
          textSize={18}
          onClick={() => canNext && next()}
          isActive={canNext}
        />
      </div>
      <div className="w-full h-fit hidden justify-end gap-[8px] max-[700px]:flex">
        <DefaultButtonCancel
          w={60}
          h={36}
          text="이전"
          textSize={15}
          onClick={() => navigate("/")}
        />
        <DefaultButtonConfirm
          w={60}
          h={36}
          text="다음"
          textSize={15}
          onClick={() => canNext && next()}
          isActive={canNext}
        />
      </div>
    </section>
  );
};

export default ProgressSection;
