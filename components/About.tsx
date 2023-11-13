import Container from "./Container";

const About = () => {
  return (
    <section className="about">
      <Container className="grid grid-cols-ABOUT gap-10">
        <span className="text-lg font-medium">(About us)</span>
        <div className="flex flex-col gap-8 text-[32px] font-medium">
          <p>
            As a web agency we help companies and organizations around the world connect with their audience and grow
            their business.
          </p>
          <p>
            Projects can be done directly with clients or in a supporting role for agencies and studios from around the
            world.
          </p>
        </div>
      </Container>
    </section>
  );
};
export default About;
