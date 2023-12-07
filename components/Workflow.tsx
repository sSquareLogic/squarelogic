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
  container: RefObject<HTMLElement>;
  order: number;
  item: IWorkflowItem;
  setActiveItem: (order: number) => void;
}

const WorkflowItem = ({ container, order, item, setActiveItem }: IWorkflowItemProps) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const start = -order * 70;
  const isTargetInView = useInView(targetRef, {
    root: container,
  });
  const controls = useAnimationControls();

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  useEffect(() => {
    if (isTargetInView) {
      if (velocityFactor.get() > 0) setActiveItem(order);
      controls.start((i) =>
        i === 0
          ? { color: colors.WHITE }
          : {
              color: colors.WHITE,
              height: "fit-content",
            },
      );
    } else {
      if (velocityFactor.get() < 0) setActiveItem(order - 1);
      controls.start((i) =>
        i === 0
          ? { color: "#4D4D4D" }
          : {
              color: "#4D4D4D",
              height: 0,
            },
      );
    }
  }, [isTargetInView, controls, setActiveItem, order, velocityFactor]);

  return (
    <>
      <div className="absolute" style={{ top: `${start}vh` }} ref={targetRef}></div>
      <motion.div
        className="workflow-item flex flex-col gap-6"
        initial={{ color: "#4D4D4D" }}
        custom={0}
        animate={controls}
        transition={{ duration: 0.4, type: "tween" }}
      >
        <h6 className="text-[64px] font-bold max-md:text-[56px] max-sm:text-[48px]">{item.title}</h6>
        <motion.p
          className="text-[32px] font-medium overflow-hidden max-md:text-2xl max-sm:text-lg"
          initial={{ height: 0 }}
          custom={1}
          animate={controls}
        >
          {item.description}
        </motion.p>
      </motion.div>
    </>
  );
};

const Workflow = () => {
  const height: number = (items.length + 0.7) * 100;
  const containerRef = useRef<HTMLElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<number>(0);

  console.log(activeItem);

  return (
    <section className="workflow" style={{ height: `${height}vh` }} ref={containerRef}>
      <div className="custom-container max-w-[1384px] px-8 mx-auto w-full h-full max-lg:px-5 max-md:px-4">
        <motion.div
          className="sticky top-[100px]"
          animate={{
            top: 100 - (activeItem * 200 * items.length) / 7,
          }}
          transition={{
            duration: 0.4,
            type: "tween",
            ease: "easeOut",
          }}
        >
          <div className="relative grid grid-cols-ABOUT gap-20 max-md:flex max-md:flex-col max-md:gap-4">
            <span className="text-lg font-medium">(Our workflow)</span>
            <div ref={itemRef} className="flex flex-col gap-10">
              {items.map((item, i) => (
                <WorkflowItem key={i} item={item} container={containerRef} order={i} setActiveItem={setActiveItem} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Workflow;
