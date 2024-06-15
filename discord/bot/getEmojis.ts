import axiosFetch from "../../utils/axiosFetch";
import type { EmojiInfo } from "../discordTypes";

const getEmojis = async (guildID: string) => {
    const url = `/guilds/${guildID}/emojis`;
    const emojis = await axiosFetch(url, {
        method: "GET"
    });
    const data: Array<EmojiInfo> = emojis.data;
    return data;
}

export default getEmojis;