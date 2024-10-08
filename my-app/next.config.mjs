/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
  trailingSlash: false,
  reactStrictMode: true,
  sassOptions: {
    implementation: "sass-embedded",
  },
  distDir: "out",
};

export default nextConfig;
