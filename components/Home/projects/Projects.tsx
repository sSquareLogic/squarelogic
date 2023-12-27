import AnimatedButton from "@/components/animated/AnimatedButton";
import Container from "@/components/Container";
import { IProjects } from "@/sanity/schemas/home";
import Project from "./Project";

const Projects = ({ projects }: IProjects) => {
  return (
    <section className="projects">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-10">
          {projects.map((project, i) => (
            <Project key={i} {...project} />
          ))}
        </div>
        <div className="flex justify-center">
          <AnimatedButton name="See all projects" link="/projects" />
        </div>
      </Container>
    </section>
  );
};
export default Projects;
