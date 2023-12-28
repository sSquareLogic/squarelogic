import { type SchemaTypeDefinition } from "sanity";
import profile from "./schemas/profile";
import home from "./schemas/home";
import projects from "./schemas/projects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, home, projects],
};
