import { ButtonStyleTypes } from "discord-interactions";
import type { ButtonTypes } from "../discordTypes";

const Button = ({ label, custom_id, style = ButtonStyleTypes.PRIMARY, emoji = '' }: ButtonTypes) => {
    return <ButtonTypes>{
        type: 2,
        style,
        label,
        custom_id,
        ...(emoji && { emoji })
    }
}

export default Button;