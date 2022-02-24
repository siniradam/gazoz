/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "image.tmdb.org",
      "i.ytimg.com",
      "yt3.ggpht.com",
    ],
  },
};

module.exports = nextConfig;
