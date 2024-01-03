import ContactUs from "@/components/ContactUs/ContactUs";
import Hero from "@/components/hero/Hero";

const Contact = () => {
  return (
    <main className="contact-us py-[124px] flex flex-col gap-[200px] max-md:py-20 max-md:gap-[150px] max-sm:gap-[100px] max-sm:py-10 max-[450px]:py-6">
      <Hero
        title="SQUARELOGIC"
        description="WE BELIEVE IN THE POWER OF SMALL, EXPERIENCED TEAMS. OUR SIZE KEEPS US SHARP, PREVENTING OVERSIGHTS AND ENSURING SEAMLESS FOCUS. THIS COHESION EMPOWERS SWIFT ADAPTATION AND INNOVATIVE SOLUTIONS FOR CLIENTS BIG AND SMALL."
      />
      <ContactUs />
    </main>
  );
};
export default Contact;
