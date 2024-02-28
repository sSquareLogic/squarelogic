import { ITestimonial } from "@/sanity/schemas/home";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";

const TestimonialCard = ({ link, handle, name, text, img }: ITestimonial) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="testimonial-card rounded-3xl bg-LIGHTBLACK p-6 flex flex-col gap-6 h-full max-sm:p-4"
    >
      <div className="testimonial-head flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <Image
            src={urlForImage(img).url() || ""}
            alt={name}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold font-INTER leading-[-1%] max-sm:text-base">{name}</h3>
            <span className="text-sm">@{handle}</span>
          </div>
        </div>
        <div className="stars flex items-center w-full gap-1">
          <Image src="/star.svg" alt="star" width={16} height={16} className="w-4 h-4 object-contain" />
          <Image src="/star.svg" alt="star" width={16} height={16} className="w-4 h-4 object-contain" />
          <Image src="/star.svg" alt="star" width={16} height={16} className="w-4 h-4 object-contain" />
          <Image src="/star.svg" alt="star" width={16} height={16} className="w-4 h-4 object-contain" />
          <Image src="/star.svg" alt="star" width={16} height={16} className="w-4 h-4 object-contain" />
        </div>
      </div>
      <div className="text-base text-WHITE exclude-leading max-sm:text-sm">
        <PortableText value={text} />
      </div>
    </Link>
  );
};
export default TestimonialCard;
