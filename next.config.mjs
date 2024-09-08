/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "ibb.co",
            },
            {
                protocol: "https",
                hostname: "i.ibb.co",
            },
            {
                protocol: "https",
                hostname: "static.virtubox.io",
            },
            {
                protocol: "https",
                hostname: "images.pexels.com",
            },
        ]
    }
};

export default nextConfig;
