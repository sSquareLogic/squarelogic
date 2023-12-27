import FAQItem from "./FAQItem";
import { IFAQ } from "@/sanity/schemas/home";

interface IProps {
  items: IFAQ["items"];
}

const FAQList = ({ items }: IProps) => {
  return (
    <ul className="flex flex-col gap-6">
      {items.map((faq, i) => (
        <FAQItem key={i} {...faq} position={i} />
      ))}
    </ul>
  );
};
export default FAQList;
