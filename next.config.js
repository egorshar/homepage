
const withBundleAnalyzer = require("@next/bundle-analyzer");
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withBundleAnalyzer({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    };
  },
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    browser: {
      analyzerMode: 'static',
      reportFilename: '../bundles/client.html'
    }
  }
}));
