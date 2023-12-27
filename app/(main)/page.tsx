import About from "@/components/Home/about/About";
import Contact from "@/components/Home/contact/Contact";
import FAQ from "@/components/Home/faq/FAQ";
import Hero from "@/components/hero/Hero";
import Plans from "@/components/Home/plans/Plans";
import Projects from "@/components/Home/projects/Projects";
import Selected from "@/components/Home/selected/Selected";
import Workflow from "@/components/Home/workflow/Workflow";

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
        <Workflow />
        <FAQ />
        <Plans />
        <Contact />
      </main>
    </>
  );
}
