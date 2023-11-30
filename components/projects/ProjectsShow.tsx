import Container from "../Container";
import ProjectImage from "./ProjectImage";

const ProjectsShow = () => {
  return (
    <section className="projects-show">
      <Container className="grid grid-cols-TWO gap-20 max-lg:gap-14 max-md:gap-10 max-[680px]:flex max-[680px]:flex-col max-[680px]:gap-6">
        <div className="projects-row flex flex-col gap-6">
          <ProjectImage
            description="The best tool for stop-motion animation"
            src="/projectshow1.png"
            title="Make Cents"
          />
          <ProjectImage
            description="The best tool for stop-motion animation"
            src="/projectshow1.png"
            title="Make Cents"
          />
          <ProjectImage
            description="The best tool for stop-motion animation"
            src="/projectshow1.png"
            title="Make Cents"
          />
        </div>
        <div className="projects-row flex flex-col gap-6 mt-40 max-md:mt-20 max-[680px]:mt-0">
          <ProjectImage
            description="The best tool for stop-motion animation"
            src="/projectshow1.png"
            title="Make Cents"
          />
          <ProjectImage
            description="The best tool for stop-motion animation"
            src="/projectshow1.png"
            title="Make Cents"
          />
          <ProjectImage
            description="The best tool for stop-motion animation"
            src="/projectshow1.png"
            title="Make Cents"
          />
        </div>
      </Container>
    </section>
  );
};
export default ProjectsShow;
