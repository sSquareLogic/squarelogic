import Container from "@/components/Container";
import CursorHover from "@/components/animated/CursorHover";
import Feature from "./Feature";
import { IFeatures } from "@/sanity/schemas/home";

const Features = ({ features, subtitle }: IFeatures) => {
  return (
    <section className="features">
      <Container className="grid grid-cols-THIRTEE gap-10 max-lg:flex max-lg:flex-col max-lg:gap-12">
        <div className="flex flex-col gap-6 max-md:gap-4">
          <span className="text-lg font-medium">(Our features)</span>
          <h6 className="text-[40px] font-bold max-md:text-[32px]">{subtitle}</h6>
        </div>
        <div className="flex flex-col gap-6">
          {features.map((feature, i) => (
            <CursorHover key={i} state={"loop"}>
              <Feature {...feature} accent={i === 1} />
            </CursorHover>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Features;
