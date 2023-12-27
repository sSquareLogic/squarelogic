import Container from "../../Container";
import { IPricing } from "@/sanity/schemas/home";
import Plan from "./Plan";

const Plans = ({ items, subtitle }: IPricing) => {
  return (
    <section className="plans">
      <Container className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <h6 className="text-lg font-medium">(Pricing)</h6>
          <p className="text-[32px] font-medium">{subtitle}</p>
        </div>
        <div className="grid grid-cols-THREE gap-6 max-[1200px]:flex max-[1200px]:flex-col items-center">
          {items.map((plan, i) => (
            <Plan key={i} {...plan} accent={i === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Plans;
