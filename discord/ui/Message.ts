import type { ActionRow } from "discord-interactions";

const Message = (content: string, components: Array<object> = [], tts: boolean = false) => ({
    content,
    components,
    tts
})

export default Message;

