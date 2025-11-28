import type { PlannerDayPlan } from "@/types/apiResponseTypes";
import { useState } from "react";
import ResultSideBarIndicator from "./ResultSideBarIndicator";
import ResultSection from "./ResultSection";

interface Props {
  setDay: (day: number) => void;
  day: number;
  totalDays: number;
  filteredData: PlannerDayPlan;
  distance: number;
}

const ResultSideBar = ({
  setDay,
  totalDays,
  day,
  filteredData,
  distance,
}: Props) => {
  const [isResultOpen, setIsResultOpen] = useState(true);
  return (
    <aside
      className="absolute top-[44px] left-[42px] rounded-[24px] max-w-[405px] w-full h-fit z-30 flex flex-col gap-[16px]
      max-[700px]:w-[90%] max-[700px]:left-1/2 max-[700px]:-translate-x-1/2"
      style={{ maxHeight: `calc(100svh - 88px)` }}
    >
      <ResultSideBarIndicator
        setIsResultOpen={setIsResultOpen}
        isResultOpen={isResultOpen}
      />

      {isResultOpen && (
        <ResultSection
          setDay={setDay}
          totalDays={totalDays}
          day={day}
          distance={distance}
          filteredData={filteredData}
        />
      )}
    </aside>
  );
};

export default ResultSideBar;
