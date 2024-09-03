import { InteractionResponseType } from "discord-interactions";
import type { Response } from "express";
import Message from "../ui/Message";

const sendMessage = async (res: Response) => {
  return res.send({
    type: InteractionResponseType.MODAL,
    data: {
      
    },
  });
};

export default sendMessage;
