"use client";

import { motion, useInView } from "framer-motion";

import AnimatedTextWord from "./AnimatedTextWord";
import Container from "./Container";
import TopText from "./TopText";
import { useRef } from "react";

const Hero = () => {
  const name = "SQUARELOGIC";

  const middle = Math.ceil(name.length / 2);
  const ref = useRef<HTMLDivElement>(null);
  const isBigTextInView = useInView(ref);
  return (
    <section className="hero">
      <TopText isBigTextInView={isBigTextInView} />
      <div className="flex flex-col gap-10">
        <motion.h1
          ref={ref}
          className="font-bold text-center whitespace-nowrap text-[14.8vw] leading-[115%] uppercase w-full overflow-hidden"
        >
          {name.split("").map((char, i) => {
            const distance = Math.abs(middle - (i + 1));
            const delay = distance * 0.2;
            return (
              <motion.span
                className="inline-block leading-[100%]"
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ type: "tween", duration: 0.6, delay: delay, ease: "easeOut" }}
              >
                {char}
              </motion.span>
            );
          })}
        </motion.h1>
        <Container>
          <motion.div
            className="flex justify-center overflow-hidden"
            transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
            initial={{
              opacity: 1,
              y: "0%",
            }}
            animate={
              !isBigTextInView
                ? {
                    opacity: 0,
                    y: "-100%",
                  }
                : {}
            }
          >
            <AnimatedTextWord text="SquareLogic is a creative studio, specialized in strategy, branding, design, and development. Our work is always at the intersection of design and technology." />
          </motion.div>
        </Container>
      </div>
    </section>
  );
};
export default Hero;
