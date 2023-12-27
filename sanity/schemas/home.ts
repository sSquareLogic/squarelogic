import { client } from "../lib/client";

export interface IHero {
  title: string;
  description: any;
}

export interface ISelectedWork {
  project_name: string;
  image: any;
  description: any;
  year: string;
  link: string;
}

export interface IAboutUs {
  subtitle: string;
  description: any;
}

export interface IProjects {
  projects: { project_name: string; image: any; description: any; year: string; link: string }[];
}

export interface IWorkflow {
  subtitle: string;
  items: {
    title: string;
    description: any;
  }[];
}

export interface IFAQ {
  subtitle: string;
  items: {
    question: string;
    answer: any;
  }[];
}

export interface IPricing {
  subtitle: string;
  items: {
    name: string;
    price?: string;
    description: any;
    link: string;
    features?: string[];
  }[];
}

export interface IContactUs {
  subtitle: string;
  description: any;
  email: string;
}

export interface IHome {
  hero: IHero;
  selected_work: ISelectedWork;
  about_us: IAboutUs;
  projects: IProjects;
  workflow: IWorkflow;
  faq: IFAQ;
  pricing: IPricing;
  contact_us: IContactUs;
}

export const getHomeData = async (): Promise<IHome[]> => {
  const query = `*[_type == 'home']`;
  const data = await client.fetch(
    query,
    {},
    {
      cache: "no-cache",
    },
  );
  return data;
};

const home = {
  name: "home",
  type: "document",
  title: "Home",
  fields: [
    {
      name: "hero",
      type: "object",
      title: "Hero",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "description",
          type: "array",
          title: "Description",
          of: [
            {
              type: "block",
            },
          ],
        },
      ],
    },
    {
      name: "selected_work",
      type: "object",
      title: "Selected work",
      fields: [
        {
          name: "project_name",
          type: "string",
          title: "Project name",
        },
        {
          name: "image",
          type: "image",
          title: "Image",
        },
        {
          name: "description",
          type: "array",
          title: "Description",
          of: [
            {
              type: "block",
            },
          ],
        },
        {
          name: "year",
          type: "string",
          title: "Year",
        },
        {
          name: "link",
          type: "string",
          title: "Link",
        },
      ],
    },
    {
      name: "about_us",
      type: "object",
      title: "About us",
      fields: [
        {
          name: "subtitle",
          type: "string",
          title: "Subtitle",
        },
        {
          name: "description",
          type: "array",
          title: "Description",
          of: [
            {
              type: "block",
            },
          ],
        },
      ],
    },
    {
      name: "projects",
      type: "object",
      title: "Projects",
      fields: [
        {
          name: "projects",
          type: "array",
          title: "Projects",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "project_name",
                  type: "string",
                  title: "Project name",
                },
                {
                  name: "image",
                  type: "image",
                  title: "Image",
                },
                {
                  name: "description",
                  type: "array",
                  title: "Description",
                  of: [
                    {
                      type: "block",
                    },
                  ],
                },
                {
                  name: "year",
                  type: "string",
                  title: "Year",
                },
                {
                  name: "link",
                  type: "string",
                  title: "Link",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "workflow",
      type: "object",
      title: "Workflow",
      fields: [
        {
          name: "subtitle",
          type: "string",
          title: "Subtitle",
        },
        {
          name: "items",
          type: "array",
          title: "Items",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  type: "string",
                  title: "Title",
                },
                {
                  name: "description",
                  type: "array",
                  title: "Description",
                  of: [
                    {
                      type: "block",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "faq",
      type: "object",
      title: "FAQ",
      fields: [
        {
          name: "subtitle",
          type: "string",
          title: "Subtitle",
        },
        {
          name: "items",
          type: "array",
          title: "Items",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "question",
                  type: "string",
                  title: "Question",
                },
                {
                  name: "answer",
                  type: "array",
                  title: "Answer",
                  of: [
                    {
                      type: "block",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "pricing",
      type: "object",
      title: "Pricing",
      fields: [
        {
          name: "subtitle",
          type: "string",
          title: "Subtitle",
        },
        {
          name: "items",
          type: "array",
          title: "Items",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  type: "string",
                  title: "Name",
                },
                {
                  name: "price",
                  type: "string",
                  title: "Price",
                },
                {
                  name: "description",
                  type: "array",
                  title: "Description",
                  of: [
                    {
                      type: "block",
                    },
                  ],
                },
                {
                  name: "link",
                  type: "string",
                  title: "Link",
                },
                {
                  name: "features",
                  type: "array",
                  title: "Features",
                  of: [
                    {
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "contact_us",
      type: "object",
      title: "Contact us",
      fields: [
        {
          name: "subtitle",
          type: "string",
          title: "Subtitle",
        },
        {
          name: "description",
          type: "array",
          title: "Description",
          of: [
            {
              type: "block",
            },
          ],
        },
        {
          name: "email",
          type: "string",
          title: "Email",
        },
      ],
    },
  ],
};

export default home;
