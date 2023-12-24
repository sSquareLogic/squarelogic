import FAQItem, { IFAQItem } from "./FAQItem";

const FAQList = () => {
  const faqlist: IFAQItem[] = [
    {
      title: "What is SquareLogic, and how does it work",
      description:
        "SquareLogic is a platform that allows you to earn money by solving puzzles. You can also create your own puzzles and share them with the community.",
    },
    {
      title: "Who can benefit from using SquareLogic?",
      description:
        "SquareLogic is a platform that allows you to earn money by solving puzzles. You can also create your own puzzles and share them with the community.",
    },
    {
      title: "What types of content can I create with SquareLogic?",
      description:
        "SquareLogic is a platform that allows you to earn money by solving puzzles. You can also create your own puzzles and share them with the community.",
    },
    {
      title: "Is SquareLogic suitable for my industry or niche?",
      description:
        "SquareLogic is a platform that allows you to earn money by solving puzzles. You can also create your own puzzles and share them with the community.",
    },
  ];
  return (
    <ul className="flex flex-col gap-6">
      {faqlist.map((faq, i) => (
        <FAQItem key={i} description={faq.description} title={faq.title} />
      ))}
    </ul>
  );
};
export default FAQList;
