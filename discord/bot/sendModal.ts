import { InteractionResponseType } from "discord-interactions";
import type { Response } from "express";
import Modal from "../models/Modal";

const sendModal = async (
  res: Response,
  { custom_id, title, components }: Modal<MessageComponent>
) => {
  return res.send({
    type: InteractionResponseType.MODAL,
    data: Modal({
      custom_id,
      title,
      components,
    }),
  });
};

export default sendModal;
