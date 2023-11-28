import { motion } from "framer-motion";

interface IProps {
  text: string;
}

const AnimatedTextWord = ({ text }: IProps) => {
  const words = text.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      y: 20,
      transition: {
        type: "tween",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="max-w-[70%] uppercase overflow-hidden flex flex-wrap justify-center text-2xl font-medium text-BLACK gap-y-1"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "5px" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
