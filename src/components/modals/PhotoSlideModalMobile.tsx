import type { ResponseImage } from "@/types/apiResponseTypes";
import { X } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useCarouselController } from "@/hooks/useCarouselController";

interface Props {
  onClose: () => void;
  photoList: ResponseImage[];
}

const PhotoSlideModalMobile = ({ onClose, photoList }: Props) => {
  const { current, count, setApi } = useCarouselController(photoList);
  return (
    <div className="max-[1200px]:block fixed inset-0 z-40 bg-[var(--modal-mobile-photo)] hidden">
      <div className="relative relative w-full h-full flex flex-col justify-center items-center">
        <div className="absolute top-[12px] w-full h-fit flex justify-between px-[16px] z-50">
          <div className="w-[24px] h-[24px]"></div>
          <p className="w-fit h-full text-[16px] font-semibold flex justify-center items-center text-center text-[var(--main-text)]">
            {`${current + 1}/${count}`}
          </p>
          <button
            className="h-[24px] aspect-square cursor-pointer max-[700px]:h-[20px]"
            onClick={onClose}
          >
            <X color="white" />
          </button>
        </div>
        <div className="max-w-[600px] w-full h-fit ">
          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {photoList.map((photo, i) => (
                <CarouselItem
                  key={i}
                  className="flex justify-center items-center"
                >
                  <img
                    src={photo.imageUrl ?? ""}
                    alt={`photo-${i}`}
                    className="w-full h-auto object-contain rounded-[10px]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlideModalMobile;
