import FAQItem, { IFAQItem } from "./FAQItem";

const FAQList = () => {
  const faqlist: IFAQItem[] = [
    {
      q: "Is development included?",
      a: "We specialize in both design and development. We can do both or just one of them.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept PayPal, Wise, Revolut, and crypto",
    },
    {
      q: "How much experience do you have?",
      a: "We have over 3 years of experience in the industry.",
    },
    {
      q: "How does onboarding happen?",
      a: "We will have a call where will will ask you questions about your project. If we agree to work together, we will send you a form to fill out. After that, we will start working on your project.",
    },
    {
      q: "What does unlimited features mean?",
      a: "We will work on your project until you are satisfied with the result. We will not stop working on your project until you are happy with it.",
    },
    {
      q: "What's your refund policy?",
      a: "We will refund you the full amount if you are not satisfied with the result.",
    },
  ];
  return (
    <ul className="flex flex-col gap-6">
      {faqlist.map((faq, i) => (
        <FAQItem key={i} a={faq.a} q={faq.q} position={i} />
      ))}
    </ul>
  );
};
export default FAQList;
