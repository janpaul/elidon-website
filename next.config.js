/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/50",
        destination: "/50/nl",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
