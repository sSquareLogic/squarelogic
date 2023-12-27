/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
        port: "",
        protocol: "https",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
