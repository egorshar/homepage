
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require("@next/bundle-analyzer");
const withCSS = require('@zeit/next-css');

const nextConfig = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/secret-chamber': { page: '/secret-chamber' }
    };
  },
  analyzeBrowser: ['browser'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  }
};

module.exports = withPlugins([
  withCSS,
  withBundleAnalyzer
], nextConfig);
