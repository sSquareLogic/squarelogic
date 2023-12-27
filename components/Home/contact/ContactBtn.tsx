"use client";

import AnimatedButton from "@/components/animated/AnimatedButton";
import { IContactUs } from "@/sanity/schemas/home";
import { useMediaQuery } from "usehooks-ts";

interface IProps {
  email: IContactUs["email"];
}

const ContactBtn = ({ email }: IProps) => {
  const breakpoints = {
    md: useMediaQuery("(max-width: 768px)"),
  };
  return <AnimatedButton width={breakpoints.md ? "w-full" : "w-fit"} name={email} link={`mailto:${email}}`} />;
};
export default ContactBtn;
