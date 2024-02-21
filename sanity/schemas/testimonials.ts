import { client } from "../lib/client";

export interface ITestimonial {
  name: string;
  handle: string;
  img: any;
  text: any;
}

export interface ITestimonials {
  testimonials: ITestimonial[];
}

export const getTestimonialsData = async (): Promise<ITestimonials[]> => {
  const query = `*[_type == 'testimonials']`;
  const data = await client.fetch(
    query,
    {},
    {
      cache: "no-cache",
    },
  );
  return data;
};

const testimonials = {
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
              name: "img",
              description: "The image of the person who gave the testimonial.",
              type: "image",
              title: "Image",
            },
            {
              name: "text",
              description: "The testimonial text.",
              type: "text",
              title: "Text",
            },
          ],
        },
      ],
    },
  ],
};

export default testimonials;
