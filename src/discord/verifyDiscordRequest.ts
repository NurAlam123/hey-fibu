import { verifyKey } from "discord-interactions";
import type { Request, Response } from "express";

const verifyDiscordRequest = (clientKey: string) => {
  return (req: Request, res: Response, buf: Buffer, encoding: String) => {
    const signature = req.get("X-Signature-Ed25519") as string;
    const timestamp = req.get("X-Signature-Timestamp") as string;

    const isValidRequest = verifyKey(buf, signature, timestamp, clientKey);
    if (!isValidRequest) {
      return res.sendStatus(401);
    }
    return;
  };
};
export default verifyDiscordRequest;
