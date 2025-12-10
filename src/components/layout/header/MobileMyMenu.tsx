import { useNavigate } from "react-router-dom";
import { logoutProcess } from "@/lib/authUtils";
import MobileMyMenuButton from "./MobileMyMenuButton";
import ModalPortal from "@/components/modals/common/ModalPortal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMyMenu = ({ isOpen, onClose }: Props) => {
  const navigate = useNavigate();
  return (
    <ModalPortal>
      <div className="App">
        <div
          className={`fixed inset-0 z-100 bg-black/20 transition-opacity ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={onClose}
        >
          <aside
            className={`fixed top-2 right-2 h-[calc(100%-16px)] w-[180px] shadow-md pt-[24px] pr-[24px] bg-white rounded-[25px]
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                className="w-[28px] h-[28px] cursor-pointer"
                onClick={onClose}
              >
                <img
                  className="w-full h-full"
                  src="/assets/buttons/modal_close.png"
                  alt="close button"
                />
              </button>
            </div>

            <div className="flex flex-col gap-4 items-start pl-[20px] pt-[8px]">
              <MobileMyMenuButton
                onClick={() => navigate("/aiplanner")}
                onClose={onClose}
                name="AI플래너"
              />
              <MobileMyMenuButton
                onClick={() => navigate("/myinfo")}
                onClose={onClose}
                name="마이페이지"
              />
              <MobileMyMenuButton
                onClick={() => logoutProcess()}
                onClose={onClose}
                name="로그아웃"
              />
            </div>
          </aside>
        </div>
      </div>
    </ModalPortal>
  );
};

export default MobileMyMenu;
