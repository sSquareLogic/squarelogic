interface IProps {
  text: string;
}
const Title = ({ text }: IProps) => {
  return <h3 className="text-[40px] font-bold font-INTER -tracking-[1%] max-md:text-[32px]">{text}</h3>;
};
export default Title;
