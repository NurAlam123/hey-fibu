import type { Response } from "express";
import ActionRow from "../discord/ui/ActionRow";
import Button from "../discord/ui/Button";
import sendMessage from "../discord/bot/sendMessage";

const showui = async (res: Response) => {
    const ui = [
        ActionRow([
            Button("Click me", "click")
        ])
    ]

    await sendMessage(res, "UI", ui)
}

export default showui;