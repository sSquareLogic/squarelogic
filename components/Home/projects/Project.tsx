"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

import { IProjects } from "@/sanity/schemas/home";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import { useMediaQuery } from "usehooks-ts";
import { useRef } from "react";

type IProjectsItemType = IProjects["projects"][any];

interface IProps extends IProjectsItemType {
  i: number;
  range: [number, number];
  targetScale: number;
  progress: MotionValue<number>;
}

const Project = ({ description, image, link, project_name, year, i, progress, range, targetScale }: IProps) => {
  const container = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const breakpoint = useMediaQuery("(max-width: 768px)");
  return (
    <motion.a
      href={link}
      ref={container}
      target="_blank"
      className="flex flex-col gap-4 sticky top-0 mx-auto max-w-[900px] max-h-[500px] max-md:max-w-none max-md:max-h-none bg-BLACK rounded-t-[24px] overflow-hidden"
      style={{ top: `calc(10% + ${i * 32}px)`, scale }}
    >
      <div className="project relative rounded-[24px] overflow-hidden">
        <motion.div style={{ scale: imageScale }}>
          <Image
            src={breakpoint ? urlForImage(image).url() : urlForImage(image).size(900, 600).url()}
            alt="Project image"
            width={900}
            height={600}
            className="object-contain"
          />
        </motion.div>
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
    </motion.a>
  );
};
export default Project;
