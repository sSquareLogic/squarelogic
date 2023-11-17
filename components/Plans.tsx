import Container from "./Container";
import Plan from "./Plan";

const Plans = () => {
  return (
    <section className="plans">
      <Container className="flex flex-col gap-20">
        <div className="grid grid-cols-ABOUT gap-10">
          <h6 className="text-lg font-medium">(Pricing)</h6>
          <p className="text-[32px] font-medium">Choose the tariff plan that suits you needs</p>
        </div>
        <div className="grid grid-cols-THREE gap-6">
          <Plan />
          <Plan />
          <Plan />
        </div>
      </Container>
    </section>
  );
};
export default Plans;
