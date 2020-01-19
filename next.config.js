const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withPlugins([
  withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
  }),
  withCSS,
])
