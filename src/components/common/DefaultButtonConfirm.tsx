interface Props {
  w: number;
  h: number;
  text: string;
  textSize: number;
  onClick: () => void;
  isActive?: boolean;
}

const DefaultButtonConfirm = ({
  w,
  h,
  text,
  textSize,
  onClick,
  isActive = true,
}: Props) => {
  return (
    <button
      style={{ width: w, height: h, fontSize: textSize }}
      className={`rounded-[10px] bg-[var(--main-color)] text-[var(--main-text)] font-semibold flex justify-center items-center max-[1220px]:rounded-[6px] ${
        !isActive
          ? "cursor-not-allowed brightness-85"
          : "cursor-pointer transition hover:brightness-85"
      }`}
      onClick={onClick}
      disabled={!isActive}
    >
      {text}
    </button>
  );
};

export default DefaultButtonConfirm;
