import Container from "@/components/Container";
import CursorHover from "@/components/animated/CursorHover";
import Feature from "./Feature";
import { IFeatures } from "@/sanity/schemas/home";

const Features = ({ features, subtitle }: IFeatures) => {
  return (
    <section className="features">
      <div className="custom-container max-w-[1384px] px-8 mx-auto w-full h-full max-lg:px-5 max-md:px-4">
        <div className="grid grid-cols-THIRTEE gap-10 max-lg:flex max-lg:flex-col max-lg:gap-12">
          <div className="h-fit sticky top-6 flex flex-col gap-6 max-md:gap-4 max-lg:static">
            <span className="text-lg font-medium">(Our features)</span>
            <h3 className="text-[40px] font-bold max-md:text-[32px]">{subtitle}</h3>
          </div>
          <div className="flex flex-col gap-6">
            {features.map((feature, i) => (
              <CursorHover key={i} state={"loop"}>
                <Feature {...feature} accent={i === 1} />
              </CursorHover>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
