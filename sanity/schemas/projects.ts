import { client } from "../lib/client";

export interface IHero {
  title: string;
  description: any;
}

export interface IProjectsSection {
  projects: {
    row_1: { project_name: string; image: any; description: any; link: string }[];
    row_2: { project_name: string; image: any; description: any; link: string }[];
  };
}

export interface IMetadata {
  title: string;
  description: string;
}

export interface IProjects {
  hero: IHero;
  projects: IProjectsSection;
  metadata: IMetadata;
}

export const getProjectsData = async (): Promise<IProjects[]> => {
  const query = `*[_type == 'projects']`;
  const data = await client.fetch(
    query,
    {},
    {
      cache: "no-cache",
    },
  );
  return data;
};

const projects = {
  name: "projects",
  type: "document",
  title: "Projects",
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
      name: "projects",
      type: "object",
      title: "Projects",
      fields: [
        {
          name: "projects",
          type: "object",
          title: "Projects",
          fields: [
            {
              name: "row_1",
              type: "array",
              title: "Row 1",
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
                      name: "link",
                      type: "string",
                      title: "Link",
                    },
                  ],
                },
              ],
            },
            {
              name: "row_2",
              type: "array",
              title: "Row 2",
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
      ],
    },
    {
      name: "metadata",
      type: "object",
      title: "Metadata",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "description",
          type: "string",
          title: "Description",
        },
      ],
    },
  ],
};

export default projects;
