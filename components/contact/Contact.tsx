import ContactBtn from "./ContactBtn";
import Container from "../Container";

const Contact = () => {
  return (
    <section className="contact">
      <Container className="grid grid-cols-ABOUT gap-10 max-md:flex max-md:flex-col max-md:gap-8">
        <div className="flex flex-col gap-6 max-md:gap-4">
          <span className="text-lg font-medium">(Contact us)</span>
          <h6 className="text-[40px] font-bold max-md:text-[32px]">Get in touch with us</h6>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8 text-[32px] font-medium max-md:text-[28px] max-sm:text-[24px]">
            <p className="leading-[120%]">Looking to grow your business through the power of great digital design?</p>
            <p className="leading-[120%]">Reach out to get the conversation started about your digital design needs.</p>
          </div>
          <ContactBtn />
        </div>
      </Container>
    </section>
  );
};
export default Contact;
