import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Projects from "@/components/Projects";
import Selected from "@/components/Selected";

export default function Home() {
  const hero =
    "SQUARELOGIC is a specialized creative studio focusing on strategic solutions, branding, design, and development, with a primary emphasis on serving the real estate and e-commerce industries.";
  return (
    <>
      <main className="home py-[124px] flex flex-col gap-[200px] max-md:py-20 max-md:gap-[150px] max-sm:gap-[100px] max-sm:py-10 max-[450px]:py-6">
        <Hero text={hero} />
        <Selected />
        <About />
        <Projects />
        <Plans />
        <Contact />
      </main>
    </>
  );
}
