import type { NextConfig } from "next";

// Check if the current environment is production (building for GitHub Pages)
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',          
  images: {
    unoptimized: true,       
  },
  
  // Only apply the subdirectory prefix when building for GitHub Pages production
  basePath: isProd ? '/lava_landing_page_nextjs' : '',

  // FORCE NEXT.JS TO ADD THE REPOSITORY NAME BEFORE /ASSETS/ AUTOMATICALLY
  assetPrefix: isProd ? '/lava_landing_page_nextjs/' : '',
};

export default nextConfig;
