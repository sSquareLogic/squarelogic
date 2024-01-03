"use client";

import { motion, useInView } from "framer-motion";

import AnimatedTextWord from "@/components/animated/AnimatedTextWord";
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
      <TopText isBigTextInView={isBigTextInView} />
      <div className="flex flex-col gap-10">
        <motion.h1
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
                transition={defaultTransition}
              >
                {char}
              </motion.span>
            );
          })}
        </motion.h1>
        <Container>
          <motion.div
            className="flex justify-center overflow-hidden"
            transition={defaultTransition}
            initial={{
              opacity: 1,
              y: "0%",
              rotateX: "0deg",
            }}
            animate={
              !isBigTextInView
                ? {
                    opacity: 0,
                    y: "-100%",
                    rotateX: "90deg",
                  }
                : {}
            }
          >
            <AnimatedTextWord text={blocksToText(description)} />
          </motion.div>
        </Container>
      </div>
    </section>
  );
};
export default Hero;
