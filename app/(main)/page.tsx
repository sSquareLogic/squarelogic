import { IHome, getHomeData } from "@/sanity/schemas/home";

import About from "@/components/Home/about/About";
import Contact from "@/components/Home/contact/Contact";
import FAQ from "@/components/Home/faq/FAQ";
import Features from "@/components/Home/features/Features";
import Hero from "@/components/hero/Hero";
import Plans from "@/components/Home/plans/Plans";
import Projects from "@/components/Home/projects/Projects";
import Selected from "@/components/Home/selected/Selected";
import Workflow from "@/components/Home/workflow/Workflow";

const Home = async () => {
  const home = (await getHomeData()) as IHome[];
  const { about_us, contact_us, faq, hero, pricing, projects, selected_work, workflow, features } = home[0];

  return (
    <>
      <main className="home py-[124px] flex flex-col gap-[200px] max-md:py-20 max-md:gap-[150px] max-sm:gap-[100px] max-sm:py-10 max-[450px]:py-6">
        <Hero {...hero} />
        <Selected {...selected_work} />
        <About {...about_us} />
        <Projects {...projects} />
        <Features {...features} />
        <Workflow {...workflow} />
        <FAQ {...faq} />
        <Plans {...pricing} />
        <Contact {...contact_us} />
      </main>
    </>
  );
};

export default Home;
