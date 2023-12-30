"use client";

import { PropsWithChildren, useContext } from "react";

import { AnimationContext } from "@/context/AnimationContext";

interface IProps extends PropsWithChildren {
  state?: "link" | "default";
}

const CursorHover = ({ children, state = "link" }: IProps) => {
  const { setFollowerState } = useContext(AnimationContext);
  return (
    <div
      className="cursor-on-hover"
      onMouseOver={() => setFollowerState(state)}
      onMouseLeave={() => setFollowerState("default")}
    >
      {children}
    </div>
  );
};
export default CursorHover;
