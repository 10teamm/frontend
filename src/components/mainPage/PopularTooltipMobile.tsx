import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const PopularTooltipMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen}>
        <TooltipTrigger asChild className="max-[700px]:block hidden">
          <img
            src="/assets/icons/tooltip_icon.png"
            alt="tooltip icon"
            className="w-[16px] h-[16px]"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-[#262626] ">
          <p className="text-[8px] text-[var(--tooltip-text)]">
            지난 24시간 동안 가장 조회수가 높았어요!
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default PopularTooltipMobile;
