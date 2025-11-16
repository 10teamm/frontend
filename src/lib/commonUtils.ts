import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const saveLoginLocation = () => {
  sessionStorage.setItem("loginLocation", window.location.pathname);
};

const copyPlacePage = (placeId: string) => {
  // 장소 링크 클립보드에 복사 후 toast알림
  navigator.clipboard
    .writeText(import.meta.env.VITE_FRONT_BASE_URL + `/placedetail/${placeId}`)
    .then(() => {
      toast.message("링크가 복사되었습니다.");
    })
    .catch(() => {
      toast.message("링크 복사에 실패하였습니다.");
    });
};

const copyCurrentAddress = () => {
  // 현재 주소 클립보드에 복사 후 toast알림
  navigator.clipboard
    .writeText(window.location.href)
    .then(() => {
      toast.message("주소가 복사되었습니다.");
    })
    .catch(() => {
      toast.message("주소 복사에 실패하였습니다.");
    });
};

const mobileShare = async (placeId: string) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: "어디가냥? 같이가개!",
        text: "반려동물과 함께하는 생활",
        url: import.meta.env.VITE_FRONT_BASE_URL + `/placedetail/${placeId}`,
      });
    } catch (err) {
      console.error("공유 실패:", err);
    }
  } else {
    copyPlacePage(placeId);
  }
};

const loginConfirmAlert = (navigate: ReturnType<typeof useNavigate>) => {
  // 로그인이 필요한 기능 클릭 시 alert후 로그인 페이지로 이동
  const goToLogin = window.confirm(
    "로그인이 필요한 기능입니다. 로그인 페이지로 이동하시겠습니까?"
  );
  if (goToLogin) {
    sessionStorage.setItem("loginLocation", window.location.pathname);
    navigate("/login");
  }
  return;
};

const removeTags = (str: string) => {
  // 문자열 내 태그 제거
  return str.replace(/<[^>]*>/g, "");
};

const addNewLines = (str: string) => {
  return str.replace(/\|/g, "\n");
};

const cutStringAtNewLine = (str: string) => {
  const newlineIndex = str.indexOf("\n");

  if (newlineIndex !== -1 && str.length > 80) {
    return str.substring(0, newlineIndex);
  } else return str;
};

export {
  saveLoginLocation,
  copyPlacePage,
  copyCurrentAddress,
  mobileShare,
  loginConfirmAlert,
  removeTags,
  addNewLines,
  cutStringAtNewLine,
};
