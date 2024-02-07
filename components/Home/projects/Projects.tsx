"use client";

import AnimatedButton from "@/components/animated/AnimatedButton";
import { IProjects } from "@/sanity/schemas/home";
import Project from "./Project";
import { useRef } from "react";
import { useScroll } from "framer-motion";

const Projects = ({ projects }: IProjects) => {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <section className="projects relative" ref={container}>
      <div className="custom-container max-w-[1384px] px-8 mx-auto my-20 w-full h-full max-lg:px-5 max-md:px-4">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-40 relative">
            {projects.map((project, i) => {
              const targetScale = 1 - (projects.length - i) * 0.05;
              return (
                <Project
                  key={i}
                  {...project}
                  i={i}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                  progress={scrollYProgress}
                />
              );
            })}
          </div>
          <div className="flex justify-center">
            <AnimatedButton name="See all projects" link="/projects" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
