/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "uploads.mangadex.org",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "i.ibb.co",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "postimage.me",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "i.postimg.cc",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "daisyui.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
