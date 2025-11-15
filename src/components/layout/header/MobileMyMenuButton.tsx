interface Props {
  name: string;
  onClick: () => void;
  onClose: () => void;
}

const MobileMyMenuButton = ({ name, onClick, onClose }: Props) => {
  return (
    <button
      className="text-[22px] text-[#ee6768] cursor-pointer font-dunggeunmiso font-bold"
      onClick={() => {
        onClick();
        onClose();
      }}
    >
      {name}
    </button>
  );
};

export default MobileMyMenuButton;
