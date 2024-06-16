import type { Response } from "express";
import ActionRow from "../discord/ui/ActionRow";
import Button from "../discord/ui/Button";
import sendMessage from "../discord/bot/sendMessage";
import SelectMenu from "../discord/ui/SelectMenu";
import Option from "../discord/ui/Option";
import Emoji from "../discord/models/Emoji";
import getEmojis from "../discord/bot/getEmojis";
import type { InteractionObject } from "../discord/discordTypes";

const showui = async (res: Response) => {
    const ui = [
        ActionRow([
            Button({
                label: "Click me",
                custom_id: "button_click",
            })
        ])
    ]

    await sendMessage(res, { content: "Hi", components: ui })
}

export const showUiHandler = async (res: Response, body: InteractionObject) => {
    // console.log(body.guild_id)
    // await getEmojis(body.guild_id)
    const ui = [
        ActionRow([
            SelectMenu({
                custom_id: "select_ui",
                options: [
                    Option({
                        label: "NO",
                        value: "no",
                        description: "You rejecting this condition",
                        emoji: await Emoji({ name: "🔥" })
                    }),
                    Option({
                        label: "YES",
                        value: "yes",
                        description: "You accepting this condition",
                        is_default: true,
                        emoji: await Emoji({
                            name: ":smile:"
                        })
                    }),
                    Option({
                        label: "MEH",
                        value: "meh",
                        description: "Not sure!",
                        emoji: await Emoji({
                            name: ":next:",
                            guild_id: body.guild_id
                        })
                    })
                ],
                min_values: 0,
                max_values: 2
            })
        ])
    ];

    await sendMessage(res, { components: ui });
}

export const selectHandler = async (res: Response, body: InteractionObject) => {
    const values = body.data.values;
    // console.log(body)
    // const rolesData = {
    //     "meh": {

    //     }
    // }
}

export default showui;