const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@rtk-query/graphql-request-base-query',
  'swiper',
  'ssr-window',
  'dom7',
  'react-timezone-select',
]);

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins([withTM, withBundleAnalyzer], {
  images: {
    domains: [
      'res-3.cloudinary.com',
      'res-5.cloudinary.com',
      'res.cloudinary.com',
      'images.unsplash.com',
    ],
  },
  experimental: {
    styledComponents: true,
  },
  headers() {
    return [
      {
        source: '/.well-known/apple-developer-merchantid-domain-association',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ];
  },
});
