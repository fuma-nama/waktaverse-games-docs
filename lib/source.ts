import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createOpenAPI } from "fumadocs-openapi/server";

export const source = loader({
  baseUrl: "/",
  source: docs.toFumadocsSource(),
});

export const openapi = createOpenAPI({
  proxyUrl: "/api/proxy",
});
