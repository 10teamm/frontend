import SVGIcons from "./SVGIcons";

interface Props {
  name: string;
  isActive: boolean;
  onToggle: () => void;
}

const SortButton = ({ name, isActive, onToggle }: Props) => {
  return (
    <button
      className={`w-fit h-fit flex items-center gap-[2px] items-cente cursor-pointer ${isActive ? "text-[var(--main-color)]" : "text-[var(--deactivated-text)]"} `}
      onClick={onToggle}
    >
      <div className="hidden max-[700px]:block">
        <SVGIcons
          name="sortCheck"
          width={20}
          height={20}
          color={isActive ? "var(--main-color)" : "var(--unactivatied-text)"}
        />
      </div>
      <div className="block max-[700px]:hidden">
        <SVGIcons
          name="sortCheck"
          width={24}
          height={24}
          color={isActive ? "var(--main-color)" : "var(--unactivatied-text)"}
        />
      </div>

      <p className="text-[14px] max-[900px]:text-[12px]">{name}</p>
    </button>
  );
};

export default SortButton;
