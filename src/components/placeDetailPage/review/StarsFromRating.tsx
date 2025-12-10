import fullStar from "/assets/icons/star_full.png";
import halfStar from "/assets/icons/star_half.png";
import emptyStar from "/assets/icons/star_empty.png";

interface Props {
  rating: number;
}

const StarsFromRating = ({ rating }: Props) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <img key={i} src={fullStar} alt="별" className="h-full aspect-square" />
      );
    } else if (rating >= i - 0.5) {
      stars.push(
        <img
          key={i}
          src={halfStar}
          alt="반 별"
          className="h-full aspect-square"
        />
      );
    } else {
      stars.push(
        <img
          key={i}
          src={emptyStar}
          alt="빈 별"
          className="h-full aspect-square"
        />
      );
    }
  }
  return (
    <div className="w-[120px] h-[24px] flex max-[700px]:w-[80px] max-[700px]:h-[16px]">
      {stars}
    </div>
  );
};

export default StarsFromRating;
