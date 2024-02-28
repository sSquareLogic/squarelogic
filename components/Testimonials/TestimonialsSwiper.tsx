"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery, useWindowSize } from "usehooks-ts";
import useTransformValue, { IRange } from "@/hooks/useTransformValue";

import CursorHover from "../animated/CursorHover";
import { ITestimonials } from "@/sanity/schemas/home";
import { Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

interface IProps {
  testimonials: ITestimonials["testimonials"];
}

const TestimonialSwiperPagination = () => {
  return (
    <CursorHover state="disabled">
      <div className="flex items-center justify-center mt-6">
        <div className="testimonial-pagination w-fit"></div>
      </div>
    </CursorHover>
  );
};

const TestimonialsSwiper = ({ testimonials }: IProps) => {
  const { width } = useWindowSize();
  const breakpoint = {
    max_lg: useMediaQuery("(max-width: 1024px)"),
    max_sm: useMediaQuery("(max-width: 640px)"),
  };

  const originalRange: IRange = [0, 1700];
  const transformedRange: IRange = [1, breakpoint.max_lg ? 2 : 3];

  const transformedWidth = useTransformValue(width, originalRange, transformedRange);

  return (
    <Swiper
      spaceBetween={breakpoint.max_sm ? 16 : 24}
      slidesPerView={transformedWidth}
      modules={[Pagination]}
      pagination={{
        el: ".testimonial-pagination",
        bulletClass: "testimonial-pagination-bullet",
        bulletActiveClass: "testimonial-pagination-bullet-active",
        clickable: true,
      }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} style={{ height: "unset" }}>
          <TestimonialCard {...testimonial} />
        </SwiperSlide>
      ))}
      <TestimonialSwiperPagination />
    </Swiper>
  );
};
export default TestimonialsSwiper;
