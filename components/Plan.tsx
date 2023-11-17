import Image from "next/image";

const Plan = () => {
  return (
    <div className="plan rounded-[4px] border border-BLACK border-solid p-10 flex flex-col gap-10">
      <h6 className="font-bold text-lg">Landing page</h6>
      <span className="font-bold text-[56px]">$300</span>
      <div className="features flex flex-col gap-4 border-t border-BLACK border-solid py-6">
        <span className="font-bold text-2xl">Features</span>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={"/tick.svg"}
              alt="Tick icon"
              width={14}
              height={14}
              className="object-contain w-[14px] h-[14px]"
            />
            <p className="text-base">1 page</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/tick.svg"}
              alt="Tick icon"
              width={14}
              height={14}
              className="object-contain w-[14px] h-[14px]"
            />
            <p className="text-base">Up to 3 sections</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={"/tick.svg"}
              alt="Tick icon"
              width={14}
              height={14}
              className="object-contain w-[14px] h-[14px]"
            />
            <p className="text-base">Up to 3 edits</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Plan;
