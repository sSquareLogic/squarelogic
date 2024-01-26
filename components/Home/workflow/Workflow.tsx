import CursorHover from "@/components/animated/CursorHover";
import { IWorkflow } from "@/sanity/schemas/home";
import WorkflowItem from "./WorkflowItem";

const Workflow = ({ items, subtitle }: IWorkflow) => {
  return (
    <section className="workflow">
      <div className="custom-container max-w-[1384px] px-8 mx-auto w-full h-full max-lg:px-5 max-md:px-4">
        <div className="relative grid grid-cols-THIRTEE gap-10 max-lg:flex max-lg:flex-col max-lg:gap-8">
          <div className="flex flex-col h-fit sticky top-6 left-0 gap-6 max-md:gap-4 max-lg:static">
            <span className="text-lg font-medium">(Our workflow)</span>
            <h3 className="text-[40px] font-bold max-md:text-[32px]">{subtitle}</h3>
          </div>
          <div className="flex flex-col gap-10">
            {items.map((item, i) => (
              <CursorHover key={i} state="loop">
                <WorkflowItem {...item} />
              </CursorHover>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Workflow;
