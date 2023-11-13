import Container from "./Container";

const Hero = () => {
  return (
    <section className="hero">
      <Container className="flex flex-col gap-10 items-center">
        <h1 className="font-bold text-[200px] leading-[100%] uppercase w-full">SQUARELOGIC</h1>
        <p className="max-w-[70%] uppercase text-center text-2xl font-medium">
          SquareLogic is a creative studio, specialized in strategy, branding, design, and development. Our work is
          always at the intersection of design and technology.
        </p>
      </Container>
    </section>
  );
};
export default Hero;
