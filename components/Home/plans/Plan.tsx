import CursorHover from "@/components/animated/CursorHover";
import Image from "next/image";
import colors from "@/settings/colors";

export interface IPlan {
  name: string;
  price?: string;
  features?: string[];
  description: string;
}

interface IProps extends IPlan {
  accent?: boolean;
}

const Plan = ({ accent, description, name, features, price }: IProps) => {
  return (
    <div
      className="plan p-10 flex flex-col gap-6 h-full w-full bg-LIGHTBLACK rounded-3xl max-[1200px]:max-w-[600px]"
      style={accent ? { background: colors.ACCENT } : {}}
    >
      <div className="flex flex-col gap-6 justify-between h-full max-h-48">
        {price ? (
          <div className="flex flex-col gap-6">
            <p className="text-lg text-WHITE" style={accent ? { color: colors.BLACK } : {}}>
              {name}
            </p>
            <div className="flex items-center gap-6">
              <span
                className="text-[56px] text-ACCENT font-bold max-lg:text-[50px] max-md:text-[44px] max-sm:text-[40px]"
                style={accent ? { color: colors.BLACK } : {}}
              >
                {price}
              </span>
              <span className="text-WHITE text-base" style={accent ? { color: colors.BLACK } : {}}>
                per month
              </span>
            </div>
            <p
              className="text-lg text-WHITE leading-[140%] max-sm:text-base"
              style={accent ? { color: colors.BLACK } : {}}
            >
              {description}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6 pb-20">
            <span
              className="text-[56px] text-ACCENT font-bold max-lg:text-[50px] max-md:text-[44px] max-sm:text-[40px]"
              style={accent ? { color: colors.BLACK } : {}}
            >
              {name}
            </span>
            <p className="text-lg text-WHITE max-sm:text-base" style={accent ? { color: colors.BLACK } : {}}>
              {description}
            </p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6">
        <CursorHover>
          <a
            href={"https://calendly.com/mikejames1311005/squarelogic"}
            className="block rounded-[56px] w-full bg-ACCENT text-center py-4 px-6 text-BLACK font-bold text-lg"
            style={accent ? { background: colors.BLACK, color: colors.WHITE } : {}}
          >
            Get started
          </a>
        </CursorHover>
        {features && (
          <div
            className="features border-t border-solid border-WHITE py-6 flex flex-col gap-6"
            style={accent ? { borderColor: colors.BLACK } : {}}
          >
            <span className="font-bold text-2xl text-WHITE" style={accent ? { color: colors.BLACK } : {}}>
              Features
            </span>
            <ul className="flex flex-col gap-2">
              {features!.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Image
                    src={accent ? "/tick-black.svg" : "/tick-green.svg"}
                    width={20}
                    height={20}
                    alt="Tick icon"
                    className="object-contain w-5 h-5"
                  />
                  <span className="text-base text-WHITE" style={accent ? { color: colors.BLACK } : {}}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Plan;
