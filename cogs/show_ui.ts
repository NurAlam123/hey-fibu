import type { Response } from "express";
import ActionRow from "../discord/ui/ActionRow";
import Button from "../discord/ui/Button";
import sendMessage from "../discord/bot/sendMessage";
import Message from "../discord/ui/Message";
import SelectMenu from "../discord/ui/SelectMenu";

const showui = async (res: Response) => {
    const ui = [
        ActionRow([
            Button("Click me", "button_click")
        ])
    ]

    await sendMessage(res, { content: "Hi", components: ui })
}

export const showUiHandler = async (res: Response, body: object) => {
    const ui = [
        ActionRow([
            SelectMenu({
                custom_id: "ui_select",
                options: [{
                    label: "NO",
                    value: 'no'
                }]
            })
        ])
    ];

    await sendMessage(res, { components: ui });
}

export default showui;