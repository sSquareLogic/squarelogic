import Hero from "@/components/Hero";
import Selected from "@/components/Selected";

export default function Home() {
  return (
    <main className="main py-[124px] flex flex-col gap-[100px]">
      <Hero />
      <Selected />
    </main>
  );
}
