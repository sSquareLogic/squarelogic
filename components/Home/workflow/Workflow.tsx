"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationControls,
  useInView,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import colors from "@/settings/colors";
import defaultTransition from "@/settings/transition";

interface IWorkflowItem {
  title: string;
  description: string;
}

const items: IWorkflowItem[] = [
  {
    title: "Consultation",
    description: "Get to know what you want, then craft a smart plan for your website's look and functionality.",
  },
  {
    title: "Design and Development",
    description: "Make your designs real with code, so they're both creative and work smoothly.",
  },
  {
    title: "Iteration",
    description:
      "Work closely with you, tweak designs as needed, and make sure the end result matches what you have in mind.",
  },
  {
    title: "Testing",
    description: "Rigorously test and optimize the website for responsiveness, speed, and SEO.",
  },
  {
    title: "Launch and Support",
    description: "Launch the website and provide ongoing support to maintain its optimal performance.",
  },
];

interface IWorkflowItemProps {
  item: IWorkflowItem;
}

const WorkflowItem = ({ item }: IWorkflowItemProps) => {
  return (
    <>
      <div className="workflow-item flex flex-col gap-6">
        <motion.h6
          className="text-[64px] font-bold max-md:text-[56px] max-sm:text-[48px]"
          initial={{ opacity: "20%" }}
          whileInView={{ opacity: "100%" }}
        >
          {item.title}
        </motion.h6>
        <motion.p
          className="text-[32px] leading-[140%] overflow-hidden max-md:text-2xl max-sm:text-lg"
          initial={{ opacity: "20%" }}
          whileInView={{ opacity: "100%" }}
          transition={defaultTransition}
        >
          {item.description}
        </motion.p>
      </div>
    </>
  );
};

const Workflow = () => {
  return (
    <section className="workflow">
      <div className="custom-container max-w-[1384px] px-8 mx-auto w-full h-full max-lg:px-5 max-md:px-4">
        <div className="sticky top-[100px]">
          <div className="relative grid grid-cols-ABOUT gap-20 max-md:flex max-md:flex-col max-md:gap-8">
            <div className="flex flex-col h-fit sticky top-6 left-0 gap-6 max-md:gap-4">
              <span className="text-lg font-medium">(Our workflow)</span>
              <h6 className="text-[40px] font-bold max-md:text-[32px]">Explore our workflow</h6>
            </div>
            <div className="flex flex-col gap-10">
              {items.map((item, i) => (
                <WorkflowItem key={i} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Workflow;
