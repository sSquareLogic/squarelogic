"use client";

import { IWorkflow } from "@/sanity/schemas/home";
import { PortableText } from "@portabletext/react";
import defaultTransition from "@/settings/transition";
import { motion } from "framer-motion";

const WorkflowItem = ({ description, title }: IWorkflow["items"][any]) => {
  return (
    <>
      <div className="workflow-item grid grid-cols-THIRTEE items-center py-10 gap-10 border-t border-BLACK3 max-md:flex max-md:flex-col max-md:items-start">
        <motion.h6
          transition={defaultTransition}
          className="text-2xl font-bold font-INTER -tracking-[1%]"
          initial={{ opacity: "20%", x: "-5%" }}
          whileInView={{ opacity: "100%", x: "0" }}
        >
          {title}
        </motion.h6>
        <motion.div
          className="text-lg leading-[140%] overflow-hidden"
          initial={{ opacity: "20%", x: "-5%" }}
          whileInView={{ opacity: "100%", x: "0" }}
          transition={defaultTransition}
        >
          <PortableText value={description} />
        </motion.div>
      </div>
    </>
  );
};

export default WorkflowItem;
