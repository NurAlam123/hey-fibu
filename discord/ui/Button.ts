import type { ButtonStyleTypes } from "discord-interactions";

const Button = (buttonLabel: string, buttonID: string, buttonStyle: ButtonStyleTypes = 1) => {
    return {
        type: 2,
        style: buttonStyle,
        label: buttonLabel,
        custom_id: buttonID
    }
}

export default Button;