import AnimatedButton from "./AnimatedButton";
import Container from "./Container";
import Link from "next/link";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="projects">
      <Container className="flex flex-col gap-12 py-[100px] max-md:py-[50px] max-sm:py-0">
        <div className="flex flex-col gap-10">
          <Project
            date="2022"
            tags={["design", "development"]}
            image={"/projects_1.jpg"}
            title="Ecommerce website for a local bussiness. Web design and web development"
          />
          <Project
            date="2022"
            tags={["design", "development"]}
            image={"/projects_2.jpg"}
            title="Ecommerce website for a local bussiness. Web design and web development"
          />
        </div>
        <div className="flex justify-center">
          <AnimatedButton name="See all projects" link="/" />
        </div>
      </Container>
    </section>
  );
};
export default Projects;
