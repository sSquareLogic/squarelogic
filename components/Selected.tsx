import AnimatedImage from "./AnimatedImage";
import Container from "./Container";
import Image from "next/image";

const Selected = () => {
  return (
    <section className="selected">
      <Container className="flex flex-col gap-4">
        <h6 className="text-lg font-medium">(Selected work)</h6>
        <AnimatedImage>
          <Image
            src={"/selected.jpg"}
            alt="Selected word image"
            width={1320}
            height={742}
            className="w-full max-h-[742px] h-full object-cover rounded-[4px]"
          />
        </AnimatedImage>
        <div className="flex items-center justify-between gap-6 text-lg font-medium">
          <span>Custom</span>
          <h6>Ecommerce website for a local bussiness</h6>
          <span>(2022)</span>
        </div>
      </Container>
    </section>
  );
};
export default Selected;
