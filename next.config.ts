import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@radix-ui/react-alert-dialog", "@radix-ui/react-dialog", "@radix-ui/react-label", "@radix-ui/react-select", "@radix-ui/react-slot", "@radix-ui/react-toast", "lucide-react"],
  },
};

export default nextConfig;
