"use client";

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from "react";

interface IAnimationContext {
  followerState: "default" | "link" | "loop";
  setFollowerState: Dispatch<SetStateAction<IAnimationContext["followerState"]>>;
}

export const AnimationContext = createContext<IAnimationContext>({} as IAnimationContext);

const AnimationContextProvider = ({ children }: PropsWithChildren) => {
  const [followerState, setFollowerState] = useState<IAnimationContext["followerState"]>("default");

  const memo = useMemo(() => ({ followerState, setFollowerState }), [followerState, setFollowerState]);

  return <AnimationContext.Provider value={memo}>{children}</AnimationContext.Provider>;
};

export default AnimationContextProvider;
