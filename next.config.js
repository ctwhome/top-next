/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

module.exports = withPlugins([withMDX], {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx','js', 'jsx', 'md', 'mdx']
});