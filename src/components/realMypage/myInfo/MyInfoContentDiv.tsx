interface Props {
  content: string;
}

const MyInfoContentDiv = ({ content }: Props) => {
  return (
    <span
      className="flex items-center w-[332px] h-[40px] px-[16px] py-[12px] text-[14px] text-[var(--search-element-text)] font-semibold border-[1px] border-[var(--search-element-border)] bg-[var(--sem-fill-norm)] rounded-[8px]
    max-[1220px]:w-full max-[1220px]:px-[8px] max-[1220px]:text-[12px] max-[1220px]:h-[36px]"
    >
      {content}
    </span>
  );
};

export default MyInfoContentDiv;
