import { type SchemaTypeDefinition } from "sanity";
import profile from "./schemas/profile";
import home from "./schemas/home";
import projects from "./schemas/projects";
import contact_us from "./schemas/contact_us";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, home, projects, contact_us],
};
