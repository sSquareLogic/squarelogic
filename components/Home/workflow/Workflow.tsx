import Container from "@/components/Container";
import { IWorkflow } from "@/sanity/schemas/home";
import Title from "@/components/Title";
import WorkflowItem from "./WorkflowItem";

const Workflow = ({ items, subtitle }: IWorkflow) => {
  return (
    <section className="workflow">
      <Container className="flex flex-col gap-12 max-lg:gap-8">
        <div className="flex flex-col gap-6 max-md:gap-4">
          {/* <span className="text-lg font-medium">(Our workflow)</span> */}
          <Title text={subtitle} />
        </div>
        <div className="flex flex-col border-b border-BLACK3">
          {items.map((item, i) => (
            <WorkflowItem key={i} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Workflow;
