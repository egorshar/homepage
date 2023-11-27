const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true',
  openAnalyzer: false,
});

const nextConfig = {
  experimental: {},
};

module.exports = withBundleAnalyzer(nextConfig);
