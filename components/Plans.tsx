import Container from "./Container";
import Plan from "./Plan";

const Plans = () => {
  const plans = [
    {
      name: "Landing page",
      features: ["1 page", "up to 3 sections", "up to 3 edits"],

      white: false,
    },
    {
      name: "Landing page +",
      features: ["1 page", "unlimited sections", "up to 7 edits", "CMS (Content Management System)"],
      white: true,
    },
    {
      name: "Multipage website",
      features: ["up to 5 pages", "unlimited sections", "up to 12 edits", "CMS (Content Management System)"],
      white: false,
    },
  ];
  return (
    <section className="plans">
      <Container className="flex flex-col gap-20 py-[100px]">
        <div className="grid grid-cols-ABOUT gap-10">
          <h6 className="text-lg font-medium">(Pricing)</h6>
          <p className="text-[32px] font-medium">Choose the tariff plan that suits you needs</p>
        </div>
        <div className="grid grid-cols-THREE gap-6">
          {plans.map((plan, i) => (
            <Plan key={i} features={plan.features} name={plan.name} white={plan.white} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Plans;
