import Container from "@/components/Container";
import { ISelectedWork } from "@/sanity/schemas/home";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

const Selected = ({ description, image, link, project_name, year }: ISelectedWork) => {
  return (
    <section className="selected">
      <a href={link} target="_blank">
        <Container className="flex flex-col gap-4">
          <h4 className="text-lg font-medium">(Our best work)</h4>
          <Image
            src={urlForImage(image).url()}
            alt="Selected work image"
            width={1320}
            height={742}
            className="w-full h-full object-cover rounded-[24px]"
          />
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
        </Container>
      </a>
    </section>
  );
};
export default Selected;
