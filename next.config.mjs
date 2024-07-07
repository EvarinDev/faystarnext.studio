import withTM from 'next-transpile-modules';

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.faystarnext.studio',
      },
    ],
  },
};

export default withTM(['gsap'])(nextConfig);