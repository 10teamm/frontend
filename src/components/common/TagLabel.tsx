interface Props {
  value?: string;
}

const TagLabel = ({ value = "내용" }: Props) => {
  return (
    <div className="w-fit h-[28px] flex rounded-[40px] border-[1px] border-[var(--main-color)] items-center px-[16px] max-[700px]:h-[20px] max-[700px]:px-[8px] max-[700px]:rounded-[32px]">
      <p className="text-[14px] max-[700px]:text-[10px] text-[var(--main-color)]">
        {value}
      </p>
    </div>
  );
};

export default TagLabel;
