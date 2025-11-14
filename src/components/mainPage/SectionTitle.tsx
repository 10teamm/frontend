interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <p className="text-[32px] font-dunggeunmiso font-bold text-[var(--main-color)] max-[700px]:text-[28px]">
      {title}
    </p>
  );
};

export default SectionTitle;
