"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import AnimateInView from "@/hooks/AnimateInView";
import Container from "../Container";
import { IProjects } from "@/sanity/schemas/projects";
import ProjectImage from "./ProjectImage";
import defaultTransition from "@/settings/transition";
import { useMediaQuery } from "usehooks-ts";

const ProjectsShow = ({ projects }: IProjects["projects"]) => {
  const stopAnimation = useMediaQuery("(max-width:680px)");
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <section className="projects-show">
      <Container className="grid grid-cols-TWO gap-20 max-lg:gap-14 max-md:gap-10 max-[680px]:flex max-[680px]:flex-col max-[680px]:gap-6">
        <div className="projects-row flex flex-col gap-[92px] max-sm:gap-20">
          {projects.row_1.map((project, i) => (
            <AnimateInView key={i}>
              <ProjectImage {...project} />
            </AnimateInView>
          ))}
        </div>
        <motion.div
          transition={defaultTransition}
          className="projects-row flex flex-col gap-[92px] mt-40 max-md:mt-20 max-[680px]:mt-0 max-sm:gap-20"
          style={!stopAnimation ? { y } : {}}
        >
          {projects.row_2.map((project, i) => (
            <AnimateInView key={i}>
              <ProjectImage {...project} />
            </AnimateInView>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
export default ProjectsShow;
