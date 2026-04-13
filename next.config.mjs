const nextConfig = {
  experimental: {
    turbo: false,
  },

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

export default nextConfig;
