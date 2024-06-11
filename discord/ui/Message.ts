import type { ActionRow } from "discord-interactions";

const Message = (content: string, components: ActionRow | [] = [], tts: boolean = false) => ({
    content,
    components,
    tts
})

export default Message;

