"use client";

import CursorHover from "@/components/animated/CursorHover";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

const ContactBtn = () => {
  const breakpoints = {
    md: useMediaQuery("(min-width: 768px)", {
      defaultValue: false,
    }),
  };

  return (
    <CursorHover fullWidth={!breakpoints.md}>
      <a
        href={"https://calendly.com/mikejames1311005/squarelogic"}
        target="_blank"
        style={{ width: !breakpoints.md ? "100%" : "fit-content" }}
        className="flex gap-4 items-center justify-center min-w-52 rounded-[56px] bg-ACCENT text-center py-6 px-6 text-BLACK font-bold text-xl font-INTER -tracking-[1%]"
      >
        <span>Book A Call</span>
        <Image src={"/arrow-big.svg"} alt="Arrow" width={20} height={20} />
      </a>
    </CursorHover>
  );
};
export default ContactBtn;
