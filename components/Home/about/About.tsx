import Container from "@/components/Container";

const About = () => {
  return (
    <section className="about">
      <Container className="grid grid-cols-ABOUT gap-10 max-md:flex max-md:flex-col max-md:gap-8">
        <div className="flex flex-col gap-6 max-md:gap-4">
          <span className="text-lg font-medium">(About us)</span>
          <h6 className="text-[40px] font-bold max-md:text-[32px]">What we do</h6>
        </div>
        <div className="flex flex-col gap-8 text-[32px] font-medium max-md:text-[28px] max-sm:text-[24px]">
          <p className="leading-[120%]">
            We are a web agency that works with real estate and e-commerce businesses globally.
          </p>
          <p className="leading-[120%]">
            Whether it is a direct collaboration or supporting other agencies, our aim is to make web projects
            straightforward and successful.
          </p>
        </div>
      </Container>
    </section>
  );
};
export default About;
