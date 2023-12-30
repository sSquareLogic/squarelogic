import CursorHover from "@/components/animated/CursorHover";
import FAQItem from "./FAQItem";
import { IFAQ } from "@/sanity/schemas/home";

interface IProps {
  items: IFAQ["items"];
}

const FAQList = ({ items }: IProps) => {
  return (
    <ul className="flex flex-col gap-6">
      {items.map((faq, i) => (
        <CursorHover key={i} state="loop">
          <FAQItem {...faq} position={i} />
        </CursorHover>
      ))}
    </ul>
  );
};
export default FAQList;
