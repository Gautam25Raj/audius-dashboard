/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "audius-creator-2.theblueprint.xyz",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blockdaemon-audius-content-01.bdnodes.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "audius-content-11.figment.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
