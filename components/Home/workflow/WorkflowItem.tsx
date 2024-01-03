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
          transition={defaultTransition}
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

export default WorkflowItem;
