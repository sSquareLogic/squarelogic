import CursorHover from "./animated/CursorHover";
import Image from "next/image";

const CallButton = () => {
  return (
    <CursorHover>
      <a
        href={"https://calendly.com/mikejames1311005/squarelogic"}
        target="_blank"
        className="flex gap-4 items-center justify-center min-w-52 rounded-[56px] bg-ACCENT text-center py-6 px-6 text-BLACK font-bold text-xl font-INTER -tracking-[1%]"
      >
        <span>Book A Call</span>
        <Image src={"/arrow-big.svg"} alt="Arrow" width={20} height={20} />
      </a>
    </CursorHover>
  );
};
export default CallButton;
