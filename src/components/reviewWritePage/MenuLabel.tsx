interface Props {
  text: string;
}
const MenuLabel = ({ text }: Props) => {
  return (
    <p className="w-[100px] h-[32px] flex items-center font-semibold text-[20px] max-[1220px]:hidden flex-shrink-0">
      {text}
    </p>
  );
};

export default MenuLabel;
