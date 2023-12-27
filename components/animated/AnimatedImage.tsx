import CursorHover from "./CursorHover";
import { PropsWithChildren } from "react";

const AnimatedImage = ({ children }: PropsWithChildren) => {
  return (
    <CursorHover>
      <div className="rounded-[24px] overflow-hidden">{children}</div>
    </CursorHover>
  );
};
export default AnimatedImage;
