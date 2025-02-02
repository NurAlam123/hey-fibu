import { InteractionResponseType } from "discord-interactions";
import type { Response } from "express";
import Message from "../ui/Message";
import axiosFetch from "../../utils/axiosFetch";
import send from "./send";

// Send interaction message
const sendMessage = async (
  res: Response,
  channel_id: string,
  {
    content = "",
    components = [],
    tts = false,
    embeds = [],
    ephemeral = false,
  }: Message
) => {
  const url = `/channels/${channel_id}/messages`;
  const message = await axiosFetch(url, {
    method: "POST",
    data: Message({
      content,
      components,
      tts,
      embeds,
    }),
  });
  return await send(res, {
    content: `Message has been sent!`,
    ephemeral: true,
  });
};

export default sendMessage;
