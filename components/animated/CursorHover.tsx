"use client";

import { AnimationContext, FollowerState } from "@/context/AnimationContext";
import { PropsWithChildren, useContext } from "react";

interface IProps extends PropsWithChildren {
  state?: FollowerState;
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
