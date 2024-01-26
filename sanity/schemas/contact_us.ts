import { client } from "../lib/client";

export interface IMetadata {
  title: string;
  description: any;
}

export interface IContactUs {
  metadata: IMetadata;
}

export const getContactData = async (): Promise<IContactUs[]> => {
  const query = `*[_type == 'contact_us']`;
  const data = await client.fetch(
    query,
    {},
    {
      cache: "no-cache",
    },
  );
  return data;
};

const contact_us = {
  name: "contact_us",
  type: "document",
  title: "Contact Us",
  fields: [
    {
      name: "metadata",
      description: "Used for SEO and social media.",
      type: "object",
      title: "Metadata",
      fields: [
        {
          name: "title",
          description: "This is the title of the page, the one that is written on the tab of the browser.",
          type: "string",
          title: "Title",
        },
        {
          name: "description",
          description: "This is the description of the page, the one that is shown on search engines.",
          type: "string",
          title: "Description",
        },
      ],
    },
  ],
};

export default contact_us;
