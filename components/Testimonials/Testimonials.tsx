import Container from "../Container";
import { ITestimonials } from "@/sanity/schemas/home";
import TestimonialCard from "./TestimonialCard";
import Title from "../Title";

const Testimonials = ({ testimonials }: ITestimonials) => {
  return (
    <section className="testimonials">
      <Container className="flex flex-col gap-12">
        <div className="max-w-[30%]">
          <span className="text-lg font-medium">(Testimonials)</span>
          <Title text="What other clients say about us" />
        </div>
        <div className="grid grid-cols-THREE gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.handle} {...testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Testimonials;
