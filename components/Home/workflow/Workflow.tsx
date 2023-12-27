"use client";

import { IWorkflow } from "@/sanity/schemas/home";
import { PortableText } from "@portabletext/react";
import defaultTransition from "@/settings/transition";
import { motion } from "framer-motion";

const WorkflowItem = ({ description, title }: IWorkflow["items"][any]) => {
  return (
    <>
      <div className="workflow-item flex flex-col gap-6">
        <motion.h6
          className="text-[64px] font-bold max-md:text-[56px] max-sm:text-[48px]"
          initial={{ opacity: "20%" }}
          whileInView={{ opacity: "100%" }}
        >
          {title}
        </motion.h6>
        <motion.div
          className="text-[32px] leading-[140%] overflow-hidden max-md:text-2xl max-sm:text-lg"
          initial={{ opacity: "20%" }}
          whileInView={{ opacity: "100%" }}
          transition={defaultTransition}
        >
          <PortableText value={description} />
        </motion.div>
      </div>
    </>
  );
};

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
                <WorkflowItem key={i} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Workflow;
