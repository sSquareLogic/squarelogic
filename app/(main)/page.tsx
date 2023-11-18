import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MouseFollower from "@/components/MouseFollower";
import Plans from "@/components/Plans";
import Projects from "@/components/Projects";
import Selected from "@/components/Selected";

export default function Home() {
  return (
    <>
      <MouseFollower />
      <main className="main py-[124px] flex flex-col gap-[100px]">
        <Hero />
        <Selected />
        <About />
        <Projects />
        <Plans />
        <Footer />
      </main>
    </>
  );
}
