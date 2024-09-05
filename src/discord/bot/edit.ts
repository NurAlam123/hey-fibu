// import {
//   InteractionResponseType,
//   MessageComponent,
// } from "discord-interactions";
// import Message from "../ui/Message";
// import axiosFetch from "../../utils/axiosFetch";

// const edit = async (
//   token: string,
//   content: string,
//   components: Array<MessageComponent>,
//   tts: boolean = false
// ) => {
//   const APP_ID = process.env.APP_ID;
//   const url = `/webhooks/${APP_ID}/${token}/messages/@original`;

//   const res = await axiosFetch(url, {
//     method: "PATCH",
//     data: Message({ content, components, tts }),
//   });
//   console.log(res);

//   // return res.send({
//   //     type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
//   //     data: Message(content, components, tts)
//   // })
// };

// export default edit;
