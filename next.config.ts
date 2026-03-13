import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stayzzy.com',
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com", // Optional (if using Firebase)
      },
      {
        protocol: 'https',
        hostname: 'booking.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // --- NAYA PEXELS HOSTNAME ---
      },
      {
        protocol: 'https',
        hostname: 'google.com',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com', // iStock images ke liye
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com', // iStock images ke liye
      },
      {
        protocol: 'https',
        hostname: 'img.hexahome.in', // Hexahome images ke liye
      },
      // scai.in
      {
        protocol: 'https',
        hostname: 'tennews.in',
      },
      {
        protocol: 'https',
        hostname: 'r1imghtlak.mmtcdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/uc/**",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/file/d/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cf.bstatic.com",
      },
      {
        protocol: "https",
        hostname: "images.trvl-media.com",
      },
      {
        protocol: "https",
        hostname: "images.paperturn.com",
      },
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.b2btrips.in",
      },
      {
        protocol: "https",
        hostname: "www.hotelupwala.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;