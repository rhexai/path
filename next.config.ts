import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/bootcamps',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/webinars',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/private-tutoring',
        destination: '/private-tuition',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
