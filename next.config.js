/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
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
