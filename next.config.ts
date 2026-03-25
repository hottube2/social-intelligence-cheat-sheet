import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/download": ["./private-assets/**/*"],
  },
};

export default nextConfig;
