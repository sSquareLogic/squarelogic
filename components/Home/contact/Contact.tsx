import ContactBtn from "./ContactBtn";
import Container from "@/components/Container";
import { IContactUs } from "@/sanity/schemas/home";
import { PortableText } from "@portabletext/react";
import Title from "@/components/Title";

const Contact = ({ description, subtitle }: IContactUs) => {
  return (
    <section className="contact">
      <Container className="grid grid-cols-THIRTEE gap-10 max-md:flex max-md:flex-col max-md:gap-8">
        <div className="flex flex-col gap-6 max-md:gap-4">
          <span className="text-lg font-medium">(Contact us)</span>
          <Title text={subtitle} />
        </div>
        <div className="flex flex-col gap-12">
          <div className="leading-[120%] flex flex-col gap-8 text-[32px] font-medium max-md:text-[28px] max-sm:text-[24px]">
            <PortableText value={description} />
          </div>
          <ContactBtn />
        </div>
      </Container>
    </section>
  );
};
export default Contact;
