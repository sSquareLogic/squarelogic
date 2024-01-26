import Hero from "@/components/hero/Hero";
import ProjectsShow from "@/components/projects/ProjectsShow";
import { getProjectsData } from "@/sanity/schemas/projects";

export const generateMetadata = async () => {
  const projectsMetadata = (await getProjectsData())[0].metadata;
  return {
    title: projectsMetadata.title,
    description: projectsMetadata.description,
  };
};

const Projects = async () => {
  const projectsData = await getProjectsData();
  const projectsMetadata = (await getProjectsData())[0].metadata;
  const { hero, projects } = projectsData[0];
  return (
    <main className="projects pt-[124px] pb-[100px] flex flex-col gap-[100px] max-md:pt-20 max-sm:pt-10 max-[450px]:pt-6">
      <h1 hidden>{projectsMetadata.description}</h1>
      <Hero {...hero} />
      <ProjectsShow {...projects} />
    </main>
  );
};
export default Projects;
