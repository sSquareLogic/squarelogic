import Hero from "@/components/Hero";
import ProjectsShow from "@/components/projects/ProjectsShow";

const Projects = () => {
  return (
    <main className="projects py-[124px] flex flex-col gap-[100px]">
      <Hero text="WE ARE EQUAL PARTS ENGINEERING, CREATIVE AGENCY AND CONSULTANCY. OUR APPROACH DRAWS ON THE BEST ELEMENTS OF EACH TO DELIVER EXCEPTIONAL WORK. WE STRATEGICALLY CONNECT YOUR BRAND AND COMMUNICATIONS TO YOUR PRODUCTS AND SERVICES." />
      <ProjectsShow />
    </main>
  );
};
export default Projects;
