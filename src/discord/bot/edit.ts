import {
  InteractionResponseType,
  MessageComponent,
} from "discord-interactions";
import Message from "../ui/Message";
import axiosFetch from "../../utils/axiosFetch";
import { Response } from "express";

const edit = async (
  res: Response,
  interaction_token: string,
  { content = "", components = [], tts = false, embeds = [] }: Message
) => {
  const APP_ID = process.env.APP_ID;
  const url = `/webhooks/${APP_ID}/${interaction_token}/messages/@original`;

  await axiosFetch(url, {
    method: "PATCH",
    data: Message({ content, components, tts }),
  });
  return res.sendStatus(201);
};

export default edit;
