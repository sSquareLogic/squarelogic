import Container from "./Container";

const About = () => {
  return (
    <section className="about">
      <Container className="grid grid-cols-ABOUT gap-10 max-md:flex max-md:flex-col max-md:gap-4">
        <span className="text-lg font-medium">(About us)</span>
        <div className="flex flex-col gap-8 text-[32px] font-medium max-md:text-[28px] max-sm:text-[24px]">
          <p>We are a web agency that works with real estate and e-commerce businesses globally.</p>
          <p>
            Whether it is a direct collaboration or supporting other agencies, our aim is to make web projects
            straightforward and successful.
          </p>
        </div>
      </Container>
    </section>
  );
};
export default About;
