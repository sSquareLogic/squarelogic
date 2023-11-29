import Container from "../Container";
import ProjectImage from "./ProjectImage";

const ProjectsShow = () => {
  return (
    <section className="projects-show">
      <Container className="grid grid-cols-TWO gap-20">
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
        <div className="projects-row flex flex-col gap-6 mt-40">
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
