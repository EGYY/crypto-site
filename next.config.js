/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['zarabarahorosho.pro', 'www.calltouch.ru'],
  },
}

module.exports = nextConfig
