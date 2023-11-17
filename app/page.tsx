import About from "@/components/About";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Projects from "@/components/Projects";
import Selected from "@/components/Selected";

export default function Home() {
  return (
    <main className="main py-[124px] flex flex-col gap-[100px]">
      <Hero />
      <Selected />
      <About />
      <Projects />
      <Plans />
    </main>
  );
}
