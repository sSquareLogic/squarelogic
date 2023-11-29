import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Projects from "@/components/Projects";
import Selected from "@/components/Selected";

export default function Home() {
  return (
    <>
      <main className="home py-[124px] flex flex-col gap-[100px]">
        <Hero text="SquareLogic is a creative studio, specialized in strategy, branding, design, and development. Our work is always at the intersection of design and technology." />
        <Selected />
        <About />
        <Projects />
        <Plans />
        <Contact />
      </main>
    </>
  );
}
