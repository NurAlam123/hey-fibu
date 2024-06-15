import axiosFetch from "../../utils/axiosFetch";

const getEmoji = async (guildID: string, emojiID: string) => {
    const url = `/guilds/${guildID}/emojis/${emojiID}`;
    const emoji = await axiosFetch(url, { method: "GET" });
    return emoji.data;
}

export default getEmoji;