import defaultTransition from "@/settings/transition";
import { motion } from "framer-motion";

interface IProps {
  text: string;
}

const AnimatedTextWord = ({ text }: IProps) => {
  const lineLength = 8;
  const words = text.split(" ");

  const makeParagraphs = (words: string[]) => {
    const paragraphs: string[] = words
      .reduce((result: string[][], word: string, index: number) => {
        if (index % lineLength === 0) {
          result.push([]);
        }
        result[result.length - 1].push(word);
        return result;
      }, [])
      .map((paragraphWords: string[]) => paragraphWords.join(" "));

    return paragraphs;
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: "100%",
    },
  };

  return (
    <div className="max-w-none uppercase overflow-hidden flex flex-col justify-center text-2xl font-medium gap-y-2 max-md:text-xl max-md:max-w-none max-sm:text-lg">
      {makeParagraphs(words).map((word, index) => (
        <motion.p
          key={index}
          className="text-center"
          variants={child}
          initial="hidden"
          animate="visible"
          transition={{ ...defaultTransition, delay: index * 0.2 }}
        >
          {word}
        </motion.p>
      ))}
    </div>
  );
};

export default AnimatedTextWord;
