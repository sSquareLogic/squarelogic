"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import AnimateInView from "@/hooks/AnimateInView";
import Container from "../Container";
import ProjectImage from "./ProjectImage";
import { useMediaQuery } from "usehooks-ts";
import { useRef } from "react";

const projects = {
  row_1: [
    {
      link: "https://makecentsnow.com",
      description: "App to stop the hassle of coins in your pocket & around the house.",
      src: "/makecents.png",
      title: "Make Cents",
    },
    {
      link: "https://duggthevicious.com",
      description: "A portfolio website for a web developer",
      src: "/duggthevicious.png",
      title: "duggthevicious",
    },
    {
      link: "https://edu-red.vercel.app/",
      description: "A website about endangered species",
      src: "/edured.png",
      title: "EduRed.",
    },
  ],
  row_2: [
    {
      link: "https://esomartin.vercel.app",
      description: "A portfolio website for a fitness coach",
      src: "/esomartin.png",
      title: "Eso Martin",
    },
    {
      link: "https://bclub001.vercel.app",
      description: "A website for a luxury barber shop",
      src: "/bclub.png",
      title: "Force Academy",
    },
    {
      link: "https://passwords.duggthevicious.com",
      description: "A website for generating passwords with options",
      src: "/passwordgenerator.png",
      title: "Password Generator",
    },
  ],
};

const ProjectsShow = () => {
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
              <ProjectImage
                description={project.description}
                link={project.link}
                src={project.src}
                title={project.title}
              />
            </AnimateInView>
          ))}
        </div>
        <motion.div
          className="projects-row flex flex-col gap-[92px] mt-40 max-md:mt-20 max-[680px]:mt-0 max-sm:gap-20"
          style={!stopAnimation ? { y } : {}}
        >
          {projects.row_2.map((project, i) => (
            <AnimateInView key={i}>
              <ProjectImage
                description={project.description}
                link={project.link}
                src={project.src}
                title={project.title}
              />
            </AnimateInView>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
export default ProjectsShow;
