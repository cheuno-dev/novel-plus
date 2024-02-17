/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/cheuno-dev/novel-plus",
        permanent: true,
      },
    ];
  },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
