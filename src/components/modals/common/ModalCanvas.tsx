interface Props {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
}
const ModalCanvas = ({ children, onClose, title }: Props) => {
  return (
    <div
      className="max-w-[562px] w-[90%] h-fit max-h-[90%] bg-white flex flex-col gap-[24px] p-[24px] rounded-[24px] overflow-y-auto max-[700px]:rounded-[16px]"
      onClick={(e) => e.stopPropagation()}
      style={{
        boxShadow: `0px 0px 1px 0px rgba(0, 0, 0, 0.08),
            0px 1px 4px 0px rgba(0, 0, 0, 0.08),
            0px 2px 8px 0px rgba(0, 0, 0, 0.12)`,
      }}
    >
      <div className="w-full h-fit flex justify-between">
        <div className="w-[24px] h-[24px]"></div>
        <p className="w-fit h-full text-[20px] font-semibold flex justify-center items-center text-center text-[18px] max-[700px]:text-[16px]">
          {title}
        </p>
        <button
          className="h-[24px] aspect-square cursor-pointer max-[700px]:h-[20px]"
          onClick={onClose}
        >
          <img
            className="w-full h-full"
            src="/assets/buttons/modal_close.png"
            alt="close button"
          />
        </button>
      </div>
      {children}
    </div>
  );
};
export default ModalCanvas;
