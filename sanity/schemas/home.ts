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

export interface IFeatures {
  subtitle: string;
  features: {
    name: string;
    description: any;
    icon: any;
  }[];
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
  cta_title: string;
  cta_link: string;
}

export interface ITestimonial {
  name: string;
  link: string;
  handle: string;
  img: any;
  text: any;
}

export interface ITestimonials {
  testimonials: ITestimonial[];
}

export interface IHome {
  hero: IHero;
  selected_work: ISelectedWork;
  about_us: IAboutUs;
  projects: IProjects;
  features: IFeatures;
  workflow: IWorkflow;
  faq: IFAQ;
  pricing: IPricing;
  contact_us: IContactUs;
  testimonials: ITestimonials;
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
          description: "The title of the page, the first thing people will see when they visit.",
          type: "string",
          title: "Title",
        },
        {
          name: "description",
          description: "This will be under the title of the page.",
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
      description: "This must be our best work.",
      type: "object",
      title: "Selected work",
      fields: [
        {
          name: "project_name",
          description: "This is the name of the selected work.",
          type: "string",
          title: "Project name",
        },
        {
          name: "image",
          description: "This is the image of the selected work.",
          type: "image",
          title: "Image",
        },
        {
          name: "description",
          description: "This is the description of the selected work.",
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
          description: "This is the year of completion of the selected work.",
          type: "string",
          title: "Year",
        },
        {
          name: "link",
          description: "This is the link to the selected work.",
          type: "string",
          title: "Link",
        },
      ],
    },
    {
      name: "about_us",
      description: "This section will tell visitors about who we are.",
      type: "object",
      title: "About us",
      fields: [
        {
          name: "subtitle",
          description: "This will be displayed under the title of the section.",
          type: "string",
          title: "Subtitle",
        },
        {
          name: "description",
          description: "This is the content of the section.",
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
      description: "This section showcases some of our projects.",
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
                  description: "This is the name of the project.",
                  type: "string",
                  title: "Project name",
                },
                {
                  name: "image",
                  description: "This is the image of the project.",
                  type: "image",
                  title: "Image",
                },
                {
                  name: "description",
                  description: "This is the description of the project.",
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
                  description: "This is the year of completion of the project.",
                  type: "string",
                  title: "Year",
                },
                {
                  name: "link",
                  description: "This is the link to the project.",
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
      name: "features",
      description: "This section is about our features.",
      type: "object",
      title: "Features",
      fields: [
        {
          name: "subtitle",
          description: "This will be displayed under the title of this section.",
          type: "string",
          title: "Subtitle",
        },
        {
          name: "features",
          type: "array",
          title: "Features",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  description: "This is the name of the feature.",
                  type: "string",
                  title: "Name",
                },
                {
                  name: "description",
                  description: "This is the description of the feature.",
                  type: "array",
                  title: "Description",
                  of: [
                    {
                      type: "block",
                    },
                  ],
                },
                {
                  name: "icon",
                  description: "This is the icon of the feature.",
                  type: "image",
                  title: "Icon",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "workflow",
      description: "This section is about our work stages.",
      type: "object",
      title: "Workflow",
      fields: [
        {
          name: "subtitle",
          description: "This will displayed under the title of this section.",
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
                  description: "This is the title of the workflow item.",
                  type: "string",
                  title: "Title",
                },
                {
                  name: "description",
                  description: "This is the description of the workflow item.",
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
      description: "Frequently Asked Questions.",
      type: "object",
      title: "FAQ",
      fields: [
        {
          name: "subtitle",
          description: "This will be displayed under the title of this section.",
          type: "string",
          title: "Subtitle",
        },
        {
          name: "items",
          description: "These are the frequently asked questions and their answers.",
          type: "array",
          title: "Items",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "question",
                  description: "This is the question.",
                  type: "string",
                  title: "Question",
                },
                {
                  name: "answer",
                  description: "This is the answer.",
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
      description: "This section is about our pricing.",
      type: "object",
      title: "Pricing",
      fields: [
        {
          name: "subtitle",
          description: "This will be displayed under the title of this section.",
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
                  description: "This is the name of the pricing plan.",
                  type: "string",
                  title: "Name",
                },
                {
                  name: "price",
                  description: "This is the price of the pricing plan.",
                  type: "string",
                  title: "Price",
                },
                {
                  name: "description",
                  description: "This is the description of the pricing plan.",
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
                  description: "This is the link to book a call.",
                  type: "string",
                  title: "Link to a call",
                },
                {
                  name: "features",
                  description: "These are the features of the pricing plan.",
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
      description: "This section is about how to contact us.",
      type: "object",
      title: "Contact us",
      fields: [
        {
          name: "subtitle",
          description: "This will be displayed under the title of this section.",
          type: "string",
          title: "Subtitle",
        },
        {
          name: "description",
          description: "This is the content of this section.",
          type: "array",
          title: "Description",
          of: [
            {
              type: "block",
            },
          ],
        },
        {
          name: "cta_title",
          description: "This is the title of the CTA button.",
          type: "string",
          title: "Title of the CTA button",
        },
        {
          name: "cta_link",
          description: "This is the link of the CTA button.",
          type: "url",
          title: "Link of the CTA button",
        },
      ],
    },
    {
      name: "testimonials",
      type: "document",
      title: "Testimonials",
      fields: [
        {
          name: "testimonials",
          description: "The testimonials that will be shown on the home page.",
          type: "array",
          title: "Testimonials",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  description: "The name of the person who gave the testimonial.",
                  type: "string",
                  title: "Name",
                },
                {
                  name: "handle",
                  description: "X handle of the person who gave the testimonial.",
                  type: "string",
                  title: "X handle",
                },
                {
                  name: "link",
                  description: "Link to the testimonial.",
                  type: "url",
                  title: "Link",
                },
                {
                  name: "img",
                  description: "The image of the person who gave the testimonial.",
                  type: "image",
                  title: "Image",
                },
                {
                  name: "text",
                  description: "The testimonial text.",
                  title: "Text",
                  type: "array",
                  of: [{ type: "block" }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default home;
