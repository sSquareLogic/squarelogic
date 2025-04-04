import CursorHover from "@/components/animated/CursorHover";
import { IPricing } from "@/sanity/schemas/home";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import colors from "@/settings/colors";

type PricingItemsListElementType = IPricing["items"][any];

interface IProps extends PricingItemsListElementType {
  accent?: boolean;
}

const Plan = ({ accent, description, name, features, price, monthly }: IProps) => {
  return (
    <div
      className="plan p-10 flex flex-col gap-6 h-full w-full bg-LIGHTBLACK rounded-3xl max-[1200px]:max-w-[600px]"
      style={accent ? { background: colors.ACCENT } : {}}
    >
      <div className="flex flex-col gap-6 justify-between h-full max-h-48">
        {price ? (
          <div className="flex flex-col gap-6">
            <p className="text-lg text-WHITE font-INTER -tracking-[1%]" style={accent ? { color: colors.BLACK } : {}}>
              {name}
            </p>
            <div className="flex items-center gap-6">
              <span
                className="text-[56px] text-ACCENT font-bold font-INTER -tracking-[1%] max-lg:text-[50px] max-md:text-[44px] max-sm:text-[40px]"
                style={accent ? { color: colors.BLACK } : {}}
              >
                {price}
              </span>
              {monthly && (
                <span className="text-WHITE text-base" style={accent ? { color: colors.BLACK } : {}}>
                  per month
                </span>
              )}
            </div>
            <div
              className="text-lg text-WHITE leading-[140%] max-sm:text-base"
              style={accent ? { color: colors.BLACK } : {}}
            >
              <PortableText value={description} />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 pb-20">
            <span
              className="text-[56px] text-ACCENT font-bold font-INTER -tracking-[1%] max-lg:text-[50px] max-md:text-[44px] max-sm:text-[40px]"
              style={accent ? { color: colors.BLACK } : {}}
            >
              {name}
            </span>
            <div className="text-lg text-WHITE max-sm:text-base" style={accent ? { color: colors.BLACK } : {}}>
              <PortableText value={description} />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6">
        <CursorHover>
          <a
            href={"https://cal.com/devdugg/discovery-call"}
            target="_blank"
            className="block rounded-[56px] w-full bg-ACCENT text-center py-4 px-6 text-BLACK font-bold text-lg font-INTER -tracking-[1%]"
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
