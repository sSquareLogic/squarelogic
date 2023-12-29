import Image from "next/image";
import colors from "@/settings/colors";

interface IProps {
  name: string;
  description: string;
  icon: string;
  accent?: boolean;
}

const Feature = ({ name, description, icon, accent }: IProps) => {
  return (
    <div
      className="feature p-10 flex flex-col gap-8 bg-LIGHTBLACK rounded-3xl"
      style={accent ? { background: colors.ACCENT } : {}}
    >
      <div
        className="rounded-full bg-ACCENT flex items-center justify-center p-4 w-fit h-fit"
        style={accent ? { background: colors.BLACK } : {}}
      >
        <Image src={icon} alt={name} width={48} height={48} className="object-contain w-12 h-12" />
      </div>
      <div className="flex flex-col gap-6" style={accent ? { color: colors.BLACK } : {}}>
        <h6 className="text-2xl font-bold">{name}</h6>
        <p className="text-lg leading-[140%]">{description}</p>
      </div>
    </div>
  );
};
export default Feature;
