import AnimatedImage from "@/components/animated/AnimatedImage";
import Container from "@/components/Container";
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
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-6 text-lg font-medium">
              <span>Eso Martin</span>
              <h6 className="leading-[120%] max-md:hidden">A portfolio website for a fitness coach</h6>
              <span>(2023)</span>
            </div>
            <h6 className="hidden leading-[120%] border-t border-solid border-BLACK3 pt-4 max-md:block">
              A portfolio website for a fitness coach
            </h6>
          </div>
        </Container>
      </a>
    </section>
  );
};
export default Selected;
