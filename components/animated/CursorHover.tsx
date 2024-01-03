"use client";

import { AnimationContext, FollowerState } from "@/context/AnimationContext";
import { PropsWithChildren, useContext } from "react";

interface IProps extends PropsWithChildren {
  state?: FollowerState;
  fullWidth?: boolean;
}

const CursorHover = ({ children, state = "link", fullWidth }: IProps) => {
  const { setFollowerState } = useContext(AnimationContext);
  return (
    <div
      className="cursor-on-hover"
      onMouseOver={() => setFollowerState(state)}
      onMouseLeave={() => setFollowerState("default")}
      style={fullWidth ? { width: "100%" } : {}}
    >
      {children}
    </div>
  );
};
export default CursorHover;
