import Image from "next/image";

const ContactBtn = () => {
  return (
    <a
      href={"https://calendly.com/mikejames1311005/squarelogic"}
      target="_blank"
      className="flex gap-4 items-center justify-center min-w-52 w-fit rounded-[56px] bg-ACCENT text-center py-6 px-6 text-BLACK font-bold text-xl font-INTER -tracking-[1%] max-md:w-full"
    >
      <span>Book A Call</span>
      <Image src={"/arrow-big.svg"} alt="Arrow" width={20} height={20} />
    </a>
  );
};
export default ContactBtn;
