import MenuLabel from "./MenuLabel";

interface Props {
  title: string;
}
const ReviewTitleSection = ({ title }: Props) => {
  return (
    <section className="w-full h-[50px] flex items-center gap-[44px]">
      <MenuLabel text="방문한 장소" />
      <p className="w-fit h-full text-[18px] font-semibold flex items-center">
        {title}
      </p>
    </section>
  );
};

export default ReviewTitleSection;
