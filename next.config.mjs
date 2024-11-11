/** @type {import('next').NextConfig} */
import redirects from "./src/config/redirects.mjs";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
