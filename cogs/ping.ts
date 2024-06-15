import type { Response } from "express";
import sendMessage from "../discord/bot/sendMessage";

const ping = async (res: Response) => {
    await sendMessage(res, "Pong!!!");
}

export default ping;