import Hero from "@/components/Hero";
import { Metadata } from "next";
import ProjectsShow from "@/components/projects/ProjectsShow";

export const metadata: Metadata = {
  title: "Our works | SquareLogic",
  description:
    "Creating outstanding user experiences. We help bring ideas to life and create digital products that work.",
};

const Projects = () => {
  return (
    <main className="projects pt-[124px] pb-[100px] flex flex-col gap-[100px] max-md:pt-20 max-sm:pt-10 max-[450px]:pt-6">
      <Hero text="WE ARE EQUAL PARTS ENGINEERING, CREATIVE AGENCY AND CONSULTANCY. OUR APPROACH DRAWS ON THE BEST ELEMENTS OF EACH TO DELIVER EXCEPTIONAL WORK. WE STRATEGICALLY CONNECT YOUR BRAND AND COMMUNICATIONS TO YOUR PRODUCTS AND SERVICES." />
      <ProjectsShow />
    </main>
  );
};
export default Projects;
