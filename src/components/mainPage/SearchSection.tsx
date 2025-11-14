import SearchBar from "./SearchBar";

const SearchSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/images/common/search_panel_bg.jpg')`,
          backgroundSize: "cover",
          backgroundPositionY: "0%",
        }}
      />

      <nav className="relative w-full flex flex-col items-center justify-start pt-[88px] pb-[36px] z-10 max-[700px]:pt-[60px] max-[700px]:pb-[24px] max-[700px]:mt-[30px]">
        <div className="max-w-[1200px] w-full h-[109px] mb-[24px] max-[700px]:w-[calc(100%-50px)] max-[700px]:mb-[12px] max-[1220px]:px-[15px]">
          <p className="text-[32px] font-bold text-[var(--header-text)] max-[700px]:text-[24px]">
            반려동물과 함께하는 생활
          </p>
          <p className="text-[48px] font-dunggeunmiso font-bold text-[var(--header-text)] max-[700px]:text-[36px]">
            어디가냥? 같이가개!
          </p>
        </div>

        <SearchBar />
      </nav>
    </section>
  );
};

export default SearchSection;
