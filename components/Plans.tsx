import Container from "./Container";
import Plan from "./Plan";

const Plans = () => {
  const plans = [
    {
      name: "Engagement Enhancement",
      features: [
        "Interactive Visual Elements",
        "Mobile Responsiveness",
        "Social Media Integration",
        "Feedback Mechanism",
        "Personalized User Dashboards",
      ],
      white: true,
    },
    {
      name: "Comprehensive Functionality",
      features: ["Filtering", "Searching", "User Account Management", "CRM Integration", "Analytics"],
      white: false,
    },
    {
      name: "Support and Maintenance",
      features: [
        "24/7 Customer Support",
        "Regular Software Updates",
        "Bug Fixes",
        "Performance Optimization",
        "Security Patches",
      ],
      white: true,
    },
  ];
  return (
    <section className="plans">
      <Container className="flex flex-col gap-20">
        <div className="flex justify-between items-center gap-10 max-md:flex-col max-md:justify-normal max-md:items-start max-md:gap-4">
          <h6 className="text-lg font-medium">(Our solutions)</h6>
          <p className="text-[32px] font-medium">What we offer</p>
        </div>
        <div className="grid grid-cols-THREE gap-6 max-[1200px]:gap-2 max-[870px]:flex max-[870px]:flex-col max-[870px]:gap-6 max-[870px]:items-center">
          {plans.map((plan, i) => (
            <Plan key={i} features={plan.features} name={plan.name} white={plan.white} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Plans;
