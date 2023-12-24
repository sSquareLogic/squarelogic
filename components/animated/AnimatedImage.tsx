"use client";

import { PropsWithChildren, useContext } from "react";

import { AnimationContext } from "@/context/AnimationContext";

const AnimatedImage = ({ children }: PropsWithChildren) => {
  const { setFollowerState } = useContext(AnimationContext);
  return (
    <div
      className="rounded-[24px] overflow-hidden"
      onMouseOver={() => setFollowerState("hoveringImage")}
      onMouseLeave={() => setFollowerState("default")}
    >
      {children}
    </div>
  );
};
export default AnimatedImage;
