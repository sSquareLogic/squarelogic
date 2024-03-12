import { IProjects } from "@/sanity/schemas/projects";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const ProjectImage = ({ image, project_name }: IProjects["projects"]["projects"]["row_1"][any]) => {
  return (
    // <a href={link} target="_blank" className="projects-row flex flex-col gap-6">
    <div className="projects-row flex flex-col gap-6">
      <Image
        src={urlForImage(image).url()}
        alt="Project image"
        unoptimized
        width={600}
        height={400}
        className="object-cover object-center w-full rounded-3xl"
      />
      <p className="text-2xl font-bold">{project_name}</p>
    </div>
  );
};
export default ProjectImage;
