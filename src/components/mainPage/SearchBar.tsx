import { categories, regionMap } from "@/configs/searchConstants";
import useSearchBarState from "@/hooks/useSearchBarState";

import SearchSelectBox from "./SearchSelectBox";
import SubRegionList from "./SubRegionList";
import { Input } from "../ui/input";
import { useEnterKey } from "@/hooks/useEnterkey";

const SearchBar = () => {
  const {
    selectedRegion,
    selectedCategory,
    selectedSubRegion,
    inputkeyword,
    setSelectedRegion,
    setSelectedCategory,
    setSelectedSubRegion,
    setInputKeyword,
    onSearch,
  } = useSearchBarState();

  useEnterKey(onSearch);

  return (
    <div className="w-[1200px] h-fit flex flex-wrap rounded-[40px] bg-[var(--search-bar-bg)] px-[12px] py-[12px] gap-[12px] border-[1px] border-[var(--search-element-border)] z-20">
      <div className="flex flex-grow gap-[12px]">
        <SearchSelectBox
          options={Object.keys(regionMap)}
          placeholder="지역명"
          value={selectedRegion}
          onChange={setSelectedRegion}
        />

        <SearchSelectBox
          options={categories}
          placeholder="카테고리"
          value={selectedCategory}
          onChange={setSelectedCategory}
        />

        {/* <SearchSelectBox
          options={test}
          placeholder="반려동물 정보"
          value={selectedPet}
          onChange={setSelectedPet}
          isDisabled={!user}
        /> */}

        <div className="relative h-fit flex-1">
          <img
            src="/assets/icons/search.png"
            alt="search_icon"
            className="absolute top-1/2 -translate-y-1/2 left-[16px] w-[24px] aspect-square max-[700px]:left-[12px] max-[700px]:w-[20px]"
          />
          <Input
            id="place_input"
            className="w-full h-[48px] rounded-[26px] font-semibold bg-[var(--search-element-bg)] !text-[14px] pl-[44px] focus:ring-[1px] focus:ring-[var(--main-color)] placeholder:text-[var(--place-neutral)]
            max-[700px]:pl-[36px] max-[400px]:!text-[16px] max-[400px]:!h-[40px] max-[400px]:placeholder:text-[12px]"
            placeholder="장소명"
            defaultValue={inputkeyword}
            onChange={(e) => setInputKeyword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col justify-center w-[48px] h-[48px] shrink-0">
        <button className="w-[40px] h-[40px] cursor-pointer" onClick={onSearch}>
          <img
            src="/assets/buttons/search_button.png"
            alt="search"
            className="w-full h-full transition hover:brightness-95 active:brightness-92"
          />
        </button>
      </div>

      {selectedRegion && regionMap[selectedRegion] && (
        <SubRegionList
          subregions={regionMap[selectedRegion]}
          current={selectedSubRegion}
          onChange={setSelectedSubRegion}
        />
      )}
    </div>
  );
};

export default SearchBar;
