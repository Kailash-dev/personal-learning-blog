/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensure Next.js exports as static files
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
  basePath: "/personal-learning-blog", // Replace with your GitHub repo name
  assetPrefix: "/<repository-name>/", // Required for correct asset loading
};

module.exports = nextConfig;
