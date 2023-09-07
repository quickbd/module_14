/** @type {import('next').NextConfig} */
const config = require("./config");
const nextConfig = {
  env: {
    BASE_URL: "https://module-14-9lyz.vercel.app/",
    DB_URI: config.DB_URI,
    API: config.API,
    NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: config.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: config.GOOGLE_CLIENT_SECRET,
    CLOUDINARY_UPLOAD_PRESET: config.CLOUDINARY_UPLOAD_PRESET,
    CLOUDINARY_URL: config.CLOUDINARY_URL,
    ADMIN_ROLES: ["admin", "super-admin", "manager", "user"],
  },

  // distDir: "build",
  reactStrictMode: true,
  headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Frame-Options", value: "DENY" }],
      },
    ];
  },
};
module.exports = nextConfig;
