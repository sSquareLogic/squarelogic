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
          <ProjectImage
            link="https://edu-red.vercel.app/"
            description="A website about endangered species"
            src={"/edured.png"}
            title="EduRed."
          />
        </div>
        <div className="projects-row flex flex-col gap-6 mt-40 max-md:mt-20 max-[680px]:mt-0">
          <ProjectImage
            link="https://esomartin.vercel.app"
            description="A portfolio website for a fitness coach"
            src="/esomartin.png"
            title="Eso Martin"
          />
          <ProjectImage
            link="https://bclub001.vercel.app"
            description="A website for a luxury barber shop"
            src="/bclub.png"
            title="Force Academy"
          />
          <ProjectImage
            link="https://passwords.duggthevicious.com"
            description="A website for generating passwords with options"
            src="/passwordgenerator.png"
            title="Password Generator"
          />
        </div>
      </Container>
    </section>
  );
};
export default ProjectsShow;
