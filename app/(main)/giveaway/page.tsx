import Container from "@/components/Container";
import GiveawayForm from "@/components/Giveaway/GiveawayForm";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WEBSITE MONEY-MAKING MACHINE GUIDE | SQUARELOGIC",
  description:
    "Get 'WEBSITE MONEY-MAKING MACHINE GUIDE' now and learn how to optimize your website, understand branding, design basics, and boost conversion rates!",
  twitter: {
    title: "WEBSITE MONEY-MAKING MACHINE GUIDE | SQUARELOGIC",
    description:
      "Get 'WEBSITE MONEY-MAKING MACHINE GUIDE' now and learn how to optimize your website, understand branding, design basics, and boost conversion rates!",
    site: "SQUARELOGIC",
    card: "summary_large_image",
    images: ["/Giveaway.png"],
  },
  openGraph: {
    title: "WEBSITE MONEY-MAKING MACHINE GUIDE | SQUARELOGIC",
    description:
      "Get 'WEBSITE MONEY-MAKING MACHINE GUIDE' now and learn how to optimize your website, understand branding, design basics, and boost conversion rates!",
    images: ["/Giveaway.png"],
    type: "website",
  },
};

const Giveaway = () => {
  return (
    <main className="giveaway-main">
      <Container className="flex flex-col items-center gap-14 px-[5%] max-md:gap-10 max-md:px-0">
        <div className="w-[200px] h-[200px]">
          <Image
            src={"/logo.svg"}
            alt="SQUARELOGIC logo"
            width={200}
            height={200}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-[50px] text-WHITE uppercase font-INTER font-medium text-center max-md:text-[40px] max-sm:text-4xl">
          WEBSITE <span className="text-ACCENT font-bold">MONEY-MAKING</span> MACHINE GUIDE
        </h1>
        <div className="line border-t-[3px] border-ACCENT w-[60%] max-md:w-[80%]"></div>
        <div className="grid grid-cols-TWO gap-20 font-INTER text-2xl leading-[200%] max-lg:text-xl max-md:flex max-md:flex-col max-md:gap-0 max-md:text-2xl max-sm:text-xl">
          <ul className="flex flex-col list">
            <li>Learn website optimization</li>
            <li>Understand branding</li>
          </ul>
          <ul className="flex flex-col list">
            <li>Understand design basics</li>
            <li>Boost conversion rates</li>
          </ul>
        </div>
        <GiveawayForm />
      </Container>
    </main>
  );
};
export default Giveaway;
