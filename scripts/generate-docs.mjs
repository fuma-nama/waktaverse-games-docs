import { generateFiles } from "fumadocs-openapi";

void generateFiles({
  input: ["https://waktaverse.games/api-docs-json"],
  output: "./content/api-reference",
});
