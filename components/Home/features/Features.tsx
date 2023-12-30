import Container from "@/components/Container";
import Feature from "./Feature";

const Features = () => {
  const features = [
    {
      name: "Twitter Writers Frameworks",
      description:
        "Master Twitter writing with SquareLogic frameworks. SquareLogic transforms your ideas into engaging content effortlessly.",
      icon: "/map.svg",
    },
    {
      name: "Content Transformation Magic",
      description:
        "SquareLogic transforms your ideas into engaging content effortlessly. SquareLogic transforms your ideas into engaging content.",
      icon: "/draw.svg",
    },
    {
      name: "Customized Content Generation",
      description:
        "SquareLogic transforms your ideas into engaging content effortlessly. SquareLogic transforms your ideas into engaging content.",
      icon: "/extension.svg",
    },
  ];
  return (
    <section className="features">
      <Container className="grid grid-cols-THIRTEE gap-10 max-lg:flex max-lg:flex-col max-lg:gap-12">
        <div className="flex flex-col gap-6 max-md:gap-4">
          <span className="text-lg font-medium">(Our features)</span>
          <h6 className="text-[40px] font-bold max-md:text-[32px]">Why to choose us and not others?</h6>
        </div>
        <div className="flex flex-col gap-6">
          {features.map((feature, i) => (
            <Feature key={i} {...feature} accent={i === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Features;
