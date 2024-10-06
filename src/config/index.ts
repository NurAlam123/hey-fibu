import "dotenv/config";

const config = {
  TOKEN: process.env.TOKEN || "",
  BOT_PUBLIC_KEY: process.env.BOT_PUBLIC_KEY || "",
  PORT: process.env.PORT || 5000,
  APP_ID: process.env.APP_ID || "",
  DB_URI: process.env.DB_URI || "",
};

export default config;

