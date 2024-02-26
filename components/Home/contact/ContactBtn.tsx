"use client";

import AnimatedButton from "@/components/animated/AnimatedButton";
import { IContactUs } from "@/sanity/schemas/home";
import { useMediaQuery } from "usehooks-ts";

interface IProps {
  cta_link: IContactUs["cta_link"];
  cta_title: IContactUs["cta_title"];
}

const ContactBtn = ({ cta_link, cta_title }: IProps) => {
  const breakpoints = {
    md: useMediaQuery("(max-width: 768px)"),
  };

  return <AnimatedButton width={breakpoints.md ? "w-full" : "w-fit"} name={cta_title} link={cta_link} />;
};
export default ContactBtn;
