/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: ["mixed-decls", "legacy-js-api"],
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /odometer.*\.css$/,
      use: "null-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
