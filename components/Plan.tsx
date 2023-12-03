import Image from "next/image";
import colors from "@/settings/colors";

interface IProps {
  name: string;
  features: string[];
  white?: boolean;
}

const Plan = ({ features, name, white }: IProps) => {
  return (
    <div
      className="plan rounded-[4px] border border-BLACK border-solid p-10 flex flex-col gap-10 z-[51] max-[1200px]:px-6 max-[870px]:w-[60%] max-md:w-full"
      style={
        white
          ? { backgroundColor: colors.LIGHTBLACK, color: colors.WHITE }
          : { backgroundColor: "white", color: colors.BLACK }
      }
    >
      <div className="flex items-center justify-between gap-6">
        <h6 className="font-bold text-[32px]">{name}</h6>
      </div>
      <div
        className="features flex flex-col gap-4 border-t border-BLACK border-solid pt-6"
        style={white ? { borderColor: colors.WHITE } : {}}
      >
        <span className="font-bold text-2xl">Features</span>
        <div className="flex flex-col gap-2">
          {features.map((feature, i) => (
            <div className="flex items-center gap-2" key={i}>
              <Image
                src={white ? "/tick-green.svg" : "/tick.svg"}
                alt="Tick icon"
                width={14}
                height={14}
                className="object-contain w-[14px] h-[14px]"
              />
              <p className="text-base">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Plan;
