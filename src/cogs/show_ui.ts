import type { Response } from "express";
import ActionRow from "../discord/ui/ActionRow";
import Button from "../discord/ui/Button";
import send from "../discord/bot/send";
import SelectMenu from "../discord/ui/SelectMenu";
import Option from "../discord/ui/Option";
import Emoji from "../discord/models/Emoji";
import getEmojis from "../discord/bot/getEmojis";
import getRole from "../discord/bot/getRole";
import addRole from "../discord/bot/addRole";
import edit from "../discord/bot/edit";
import sendMessage from "../discord/bot/sendMessage";

const showui = async (
  res: Response,
  body: InteractionObject<ApplicationCommandDataStructure>
) => {
  const option = [
    Option({
      label: "A",
      value: "a",
    }),
    Option({ label: "B", value: "b" }),
  ];
  const ui = [
    ActionRow([
      SelectMenu({
        custom_id: "select_ui",
        options: option,
        max_values: 2,
      }),
    ]),
  ];

  await sendMessage(res, body.channel_id, { content: "HI" });
};

export const showUiHandler = async (
  res: Response,
  body: InteractionObject<MessageComponentDataStructure>
) => {
  const ui = [
    ActionRow([
      SelectMenu({
        custom_id: "select_ui",
        options: [
          Option({
            label: "NO",
            value: "no",
            description: "You rejecting this condition",
            emoji: await Emoji({ name: "🔥" }),
          }),
          Option({
            label: "YES",
            value: "yes",
            description: "You accepting this condition",
            emoji: await Emoji({
              name: ":smile:",
            }),
          }),
          Option({
            label: "MEH",
            value: "meh",
            description: "Not sure!",
            emoji: await Emoji({
              name: ":next:",
              guild_id: body.guild_id,
            }),
          }),
        ],
      }),
    ]),
  ];

  await send(res, { components: ui });
};

export const selectHandler = async (
  res: Response,
  body: InteractionObject<MessageComponentDataStructure>
) => {
  await send(res, { content: "Ok" });
  // const values = body.data.values;
  // const y = values?.includes("yes");
  // // console.log(body);
  // console.log(values);
  // if (y) {
  //   const roleID = "1196073528592711742";
  //   // const role = await getRole(body.guild_id, {roleID});
  //   // const r = await addRole(body.guild_id, body.member.user.id, roleID);
  // }
  // console.log(y);
  // values?.find(d => (d === "yes"))
};

export default showui;
