/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


const withTM = require('next-transpile-modules')(['@chakra-ui/react', '@chakra-ui/icons']);

module.exports = withTM({
  webpack: (config, options) => {
    return config;
  },
});
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    return config;
  },
};
