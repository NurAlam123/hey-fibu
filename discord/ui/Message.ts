const Message = ({
  content = "",
  components = [],
  tts = false,
  embeds = [],
}: MessageTypes) => ({
  content,
  components,
  tts,
  embeds,
});

export default Message;
