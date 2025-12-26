import { SIDO_CODE } from "@/configs/searchConstants";
import OptionSelectButton from "./OptionSelectButton";
import { usePlannerSelectionStore } from "@/stores/plannerSelectionStore";

const SelectRegionSection = () => {
  const { region, setRegion } = usePlannerSelectionStore();

  return (
    <section className="flex flex-col gap-[24px] w-full h-fit ">
      <h2 className="w-full h-fit font-semibold text-[18px] max-[700px]:text-[16px]">
        어디로 갈까요?
        <br />
        지역을 선택해주세요.
      </h2>
      {/* 지역 칩 데스크톱 */}
      <div className="w-full min-h-[100px] h-fit flex gap-[16px] flex-wrap max-[700px]:hidden">
        {Object.keys(SIDO_CODE).map((current, i) => (
          <OptionSelectButton
            key={i}
            w={76}
            value={current}
            isActive={SIDO_CODE[current] === region}
            onClick={() => setRegion(SIDO_CODE[current])}
          />
        ))}
      </div>
      {/* 지역 칩 모바일 */}
      <div className="w-full h-fit gap-[10px] flex-wrap hidden max-[700px]:flex">
        {Object.keys(SIDO_CODE).map((current, i) => (
          <OptionSelectButton
            key={i}
            w={60}
            value={current}
            isActive={SIDO_CODE[current] === region}
            onClick={() => setRegion(SIDO_CODE[current])}
          />
        ))}
      </div>
    </section>
  );
};

export default SelectRegionSection;
