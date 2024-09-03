import { InteractionResponseFlags } from "discord-interactions";

const Message = ({
  content = "",
  components = [],
  tts = false,
  embeds = [],
  ephemeral = false,
}: MessageTypes) => ({
  content,
  components,
  tts,
  embeds,
  ...(ephemeral && { flags: InteractionResponseFlags.EPHEMERAL }),
});

export default Message;
