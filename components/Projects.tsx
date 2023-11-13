import Container from "./Container";
import Link from "next/link";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="projects">
      <Container className="flex flex-col gap-12 py-[100px]">
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
          <Link
            href={"/"}
            className="w-fit py-4 px-6 rounded-[70px] border-BLACK border-solid border text-BLACK text-lg font-medium"
          >
            See all projects
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default Projects;
