import AnimatedImage from "./AnimatedImage";
import Container from "./Container";
import Image from "next/image";

const Selected = () => {
  return (
    <section className="selected">
      <a href="https://esomartin.vercel.app" target="_blank">
        <Container className="flex flex-col gap-4">
          <h6 className="text-lg font-medium">(Selected work)</h6>
          <AnimatedImage>
            <Image
              src={"/esomartin.png"}
              alt="Selected work image"
              width={1320}
              height={742}
              className="w-full max-h-[742px] h-full object-cover rounded-[24px] transition-all hover:scale-[105%] ease-out duration-500"
            />
          </AnimatedImage>
          <div className="flex items-center justify-between gap-6 text-lg font-medium">
            <span>Eso Martin</span>
            <h6>A portfolio website for a fitness coach</h6>
            <span>(2022)</span>
          </div>
        </Container>
      </a>
    </section>
  );
};
export default Selected;
