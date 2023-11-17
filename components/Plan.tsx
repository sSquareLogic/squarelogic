import Image from "next/image";
import colors from "@/settings/colors";

interface IProps {
  name: string;
  price: string;
  features: string[];
  white?: boolean;
}

const Plan = ({ features, name, price, white }: IProps) => {
  return (
    <div
      className="plan rounded-[4px] border border-BLACK border-solid p-10 flex flex-col gap-10"
      style={white ? { backgroundColor: colors.BLACK, color: colors.WHITE } : {}}
    >
      <div className="flex items-center justify-between gap-6">
        <h6 className="font-bold text-lg">{name}</h6>
        {white ? (
          <span className="block bg-WHITE rounded-[25px] px-2 py-1 text-BLACK text-[10px] font-bold">Popular</span>
        ) : null}
      </div>
      <span className="font-bold text-[56px]">{price}</span>
      <div
        className="features flex flex-col gap-4 border-t border-BLACK border-solid py-6"
        style={white ? { borderColor: colors.WHITE } : {}}
      >
        <span className="font-bold text-2xl">Features</span>
        <div className="flex flex-col gap-2">
          {features.map((feature, i) => (
            <div className="flex items-center gap-2" key={i}>
              <Image
                src={white ? "/tick-white.svg" : "/tick.svg"}
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
