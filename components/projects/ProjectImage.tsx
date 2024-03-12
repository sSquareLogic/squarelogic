import AnimatedImage from "../animated/AnimatedImage";
import { IProjects } from "@/sanity/schemas/projects";
import Image from "next/image";
import blocksToText from "@/sanity/lib/portableToText";
import { urlForImage } from "@/sanity/lib/image";

const ProjectImage = ({ image, description, project_name, link }: IProjects["projects"]["projects"]["row_1"][any]) => {
  return (
    <a href={link} target="_blank" className="projects-row flex flex-col gap-6">
      <AnimatedImage>
        <Image
          src={urlForImage(image).url()}
          alt="Project image"
          unoptimized
          width={600}
          height={400}
          className="object-cover object-center w-full"
        />
      </AnimatedImage>
      <p className="text-2xl">
        <span className="font-bold">{project_name}</span> - {blocksToText(description)}
      </p>
    </a>
  );
};
export default ProjectImage;
