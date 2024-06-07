/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      // Disable fallback for specific modules
      config.resolve.fallback = {
        ...config.resolve.fallback,
        "mongodb-client-encryption": false,
        "aws4": false
      };
  
      // Return the modified config
      return config;
    }
  };
  
  module.exports = nextConfig;
  