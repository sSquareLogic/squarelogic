import Container from "@/components/Container";
import GiveawayForm from "@/components/Giveaway/GiveawayForm";
import Image from "next/image";

const Giveaway = () => {
  return (
    <main className="giveaway-main">
      <Container className="flex flex-col items-center gap-14 px-[5%]">
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
        <h1 className="text-[50px] text-WHITE uppercase font-INTER font-medium text-center">
          The <span className="text-ACCENT font-bold">Ultra</span> Website Optimization Guide
        </h1>
        <div className="line border-t-[3px] border-ACCENT w-[60%]"></div>
        <div className="grid grid-cols-TWO gap-20 font-INTER text-2xl leading-[200%]">
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
