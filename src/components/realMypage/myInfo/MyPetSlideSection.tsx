import type { PetData } from "@/types/apiResponseTypes";

import MyPetCard from "./MyPetCard";
import MyPetAddCard from "./MyPetAddCard";
import MyPetAddModal from "@/components/modals/MyPetAddModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";
import { useCarouselController } from "@/hooks/useCarouselController";

interface Props {
  petList?: PetData[];
}

const MyPetSlideSection = ({ petList = [] }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setApi, movePrev, moveNext } = useCarouselController(petList);

  return (
    <section className="w-full h-fit flex items-center gap-[16px]">
      <button
        className="w-[24px] h-[24px] cursor-pointer max-[1220px]:hidden"
        onClick={movePrev}
      >
        <img
          src="/assets/buttons/button_photo_left.png"
          alt="left"
          className="w-full h-full"
        />
      </button>
      <Carousel className="max-w-[816px] w-full h-fit" setApi={setApi}>
        <CarouselContent>
          {petList.map((pet, i) => (
            <CarouselItem key={i}>
              <MyPetCard petData={pet} />
            </CarouselItem>
          ))}
          <CarouselItem>
            <MyPetAddCard setIsOpen={setIsOpen} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <button
        className="w-[24px] h-[24px] cursor-pointer  max-[1220px]:hidden"
        onClick={moveNext}
      >
        <img
          src="/assets/buttons/button_photo_right.png"
          alt="left"
          className="w-full h-full"
        />
      </button>

      {isOpen && <MyPetAddModal onClose={() => setIsOpen(false)} />}
    </section>
  );
};

export default MyPetSlideSection;
