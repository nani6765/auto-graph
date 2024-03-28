/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    domain: 'dev-lp2n5knn2tgyk8vn.us.auth0.com',
    clientId: '38OOP3OriSSMvpRlNSbbmhf45LmIkXnQ',
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

export default nextConfig;