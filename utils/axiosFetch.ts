import axios, { Axios, type AxiosRequestConfig } from "axios";

const TOKEN = process.env.TOKEN || "";

const axiosFetch = async (url: string, options: AxiosRequestConfig) => {
  // Config axios
  const defaultConfig: AxiosRequestConfig = {
    baseURL: "https://discord.com/api/v10/",
    headers: {
      Authorization: `Bot ${TOKEN}`,
      "Content-Type": "application/json; charset=UTF-8",
      "User-Agent": "DiscordBot (https://discord.com, 1.0.0)",
    },
    ...options,
  };
  return await axios(url, defaultConfig);
};

export default axiosFetch;
