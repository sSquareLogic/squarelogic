interface IProps {
  tag: string;
}

const Tag = ({ tag }: IProps) => {
  return <span className="tag px-[10px] py-2 text-WHITE text-base rounded-[54px] bg-OPAQUE">{tag}</span>;
};
export default Tag;
