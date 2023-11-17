"use client";

import Image from "next/image";

const ToTopBtn = () => {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo(0, 0)}
      className="flex items-center gap-6 text-lg font-medium justify-self-center"
    >
      <span>Back to top</span>
      <Image src={"/arrow.svg"} alt="Arrow icon" width={20} height={20} className="w-5 h-5 object-contain" />
    </button>
  );
};
export default ToTopBtn;
