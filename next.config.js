/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/50",
        destination: "/50/nl/unknown",
        permanent: true,
      },
      {
        source: "/50/nl",
        destination: "/50/nl/unknown",
        permanent: true,
      },
      {
        source: "/50/en",
        destination: "/50/en/unknown",
        permanent: true,
      },
      {
        source: "/50/se",
        destination: "/50/se/unknown",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
