import getEmojis from "../bot/getEmojis";
import * as sysEmoji from "node-emoji";

const Emoji = async ({
  name = "",
  id = "",
  animated = false,
  guild_id = "",
}: EmojiType) => {
  if (
    (!id && !name) ||
    (name.startsWith(":") &&
      name.endsWith(":") &&
      !guild_id &&
      !sysEmoji.has(name))
  ) {
    return "";
  }

  if (
    name.startsWith(":") &&
    name.endsWith(":") &&
    guild_id &&
    !sysEmoji.has(name)
  ) {
    name = name.replace(/\:/g, "");
    const emojis = await getEmojis(guild_id);
    const emoji = emojis.filter((emoji) => emoji.name === name);
    id = emoji.length > 0 ? emoji[0].id : "";
    if (!id) return "";
  } else if (sysEmoji.has(name)) {
    name = sysEmoji.find(name)?.emoji!;
    id = null;
  }

  return <EmojiType>{
    id,
    name,
    animated,
  };
};

export default Emoji;
