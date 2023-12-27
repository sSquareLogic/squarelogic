import { type SchemaTypeDefinition } from "sanity";
import profile from "./schemas/profile";
import home from "./schemas/home";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profile, home],
};
