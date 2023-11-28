import AnimatedButton from "./AnimatedButton";
import Container from "./Container";

const Contact = () => {
  return (
    <section className="contact">
      <Container className="grid grid-cols-ABOUT gap-10">
        <span className="text-lg font-medium">(Contact us)</span>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8 text-[32px] font-medium">
            <p>Looking to grow your business through the power of great digital design?</p>
            <p>Reach out to get the conversation started about your digital design needs.</p>
          </div>
          <AnimatedButton name="squarelogic.business@gmail.com" link="mailto:squarelogic.business@gmail.com" />
        </div>
      </Container>
    </section>
  );
};
export default Contact;
