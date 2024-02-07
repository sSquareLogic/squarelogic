import Container from "@/components/Container";
import CursorHover from "@/components/animated/CursorHover";
import { IWorkflow } from "@/sanity/schemas/home";
import Title from "@/components/Title";
import WorkflowItem from "./WorkflowItem";

const Workflow = ({ items, subtitle }: IWorkflow) => {
  return (
    <section className="workflow">
      <Container className="flex flex-col gap-12 max-lg:gap-8">
        <div className="flex flex-col gap-6 max-md:gap-4">
          <span className="text-lg font-medium">(Our workflow)</span>
          <Title text={subtitle} />
        </div>
        <div className="flex flex-col border-b border-BLACK3">
          {items.map((item, i) => (
            <CursorHover key={i} state="loop">
              <WorkflowItem {...item} />
            </CursorHover>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Workflow;
