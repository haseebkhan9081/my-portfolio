/** @type {import('next').NextConfig} */
 

module.exports =   {
    reactStrictMode: true,
    images: {
      domains: ['drive.google.com','raw.githubusercontent.com'],
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        })
        return config
      },
      experimental: {
        serverActions: true,
      },
  }
  
