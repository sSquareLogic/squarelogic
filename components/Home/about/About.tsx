import Container from "@/components/Container";
import { IAboutUs } from "@/sanity/schemas/home";
import { PortableText } from "@portabletext/react";
import Title from "@/components/Title";

const About = ({ description, subtitle }: IAboutUs) => {
  return (
    <section className="about">
      <Container className="grid grid-cols-THIRTEE gap-10 max-md:flex max-md:flex-col max-md:gap-8">
        <div className="flex flex-col gap-6 max-md:gap-4">
          {/* <span className="text-lg font-medium">(About us)</span> */}
          <Title text={subtitle} />
        </div>
        <div className="flex flex-col gap-6 leading-[120%] text-[32px] font-medium max-md:text-[28px] max-sm:text-[24px]">
          <PortableText value={description} />
        </div>
      </Container>
    </section>
  );
};
export default About;
