/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/jamiehwangblacksite',
  trailingSlash: true, // Adds a slash to the end of URLs
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
