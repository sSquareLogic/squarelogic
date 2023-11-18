"use client";

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from "react";

interface IAnimationContext {
  state: "default" | "hoveringImage";
  setState: Dispatch<SetStateAction<IAnimationContext["state"]>>;
}

export const AnimationContext = createContext<IAnimationContext>({} as IAnimationContext);

const AnimationContextProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<IAnimationContext["state"]>("default");

  const memo = useMemo(() => ({ state, setState }), [state, setState]);

  return <AnimationContext.Provider value={memo}>{children}</AnimationContext.Provider>;
};

export default AnimationContextProvider;
