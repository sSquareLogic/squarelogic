import AnimatedImage from "../AnimatedImage";
import Image from "next/image";

interface IProps {
  src: string;
  title: string;
  description: string;
}

const ProjectImage = ({ src, description, title }: IProps) => {
  return (
    <div className="projects-row flex flex-col gap-6">
      <AnimatedImage>
        <Image
          src={src}
          alt="Project image"
          unoptimized
          width={600}
          height={600}
          className="object-cover object-center w-full h-full aspect-square"
        />
      </AnimatedImage>
      <p className="text-2xl">
        <span className="font-bold">{title}</span> - {description}
      </p>
    </div>
  );
};
export default ProjectImage;
