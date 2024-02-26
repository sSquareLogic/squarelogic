import Container from "../Container";
import { ITestimonials } from "@/sanity/schemas/home";
import TestimonialsSwiper from "./TestimonialsSwiper";
import Title from "../Title";

const Testimonials = ({ testimonials }: ITestimonials) => {
  return testimonials ? (
    <section className="testimonials">
      <Container>
        <div className="max-w-[30%] max-lg:max-w-none flex flex-col gap-4">
          <span className="text-lg font-medium">(Testimonials)</span>
          <Title text="What other clients say about us" />
        </div>
      </Container>
      <div className="mt-12">
        <div className="custom-container max-w-[1384px] px-8 mx-auto w-full h-full max-lg:max-w-none max-lg:m-0 max-lg:p-0 max-lg:pl-5 max-md:pl-4">
          <TestimonialsSwiper testimonials={testimonials} />
        </div>
      </div>
    </section>
  ) : (
    <></>
  );
};
export default Testimonials;
