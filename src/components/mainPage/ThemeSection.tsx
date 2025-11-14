import SectionTitle from "./SectionTitle";
import ThemeCard from "./ThemeCard";
import { categories } from "@/configs/searchConstants";

const ThemeList = () => {
  return (
    <section className="flex flex-col gap-[24px] w-full h-fit py-[56px] max-[700px]:pt-[36px] max-[700px]:pb-0">
      <SectionTitle title="카테고리" />

      {/* 데스크톱 뷰 */}
      <div className="flex w-full h-fit gap-[25px] flex max-[1000px]:gap-[15px] max-[850px]:gap-[5px] max-[700px]:flex-wrap max-[700px]:hidden">
        {categories.map((category, i) => (
          <ThemeCard
            key={category}
            title={category}
            img={`/assets/images/categories/category_${i}.jpg`}
          />
        ))}
      </div>

      {/* 모바일 뷰 */}
      <div
        className="w-full h-fit max-[700px]:block hidden overflow-x-auto scrollbar-hide
"
      >
        <div className="flex gap-[12px] w-max">
          {categories.map((category, i) => (
            <ThemeCard
              key={category}
              title={category}
              img={`/assets/images/categories/category_${i}.jpg`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemeList;
