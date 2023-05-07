const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true',
  openAnalyzer: false,
});

const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
