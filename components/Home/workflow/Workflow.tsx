import CursorHover from "@/components/animated/CursorHover";
import { IWorkflow } from "@/sanity/schemas/home";
import WorkflowItem from "./WorkflowItem";

const Workflow = ({ items, subtitle }: IWorkflow) => {
  return (
    <section className="workflow">
      <div className="custom-container max-w-[1384px] px-8 mx-auto w-full h-full max-lg:px-5 max-md:px-4">
        <div className="sticky top-[100px]">
          <div className="relative grid grid-cols-ABOUT gap-20 max-md:flex max-md:flex-col max-md:gap-8">
            <div className="flex flex-col h-fit sticky top-6 left-0 gap-6 max-md:gap-4">
              <span className="text-lg font-medium">(Our workflow)</span>
              <h6 className="text-[40px] font-bold max-md:text-[32px]">{subtitle}</h6>
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
      </div>
    </section>
  );
};
export default Workflow;
