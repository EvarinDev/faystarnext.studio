import withTM from 'next-transpile-modules';

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.faystarnext.studio',
      },
    ],
  },
};

export default withTM(['gsap'])(nextConfig);