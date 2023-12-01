import Container from "../Container";
import ProjectImage from "./ProjectImage";

const ProjectsShow = () => {
  return (
    <section className="projects-show">
      <Container className="grid grid-cols-TWO gap-20 max-lg:gap-14 max-md:gap-10 max-[680px]:flex max-[680px]:flex-col max-[680px]:gap-6">
        <div className="projects-row flex flex-col gap-6">
          <ProjectImage
            link="https://makecentsnow.com"
            description="App to stop the hassle of coins in your pocket & around the house."
            src="/makecents.png"
            title="Make Cents"
          />
          <ProjectImage
            link="https://duggthevicious.com"
            description="A portfolio website for a web developer"
            src={"/duggthevicious.png"}
            title="duggthevicious"
          />
        </div>
        <div className="projects-row flex flex-col gap-6 mt-40 max-md:mt-20 max-[680px]:mt-0">
          <ProjectImage
            link="https://esomartin.vercel.app"
            description="A portfolio website for a fitness coach"
            src="/esomartin.png"
            title="Eso Martin"
          />
        </div>
      </Container>
    </section>
  );
};
export default ProjectsShow;
