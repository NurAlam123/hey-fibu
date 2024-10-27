import type { Response } from "express";
import send from "../discord/bot/send";
import axiosFetch from "../utils/axiosFetch";
import DiscordEmbed from "../discord/ui/Embed";

const ping = async (res: Response) => {
  const start = performance.now();
  await axiosFetch("/applications/@me", { method: "GET" });
  const end = performance.now();
  const timeTook = Math.round(end - start);
  const embed = new DiscordEmbed({
    title: "PONG!!",
    description: `PONG! **${timeTook}ms!**`,
  });
  await send(res, { embeds: [embed] });
};

export default ping;
