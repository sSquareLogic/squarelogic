import AnimatedButton from "./AnimatedButton";
import Container from "./Container";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="projects">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-10">
          <Project
            link="https://duggthevicious.com"
            date="2023"
            image={"/duggthevicious.png"}
            name="Dugg the Vicious"
            title="A portfolio website for a web developer"
          />
          <Project
            link="https://makecentsnow.com"
            date="2023"
            image={"/makecents.png"}
            name="Make Cents Now"
            title="App to stop the hassle of coins in your pocket & around the house."
          />
        </div>
        <div className="flex justify-center">
          <AnimatedButton name="See all projects" link="/projects" />
        </div>
      </Container>
    </section>
  );
};
export default Projects;
