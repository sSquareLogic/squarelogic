import Container from "../Container";
import TestimonialCard from "./TestimonialCard";
import Title from "../Title";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Container className="flex flex-col gap-12">
        <div className="max-w-[30%]">
          <span className="text-lg font-medium">(Testimonials)</span>
          <Title text="What other clients say about us" />
        </div>
        <div className="grid grid-cols-THREE gap-6">
          <TestimonialCard handle="elonmusk" img={""} name="Elon Musk" text={"Elon Musk"} />
          <TestimonialCard handle="elonmusk" img={""} name="Elon Musk" text={"Elon Musk"} />
          <TestimonialCard handle="elonmusk" img={""} name="Elon Musk" text={"Elon Musk"} />
        </div>
      </Container>
    </section>
  );
};
export default Testimonials;
