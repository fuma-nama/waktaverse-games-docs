import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api-reference/:path*",
        destination: "/api/fallback-docs/:path*",
      },
    ];
  },
};

export default withMDX(config);
