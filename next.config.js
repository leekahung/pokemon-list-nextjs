/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? "/pokemon-list-nextjs/" : "/",
  basePath: !debug ? "/pokemon-list-nextjs" : "",
};

module.exports = nextConfig;
