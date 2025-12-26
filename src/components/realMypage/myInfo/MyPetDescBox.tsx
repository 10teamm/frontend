import MyInfoContentDiv from "./MyInfoContentDiv";

interface Props {
  label: string;
  value: string;
}
const MyPetDescBox = ({ label, value }: Props) => {
  return (
    <div className="w-full h-[40px] flex gap-[32px] items-center max-[1220px]:gap-[4px]">
      <p className="w-[56px] h-[22px] text-[16px] max-[1220px]:text-[12px]">
        {label}
      </p>
      <MyInfoContentDiv content={value} />
    </div>
  );
};

export default MyPetDescBox;
