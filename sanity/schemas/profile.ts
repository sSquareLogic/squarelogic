import { client } from "../lib/client";

export interface IProfile {
  name: string;
  short_name: string;
  description: any;
  summary_card: any;
  icon_512: any;
  icon_192: any;
  keywords: string[];
}

export const getProfileData = async (): Promise<IProfile[]> => {
  const query = `*[_type == 'profile']`;
  const data = await client.fetch(
    query,
    {},
    {
      cache: "no-cache",
    },
  );
  return data;
};

const profile = {
  name: "profile",
  type: "document",
  title: "Profile",
  fields: [
    {
      name: "short_name",
      description: "This is solely used as a website title.",
      type: "string",
      title: "Project short name",
    },
    {
      name: "name",
      description: "This is a more detailed name of the project. Good to combine it with |.",
      type: "string",
      title: "Project name",
    },
    {
      name: "description",
      description: "This is a description of the project. This will be used in the SEO.",
      type: "array",
      title: "Projects description",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "summary_card",
      description: "This will be displayed when the link is shared across social media.",
      type: "image",
      title: "Project summary card",
    },
    {
      name: "icon_512",
      description: "This logo will be used as a favicon.",
      type: "image",
      title: "Project icon 512x512",
    },
    {
      name: "icon_192",
      description: "This logo will be used as a smaller favicon.",
      type: "image",
      title: "Project icon 192x192",
    },
    {
      name: "keywords",
      description: "These are the keywords of the project. This will be used in the SEO.",
      type: "array",
      title: "Keywords",
      of: [{ type: "string" }],
    },
  ],
};

export default profile;
