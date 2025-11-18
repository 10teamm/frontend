import { useState, useEffect, useMemo } from "react";
import { fetchSmart } from "@/lib/fetchUtils";
import { useAuthStore } from "@/stores/authStore";
import type { PopularCardData } from "@/types/apiResponseTypes";

const usePopularPlaces = () => {
  const [loading, setLoading] = useState(false);
  const [resultList, setResultList] = useState<PopularCardData[]>([]);
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    const fetchLoadPopularList = async () => {
      setLoading(true);

      try {
        const res = await fetchSmart("/api/content/rank", {
          method: "GET",
        });

        if (res.status === 204) {
          setResultList([]);
          return;
        }

        if (!res.ok) throw new Error("인기 목록 요청 실패");

        const data = await res.json();
        setResultList(data.data);
      } catch (e) {
        console.error("인기 목록 불러오기 실패", e);
      } finally {
        setLoading(false);
      }
    };

    fetchLoadPopularList();
  }, [isLoggedIn]);

  // 슬라이드
  const slides = useMemo(() => {
    const result: PopularCardData[][] = [];
    for (let i = 0; i < resultList.length; i += 4) {
      result.push(resultList.slice(i, i + 4));
    }
    return result;
  }, [resultList]);

  const mobileSlides = useMemo(() => {
    const result: PopularCardData[][] = [];
    for (let i = 0; i <= 7; i += 3) {
      result.push(resultList.slice(i, Math.min(i + 3, 8)));
    }

    if (
      resultList.length > 0 &&
      result.length < 3 &&
      resultList.length % 3 === 0
    ) {
      result.push([]);
    }

    return result;
  }, [resultList]);

  return { loading, resultList, slides, mobileSlides };
};

export { usePopularPlaces };
