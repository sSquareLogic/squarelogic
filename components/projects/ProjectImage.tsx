import AnimatedImage from "../animated/AnimatedImage";
import Image from "next/image";

interface IProps {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectImage = ({ src, description, title, link }: IProps) => {
  return (
    <a href={link} target="_blank" className="projects-row flex flex-col gap-6">
      <AnimatedImage>
        <Image
          src={src}
          alt="Project image"
          unoptimized
          width={600}
          height={600}
          className="object-cover object-center w-full h-full aspect-square transition-all hover:scale-[105%] ease-out duration-500"
        />
      </AnimatedImage>
      <p className="text-2xl">
        <span className="font-bold">{title}</span> - {description}
      </p>
    </a>
  );
};
export default ProjectImage;
