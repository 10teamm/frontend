import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import MainContainer from "@/components/layout/MainContainer";
import SearchResultSection from "@/components/searchPage/SearchResultSection";
import SearchSectionOnSearch from "@/components/searchPage/SearchSectionOnSearch";
import { Toaster } from "sonner";

const SearchResultPage = () => {
  return (
    <MainContainer>
      <title>어다가냥?같이가개! | 검색</title>
      <ScrollToTopButton />
      <Toaster />
      <SearchSectionOnSearch />
      <SearchResultSection />
    </MainContainer>
  );
};

export default SearchResultPage;
