import FAQList from "./FAQList";
import { IFAQ } from "@/sanity/schemas/home";
import Title from "@/components/Title";

const FAQ = ({ items, subtitle }: IFAQ) => {
  return (
    <section className="faq">
      <div className="custom-container max-w-[1384px] px-8 mx-auto w-full h-full max-lg:px-5 max-md:px-4">
        <div className="grid grid-cols-THIRTEE gap-10 max-lg:flex max-lg:flex-col max-lg:gap-8">
          <div className="flex flex-col h-fit sticky top-6 gap-6 max-lg:static max-lg:gap-4">
            <span className="text-lg font-medium">(FAQ)</span>
            <Title text={subtitle} />
          </div>
          <FAQList items={items} />
        </div>
      </div>
    </section>
  );
};
export default FAQ;
