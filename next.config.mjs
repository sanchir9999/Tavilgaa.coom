/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow external images from Cloudinary used throughout the app
    domains: ["res.cloudinary.com"],
    // Or use remotePatterns if you later need to fine‑tune
    // remotePatterns: [
    //   { protocol: "https", hostname: "res.cloudinary.com" }
    // ]
  },
};

export default nextConfig;
