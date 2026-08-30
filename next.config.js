/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blog/seo-strategies",
        destination: "/blog/organized-invoices",
        permanent: true,
      },
      {
        source: "/blog/nextjs-ecommerce",
        destination: "/blog/tracking-business-expenses",
        permanent: true,
      },
      {
        source: "/blog/mobile-development",
        destination: "/blog/cash-flow-basics",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
