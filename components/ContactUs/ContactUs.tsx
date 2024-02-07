import Container from "../Container";
import Form from "./Form";
import Title from "../Title";

const ContactUs = () => {
  return (
    <section className="contact-us-section">
      <Container className="grid grid-cols-THIRTEE gap-10 max-lg:flex max-lg:flex-col max-lg:gap-12 max-md:gap-10 max-sm:gap-8">
        <div className="flex flex-col gap-6 max-md:gap-4">
          <span className="text-lg font-medium">(Contact Us)</span>
          {/* <h3 className="text-[40px] font-bold max-md:text-[32px]">{subtitle}</h3> */}
          <Title text="Get in touch with us" />
        </div>
        <Form />
      </Container>
    </section>
  );
};
export default ContactUs;
