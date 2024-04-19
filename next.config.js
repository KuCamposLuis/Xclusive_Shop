// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {};

// const nextConfig = {
//     images: {
//         remotePatterns: [
//             {
//                 protocol: 'https', 
//                 hostname: "**"
//             }
//         ]
//     },
// };

module.exports = {
    images: {
        domains: ['res.cloudinary.com'],
        remotePatterns: [
            {
                protocol: 'https', 
                hostname: "**"
            }
        ]
    }
}
