"use client";

import { PropsWithChildren, useEffect, useRef } from "react";

import ScrollSmoother from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { gsap } from "gsap-trial";

const ScrollSmooth = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.5,
      content: ref.current,
    });
    return () => smoother.kill();
  }, []);
  return <div ref={ref}>{children}</div>;
};
export default ScrollSmooth;
