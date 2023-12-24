import Container from "@/components/Container";
import FAQList from "./FAQList";

const FAQ = () => {
  return (
    <section className="faq">
      <Container className="grid grid-cols-ABOUT gap-10 max-md:flex max-md:flex-col max-md:gap-8">
        <div className="flex flex-col gap-6 max-md:gap-4">
          <span className="text-lg font-medium">(FAQ)</span>
          <h6 className="text-[40px] font-bold max-md:text-[32px]">Get answers to your question</h6>
        </div>
        <FAQList />
      </Container>
    </section>
  );
};
export default FAQ;
