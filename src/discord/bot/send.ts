import { InteractionResponseType } from "discord-interactions";
import type { Response } from "express";
import Message from "../ui/Message";

// Send interaction message
const send = async (
  res: Response,
  {
    content = "",
    components = [],
    tts = false,
    embeds = [],
    ephemeral = false,
  }: Message
) => {
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: Message({
      content,
      components,
      tts,
      embeds,
      ephemeral,
    }),
  }).req.body;
};

export default send;
