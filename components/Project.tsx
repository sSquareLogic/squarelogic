import Image from "next/image";
import Tag from "./Tag";

interface IProps {
  title: string;
  date: string;
  tags: string[];
  image: any;
}

const Project = ({ date, tags, title, image }: IProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="project relative rounded-[4px] overflow-hidden">
        <Image src={image} alt="Project image" width={1320} height={640} className="w-full h-full object-cover" />
        <div className="tags absolute top-4 right-4">
          {tags.map((tag, i) => (
            <Tag tag={tag} key={i} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between gap-6 text-lg font-medium">
        <span>Custom</span>
        <h6>{title}</h6>
        <span>({date})</span>
      </div>
    </div>
  );
};
export default Project;
