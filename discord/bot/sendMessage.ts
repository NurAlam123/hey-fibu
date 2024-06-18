import { InteractionResponseType } from "discord-interactions"
import type { Response } from "express"
import Message from "../ui/Message"
import type { MessageTypes } from "../discordTypes";


const sendMessage = async (res: Response, { content = "", components = [], tts = false, embeds = [] }: MessageTypes) => {
    return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: Message({
            content,
            components,
            tts,
            embeds
        })
    })
}

export default sendMessage;