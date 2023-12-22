import AnimatedImage from "./AnimatedImage";
import Image from "next/image";
import Tag from "./Tag";

interface IProps {
  name: string;
  title: string;
  date: string;
  tags: string[];
  image: any;
  link: string;
}

const Project = ({ date, tags, title, image, name }: IProps) => {
  return (
    <a href="" target="_blank" className="flex flex-col gap-4">
      <div className="project relative rounded-[24px] overflow-hidden">
        <AnimatedImage>
          <Image
            src={image}
            alt="Project image"
            width={1320}
            height={640}
            className="w-full h-full object-cover transition-all hover:scale-[105%] ease-out duration-500"
          />
        </AnimatedImage>
        <div className="tags absolute top-4 right-4 flex items-center gap-2">
          {tags.map((tag, i) => (
            <Tag tag={tag} key={i} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-6 text-lg font-medium">
        <span>{name}</span>
        <h6 className="leading-[120%]">{title}</h6>
        <span>({date})</span>
      </div>
    </a>
  );
};
export default Project;
