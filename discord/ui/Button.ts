import { ButtonStyleTypes } from "discord-interactions";
import type { ButtonTypes } from "../discordTypes";

const Button = (buttonLabel: string, buttonID: string, buttonStyle: ButtonStyleTypes = ButtonStyleTypes.PRIMARY) => {
    return <ButtonTypes>{
        type: 2,
        style: buttonStyle,
        label: buttonLabel,
        custom_id: buttonID
    }
}

export default Button;