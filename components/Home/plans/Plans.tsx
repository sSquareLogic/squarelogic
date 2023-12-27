import Plan, { IPlan } from "./Plan";

import Container from "../../Container";
import CursorHover from "@/components/animated/CursorHover";

const Plans = () => {
  const plans: IPlan[] = [
    {
      name: "Standard subscription",
      price: "$999",
      description: "One feature at a time. Pause or cancel anytime.",
      features: [
        "1 website or app",
        "One request at a time",
        "Average 48 hour delivery",
        "Contant updates",
        "Unlimited features",
      ],
    },
    {
      name: "Pro subscription",
      price: "$2999",
      description: "Up to 3 web apps.",
      features: [
        "Up to 3 website applications",
        "Request at any time",
        "Average 1 month delivery",
        "Contant updates",
        "Unlimited features",
      ],
    },
    {
      name: "Book a call",
      description: "Explore plans that fit your needs.",
    },
  ];
  return (
    <section className="plans">
      <Container className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <h6 className="text-lg font-medium">(Pricing)</h6>
          <p className="text-[32px] font-medium">Choose the tariff plan that suits you needs</p>
        </div>
        <div className="grid grid-cols-THREE gap-6 max-[1200px]:flex max-[1200px]:flex-col items-center">
          {plans.map((plan, i) => (
            <Plan
              key={i}
              price={plan.price}
              features={plan.features}
              name={plan.name}
              description={plan.description}
              accent={i === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Plans;
