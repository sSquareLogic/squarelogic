"use client";

import { PropsWithChildren, useEffect } from "react";

import Lenis from "@studio-freight/lenis";

const isWindows11 = (): boolean => {
  // @ts-ignore
  return navigator.userAgentData.getHighEntropyValues(["platformVersion"]).then((ua: any) => {
    // @ts-ignore
    if (navigator.userAgentData.platform === "Windows") {
      const majorPlatformVersion = parseInt(ua.platformVersion.split(".")[0]);
      if (majorPlatformVersion >= 13) {
        return true;
      } else if (majorPlatformVersion > 0) {
        return false;
      } else {
        return false;
      }
    } else {
      return false;
    }
  });
};

const SmoothScroll = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.velocity = 500;
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    try {
      if (isWindows11()) {
        lenis.destroy();
      }
    } catch (error) {}
  }, []);
  return children;
};
export default SmoothScroll;
