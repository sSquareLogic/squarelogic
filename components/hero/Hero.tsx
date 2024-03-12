"use client";

import { motion, useInView } from "framer-motion";

import AnimatedTextWord from "@/components/animated/AnimatedTextWord";
import CallButton from "../CallButton";
import Container from "@/components/Container";
import { IHero } from "@/sanity/schemas/home";
import TopText from "./TopText";
import blocksToText from "@/sanity/lib/portableToText";
import defaultTransition from "@/settings/transition";
import { useRef } from "react";

const Hero = ({ description, title }: IHero) => {
  const middle = Math.ceil(title.length / 2);
  const ref = useRef<HTMLDivElement>(null);
  const isBigTextInView = useInView(ref);
  return (
    <section className="hero">
      <TopText isBigTextInView={isBigTextInView} title={title} />
      <div className="flex flex-col gap-10">
        <motion.p
          transition={defaultTransition}
          ref={ref}
          className="font-bold text-center whitespace-nowrap text-[14.8vw] leading-[115%] uppercase w-full overflow-hidden"
        >
          {title.split("").map((char, i) => {
            const distance = Math.abs(middle - (i + 1));
            const delay = distance * 0.3;
            return (
              <motion.span
                className="inline-block leading-[100%]"
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{
                  ...defaultTransition,
                  delay: delay,
                  stiffness: 500,
                  damping: 50,
                  restDelta: 0.0001,
                  mass: 5,
                  duration: 1,
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </motion.p>
        <Container className="flex flex-col gap-20 items-center ">
          <div className="overflow-hidden">
            <AnimatedTextWord text={typeof description === "string" ? description : blocksToText(description)} />
          </div>
          <CallButton />
        </Container>
      </div>
    </section>
  );
};
export default Hero;
