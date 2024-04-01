/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**.asos-media.com",
          port: "",
        },
      ],
    },
  };

export default nextConfig;
