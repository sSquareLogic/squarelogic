import AnimatedImage from "../../animated/AnimatedImage";
import { IProjects } from "@/sanity/schemas/home";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

interface IProps {
  name: string;
  title: string;
  date: string;
  tags?: string[];
  image: any;
  link: string;
}

const Project = ({ description, image, link, project_name, year }: IProjects["projects"][any]) => {
  return (
    <a href={link} target="_blank" className="flex flex-col gap-4">
      <div className="project relative rounded-[24px] overflow-hidden">
        <AnimatedImage>
          <Image
            src={urlForImage(image).url()}
            alt="Project image"
            width={1320}
            height={640}
            className="w-full h-full object-cover transition-all hover:scale-[105%] ease-out duration-500"
          />
        </AnimatedImage>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-6 text-lg font-medium">
          <span>{project_name}</span>
          <div className="leading-[120%] max-md:hidden">
            <PortableText value={description} />
          </div>
          <span>({year})</span>
        </div>
        <div className="hidden leading-[120%] border-t border-solid border-BLACK3 pt-4 max-md:block">
          <PortableText value={description} />
        </div>
      </div>
    </a>
  );
};
export default Project;
