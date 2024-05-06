/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
