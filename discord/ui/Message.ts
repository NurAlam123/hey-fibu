import type { MessageTypes } from "../discordTypes";


const Message = ({ content = '', components = [], tts = false }: MessageTypes) => ({
    content,
    components,
    tts
})

export default Message;

