import { IContactUs, getContactData } from "@/sanity/schemas/contact_us";

import ContactUs from "@/components/ContactUs/ContactUs";
import Hero from "@/components/hero/Hero";

export const generateMetadata = async () => {
  const contactData = (await getContactData()) as IContactUs[];
  const title = contactData[0].metadata.title;
  const description = contactData[0].metadata.description;
  return {
    title,
    description,
  };
};

const Contact = async () => {
  const contactData = (await getContactData()) as IContactUs[];
  return (
    <main className="contact-us py-[124px] flex flex-col gap-[200px] max-md:py-20 max-md:gap-[150px] max-sm:gap-[100px] max-sm:py-10 max-[450px]:py-6">
      <h1 hidden>{contactData[0].metadata.description}</h1>
      <Hero title={contactData[0].metadata.title} description={contactData[0].metadata.description} />
      <ContactUs />
    </main>
  );
};
export default Contact;
