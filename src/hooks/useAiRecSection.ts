import { fetchSmart } from "@/lib/fetchUtils";
import { useAuthStore } from "@/stores/authStore";
import type { AiRecommendData } from "@/types/apiResponseTypes";

import { useEffect, useState } from "react";

const useAiRecSection = () => {
  const [loading, setLoading] = useState(false);
  const [resultList, setResultList] = useState<AiRecommendData[]>([]);
  const { isLoggedIn } = useAuthStore();

  // api 통신
  useEffect(() => {
    let cancelled = false;
    const fetchAiRecList = async () => {
      setLoading(true);

      try {
        const res = await fetchSmart("/api/content/ai/recommends", {
          method: "GET",
        });

        if (res.status === 500) {
          if (!cancelled) setResultList([]);
          return;
        }

        if (!res.ok) throw new Error("AI 추천 목록 요청 실패");

        const data = await res.json();
        if (!cancelled) {
          setResultList(data.data ?? []);
        }
      } catch (e) {
        if (!cancelled) setResultList([]);
        console.log("AI 추천 목록 불러오기 실패: ", e);
      } finally {
        setLoading(false);
      }
    };
    fetchAiRecList();
    return () => {
      cancelled = true;
    };
  }, [isLoggedIn]);

  return {
    loading,
    resultList,
  };
};

export { useAiRecSection };
